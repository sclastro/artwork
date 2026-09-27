"use client";

import { useSyncExternalStore } from "react";

// 以瀏覽器內建的 SpeechSynthesis 讀出英文人名、作品名及術語，方便學習發音。
// 全站同一時間只讀一段；再按同一個掣即停止。

/** 朗讀速度（用戶要求 0.8 倍） */
export const SPEECH_RATE = 0.8;

let speaking: string | null = null;
const listeners = new Set<() => void>();
let session = 0;

function set(next: string | null) {
  speaking = next;
  listeners.forEach((l) => l());
}

export function speechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function englishVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => /^en[-_]GB$/i.test(v.lang)) ??
    voices.find((v) => /^en[-_]US$/i.test(v.lang)) ??
    voices.find((v) => /^en\b/i.test(v.lang))
  );
}

/** 以 0.8 倍速讀出一段英文；正在讀同一段時則停止 */
export function sayEnglish(text: string) {
  if (!speechSupported()) return;
  const synth = window.speechSynthesis;
  const wasSame = speaking === text;
  synth.cancel();
  const my = ++session;
  if (wasSame) {
    set(null);
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.rate = SPEECH_RATE;
  u.lang = "en-GB";
  const v = englishVoice();
  if (v) {
    u.voice = v;
    u.lang = v.lang;
  }
  const done = () => {
    if (my === session) set(null);
  };
  u.onend = done;
  u.onerror = done;
  set(text);
  synth.speak(u);
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/** 目前正在讀出的文字（沒有則為 null） */
export function useSpeaking(): string | null {
  return useSyncExternalStore(
    subscribe,
    () => speaking,
    () => null,
  );
}

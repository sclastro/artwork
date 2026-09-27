"use client";

import { useEffect, useState } from "react";
import { sayEnglish, speechSupported, useSpeaking } from "@/lib/speech";
import { useDict } from "../LocaleProvider";
import { IconSpeaker } from "../icons";

/** 以 0.8 倍速讀出英文的小喇叭掣；瀏覽器不支援語音合成時不顯示 */
export function SayButton({ text }: { text: string }) {
  const t = useDict();
  const speaking = useSpeaking();
  // 支援與否須在 useEffect 判斷，否則 server 與 client 首次繪製不一致
  const [ok, setOk] = useState(false);
  useEffect(() => setOk(speechSupported()), []);
  if (!ok) return null;
  const on = speaking === text;
  return (
    <button
      type="button"
      className={`say-btn ${on ? "is-on" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        sayEnglish(text);
      }}
      aria-label={t.common.pronounce(text)}
      title={t.common.pronounce(text)}
      aria-pressed={on}
    >
      <IconSpeaker width={15} height={15} />
    </button>
  );
}

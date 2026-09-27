// 偏好設定（語言、主題、熱點）的讀寫，localStorage 不可用時靜默失敗
export const THEME_KEY = "tgw:theme";
export const LOCALE_KEY = "tgw:locale";
/** 作品頁是否顯示熱點（"on"／"off"），預設隱藏 */
export const HOTSPOTS_KEY = "tgw:hotspots";

export function getPref(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function setPref(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 首次繪製前執行：設定主題與 html lang，避免閃爍 */
export const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.setAttribute('data-theme',t)}catch(e){d.setAttribute('data-theme','light')}var m=location.pathname.match(/\\/(zh|en)(\\/|$)/);if(m){d.lang=m[1]==='en'?'en':'zh-Hant'}})();`;

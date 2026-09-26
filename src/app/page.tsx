import { BASE_PATH } from "@/lib/prefs";

// 根路徑：按已儲存的偏好或瀏覽器語言轉往 /zh/ 或 /en/。靜態匯出不能做伺服器端轉址，故以腳本處理。
const redirect = `(function(){var l='zh';try{var s=localStorage.getItem('tgw:locale');if(s==='zh'||s==='en'){l=s}else if(!/^zh/i.test(navigator.language||'')){l='en'}}catch(e){}location.replace('${BASE_PATH}/'+l+'/')})();`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${BASE_PATH}/zh/`} />
      </noscript>
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "var(--font-serif)" }}>
        <p style={{ fontSize: "1.4rem", textAlign: "center" }}>
          <a href={`${BASE_PATH}/zh/`}>進入中文版</a>
          {"  ·  "}
          <a href={`${BASE_PATH}/en/`}>Enter in English</a>
        </p>
      </main>
    </>
  );
}

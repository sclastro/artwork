import { BASE_PATH } from "@/lib/prefs";

// 全站 404（語言未知，故中英並列）
export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound-inner">
        <p className="kicker">404</p>
        <h1 className="display">這個展廳並不存在</h1>
        <p className="lead">This gallery doesn&apos;t exist. 你要找的頁面可能已經移走，或網址有誤。</p>
        <div className="chips" style={{ justifyContent: "center" }}>
          <a className="btn btn-primary" href={`${BASE_PATH}/zh/`}>
            返回首頁
          </a>
          <a className="btn" href={`${BASE_PATH}/en/`}>
            Back to home
          </a>
        </div>
      </div>
    </main>
  );
}

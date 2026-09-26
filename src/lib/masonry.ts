/**
 * 按已知長闊比把項目分配至各欄：每次放入目前最矮的一欄。
 * 結果是確定的（同樣輸入同樣輸出），並保持每欄內的先後次序。
 */
export function distribute<T>(items: T[], aspectOf: (item: T) => number, columns: number, gap = 0.04): T[][] {
  const cols: T[][] = Array.from({ length: Math.max(1, columns) }, () => []);
  const heights = new Array(cols.length).fill(0);
  for (const item of items) {
    let target = 0;
    for (let i = 1; i < heights.length; i++) if (heights[i] < heights[target] - 1e-9) target = i;
    cols[target].push(item);
    // 欄寬視為 1，高度 = 1 / 長闊比，另加標題區的固定高度
    heights[target] += 1 / aspectOf(item) + gap + 0.18;
  }
  return cols;
}

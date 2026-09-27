import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-sea-of-ice",
  title: { zh: "冰海", en: "The Sea of Ice" },
  artist: "friedrich",
  year: 1823,
  date: { zh: "1823–1824 年", en: "1823–1824" },
  period: "romanticism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 96.7, w: 126.9 },
  museum: "hamburger-kunsthalle",
  image: "Caspar David Friedrich - Das Eismeer - Hamburger Kunsthalle.jpg",
  subjects: ["sea", "landscape"],
  summary: {
    zh: "巨大的冰塊互相擠壓，堆疊成一座尖峭的冰山，直指冰冷的天空。細看右方，才發現一艘船的船尾正被冰塊吞沒。弗里德里希以這幅冷峻得近乎抽象的畫，描繪人類在大自然面前的徹底失敗，它在畫家生前無人問津，今天卻被視為德國浪漫主義的傑作。",
    en: "Huge slabs of ice grind against each other and pile up into a jagged pyramid pointing at a frozen sky. Only on closer looking do we see, at the right, the stern of a ship being swallowed by the ice. With this stark, almost abstract picture Friedrich showed humanity's utter defeat before nature; unsold in his lifetime, it is now regarded as a masterpiece of German Romanticism.",
  },
  background: [
    {
      zh: "弗里德里希從未到過北極。1819 至 1820 年，英國探險家帕里率船隊尋找西北航道，被困冰海越冬，他的航行記述在歐洲廣為流傳。弗里德里希很可能從中得到靈感。",
      en: "Friedrich never went to the Arctic. In 1819–20 the British explorer William Edward Parry led an expedition in search of the Northwest Passage and wintered locked in the ice; accounts of the voyage were widely read in Europe, and Friedrich very likely drew on them.",
    },
    {
      zh: "畫中的冰塊並非憑空想像。1820 至 1821 年的嚴冬，德勒斯登附近的易北河結冰，弗里德里希到河邊為浮冰畫了多幅油畫速寫，再把它們組合成這片極地的景象。",
      en: "The ice is not pure invention. In the harsh winter of 1820–21 the Elbe froze near Dresden, and Friedrich made several oil sketches of the ice floes on the river, which he then assembled into this polar scene.",
    },
    {
      zh: "畫作長期被誤認為他另一幅已失傳、題為《希望號的殘骸》的作品，因此至今仍常以這個名字稱呼。它在弗里德里希生前未能賣出，1905 年才由漢堡美術館購入。",
      en: "For a long time it was confused with another, lost painting by Friedrich called The Wreck of Hope, and it is still often known by that name. It found no buyer in Friedrich's lifetime and was acquired by the Hamburger Kunsthalle only in 1905.",
    },
  ],
  technique: [
    {
      zh: "{{0|冰山}}由一塊塊平直的冰板斜斜疊起，形成一個鋸齒狀的金字塔，佔據畫面中央。弗里德里希以銳利的直線與幾何形體處理冰塊，令畫面冷硬得近乎抽象，與他其他作品中柔和的霧氣截然不同。",
      en: "{{0|The ice pyramid}} is built from flat slabs stacked at steep angles into a jagged triangle that dominates the centre. Friedrich treated the ice with hard straight edges and geometric forms, giving the picture an almost abstract severity quite unlike the soft mists of his other works.",
    },
    {
      zh: "色彩幾乎只有冰藍、灰白與土褐。{{2|前景的冰板}}以細緻的筆觸描繪紋理與裂縫，愈往後愈淡，直至{{3|遠方的冰山}}溶入淡藍的空氣之中。{{4|天空}}冷清而平靜，與下方的破壞形成對比。",
      en: "The palette is limited to icy blue, grey-white and earthy brown. {{2|The foreground slabs}} are painted in careful detail, every grain and crack visible, fading with distance until {{3|the far iceberg}} dissolves into pale blue air. {{4|The sky}} is cold and calm, in contrast to the destruction below.",
    },
  ],
  symbolism: [
    {
      title: { zh: "被吞沒的船", en: "The swallowed ship" },
      body: {
        zh: "{{1|船尾}}只佔畫面一個小角落，被冰塊壓碎、傾側。人類的航海技術與探險雄心，在自然的力量前毫無招架之力。",
        en: "{{1|The ship's stern}} occupies only a small corner, crushed and tilted by the ice. Human seamanship and the ambition of exploration are powerless against nature.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "政治的寒冬", en: "A political winter" },
      body: {
        zh: "拿破崙戰爭後，普魯士等德意志邦國重新收緊言論，不少人對國家統一與自由的希望落空。有學者認為，冰封的海正是這種政治寒冬的寫照。",
        en: "After the Napoleonic Wars, Prussia and other German states clamped down again on free expression, and many saw their hopes of unity and liberty frozen. Some scholars read the ice-locked sea as an image of that political winter.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "死亡與永恆", en: "Death and eternity" },
      body: {
        zh: "弗里德里希的作品常思考死亡。冰塊堆成的金字塔猶如一座墓碑，而遠方明亮的天空則可理解為死後的永恆與救贖。",
        en: "Friedrich's work often meditates on death. The ice pyramid resembles a tomb, while the brighter distant sky may be read as the eternity and redemption beyond it.",
      },
      hotspot: 4,
    },
  ],
  anecdotes: [
    {
      zh: "弗里德里希生前這幅畫一直賣不出去，他死後被遺忘多年，直到二十世紀初才重新受到重視。",
      en: "The painting remained unsold during Friedrich's lifetime and was forgotten for years after his death, gaining recognition only in the early twentieth century.",
    },
    {
      zh: "{{5|左方的斷木}}散落在冰上，可能是船的桅杆或船身碎片，暗示船員的命運。畫中卻看不到任何人，令災難顯得更加寂靜而絕對。",
      en: "{{5|Broken timbers at the left}} lie scattered on the ice, perhaps pieces of mast or hull, hinting at the crew's fate. Yet no human figure appears anywhere, making the disaster all the more silent and absolute.",
    },
  ],
  legacy: [
    {
      zh: "《冰海》以純粹的幾何形體表達情感，被視為現代抽象藝術的先聲。它亦是浪漫主義「崇高」美學最極端的例子之一：大自然不再只是令人敬畏，而是無情地毀滅一切。",
      en: "By expressing feeling through pure geometric form, The Sea of Ice is seen as a forerunner of modern abstraction. It is also one of the most extreme examples of the Romantic sublime: nature is no longer merely awe-inspiring but mercilessly destructive.",
    },
  ],
  hotspots: [
    { x: 0.45, y: 0.3, title: { zh: "冰山", en: "The ice pyramid" }, body: { zh: "冰板層層疊起，形成直指天空的鋸齒狀金字塔。", en: "Slabs of ice pile up into a jagged pyramid pointing at the sky." } },
    { x: 0.83, y: 0.47, title: { zh: "船尾", en: "The stern" }, body: { zh: "右方一艘船的船尾被冰塊壓碎，幾乎被完全吞沒。", en: "At the right, the stern of a ship is crushed and almost swallowed by the ice." } },
    { x: 0.4, y: 0.82, title: { zh: "前景的冰板", en: "Foreground slabs" }, body: { zh: "冰板的紋理與裂縫描繪得細緻入微，取材自易北河的浮冰速寫。", en: "The grain and cracks of the ice are finely painted, based on sketches of floes on the Elbe." } },
    { x: 0.12, y: 0.3, title: { zh: "遠方的冰山", en: "The distant iceberg" }, body: { zh: "遠處的冰山溶入淡藍的空氣之中。", en: "A far-off iceberg dissolves into pale blue air." } },
    { x: 0.55, y: 0.07, title: { zh: "冷清的天空", en: "The cold sky" }, body: { zh: "平靜冷清的天空，與下方的毀滅形成對比。", en: "A calm, cold sky contrasts with the destruction below." } },
    { x: 0.08, y: 0.54, title: { zh: "斷木", en: "Broken timbers" }, body: { zh: "散落冰上的斷木，可能是船的殘骸。", en: "Broken timbers on the ice, perhaps wreckage from the ship." } },
  ],
  related: ["monk-by-the-sea", "wanderer-above-the-sea-of-fog", "the-ninth-wave"],
};

export default artwork;

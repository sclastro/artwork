import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "cafe-terrace-at-night",
  title: { zh: "夜間的露天咖啡座", en: "Café Terrace at Night" },
  artist: "van-gogh",
  year: 1888,
  date: { zh: "1888 年 9 月", en: "September 1888" },
  period: "post-impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 80.7, w: 65.3 },
  museum: "kroller-muller",
  image: "Vincent Willem van Gogh - Cafe Terrace at Night (Yorck).jpg",
  subjects: ["city", "night"],
  summary: {
    zh: "亞爾廣場上的咖啡座在煤氣燈下閃耀着金黃色的光，頭頂是深藍的星空，腳下是五彩的石板路。這是梵高第一幅描繪星空的畫，比《星夜》早了九個月。",
    en: "A café terrace on a square in Arles glows golden under a gas lamp, a deep blue starry sky above and multicoloured cobblestones below. It was Van Gogh's first painting of a starry sky, nine months before The Starry Night.",
  },
  background: [
    {
      zh: "畫中是亞爾市中心的廣場，這家咖啡館至今仍在，已改名「梵高咖啡館」。梵高在夜間直接在街上作畫，這在當時十分罕見。",
      en: "The scene is the Place du Forum in the centre of Arles; the café still exists and is now called Café Van Gogh. Van Gogh painted on the spot at night, which was very unusual at the time.",
    },
    {
      zh: "他在寫給妹妹的信中說：「這是一幅沒有黑色的夜景，只有美麗的藍、紫和綠……在這樣的環境下，被照亮的廣場呈現淡淡的硫磺黃和檸檬綠。」",
      en: "He wrote to his sister: “Here you have a night painting without black, with nothing but beautiful blue and violet and green... in these surroundings the lit square is coloured pale sulphur and lemon green.”",
    },
  ],
  technique: [
    {
      zh: "梵高以強烈的[[complementary-colours|互補色]]對比營造夜晚的氣氛：咖啡座的{{0|黃色遮篷}}與暖橙色的地面，對比{{3|深藍的星空}}與暗紫的建築。畫中完全沒有使用黑色。",
      en: "Van Gogh used strong [[complementary-colours]] to evoke night: the café's {{0|yellow awning}} and warm orange floor against {{3|the deep blue sky}} and violet buildings. There is no black anywhere.",
    },
    {
      zh: "透視線沿着遮篷與街道匯聚到遠方，把觀者引入畫中的空間。{{4|石板路}}以一片片彩色的短筆觸表現，映照着燈光。",
      en: "Perspective lines along the awning and street converge in the distance, drawing us into the scene. {{4|The cobblestones}} are short strokes of colour reflecting the lamplight.",
    },
    {
      zh: "星星以大小不一的光點與光圈描繪，比現實中的星星更大、更亮，這種表現方式在《星夜》中發展得更加激烈。",
      en: "The stars are dots and halos of varying sizes, larger and brighter than in reality, a treatment he would develop more wildly in The Starry Night.",
    },
  ],
  symbolism: [
    {
      title: { zh: "人間與天上", en: "Earth and heaven" },
      body: {
        zh: "溫暖明亮的咖啡座代表人間的歡聚與安慰，深邃的星空則代表無限與永恆。梵高常把星星與死後的世界聯繫起來。",
        en: "The warm, bright café stands for human company and comfort; the deep starry sky for the infinite and eternal. Van Gogh often linked the stars with the afterlife.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "隱藏的最後晚餐？", en: "A hidden Last Supper?" },
      body: {
        zh: "有研究者指出，咖啡座上約有十二位客人，中間站着一位穿白衣、長髮的{{2|侍應}}，身後有十字形的窗框，認為這是《最後的晚餐》的隱喻。這個說法頗具想像力，但並無定論。",
        en: "Some researchers note that about twelve customers sit on the terrace around a long-haired {{2|waiter}} in white, with a cross-shaped window frame behind him, and read it as an allusion to the Last Supper. The theory is imaginative but unproven.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "梵高在信中沒有提及這幅畫是否已完成，也沒有在畫上簽名，但它被公認為他在亞爾最重要的作品之一。",
      en: "Van Gogh did not sign the painting, yet it is recognised as one of the most important works of his Arles period.",
    },
    {
      zh: "今天，遊客可以坐在同一家咖啡館外，在夜色中對照畫作，感受梵高當年所見的景象。",
      en: "Today visitors can sit outside the same café at night and compare the scene with the painting.",
    },
  ],
  legacy: [
    {
      zh: "《夜間的露天咖啡座》開啟了梵高對夜晚與星空的探索，直接通往《隆河上的星夜》與《星夜》。它以色彩而非明暗表現夜晚的方式，對後來的表現主義影響深遠。",
      en: "Café Terrace at Night began Van Gogh's exploration of night and starry skies, leading directly to Starry Night Over the Rhône and The Starry Night. Its way of conveying night through colour rather than darkness deeply influenced Expressionism.",
    },
  ],
  hotspots: [
    { x: 0.34, y: 0.35, title: { zh: "黃色遮篷", en: "The yellow awning" }, body: { zh: "被燈光照亮的遮篷呈現耀眼的黃色。", en: "The awning, lit by the lamp, glows a brilliant yellow." } },
    { x: 0.38, y: 0.48, title: { zh: "煤氣燈", en: "The gas lamp" }, body: { zh: "掛在牆上的煤氣燈，是咖啡座的光源。", en: "The gas lamp on the wall lights up the terrace." } },
    { x: 0.41, y: 0.61, title: { zh: "穿白衣的侍應", en: "The waiter in white" }, body: { zh: "站在客人之間的白衣侍應。", en: "A waiter in white stands among the customers." } },
    { x: 0.6, y: 0.19, title: { zh: "星空", en: "The starry sky" }, body: { zh: "深藍色的天空上點綴着發光的星星，是梵高第一幅星空。", en: "Glowing stars dot the deep blue sky, Van Gogh's first starry sky." } },
    { x: 0.5, y: 0.9, title: { zh: "石板路", en: "The cobblestones" }, body: { zh: "五彩的石板路反射着燈光。", en: "The multicoloured cobblestones reflect the lamplight." } },
    { x: 0.7, y: 0.6, title: { zh: "街上的行人", en: "Passers-by" }, body: { zh: "遠處的行人與馬車，令夜景更添生氣。", en: "Distant pedestrians and a horse-drawn carriage bring the night scene to life." } },
  ],
  related: ["the-starry-night", "sunflowers", "the-bedroom"],
};

export default artwork;

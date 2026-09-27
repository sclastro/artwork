import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "irises",
  title: { zh: "鳶尾花", en: "Irises" },
  artist: "van-gogh",
  year: 1889,
  date: { zh: "1889 年 5 月", en: "May 1889" },
  period: "post-impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 74.3, w: 94.3 },
  museum: "getty-center",
  image: "Irises-Vincent van Gogh.jpg",
  subjects: ["still-life", "landscape"],
  summary: {
    zh: "一片藍紫色的鳶尾花在紅褐色的泥土上盛開，葉子如火焰般扭動，其中只有一朵白色的花。梵高入住聖雷米療養院的第一個星期便畫下這幅畫，他稱之為「疾病的避雷針」。它曾是世上最昂貴的畫作。",
    en: "A bed of blue-violet irises blooms in red-brown earth, their leaves twisting like flames, with a single white flower among them. Van Gogh painted it in his first week at the Saint-Rémy asylum and called it “the lightning conductor for my illness”. It was once the most expensive painting in the world.",
  },
  background: [
    {
      zh: "1889 年 5 月，梵高自願入住聖雷米的聖保羅療養院。院方准許他在院內的花園作畫，他在最初幾天便畫下了這片盛開的鳶尾花。",
      en: "In May 1889 Van Gogh voluntarily entered the asylum of Saint-Paul at Saint-Rémy. He was allowed to paint in its garden, and within his first days he painted this bed of blooming irises.",
    },
    {
      zh: "他把繪畫視為對抗病情的方法，稱這幅畫為「疾病的避雷針」，意思是專注作畫能令他保持清醒。同年 9 月，西奧把它送往巴黎的獨立藝術家沙龍展出。",
      en: "He saw painting as a way to fight his illness, calling this picture “the lightning conductor for my illness” — concentrating on work kept him sane. That September Theo sent it to the Salon des Indépendants in Paris.",
    },
    {
      zh: "1987 年，這幅畫在紐約拍賣，以約五千三百九十萬美元成交，創下當時的世界紀錄。買家其後無法付清款項，1990 年畫作由洛杉磯蓋蒂博物館購入。",
      en: "In 1987 it sold at auction in New York for about 53.9 million dollars, then a world record. The buyer could not complete payment, and in 1990 the painting was acquired by the J. Paul Getty Museum in Los Angeles.",
    },
  ],
  technique: [
    {
      zh: "畫面沒有天空，也沒有遠景，只有近距離的花叢，像日本浮世繪中截取自然一角的手法。{{5|劍形的綠葉}}以流暢的曲線勾勒，互相交錯，充滿動感。",
      en: "There is no sky and no distance, only a close-up of the flower bed, like the cropped views of nature in Japanese prints. {{5|The sword-shaped leaves}} are drawn in flowing curves that cross and recross, full of movement.",
    },
    {
      zh: "花朵以深色輪廓與平塗色塊構成，{{2|紅褐色的泥土}}與藍紫色的花形成互補對比。背景{{3|橙黃色的花}}則為畫面加入溫暖的調子。",
      en: "The flowers are built from dark outlines and flat colour; {{2|the red-brown soil}} makes a complementary contrast with the blue-violet blooms, while {{3|the orange flowers behind}} add a warm note.",
    },
  ],
  symbolism: [
    {
      title: { zh: "孤獨的白花", en: "The lone white iris" },
      body: {
        zh: "在一片藍紫之中，{{0|左方唯一的白色鳶尾花}}格外醒目。不少人把它視為梵高自身的寫照：與眾不同，孤獨地站在人群之外。",
        en: "Amid all the blue-violet, {{0|the single white iris at the left}} stands out. Many see it as a self-portrait of Van Gogh: different, alone apart from the crowd.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "生命的力量", en: "The force of life" },
      body: {
        zh: "扭動向上的葉子與盛放的花，充滿生長的力量。在療養院的日子，梵高從花園的植物中找到了慰藉與活下去的意志。",
        en: "The twisting, upward-reaching leaves and open blooms are full of the energy of growth. In the asylum Van Gogh found comfort and the will to go on in the plants of the garden.",
      },
      hotspot: 1,
    },
  ],
  anecdotes: [
    {
      zh: "今天看到的花是藍色，但梵高當初畫的是紫色。他混入的紅色顏料容易褪色，令紫色逐漸變成藍色。",
      en: "The flowers we see today are blue, but Van Gogh painted them violet. The red pigment he mixed in was fugitive and has faded, turning the violet into blue.",
    },
    {
      zh: "梵高沒有把這幅畫視為完成品，只當作習作。右下角可以看到他的簽名「Vincent」。",
      en: "Van Gogh regarded the picture as a study rather than a finished work. His signature, “Vincent”, can be seen at the lower right.",
    },
  ],
  legacy: [
    {
      zh: "《鳶尾花》以強烈的輪廓與平塗色彩，展示了日本浮世繪對梵高的深刻影響。它破紀錄的成交價，亦令梵高成為藝術市場的傳奇，引發了八十年代的印象派及後印象派拍賣熱潮。",
      en: "With its strong outlines and flat colour, Irises shows the deep influence of Japanese prints on Van Gogh. Its record price made him a legend of the art market and fuelled the auction boom for Impressionist and Post-Impressionist painting in the 1980s.",
    },
  ],
  hotspots: [
    { x: 0.18, y: 0.29, title: { zh: "白色鳶尾花", en: "The white iris" }, body: { zh: "一片藍紫之中，唯一的白色花朵。", en: "The only white flower among all the blue-violet." } },
    { x: 0.66, y: 0.36, title: { zh: "藍紫色的花", en: "Blue-violet irises" }, body: { zh: "花朵原本是紫色，紅色顏料褪色後才變成藍色。", en: "The flowers were originally violet; faded red pigment has turned them blue." } },
    { x: 0.2, y: 0.82, title: { zh: "紅褐色的泥土", en: "Red-brown earth" }, body: { zh: "紅褐色的泥土與藍紫色的花互相映襯。", en: "Red-brown earth sets off the blue-violet flowers." } },
    { x: 0.2, y: 0.12, title: { zh: "背景的橙花", en: "Orange flowers" }, body: { zh: "背景的橙黃色花朵為畫面加入暖調。", en: "Orange flowers behind add a warm note." } },
    { x: 0.88, y: 0.95, title: { zh: "簽名", en: "The signature" }, body: { zh: "右下角的簽名「Vincent」。", en: "The signature “Vincent” at the lower right." } },
    { x: 0.45, y: 0.55, title: { zh: "劍形的葉子", en: "Sword-shaped leaves" }, body: { zh: "扭動交錯的葉子，充滿生長的力量。", en: "Twisting, crossing leaves full of the energy of growth." } },
  ],
  related: ["almond-blossom", "sunflowers", "the-starry-night"],
};

export default artwork;

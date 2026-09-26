import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "mont-sainte-victoire",
  title: { zh: "聖維克多山", en: "Mont Sainte-Victoire" },
  artist: "cezanne",
  year: 1904,
  date: { zh: "1902–1904 年", en: "1902–04" },
  period: "post-impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 73, w: 91.9 },
  museum: "philadelphia",
  image: "Paul Cézanne, Mont Sainte-Victoire.jpg",
  subjects: ["landscape"],
  summary: {
    zh: "普羅旺斯的聖維克多山聳立在平原之上，田野與房屋化為一塊塊綠、黃、紫的色面。塞尚晚年以這座山為題畫了數十幅作品，這一幅以色塊建構空間，已走到抽象的門檻。",
    en: "Mont Sainte-Victoire rises above the Provençal plain, fields and houses reduced to planes of green, yellow and violet. Cézanne painted the mountain dozens of times in his later years; built from patches of colour, this version stands on the threshold of abstraction.",
  },
  background: [
    {
      zh: "聖維克多山位於塞尚家鄉艾克斯普羅旺斯以東，是當地的地標。塞尚一生以它為題創作了四十多幅油畫與同樣數量的水彩畫，是他最重要的母題。",
      en: "Mont Sainte-Victoire lies east of Cézanne's home town of Aix-en-Provence and is the region's landmark. He painted it in more than forty oils and about as many watercolours, making it his most important motif.",
    },
    {
      zh: "1902 年，塞尚在艾克斯北面的勞維山坡建了一間畫室，從附近的山坡可以遠眺聖維克多山。晚年的他幾乎每天帶着畫具到戶外寫生，直至 1906 年在風雨中作畫後病倒去世。",
      en: "In 1902 Cézanne built a studio on the Lauves hill north of Aix, from which he could see the mountain. In his last years he went out almost every day to paint from nature, until he collapsed while working in a storm in 1906 and died a few days later.",
    },
  ],
  technique: [
    {
      zh: "塞尚以方塊狀的筆觸並置色彩，每一筆都是一個小平面。{{2|平原}}上的田野、樹木與房屋被簡化為色塊，互相堆疊、交錯，構成一個既平面又有深度的空間。",
      en: "Cézanne laid down colour in square, block-like strokes, each a small plane. The fields, trees and houses of {{2|the plain}} are reduced to patches of colour that overlap and interlock, forming a space both flat and deep.",
    },
    {
      zh: "他不以線性透視表現距離，而是以色彩的冷暖：前景用溫暖的綠與黃，遠景的{{0|山峰}}與{{1|天空}}則用冷調的藍與紫，令遠處自然後退。天空中亦重複出現大地的綠色，令天地融為一體。",
      en: "He conveyed distance not with linear perspective but with warm and cool colour: warm greens and yellows in front, cool blues and violets for {{0|the mountain}} and {{1|sky}}, which naturally recede. Greens from the land recur in the sky, fusing heaven and earth.",
    },
  ],
  symbolism: [
    {
      title: { zh: "自然的永恆結構", en: "The permanent structure of nature" },
      body: {
        zh: "印象派捕捉光線的瞬間變化，塞尚則想找出自然背後恆久不變的結構。他說要「令印象派變得像博物館裏的藝術一樣堅實而持久」。",
        en: "The Impressionists captured fleeting changes of light; Cézanne sought the enduring structure beneath nature. He wanted “to make of Impressionism something solid and durable, like the art of the museums”.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "畫家的聖山", en: "The painter's sacred mountain" },
      body: {
        zh: "聖維克多山對塞尚而言不只是風景，更是他一生不斷探索、永遠無法完全把握的目標，象徵藝術追求的無盡。",
        en: "For Cézanne the mountain was not just scenery but a lifelong quest, a goal he could never fully grasp, a symbol of the endlessness of artistic pursuit.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "塞尚曾說：「我在自然面前觀察得愈多，就愈覺得自己離目標愈遠。」直到去世前一個月，他仍寫信說自己在繼續研究自然。",
      en: "“The more I look at nature, the further I feel from my goal,” Cézanne said. A month before his death he wrote that he was still studying nature.",
    },
    {
      zh: "塞尚晚年的畫室至今仍保留在艾克斯，開放予公眾參觀，裏面的物件保持他生前的樣子。",
      en: "Cézanne's last studio in Aix is preserved and open to the public, with his belongings still as he left them.",
    },
  ],
  legacy: [
    {
      zh: "塞尚晚年的聖維克多山系列，被視為通往立體派與抽象藝術的橋樑。畢加索、布拉克與馬蒂斯都深受其影響，塞尚因此被尊為「現代藝術之父」。",
      en: "The late Mont Sainte-Victoire series is seen as the bridge to Cubism and abstraction. Picasso, Braque and Matisse were deeply influenced by it, and Cézanne came to be called the father of modern art.",
    },
  ],
  hotspots: [
    { x: 0.52, y: 0.14, title: { zh: "山峰", en: "The summit" }, body: { zh: "山峰以藍、紫與白色的色面構成，輪廓清晰。", en: "The summit is built of planes of blue, violet and white with a clear outline." } },
    { x: 0.2, y: 0.12, title: { zh: "天空", en: "The sky" }, body: { zh: "天空中也有綠色的筆觸，令天地融為一體。", en: "Green strokes appear even in the sky, uniting heaven and earth." } },
    { x: 0.5, y: 0.5, title: { zh: "平原", en: "The plain" }, body: { zh: "田野與樹木被簡化為綠、黃色塊，如一幅拼貼。", en: "Fields and trees are reduced to green and yellow patches, like a patchwork." } },
    { x: 0.33, y: 0.72, title: { zh: "房屋", en: "The houses" }, body: { zh: "前景的橙紅色屋頂，是溫暖的色彩重點。", en: "The orange-red roofs in the foreground are warm accents of colour." } },
    { x: 0.82, y: 0.66, title: { zh: "道路", en: "The road" }, body: { zh: "右方一道淺色的線條，可能是橫越平原的道路。", en: "A pale band on the right may be a road crossing the plain." } },
  ],
  related: ["the-card-players", "wanderer-above-the-sea-of-fog", "composition-vii"],
};

export default artwork;

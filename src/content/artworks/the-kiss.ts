import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-kiss",
  title: { zh: "吻", en: "The Kiss" },
  artist: "klimt",
  year: 1908,
  date: { zh: "1907–1908 年", en: "1907–08" },
  period: "modern",
  medium: { zh: "布面油畫及金箔", en: "Oil and gold leaf on canvas" },
  dimensions: { h: 180, w: 180 },
  museum: "belvedere",
  image: "The Kiss - Gustav Klimt - Google Cultural Institute.jpg",
  subjects: ["portrait"],
  summary: {
    zh: "一對戀人在繁花盛開的懸崖邊相擁，男子俯身親吻女子的臉頰，兩人被一件金光閃閃的長袍包裹，融為一體。克林姆這幅以金箔繪成的作品，是維也納分離派與新藝術運動的巔峰之作。",
    en: "A pair of lovers embrace on the edge of a flowering meadow; the man bends to kiss the woman's cheek, and both are wrapped in a single shimmering golden robe. Painted with gold leaf, Klimt's masterpiece is the summit of the Vienna Secession and Art Nouveau.",
  },
  background: [
    {
      zh: "這幅畫創作於克林姆的「黃金時期」。他早年受父親（金匠）影響，又在 1903 年到訪意大利拉文納，被拜占庭教堂中金光燦爛的馬賽克深深震撼，從此大量在畫中使用金箔。",
      en: "The painting belongs to Klimt's “Golden Phase”. The son of a goldsmith, he visited Ravenna in Italy in 1903 and was overwhelmed by the glittering Byzantine mosaics in its churches; from then on he used gold leaf extensively.",
    },
    {
      zh: "1908 年，畫作尚未完全完成便在維也納藝術展覽中展出，奧地利政府隨即以高價購入，今藏維也納美景宮。",
      en: "In 1908, before it was entirely finished, the painting was shown at the Kunstschau exhibition in Vienna, and the Austrian state bought it for a high price; it is now in the Belvedere.",
    },
    {
      zh: "畫中戀人的身份不明，常有人猜測是克林姆與他的終身伴侶、時裝設計師艾米莉·弗洛格，但並無證據。",
      en: "The lovers' identities are unknown. They are often said to be Klimt and his lifelong companion, the fashion designer Emilie Flöge, but there is no evidence.",
    },
  ],
  technique: [
    {
      zh: "克林姆把寫實的臉孔與雙手，和平面的裝飾圖案結合在一起。人物的身體幾乎完全隱沒在金色長袍之下，只有臉、手與腳以細膩的寫實手法描繪，形成強烈對比。",
      en: "Klimt combined realistically painted faces and hands with flat decorative patterns. The bodies almost vanish beneath the golden robe; only faces, hands and feet are rendered naturalistically, creating a striking contrast.",
    },
    {
      zh: "他在油畫中大量使用[[gold-leaf|金箔]]與銀箔，背景亦灑上金粉，令畫作在光線下閃爍變幻，彷彿一件珍貴的工藝品或聖像。這種手法融合了繪畫、工藝與[[art-nouveau|新藝術運動]]的裝飾精神。",
      en: "He applied [[gold-leaf]] and silver leaf lavishly and scattered gold dust across the background, so the painting shimmers and changes in the light like a precious object or icon. It fuses painting, craft and the decorative spirit of [[art-nouveau]].",
    },
  ],
  symbolism: [
    {
      title: { zh: "男與女的圖案", en: "Masculine and feminine patterns" },
      body: {
        zh: "男子的長袍布滿{{1|黑白長方形}}，象徵剛強與陽性；女子的衣裙則滿是{{2|圓形與花朵}}，象徵柔和與陰性。兩種圖案在金色中交融，象徵愛情中兩性的結合。",
        en: "The man's robe is covered in {{1|black and white rectangles}}, symbols of masculinity; the woman's dress is full of {{2|circles and flowers}}, symbols of femininity. The two patterns merge in the gold, symbolising the union of the sexes in love.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "懸崖邊的愛情", en: "Love on the edge" },
      body: {
        zh: "戀人跪在{{4|花叢}}的邊緣，女子的{{3|雙腳}}已伸到懸崖之外。有人認為這暗示愛情的危險與脆弱：極致的幸福往往與失落只有一步之遙。",
        en: "The lovers kneel at the edge of {{4|the flowering meadow}}, and the woman's {{3|feet}} extend over the brink. Some see a hint of love's danger and fragility: supreme happiness is only a step from loss.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "神聖的愛", en: "Sacred love" },
      body: {
        zh: "金色背景源自拜占庭聖像畫，令這對戀人彷彿脫離了時間與空間，成為永恆的愛情化身。",
        en: "The gold background derives from Byzantine icons, lifting the lovers out of time and space and turning them into an eternal image of love.",
      },
      hotspot: 5,
    },
  ],
  anecdotes: [
    {
      zh: "《吻》是維也納最受歡迎的旅遊紀念品圖案之一，印在杯子、雨傘與圍巾上，美景宮每年吸引大量遊客專程來看這幅畫。",
      en: "The Kiss is one of Vienna's most popular souvenir images, printed on mugs, umbrellas and scarves, and draws huge numbers of visitors to the Belvedere every year.",
    },
    {
      zh: "男子頭上戴着{{6|常春藤花冠}}，女子頭上則綴滿小花，兩人的裝飾亦互相呼應。",
      en: "The man wears {{6|a crown of ivy}} and the woman has tiny flowers in her hair, their ornaments echoing each other.",
    },
  ],
  legacy: [
    {
      zh: "《吻》是新藝術運動最具代表性的畫作，亦是奧地利的國寶。它對裝飾與繪畫界線的模糊，影響了後來的設計、時裝與平面藝術，至今仍是最受歡迎的愛情圖像之一。",
      en: "The Kiss is the defining painting of Art Nouveau and an Austrian national treasure. Its blurring of the boundary between decoration and painting influenced later design, fashion and graphic art, and it remains one of the most beloved images of love.",
    },
  ],
  hotspots: [
    { x: 0.53, y: 0.15, title: { zh: "親吻", en: "The kiss" }, body: { zh: "男子俯身親吻女子的臉頰，女子閉上雙眼。", en: "The man bends to kiss the woman's cheek; her eyes are closed." } },
    { x: 0.33, y: 0.4, title: { zh: "黑白長方形", en: "Black and white rectangles" }, body: { zh: "男子長袍上的長方形圖案，象徵陽剛。", en: "The rectangles on the man's robe symbolise masculinity." } },
    { x: 0.52, y: 0.36, title: { zh: "圓形與花朵", en: "Circles and flowers" }, body: { zh: "女子衣裙上色彩繽紛的圓形與花朵，象徵陰柔。", en: "The colourful circles and flowers on the woman's dress symbolise femininity." } },
    { x: 0.78, y: 0.71, title: { zh: "懸崖邊的雙腳", en: "Feet at the edge" }, body: { zh: "女子的雙腳伸到花叢邊緣之外。", en: "The woman's feet extend beyond the edge of the meadow." } },
    { x: 0.3, y: 0.86, title: { zh: "花叢", en: "The flowering meadow" }, body: { zh: "腳下是一片繁花盛開的草地。", en: "Beneath them is a meadow full of flowers." } },
    { x: 0.86, y: 0.4, title: { zh: "金色背景", en: "The gold background" }, body: { zh: "灑滿金粉的背景，令畫作如聖像般閃耀。", en: "The gold-dusted background makes the painting glow like an icon." } },
    { x: 0.49, y: 0.05, title: { zh: "常春藤花冠", en: "The ivy crown" }, body: { zh: "男子頭戴常春藤編成的花冠。", en: "The man wears a crown of ivy leaves." } },
  ],
  related: ["primavera", "the-scream", "the-birth-of-venus"],
};

export default artwork;

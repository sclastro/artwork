import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "sunflowers",
  title: { zh: "向日葵", en: "Sunflowers" },
  artist: "van-gogh",
  year: 1888,
  date: { zh: "1888 年 8 月", en: "August 1888" },
  period: "post-impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 92.1, w: 73 },
  museum: "national-gallery-london",
  image: "Vincent Willem van Gogh 127.jpg",
  subjects: ["still-life"],
  summary: {
    zh: "十五朵向日葵插在陶瓶中，有的盛放，有的凋萎，全部浸在耀眼的黃色之中。梵高在亞爾畫下這組作品，為迎接好友高更的到來而佈置房間。它是世上最著名的花卉靜物畫。",
    en: "Fifteen sunflowers stand in an earthenware vase, some in full bloom, some wilting, all bathed in dazzling yellow. Van Gogh painted the series in Arles to decorate a room for the arrival of his friend Gauguin. It is the most famous flower painting in the world.",
  },
  background: [
    {
      zh: "1888 年，梵高在法國南部的亞爾租下「黃屋」，夢想建立一個畫家共同創作的「南方畫室」。他邀請高更來同住，並在八月一口氣畫了四幅向日葵，準備掛在客房中。",
      en: "In 1888 Van Gogh rented the “Yellow House” in Arles in the south of France, dreaming of founding a “Studio of the South” where artists would work together. He invited Gauguin to join him and in August painted four sunflower pictures in quick succession to hang in the guest room.",
    },
    {
      zh: "本畫是四幅中的第四幅，也是梵高自己最滿意的一幅，他在畫上簽了名。1889 年初，他又根據這幅畫繪製了數幅複本，分藏阿姆斯特丹、費城與東京。",
      en: "This is the fourth of the four, the one Van Gogh was most pleased with, and he signed it. In early 1889 he made several repetitions based on it, now in Amsterdam, Philadelphia and Tokyo.",
    },
    {
      zh: "向日葵花期很短，梵高必須在花朵凋謝之前盡快完成，因此每幅畫都在數天內畫成。",
      en: "Sunflowers fade quickly, so Van Gogh had to work fast before they wilted; each picture was finished within a few days.",
    },
  ],
  technique: [
    {
      zh: "整幅畫幾乎全以黃色構成：黃色的花、黃色的背景、黃色的桌面，只以深淺與質感區分。這是大膽的嘗試，梵高說他要做到「黃上加黃」。他使用了當時新發明的鉻黃顏料，色彩鮮豔奪目。",
      en: "The picture is made almost entirely of yellow: yellow flowers, yellow background, yellow table, differentiated only by tone and texture. It was a daring experiment; Van Gogh wanted to paint “yellow on yellow”. He used the newly available chrome yellow pigment for its brilliance.",
    },
    {
      zh: "花瓣與花心以厚厚的顏料堆疊，屬[[impasto|厚塗法]]，形成強烈的立體感。{{2|花心}}以點狀筆觸描繪，種子彷彿可以觸摸。",
      en: "Petals and seed heads are built up in thick [[impasto]], giving a powerful sense of relief. {{2|The seed heads}} are dabbed in dots so that the seeds seem touchable.",
    },
    {
      zh: "畫面以一道{{5|藍色細線}}分隔桌面與牆壁，這是畫中唯一的冷色，令黃色更加突出。",
      en: "A {{5|thin blue line}} separates table from wall, the only cool colour in the picture, making the yellows sing.",
    },
  ],
  symbolism: [
    {
      title: { zh: "生命的循環", en: "The cycle of life" },
      body: {
        zh: "畫中的向日葵處於不同階段：有的{{1|含苞}}、有的盛放、有的{{3|凋謝}}低垂。它們共同表現了生命由盛至衰的循環。",
        en: "The sunflowers are at different stages: some {{1|in bud}}, some in full bloom, some {{3|wilting}} and drooping. Together they express the cycle of life from flourishing to decay.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "友情與希望", en: "Friendship and hope" },
      body: {
        zh: "向日葵追隨太陽，象徵忠誠與熱情。梵高以它們迎接高更，寄託了他對友情與藝術理想的希望。可惜兩人同住兩個月便以割耳事件收場。",
        en: "Sunflowers turn to follow the sun, a symbol of loyalty and warmth. Van Gogh painted them to welcome Gauguin, expressing his hopes for friendship and a shared artistic ideal. Sadly, their two months together ended with the ear incident.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "鉻黃顏料會隨時間變暗。科學家研究發現，梵高部分向日葵的黃色已逐漸轉為啡色，博物館因此嚴格控制展出時的光線。",
      en: "Chrome yellow darkens over time. Scientists have found that some of the yellows in Van Gogh's sunflower paintings are slowly turning brown, so museums strictly control the lighting.",
    },
    {
      zh: "1987 年，東京的一幅向日葵複本以約三千九百萬美元拍出，打破當時的藝術品拍賣紀錄。",
      en: "In 1987 one of the repetitions, now in Tokyo, sold at auction for about $39 million, then a world record for a work of art.",
    },
    {
      zh: "高更後來畫了一幅《畫向日葵的梵高》，記錄了好友作畫的模樣。",
      en: "Gauguin later painted Van Gogh Painting Sunflowers, a portrait of his friend at work.",
    },
  ],
  legacy: [
    {
      zh: "《向日葵》已成為梵高的代名詞，亦是藝術史上最常被複製的圖像之一。它對色彩的大膽運用，影響了野獸派與表現主義畫家。",
      en: "Sunflowers has become synonymous with Van Gogh and is one of the most reproduced images in art history. Its daring use of colour influenced the Fauves and the Expressionists.",
    },
  ],
  hotspots: [
    { x: 0.13, y: 0.29, title: { zh: "盛放的向日葵", en: "A flower in full bloom" }, body: { zh: "左方盛放的向日葵，花瓣向四面伸展。", en: "On the left, a sunflower in full bloom spreads its petals." } },
    { x: 0.52, y: 0.1, title: { zh: "頂端的花", en: "The topmost flower" }, body: { zh: "畫面頂端的花朵以密集的筆觸描繪，花瓣已經脫落。", en: "The flower at the top, painted in dense strokes, has already lost its petals." } },
    { x: 0.52, y: 0.36, title: { zh: "花心", en: "The seed head" }, body: { zh: "中央花朵的花心以點狀厚塗表現種子。", en: "The seed head of the central flower is dabbed in thick dots of paint." } },
    { x: 0.18, y: 0.73, title: { zh: "凋謝的花", en: "A wilting flower" }, body: { zh: "左下方低垂凋謝的花朵，象徵生命的衰落。", en: "A drooping, wilting flower at lower left, a sign of decline." } },
    { x: 0.4, y: 0.81, title: { zh: "簽名", en: "The signature" }, body: { zh: "陶瓶上以藍色寫着「Vincent」。", en: "“Vincent” is written in blue on the vase." } },
    { x: 0.82, y: 0.81, title: { zh: "藍色細線", en: "The blue line" }, body: { zh: "分隔桌面與牆壁的藍線，是畫中唯一的冷色。", en: "The blue line between table and wall is the only cool colour in the picture." } },
  ],
  related: ["the-starry-night", "cafe-terrace-at-night", "the-bedroom"],
};

export default artwork;

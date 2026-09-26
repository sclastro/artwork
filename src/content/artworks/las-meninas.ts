import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "las-meninas",
  title: { zh: "宮娥", en: "Las Meninas" },
  artist: "velazquez",
  year: 1656,
  period: "baroque",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 318, w: 276 },
  museum: "prado",
  image: "Las Meninas, by Diego Velázquez, from Prado in Google Earth.jpg",
  subjects: ["portrait", "interior"],
  summary: {
    zh: "五歲的西班牙公主在侍女簇擁下站在畫室中央，畫家本人手執畫筆望向我們，後方的鏡子映出國王與王后。誰在看誰？誰是畫中的主角？《宮娥》是西方藝術史上被分析得最多的畫作之一。",
    en: "The five-year-old Spanish princess stands at the centre of a studio surrounded by her attendants; the painter himself, brush in hand, looks out at us; a mirror at the back reflects the King and Queen. Who is looking at whom, and who is the true subject? Las Meninas is one of the most analysed paintings in Western art.",
  },
  background: [
    {
      zh: "畫作描繪馬德里舊王宮中的一個房間，這裏是委拉斯開茲的畫室。畫面中央是國王腓力四世的女兒瑪格麗特·特蕾莎公主，兩旁是兩位侍女（西班牙文稱為「meninas」，畫名由此而來），右方還有兩名宮廷侏儒與一隻大狗。",
      en: "The scene is a room in the old Alcázar palace in Madrid that served as Velázquez's studio. At the centre is the Infanta Margarita Teresa, daughter of King Philip IV, flanked by two maids of honour (meninas in Spanish, hence the title); to the right are two court dwarfs and a large dog.",
    },
    {
      zh: "委拉斯開茲當時已擔任宮廷畫家三十多年，並身兼宮廷總管，負責王宮的裝飾與典禮。這幅畫原本掛在國王的私人書房，只供王室成員觀賞。",
      en: "By then Velázquez had been court painter for over thirty years and also served as palace marshal, responsible for decoration and ceremonies. The painting originally hung in the King's private study, seen only by the royal family.",
    },
    {
      zh: "畫家胸前的紅色十字，是聖地牙哥騎士團的徽章。委拉斯開茲在 1659 年才獲授騎士身份，比畫作完成晚了三年，因此十字必定是後來加上的；傳說甚至是國王親手添上的。",
      en: "The red cross on the painter's chest is the badge of the Order of Santiago. Velázquez was knighted only in 1659, three years after finishing the picture, so the cross must have been added later; legend says the King painted it himself.",
    },
  ],
  technique: [
    {
      zh: "委拉斯開茲的筆觸極其鬆動。近看{{0|公主}}的裙子，只是一片看似隨意的顏料；退後數步，便成了閃亮的絲綢與蕾絲。這種「遠看才成形」的手法，比印象派早了兩百年。",
      en: "Velázquez's brushwork is remarkably loose. Seen close up, {{0|the Infanta's}} dress is a flurry of apparently random marks; step back and it becomes gleaming silk and lace. This technique, which only resolves at a distance, anticipated the Impressionists by two centuries.",
    },
    {
      zh: "房間高大幽深，光線從右方的窗戶射入，照亮前景的人物，後方則逐漸暗下去，直至{{4|門口}}出現另一道光。層層遞進的光暗營造出真實的空氣感，令空間彷彿可以走進去。",
      en: "The room is tall and deep. Light from windows on the right falls on the figures in front, and the space grows darker towards the back until another burst of light appears at {{4|the open door}}. These layers of light and shade create a real sense of air, as if we could walk in.",
    },
    {
      zh: "畫面左方是一幅巨大{{6|畫布的背面}}，我們看不到委拉斯開茲在畫甚麼。這個安排令觀者成為畫中的一部分：畫家望着的，可能正是站在畫外的我們。",
      en: "On the left looms {{6|the back of a huge canvas}}; we cannot see what Velázquez is painting. This makes the viewer part of the scene: the painter may be looking at us, standing outside the picture.",
    },
  ],
  symbolism: [
    {
      title: { zh: "鏡中的國王與王后", en: "The King and Queen in the mirror" },
      body: {
        zh: "後牆的{{3|鏡子}}映出國王腓力四世與王后瑪麗安娜的半身像。他們應該站在觀者的位置，正是畫中眾人注目的對象。有人認為畫家正為他們畫像，公主是來探班的；也有人認為鏡中映出的是畫布上的內容。",
        en: "{{3|The mirror}} on the back wall reflects King Philip IV and Queen Mariana. They must be standing where the viewer stands, the focus of everyone's attention. Some think Velázquez is painting their portrait and the Infanta has come to visit; others that the mirror reflects the canvas itself.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "畫家的尊嚴", en: "The dignity of the painter" },
      body: {
        zh: "在十七世紀的西班牙，繪畫仍被視為手藝而非高尚的藝術。委拉斯開茲把自己畫在王室成員之間，與國王同處一個空間，胸前還佩戴騎士十字，等於宣告畫家是有學識、有地位的知識分子。",
        en: "In seventeenth-century Spain painting was still seen as a craft rather than a liberal art. By placing himself among the royal family, in the same space as the King and wearing a knight's cross, Velázquez asserted that the painter was a learned man of standing.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "觀看與被觀看", en: "Seeing and being seen" },
      body: {
        zh: "畫中多人同時望向觀者：畫家、公主、侏儒、門口的男子。哲學家福柯在《詞與物》的開篇便分析這幅畫，指出它探討的正是「再現」本身：畫作如何呈現觀看的行為。",
        en: "Several figures look straight out at us: the painter, the Infanta, a dwarf, the man at the door. The philosopher Michel Foucault opened The Order of Things with an analysis of this painting, arguing that it is about representation itself: how a picture shows the act of seeing.",
      },
    },
  ],
  anecdotes: [
    {
      zh: "左方侍女正向公主遞上一個紅色小陶罐，裏面盛着水。當時的宮廷女子流行啃食這種陶器，相信能令膚色白皙。",
      en: "The maid of honour on the left offers the Infanta a small red clay jar of water. Court ladies of the time fashionably nibbled such pottery, believing it made the complexion paler.",
    },
    {
      zh: "意大利畫家焦爾達諾稱這幅畫為「繪畫的神學」，意指它代表了繪畫藝術的最高境界。",
      en: "The Italian painter Luca Giordano called it “the theology of painting”, meaning it represents the highest level of the art.",
    },
    {
      zh: "1957 年，畢加索以《宮娥》為題創作了五十八幅變奏，今天全部收藏於巴塞隆拿畢加索博物館。",
      en: "In 1957 Picasso made fifty-eight variations on Las Meninas, all now in the Museu Picasso in Barcelona.",
    },
  ],
  legacy: [
    {
      zh: "《宮娥》對後世畫家影響深遠。戈雅以蝕刻版畫臨摹過它，馬奈稱委拉斯開茲為「畫家中的畫家」，並從他身上學會了鬆動的筆觸與灰黑的色調。",
      en: "Las Meninas profoundly influenced later painters. Goya made an etching after it; Manet called Velázquez “the painter of painters” and learned his loose brushwork and tonal greys from him.",
    },
    {
      zh: "它亦成為哲學、文學與藝術理論的熱門話題，被視為第一幅真正「關於繪畫本身」的畫作，預示了現代藝術對媒介的自我反思。",
      en: "It has also become a favourite subject of philosophy, literature and art theory, seen as perhaps the first painting truly about painting itself, anticipating modern art's reflection on its own medium.",
    },
  ],
  hotspots: [
    { x: 0.47, y: 0.74, title: { zh: "瑪格麗特公主", en: "Infanta Margarita Teresa" }, body: { zh: "五歲的公主穿着寬大的白色宮裙，金髮在光線下閃亮，是畫面的中心。", en: "The five-year-old princess in a wide white court dress, her blonde hair shining in the light, is the centre of the composition." } },
    { x: 0.24, y: 0.55, title: { zh: "委拉斯開茲", en: "Velázquez" }, body: { zh: "畫家手持畫筆與調色板，退後一步審視作品，目光落在觀者身上。", en: "Holding brush and palette, the painter steps back to consider his work, his gaze resting on the viewer." } },
    { x: 0.38, y: 0.76, title: { zh: "侍女與紅陶罐", en: "Maid with the red jar" }, body: { zh: "跪下的侍女瑪麗亞·奧古斯蒂娜向公主遞上盛水的紅色陶罐。", en: "The kneeling maid María Agustina Sarmiento offers the Infanta a red clay jar of water." } },
    { x: 0.42, y: 0.58, title: { zh: "鏡子", en: "The mirror" }, body: { zh: "後牆的鏡子映出國王腓力四世與王后瑪麗安娜模糊的身影。", en: "The mirror on the back wall reflects the blurred figures of Philip IV and Queen Mariana." } },
    { x: 0.58, y: 0.58, title: { zh: "門口的男子", en: "The man in the doorway" }, body: { zh: "王后的侍從長何塞·涅托站在樓梯上回頭，背後的光為房間增添深度。", en: "The queen's chamberlain José Nieto pauses on the stairs; the light behind him adds depth to the room." } },
    { x: 0.83, y: 0.69, title: { zh: "侏儒與大狗", en: "The dwarfs and the dog" }, body: { zh: "宮廷侏儒瑪麗·巴博拉直視觀者，旁邊的小男孩尼古拉斯把腳搭在大狗身上。", en: "The court dwarf Mari Bárbola looks straight out; beside her the boy Nicolás Pertusato rests his foot on the dog." } },
    { x: 0.07, y: 0.55, title: { zh: "畫布的背面", en: "The back of the canvas" }, body: { zh: "巨大的畫布背對觀者，我們永遠無法得知畫家在畫甚麼。", en: "The huge canvas faces away from us; we can never know what the painter is painting." } },
  ],
  related: ["arnolfini-portrait", "the-night-watch", "olympia"],
};

export default artwork;

import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "olympia",
  title: { zh: "奧林匹亞", en: "Olympia" },
  artist: "manet",
  year: 1863,
  period: "realism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 130.5, w: 190 },
  museum: "orsay",
  image: "Edouard Manet - Olympia - Google Art Project 3.jpg",
  subjects: ["nude", "interior", "portrait"],
  summary: {
    zh: "一個裸體女子斜倚床上，毫無羞怯地直視觀者；黑人女僕捧着客人送來的花束，床尾一隻黑貓弓起背脊。馬奈借用文藝復興名畫的構圖，畫的卻是一位巴黎的交際花。1865 年沙龍展出時，這幅畫掀起了十九世紀最大的藝術醜聞之一。",
    en: "A naked woman reclines on a bed and stares boldly out at us; a Black maid brings a bouquet from a client, and a black cat arches its back at the foot of the bed. Manet borrowed the composition of a Renaissance masterpiece to paint a Parisian courtesan. Shown at the Salon of 1865, it caused one of the greatest art scandals of the nineteenth century.",
  },
  background: [
    {
      zh: "畫作的構圖直接取材自提香的《烏爾比諾的維納斯》。然而提香畫的是女神，馬奈畫的是現代巴黎的妓女。「奧林匹亞」在當時是交際花常用的化名。",
      en: "The composition comes directly from Titian's Venus of Urbino. But where Titian painted a goddess, Manet painted a modern Parisian prostitute; “Olympia” was a name commonly used by courtesans at the time.",
    },
    {
      zh: "模特兒是維多琳·默朗，她亦出現在馬奈的《草地上的午餐》中，後來自己也成為畫家，作品曾入選沙龍。女僕的模特兒是一位名叫洛爾的黑人女子。",
      en: "The model was Victorine Meurent, who also appears in Manet's Luncheon on the Grass; she later became a painter herself and exhibited at the Salon. The maid was modelled by a Black woman named Laure.",
    },
    {
      zh: "畫作在 1863 年完成，兩年後才在沙龍展出。觀眾憤怒至極，有人以雨傘戳它，館方要派警衛看守，最後把它掛到觀眾難以觸及的高處。",
      en: "Painted in 1863, it was not shown at the Salon until two years later. Visitors were outraged; some tried to strike it with umbrellas, guards were posted, and it was eventually rehung high out of reach.",
    },
  ],
  technique: [
    {
      zh: "馬奈以大片平塗的色塊描繪人體，幾乎沒有傳統的明暗漸變，令女子的身體顯得扁平、蒼白，像一張剪紙。評論家譏諷她的膚色「像一具屍體」，但正是這種平面化，預示了現代繪畫的方向。",
      en: "Manet painted the body in broad, flat areas with almost none of the traditional modelling, so it looks pale and flat, like a cut-out. Critics sneered that her skin was corpse-like, yet this very flatness pointed the way for modern painting.",
    },
    {
      zh: "畫面由強烈的明暗對比構成：白色的床單與肌膚在左，深色的背景、女僕與{{2|黑貓}}在右。輪廓線清晰而堅硬，筆觸直接，沒有學院派的細膩修飾。",
      en: "The picture is built on strong contrasts: white sheets and skin on the left, dark background, maid and {{2|black cat}} on the right. Contours are crisp and hard, the handling direct, without academic polish.",
    },
  ],
  symbolism: [
    {
      title: { zh: "直視的目光", en: "The direct gaze" },
      body: {
        zh: "傳統的裸體女神眼神迴避或含情脈脈，{{0|奧林匹亞}}卻冷靜地直視觀者，像在打量顧客。她把觀者置於嫖客的位置，令當時的男性觀眾感到被冒犯。",
        en: "Traditional nude goddesses look away or gaze demurely; {{0|Olympia}} stares coolly at the viewer as if sizing up a client. She places the viewer in the role of a customer, which deeply offended male visitors of the time.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "貓取代了狗", en: "A cat instead of a dog" },
      body: {
        zh: "提香畫中的維納斯腳邊睡着一隻小狗，象徵忠貞。馬奈把它換成一隻弓起背、豎起尾巴的黑貓，在當時的法國，黑貓常與情慾和巫術聯繫在一起。",
        en: "In Titian's painting a little dog sleeps at Venus's feet, a symbol of fidelity. Manet replaced it with a black cat arching its back and raising its tail; in France at the time black cats were associated with sexuality and witchcraft.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "花束與配飾", en: "The bouquet and accessories" },
      body: {
        zh: "{{3|女僕手中的花束}}是客人送來的禮物。女子頭上的蘭花、頸上的黑絲帶、手上的金鐲與一隻脫落的拖鞋，都暗示她的身份與這個房間裏發生的交易。",
        en: "{{3|The bouquet the maid carries}} is a gift from a client. The orchid in her hair, the black ribbon at her throat, the gold bracelet and the dangling slipper all hint at her profession and the transaction taking place.",
      },
      hotspot: 3,
    },
  ],
  anecdotes: [
    {
      zh: "1890 年，莫內發起募捐，籌款從馬奈遺孀手中購入此畫，捐贈法國政府，以免它流落海外。畫作先存於盧森堡博物館，1907 年移入羅浮宮。",
      en: "In 1890 Monet organised a subscription to buy the painting from Manet's widow and give it to the French state, so that it would not leave France. It went first to the Musée du Luxembourg and entered the Louvre in 1907.",
    },
    {
      zh: "近年的研究與展覽重新關注畫中的黑人女僕洛爾，探討她在藝術史中長期被忽視的身份。",
      en: "Recent research and exhibitions have turned attention to Laure, the Black model for the maid, whose identity was long overlooked in art history.",
    },
  ],
  legacy: [
    {
      zh: "《奧林匹亞》被視為現代藝術的起點之一：它以古典構圖挑戰古典價值，以平塗色塊取代立體幻覺，並直面當代社會的真實。塞尚、高更、畢加索都曾臨摹或回應這幅畫。",
      en: "Olympia is regarded as one of the starting points of modern art: it challenges classical values with a classical composition, replaces illusionism with flat colour, and confronts the realities of contemporary society. Cézanne, Gauguin and Picasso all copied or responded to it.",
    },
  ],
  hotspots: [
    { x: 0.24, y: 0.28, title: { zh: "直視的目光", en: "The gaze" }, body: { zh: "奧林匹亞冷靜地直視觀者，毫無羞怯。", en: "Olympia looks straight at the viewer, cool and unashamed." } },
    { x: 0.7, y: 0.2, title: { zh: "女僕", en: "The maid" }, body: { zh: "穿粉紅衣裙的黑人女僕望向主人，模特兒名叫洛爾。", en: "The Black maid in a pink dress looks towards her mistress; the model was named Laure." } },
    { x: 0.95, y: 0.62, title: { zh: "黑貓", en: "The black cat" }, body: { zh: "床尾的黑貓弓起背脊，雙眼發光。", en: "At the foot of the bed a black cat arches its back, eyes gleaming." } },
    { x: 0.6, y: 0.43, title: { zh: "花束", en: "The bouquet" }, body: { zh: "包在紙中的大花束，是客人送來的禮物。", en: "A large bouquet wrapped in paper, a gift from a client." } },
    { x: 0.78, y: 0.66, title: { zh: "脫落的拖鞋", en: "The dangling slipper" }, body: { zh: "一隻拖鞋仍掛在腳上，另一隻已經脫落。", en: "One slipper still hangs from her foot; the other has fallen off." } },
    { x: 0.3, y: 0.24, title: { zh: "頭上的蘭花", en: "The orchid" }, body: { zh: "粉紅色的蘭花在當時被視為帶有情慾意味的花。", en: "The pink orchid was considered an erotic flower at the time." } },
  ],
  related: ["luncheon-on-the-grass", "la-grande-odalisque", "the-birth-of-venus"],
};

export default artwork;

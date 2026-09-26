import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-birth-of-venus",
  title: { zh: "維納斯的誕生", en: "The Birth of Venus" },
  artist: "botticelli",
  year: 1485,
  date: { zh: "約 1484–1486 年", en: "c. 1484–86" },
  period: "renaissance",
  medium: { zh: "布面蛋彩", en: "Tempera on canvas" },
  dimensions: { h: 172.5, w: 278.9 },
  museum: "uffizi",
  image: "Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg",
  subjects: ["mythology", "nude", "sea"],
  summary: {
    zh: "愛與美之神維納斯從海中誕生，站在貝殼上被西風吹送到岸邊。這是自古羅馬以來首幅以真人大小描繪的神話裸女，標誌着文藝復興時代對古典世界的重新擁抱。",
    en: "Venus, goddess of love and beauty, rises from the sea and is blown ashore on a scallop shell by the west wind. It was the first life-size mythological nude since antiquity, a landmark of the Renaissance embrace of the classical world.",
  },
  background: [
    {
      zh: "十五世紀八十年代，佛羅倫斯在美第奇家族治下成為人文主義的中心。學者菲奇諾等人翻譯柏拉圖著作，嘗試調和古典哲學與基督教信仰，希臘羅馬神話因而不再被視為異教的禁忌，反而成為探討美與愛的寓言。",
      en: "In the 1480s Florence, under the Medici, was the centre of humanism. Scholars such as Marsilio Ficino translated Plato and tried to reconcile classical philosophy with Christian faith, so Greek and Roman myths were no longer forbidden paganism but allegories for exploring beauty and love.",
    },
    {
      zh: "這幅畫的委託人已無從確考，一般認為與美第奇家族的旁支有關。十六世紀中葉，畫家兼傳記作家瓦薩里記載它掛在美第奇家族位於卡斯泰洛的別墅中。畫作取材自古希臘詩人筆下的神話：維納斯生於海浪的泡沫之中，由風神送往塞浦路斯或基西拉島。",
      en: "Who commissioned the painting is uncertain; it is generally linked to a junior branch of the Medici family. In the mid-sixteenth century the painter and biographer Giorgio Vasari recorded it at the Medici villa at Castello. The subject comes from ancient Greek poetry: Venus was born from the foam of the sea and carried by the winds to Cyprus or Cythera.",
    },
    {
      zh: "1497 年，修士薩伏那洛拉在佛羅倫斯發起「虛榮之火」，焚燬大量被視為淫邪的書畫。這幅畫或許因為藏於郊外的私人別墅，才得以倖存。",
      en: "In 1497 the friar Savonarola led the “Bonfire of the Vanities” in Florence, burning books and pictures deemed immoral. The painting may have survived only because it hung in a private villa outside the city.",
    },
  ],
  technique: [
    {
      zh: "波提切利以[[tempera|蛋彩]]作畫，卻罕見地選用畫布而非木板。畫布較輕，便於在別墅之間搬運；他又在顏料中加入少量石膏粉，令畫面帶有啞光的質感，像濕壁畫一樣明淨。",
      en: "Botticelli painted in [[tempera]], but unusually on canvas rather than panel. Canvas was lighter and easier to move between villas; he also mixed a little gesso into the paint, giving it a matt, fresco-like clarity.",
    },
    {
      zh: "畫面重線條而輕體積。{{0|維納斯}}的輪廓如書法般流暢，頸項修長、雙肩下垂，左臂的接法在解剖上其實並不合理，重心亦幾乎無法站穩。這些「錯誤」是刻意的：波提切利追求的是理想的優雅，而非寫實的人體。",
      en: "The picture favours line over volume. {{0|Venus}} is outlined with calligraphic fluency; her neck is elongated and her shoulders slope, her left arm is anatomically improbable, and her stance could hardly bear her weight. These “errors” are deliberate: Botticelli was after ideal grace, not anatomical realism.",
    },
    {
      zh: "構圖以維納斯為中軸，左邊的{{1|風神}}與右邊的{{3|時序女神}}形成對稱，拱出一個三角形。海浪以規律的 V 形筆觸表現，更像裝飾圖案而非真實的水。畫家又在{{4|樹葉}}、頭髮和翅膀上以金粉點出高光，燭光下會微微閃爍。",
      en: "Venus forms the central axis, balanced by {{1|the winds}} on the left and {{3|the Hora}} on the right in a shallow triangle. The waves are regular V-shaped marks, more pattern than water. Gold highlights touch {{4|the leaves}}, the hair and the wings, which would have glimmered in candlelight.",
    },
  ],
  symbolism: [
    {
      title: { zh: "天上的愛", en: "Heavenly love" },
      body: {
        zh: "在新柏拉圖主義的解讀中，維納斯有兩種：屬世的愛與天上的愛。這位從海中誕生、沒有母親的維納斯代表後者，象徵純潔的神聖之美，引導靈魂由凡俗走向神聖。",
        en: "In Neoplatonic thought there were two Venuses: earthly love and heavenly love. This motherless Venus born from the sea stands for the latter, a pure, divine beauty that leads the soul from the material towards the divine.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "貝殼與玫瑰", en: "Shell and roses" },
      body: {
        zh: "扇貝殼自古與女性生育及誕生相連。飄落的玫瑰相傳與維納斯同時誕生，其刺提醒人們愛情亦會帶來痛苦。",
        en: "The scallop shell was associated since antiquity with fertility and birth. Roses, said to have come into being at the same moment as Venus, float down around her; their thorns remind us that love can wound.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "端莊的姿勢", en: "The modest pose" },
      body: {
        zh: "維納斯一手掩胸、一手以長髮遮蔽下身，這是古典雕塑中「端莊的維納斯」的姿勢。波提切利在佛羅倫斯的美第奇收藏中見過同類雕像，把石像化為有血有肉的女神。",
        en: "One hand over her breast and the other drawing her hair across her body, Venus adopts the classical Venus Pudica, or “modest Venus”, pose. Botticelli knew such statues from Medici collections and turned stone into a living goddess.",
      },
    },
    {
      title: { zh: "橙樹", en: "The orange trees" },
      body: {
        zh: "右方岸上的樹常被認為是橙樹。橙在拉丁文中稱為「mala medica」，與「美第奇」諧音，可能暗指贊助人，一如同期的《春》。",
        en: "The trees on the right shore are usually identified as orange trees. In Latin oranges were called mala medica, a pun on the Medici name, so they may allude to the patrons, as in Primavera.",
      },
      hotspot: 4,
    },
  ],
  anecdotes: [
    {
      zh: "坊間流傳維納斯的模特兒是佛羅倫斯美人西蒙內塔·韋斯普奇。然而她在 1476 年已經去世，而且沒有任何文獻支持這個說法，它更可能是十九世紀的浪漫想像。",
      en: "A popular story says the model for Venus was the Florentine beauty Simonetta Vespucci. She had died in 1476, however, and no document supports the claim; it is more likely a nineteenth-century romantic invention.",
    },
    {
      zh: "意大利的 10 歐仙硬幣背面，正是這幅畫中維納斯的頭像。",
      en: "The Italian 10-cent euro coin bears the head of Botticelli's Venus.",
    },
    {
      zh: "波提切利死後幾乎被遺忘，直到十九世紀英國的拉斐爾前派畫家與評論家重新推崇，這幅畫才成為烏菲茲美術館最受歡迎的作品之一。",
      en: "Botticelli was largely forgotten after his death. Only when the English Pre-Raphaelites and critics championed him in the nineteenth century did the painting become one of the Uffizi's most popular works.",
    },
  ],
  legacy: [
    {
      zh: "《維納斯的誕生》證明了異教神話與裸體可以成為嚴肅藝術的主題，為提香、魯本斯以至安格爾等畫家的女性裸體畫開了先河。",
      en: "The Birth of Venus showed that pagan myth and the nude could be serious subjects for art, opening the way for the female nudes of Titian, Rubens and, much later, Ingres.",
    },
    {
      zh: "在現代，它是被模仿與戲仿得最多的名畫之一：安迪·沃荷以絲網印刷重製其局部，無數廣告、時裝與電影亦引用過維納斯站在貝殼上的形象。",
      en: "In modern times it is one of the most imitated and parodied paintings of all: Andy Warhol reworked a detail in silkscreen, and countless advertisements, fashion shoots and films have quoted Venus on her shell.",
    },
  ],
  hotspots: [
    { x: 0.535, y: 0.17, title: { zh: "維納斯", en: "Venus" }, body: { zh: "女神神情若有所思，眼神略帶憂鬱，是波提切利筆下典型的女性面容。金紅色長髮以細線勾勒，並以金粉提亮。", en: "The goddess looks pensive, almost wistful, the typical Botticelli face. Her red-gold hair is drawn in fine lines and highlighted with gold." } },
    { x: 0.28, y: 0.22, title: { zh: "西風之神與微風", en: "Zephyr and Aura" }, body: { zh: "西風之神澤費羅斯鼓起雙頰吹氣，懷中抱着一位女子，一般認為是微風之神奧拉。兩人衣袂翻飛，令畫面充滿動感。", en: "Zephyr, the west wind, puffs out his cheeks as he blows, holding a female figure usually identified as the breeze Aura. Their swirling drapery fills the scene with movement." } },
    { x: 0.46, y: 0.8, title: { zh: "扇貝殼", en: "The scallop shell" }, body: { zh: "巨大的扇貝殼充當女神的座駕，紋理以精確的放射線畫成，呼應古典石棺上的裝飾。", en: "The giant scallop shell serves as the goddess's vessel, its ribs drawn with precise radiating lines that echo decoration on classical sarcophagi." } },
    { x: 0.79, y: 0.45, title: { zh: "時序女神", en: "The Hora of Spring" }, body: { zh: "代表春天的時序女神，穿着繡滿矢車菊的白裙，腰繫玫瑰，正要為維納斯披上繡花斗篷。", en: "The Hora, goddess of the season of spring, wears a white dress embroidered with cornflowers and a girdle of roses. She is about to cover Venus with a flowered cloak." } },
    { x: 0.92, y: 0.25, title: { zh: "金色高光", en: "Gilded highlights" }, body: { zh: "樹葉、樹幹與花朵上點綴着金粉，這種源自中世紀的做法令畫面在燭光下閃閃生輝。", en: "Leaves, trunks and flowers are touched with gold, a medieval practice that made the painting shimmer in candlelight." } },
  ],
  related: ["primavera", "la-grande-odalisque", "olympia"],
};

export default artwork;

import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-art-of-painting",
  title: { zh: "繪畫藝術", en: "The Art of Painting" },
  artist: "vermeer",
  year: 1666,
  date: { zh: "約 1666–1668 年", en: "c. 1666–1668" },
  period: "baroque",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 120, w: 100 },
  museum: "kunsthistorisches",
  image: "Jan Vermeer - The Art of Painting - Google Art Project.jpg",
  subjects: ["interior", "portrait"],
  summary: {
    zh: "厚重的掛毯被掀開一角，讓我們窺見一間灑滿陽光的畫室：一位畫家背對觀者坐在畫架前，正在描繪一個頭戴桂冠、手持號角與書本的少女；牆上掛着一幅巨大的尼德蘭地圖，天花垂下金色的吊燈。這是維梅爾對「繪畫」本身的禮讚，也是他最複雜、最心愛的作品。",
    en: "A heavy tapestry is drawn aside to let us glimpse a sunlit studio: a painter, his back to us, sits at his easel painting a young woman crowned with laurel and holding a trumpet and a book; a great map of the Netherlands hangs on the wall, and a golden chandelier hangs from the ceiling. It is Vermeer's homage to painting itself, and his most complex and most cherished work.",
  },
  background: [
    {
      zh: "這是維梅爾最大、構圖最複雜的作品之一。它不是受委託的畫，而可能是畫家為展示自己的功力而作，因此他一生都沒有出售。",
      en: "It is one of Vermeer's largest and most complex compositions. It was not a commission; he may have painted it to show off his skill, and he never sold it in his lifetime.",
    },
    {
      zh: "1675 年維梅爾去世，遺下大筆債務。翌年，遺孀卡塔莉娜把畫作轉讓給母親瑪麗亞·廷斯，希望避免它被債主拿去抵債；負責處理遺產的，正是以顯微鏡觀察微生物而聞名的科學家列文虎克。",
      en: "Vermeer died in 1675 deep in debt. The next year his widow, Catharina, transferred the painting to her mother, Maria Thins, hoping to keep it from the creditors; the executor handling the estate was none other than the microscopist Antonie van Leeuwenhoek, famous for discovering microorganisms.",
    },
    {
      zh: "二十世紀，畫作屬於維也納的切爾寧家族。1940 年，希特拉把它買下，準備放入他計劃在林茨興建的博物館。戰後，畫作在奧地利一個鹽礦中被發現，交還奧地利，今藏維也納藝術史博物館。",
      en: "In the twentieth century it belonged to the Czernin family in Vienna. In 1940 Hitler bought it for the museum he planned to build in Linz. After the war it was found in an Austrian salt mine and handed over to Austria; it is now in the Kunsthistorisches Museum in Vienna.",
    },
  ],
  technique: [
    {
      zh: "維梅爾以精準的透視構築空間：{{9|黑白相間的地磚}}向深處退去，前景{{7|掀開的掛毯}}與椅子像舞台的布幕，把觀者引入畫中。光線從左方的窗戶灑入，照亮{{0|少女}}、{{5|地圖}}與{{6|吊燈}}，每種物料反射光線的方式都各不相同。",
      en: "Vermeer builds the space with exact perspective: {{9|the black-and-white floor tiles}} recede into depth, while {{7|the drawn-back tapestry}} and the chair in front act like stage curtains, drawing us in. Light from a window at the left falls on {{0|the model}}, {{5|the map}} and {{6|the chandelier}}, each material catching the light in its own way.",
    },
    {
      zh: "{{5|地圖}}上的光影、摺痕與剝落的紙面都畫得一絲不苟，四周還有二十幅尼德蘭城市的小景。{{4|畫架上的畫布}}只畫了少女的桂冠，讓我們看到作畫的過程。",
      en: "The light, creases and flaking paper of {{5|the map}} are painted with meticulous care, and it is framed by twenty small views of Netherlandish cities. {{4|The canvas on the easel}} shows only the model's laurel wreath so far, letting us see the painting in progress.",
    },
  ],
  symbolism: [
    {
      title: { zh: "歷史的繆思", en: "The muse of History" },
      body: {
        zh: "{{0|少女}}頭戴桂冠、手持{{1|號角}}與{{2|書本}}，與里帕的《圖像學》中對歷史繆思克麗奧的描述吻合。號角象徵名聲，書本代表歷史。畫家描繪克麗奧，意味繪畫能令人名垂青史。",
        en: "{{0|The model}}, crowned with laurel and holding {{1|a trumpet}} and {{2|a book}}, matches Cesare Ripa's description in his Iconologia of Clio, the muse of History. The trumpet stands for fame, the book for history. By painting Clio, the painter suggests that painting can win lasting renown.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "藝術的較量", en: "Rivalry among the arts" },
      body: {
        zh: "{{8|桌上的石膏面具}}可能代表雕塑，攤開的書本與布料則代表其他藝術。畫家把它們放在一旁，專注於畫布，暗示繪畫高於雕塑等其他藝術。{{5|地圖}}中央的摺痕與{{6|吊燈上的雙頭鷹}}，則被一些學者解讀為尼德蘭南北分裂的政治隱喻。",
        en: "{{8|The plaster mask on the table}} may stand for sculpture, and the open book and fabric for other arts. The painter leaves them aside and concentrates on his canvas, implying that painting surpasses sculpture and the rest. Some scholars read the crease across {{5|the map}} and {{6|the double-headed eagle on the chandelier}} as political allusions to the division of the Netherlands.",
      },
      hotspot: 8,
    },
  ],
  anecdotes: [
    {
      zh: "{{3|背對觀者的畫家}}常被認為是維梅爾本人，但我們始終看不到他的臉。他穿着開衩的黑色上衣與橙紅色長襪，是當時昂貴而時髦的打扮。",
      en: "{{3|The painter with his back to us}} is often taken to be Vermeer himself, but we never see his face. His slashed black doublet and orange-red stockings were costly, fashionable dress for the time.",
    },
    {
      zh: "十九世紀，重新發掘維梅爾的法國評論家托雷–比爾熱，認為這是他所有作品中最有趣的一幅。",
      en: "In the nineteenth century Théophile Thoré-Bürger, the French critic who rediscovered Vermeer, considered this the most interesting of all his works.",
    },
  ],
  legacy: [
    {
      zh: "《繪畫藝術》是維梅爾對藝術的宣言，把寫實技巧、明亮的空間與複雜的寓意完美結合。達利十分推崇這幅畫，並在超現實主義作品《可以當作桌子的代爾夫特維梅爾幽靈》中重現畫中那位背對觀者的畫家。",
      en: "The Art of Painting is Vermeer's manifesto on art, flawlessly uniting naturalistic technique, luminous space and layered allegory. Salvador Dalí admired it greatly and brought its painter, seen from behind, into his Surrealist work The Ghost of Vermeer of Delft Which Can Be Used as a Table.",
    },
  ],
  hotspots: [
    { x: 0.44, y: 0.47, title: { zh: "少女克麗奧", en: "The model as Clio" }, body: { zh: "頭戴桂冠，扮演歷史的繆思。", en: "Crowned with laurel, posing as the muse of History." } },
    { x: 0.35, y: 0.5, title: { zh: "號角", en: "The trumpet" }, body: { zh: "象徵名聲。", en: "A symbol of fame." } },
    { x: 0.45, y: 0.5, title: { zh: "書本", en: "The book" }, body: { zh: "代表歷史。", en: "It stands for history." } },
    { x: 0.66, y: 0.6, title: { zh: "畫家", en: "The painter" }, body: { zh: "背對觀者，常被認為是維梅爾本人。", en: "His back to us; often taken to be Vermeer himself." } },
    { x: 0.8, y: 0.55, title: { zh: "畫架上的畫布", en: "The canvas on the easel" }, body: { zh: "只畫了少女的桂冠。", en: "So far only the laurel wreath is painted." } },
    { x: 0.6, y: 0.32, title: { zh: "尼德蘭地圖", en: "The map of the Netherlands" }, body: { zh: "四周有二十幅城市小景，中央有一道摺痕。", en: "Framed by twenty city views, with a crease across the middle." } },
    { x: 0.65, y: 0.2, title: { zh: "金色吊燈", en: "The golden chandelier" }, body: { zh: "頂部可能飾有哈布斯堡王朝的雙頭鷹。", en: "Perhaps crowned with the Habsburg double-headed eagle." } },
    { x: 0.15, y: 0.4, title: { zh: "掀開的掛毯", en: "The tapestry" }, body: { zh: "像舞台的布幕，把觀者引入畫中。", en: "Like a stage curtain, it draws us into the scene." } },
    { x: 0.32, y: 0.62, title: { zh: "石膏面具", en: "The plaster mask" }, body: { zh: "可能代表雕塑。", en: "Perhaps standing for sculpture." } },
    { x: 0.62, y: 0.9, title: { zh: "地磚", en: "The floor tiles" }, body: { zh: "黑白地磚展示精準的透視。", en: "Black and white tiles showing exact perspective." } },
  ],
  related: ["girl-with-a-pearl-earring", "the-milkmaid", "las-meninas"],
};

export default artwork;

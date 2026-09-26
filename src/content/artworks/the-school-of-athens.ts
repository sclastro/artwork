import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-school-of-athens",
  title: { zh: "雅典學院", en: "The School of Athens" },
  artist: "raphael",
  year: 1511,
  date: { zh: "1509–1511 年", en: "1509–11" },
  period: "renaissance",
  medium: { zh: "濕壁畫", en: "Fresco" },
  dimensions: { h: 500, w: 770 },
  museum: "vatican-museums",
  image: "\"The School of Athens\" by Raffaello Sanzio da Urbino.jpg",
  subjects: ["history", "interior"],
  summary: {
    zh: "古希臘最偉大的哲學家、數學家與天文學家齊聚一座宏偉的殿堂，柏拉圖指天，亞里士多德指地。拉斐爾在教宗的書房牆上，以理想化的古典空間歌頌人類的理性與知識。",
    en: "The greatest philosophers, mathematicians and astronomers of ancient Greece gather in a magnificent hall; Plato points to the heavens, Aristotle to the earth. On the wall of the pope's library, Raphael celebrated human reason and knowledge in an idealised classical space.",
  },
  background: [
    {
      zh: "1508 年，教宗儒略二世召年僅二十五歲的拉斐爾到羅馬，裝飾梵蒂岡宮的一系列房間，今稱「拉斐爾房間」。《雅典學院》位於「簽字廳」，此房間原是教宗的私人圖書館。",
      en: "In 1508 Pope Julius II summoned the twenty-five-year-old Raphael to Rome to decorate a suite of rooms in the Vatican Palace, now known as the Raphael Rooms. The School of Athens is in the Stanza della Segnatura, which was originally the pope's private library.",
    },
    {
      zh: "房間四面牆分別代表人類知識的四大範疇：神學、哲學、詩歌與法律，對應圖書館的藏書分類。《雅典學院》代表哲學，正對面的《聖禮之爭》則代表神學，兩者一同表達了文藝復興人文主義者的理想：古典理性與基督教信仰和諧並存。",
      en: "The four walls represent the four branches of human knowledge: theology, philosophy, poetry and law, matching the library's divisions. The School of Athens stands for philosophy; facing it, the Disputation of the Holy Sacrament stands for theology. Together they express the humanist ideal of classical reason and Christian faith in harmony.",
    },
    {
      zh: "與此同時，米開朗基羅正在不遠處的西斯汀禮拜堂繪畫天花。兩位大師互相競爭，拉斐爾據說曾偷看米開朗基羅未完成的作品，並深受其雄渾人體影響。",
      en: "At the same time, Michelangelo was painting the Sistine Chapel ceiling nearby. The two masters were rivals; Raphael is said to have glimpsed Michelangelo's unfinished work and was deeply impressed by its powerful figures.",
    },
  ],
  technique: [
    {
      zh: "壁畫以[[fresco|濕壁畫]]繪成，每天只能完成一片灰泥的面積。拉斐爾先繪製與原尺寸相同的底稿，把輪廓轉印到牆上；這張巨大的底稿至今仍保存在米蘭安布羅西亞納圖書館。",
      en: "The work is painted in [[fresco]], one day's patch of plaster at a time. Raphael first made a full-size cartoon and transferred its outlines to the wall; that enormous cartoon still survives in the Biblioteca Ambrosiana in Milan.",
    },
    {
      zh: "建築以[[linear-perspective|線性透視]]層層後退，所有線條匯聚於{{0|柏拉圖與亞里士多德}}之間，令兩位哲學家成為視覺焦點。宏偉的拱頂據說參考了建築師布拉曼特為新聖伯多祿大殿所作的設計。",
      en: "The architecture recedes in [[linear-perspective]], with every line converging between {{0|Plato and Aristotle}}, making the two philosophers the visual focus. The vast vaults are said to reflect Bramante's designs for the new St Peter's Basilica.",
    },
    {
      zh: "五十多個人物分成若干小組，各自討論、書寫、沉思，姿態多變卻互相呼應。前景的{{1|赫拉克利特}}與{{2|第歐根尼}}打破了對稱，令整個場面生動自然。",
      en: "More than fifty figures form groups that debate, write and ponder, their varied poses answering one another. {{1|Heraclitus}} and {{2|Diogenes}} in the foreground break the symmetry, making the scene feel alive.",
    },
  ],
  symbolism: [
    {
      title: { zh: "天與地", en: "Heaven and earth" },
      body: {
        zh: "柏拉圖手持《蒂邁歐篇》，指向天空，代表他的理型論：真實存在於超越感官的理念世界。亞里士多德手持《倫理學》，手掌平伸向地，代表重視經驗與現實世界的哲學。兩個手勢概括了西方哲學的兩大傳統。",
        en: "Plato holds his Timaeus and points upward, signifying his theory of Forms: true reality lies in a world of ideas beyond the senses. Aristotle holds his Ethics and extends his palm towards the ground, signifying a philosophy rooted in experience of this world. The two gestures sum up the two great traditions of Western thought.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "兩位守護神", en: "The two guardian statues" },
      body: {
        zh: "左方壁龕是持七弦琴的{{6|阿波羅}}，代表詩歌、音樂與和諧；右方是智慧女神雅典娜。兩尊神像分別守護兩側的學者：左方偏重形而上學與藝術，右方偏重數學與自然科學。",
        en: "In the left-hand niche stands {{6|Apollo}} with his lyre, god of poetry, music and harmony; on the right, Athena, goddess of wisdom. They preside over the scholars below: metaphysics and the arts on the left, mathematics and natural science on the right.",
      },
      hotspot: 6,
    },
    {
      title: { zh: "古今對話", en: "A dialogue across time" },
      body: {
        zh: "拉斐爾把同代藝術家畫成古代哲人：柏拉圖的面容據說取自達文西，赫拉克利特取自米開朗基羅，歐幾里得取自布拉曼特。這是對文藝復興藝術家地位的肯定：他們與古代的思想家平起平坐。",
        en: "Raphael gave the ancient thinkers the faces of his contemporaries: Plato is said to resemble Leonardo, Heraclitus Michelangelo and Euclid Bramante. It was a bold claim for the status of Renaissance artists as equals of the ancient philosophers.",
      },
      hotspot: 1,
    },
  ],
  anecdotes: [
    {
      zh: "{{1|赫拉克利特}}並不在原本的底稿中。學者認為拉斐爾看過西斯汀天花後，才加上這個帶有米開朗基羅風格、且以他為原型的憂鬱人物，作為致敬。",
      en: "{{1|Heraclitus}} does not appear in the original cartoon. Scholars believe Raphael added this brooding figure, in Michelangelo's style and with his features, after seeing the Sistine ceiling, as a tribute.",
    },
    {
      zh: "拉斐爾把自己也畫了進去：{{5|右方邊緣}}一個戴黑帽的年輕人正回頭望向觀者，一般認為就是畫家的自畫像。",
      en: "Raphael painted himself into the scene: at {{5|the right edge}} a young man in a dark cap looks out at the viewer, generally identified as the artist's self-portrait.",
    },
    {
      zh: "左方身穿白衣、直視觀者的女子，常被說成是古代女數學家希帕提婭，但這個說法並無確證。",
      en: "The woman in white at the left who looks out at us is often said to be the ancient mathematician Hypatia, though the identification is unproven.",
    },
  ],
  legacy: [
    {
      zh: "《雅典學院》被視為文藝復興盛期古典精神的最完美體現：清晰、平衡、宏大而充滿人文氣息。此後三百多年，歐洲各地的美術學院把它奉為構圖與人物安排的教科書。",
      en: "The School of Athens is regarded as the most perfect expression of the classical spirit of the High Renaissance: clear, balanced, grand and humane. For three centuries European academies treated it as a textbook of composition and figure grouping.",
    },
    {
      zh: "今天，它的形象常被大學、學術機構和教科書用作「知識」與「學術自由」的象徵，是世界上最廣為人知的壁畫之一。",
      en: "Today its image is widely used by universities, academic institutions and textbooks as a symbol of knowledge and free inquiry, and it is one of the best-known murals in the world.",
    },
  ],
  hotspots: [
    { x: 0.51, y: 0.51, title: { zh: "柏拉圖與亞里士多德", en: "Plato and Aristotle" }, body: { zh: "穿紅袍、白鬚的柏拉圖指向天空；穿藍袍的亞里士多德手掌向下，兩人並肩走向觀者。", en: "White-bearded Plato in red points upward; Aristotle in blue holds his palm downward as the two walk towards us side by side." } },
    { x: 0.43, y: 0.72, title: { zh: "赫拉克利特", en: "Heraclitus" }, body: { zh: "倚在石塊上沉思書寫的哲學家，穿着工匠的靴子，面容據說取自米開朗基羅。", en: "The philosopher leaning on a block, lost in thought as he writes, wears a stonemason's boots; his face is said to be Michelangelo's." } },
    { x: 0.58, y: 0.64, title: { zh: "第歐根尼", en: "Diogenes" }, body: { zh: "衣衫不整、隨意躺在石階上的犬儒派哲學家，蔑視世俗禮儀。", en: "The Cynic philosopher sprawls on the steps in a ragged cloak, scorning social convention." } },
    { x: 0.24, y: 0.72, title: { zh: "畢達哥拉斯", en: "Pythagoras" }, body: { zh: "左前方埋首書寫的長者，身旁少年舉着寫有和聲比例的石板。", en: "In the left foreground the elderly Pythagoras writes intently while a boy holds up a tablet showing musical ratios." } },
    { x: 0.72, y: 0.74, title: { zh: "歐幾里得", en: "Euclid" }, body: { zh: "俯身以圓規在石板上示範幾何的學者，面容取自建築師布拉曼特，學生圍着他專注觀看。", en: "Bending to demonstrate geometry with compasses, this figure has the face of the architect Bramante; students crowd round to watch." } },
    { x: 0.81, y: 0.6, title: { zh: "托勒密與拉斐爾", en: "Ptolemy and Raphael" }, body: { zh: "手持地球儀的是天文學家托勒密；右方邊緣望向觀者的年輕人，則是拉斐爾本人。", en: "The figure holding a terrestrial globe is the astronomer Ptolemy; the young man at the right edge looking out at us is Raphael himself." } },
    { x: 0.23, y: 0.26, title: { zh: "阿波羅像", en: "Statue of Apollo" }, body: { zh: "左方壁龕中持七弦琴的阿波羅像，象徵詩歌與和諧。", en: "The statue of Apollo with his lyre in the left niche stands for poetry and harmony." } },
  ],
  related: ["the-last-supper", "the-creation-of-adam", "oath-of-the-horatii"],
};

export default artwork;

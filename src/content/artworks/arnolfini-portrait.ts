import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "arnolfini-portrait",
  title: { zh: "阿爾諾芬尼夫婦像", en: "The Arnolfini Portrait" },
  artist: "van-eyck",
  year: 1434,
  period: "northern-renaissance",
  medium: { zh: "橡木板油畫", en: "Oil on oak panel" },
  dimensions: { h: 82.2, w: 60 },
  museum: "national-gallery-london",
  image: "Van Eyck - Arnolfini Portrait.jpg",
  subjects: ["portrait", "interior"],
  summary: {
    zh: "一對富裕的商人夫婦在布魯日的家中牽手而立，身邊的每件物件都閃着真實的光澤。牆上的凸面鏡映出整個房間，鏡上還寫着「范艾克在此」。這幅畫是油畫技法的里程碑，也是藝術史上最引人入勝的謎題之一。",
    en: "A wealthy merchant couple stand hand in hand in their house in Bruges, surrounded by objects that gleam with real light. A convex mirror on the wall reflects the whole room, and above it is written “Jan van Eyck was here”. The painting is a milestone of oil technique and one of art history's most intriguing puzzles.",
  },
  background: [
    {
      zh: "畫中男子是來自意大利盧卡的商人喬凡尼·阿爾諾芬尼，他在當時歐洲北部的貿易中心布魯日經營生意。女子的身份則有爭議：可能是他的妻子科斯坦薩·特倫塔，但她在 1433 年已經去世；也有學者認為畫中人是他的第二任妻子。",
      en: "The man is Giovanni di Nicolao Arnolfini, a merchant from Lucca in Italy who did business in Bruges, then the trading hub of northern Europe. The woman's identity is disputed: she may be his wife Costanza Trenta, but Costanza had died by 1433; other scholars think she is a later wife.",
    },
    {
      zh: "二十世紀藝術史學者潘諾夫斯基認為這幅畫是一張「婚禮證書」，畫家在場作證，因此寫下「范艾克在此」。近年不少學者提出異議，認為它可能是訂婚紀念，甚至是悼念亡妻的肖像。",
      en: "In the twentieth century the art historian Erwin Panofsky argued that the painting was a kind of wedding certificate, with the painter present as witness, hence “Jan van Eyck was here”. Many scholars now disagree, suggesting it may commemorate a betrothal or even serve as a memorial to a dead wife.",
    },
    {
      zh: "畫作後來輾轉歸哈布斯堡家族、西班牙王室所有，拿破崙戰爭期間被一名英國軍官帶到倫敦，1842 年由英國國家美術館購入。",
      en: "The painting later passed to the Habsburgs and the Spanish royal collection; during the Napoleonic Wars a British officer brought it to London, and the National Gallery bought it in 1842.",
    },
  ],
  technique: [
    {
      zh: "范艾克並非油畫的發明者，卻把[[oil-paint|油畫顏料]]的潛力發揮至前所未有的境界。他以多層半透明的[[glazing|罩染]]描繪物件，令{{2|黃銅吊燈}}的反光、毛皮的柔軟、女子綠裙的厚重都真實可觸。",
      en: "Van Eyck did not invent [[oil-paint]], but he exploited its potential as never before. With layer upon layer of translucent [[glazing]] he rendered the gleam of {{2|the brass chandelier}}, the softness of fur and the heavy folds of the green gown so that they seem real enough to touch.",
    },
    {
      zh: "最令人驚嘆的是{{0|凸面鏡}}。直徑只有數厘米的鏡中，映出房間的反面、窗戶和兩個站在門口的人影。鏡框上的十個小圓圈，更畫着耶穌受難的十個場景，每一個都只有指甲大小。",
      en: "Most astonishing is {{0|the convex mirror}}. Just a few centimetres across, it reflects the back of the room, the window and two figures standing in the doorway. The ten tiny roundels in its frame show ten scenes of Christ's Passion, each no bigger than a fingernail.",
    },
    {
      zh: "光線從左方的窗戶射入，統一地照亮整個房間。房間的透視並非依據單一消失點，而是憑經驗觀察而得，卻依然令人感到真實可信。",
      en: "Light enters from the window on the left and falls consistently across the room. The perspective is not built on a single vanishing point but on careful observation, yet the space feels entirely convincing.",
    },
  ],
  symbolism: [
    {
      title: { zh: "一根點燃的蠟燭", en: "A single lit candle" },
      body: {
        zh: "大白天，吊燈上卻只有一根蠟燭點着。它可能象徵上帝無所不在，或婚禮上點燃的婚燭；若畫作是悼念之作，則可能代表仍在世的丈夫，而另一邊熄滅的燭座代表逝去的妻子。",
        en: "In broad daylight, a single candle burns in the chandelier. It may symbolise God's all-seeing presence or a wedding candle; if the painting is a memorial, it may represent the living husband, with the empty holders on the other side for the dead wife.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "小狗與鞋子", en: "The dog and the shoes" },
      body: {
        zh: "腳邊的{{4|小狗}}常被視為忠誠的象徵，也顯示主人的財富。{{5|脫下的木屐}}則可能表示這裏是神聖之地，一如摩西在燃燒的荊棘前脫鞋；亦可能只是反映日常的居家習慣。",
        en: "{{4|The little dog}} is often read as a symbol of fidelity and also displays the owners' wealth. {{5|The discarded pattens}} may signal holy ground, as when Moses removed his sandals before the burning bush, or may simply reflect domestic habit.",
      },
      hotspot: 4,
    },
    {
      title: { zh: "窗台上的橙", en: "Oranges on the sill" },
      body: {
        zh: "在北歐，{{6|橙}}是從南方進口的昂貴水果，是財富的標誌；也有人把它與伊甸園的禁果聯想起來，暗示人類墮落之前的純真。",
        en: "In northern Europe {{6|oranges}} were costly imports from the south and a sign of wealth; some also link them to the fruit of Eden, alluding to innocence before the Fall.",
      },
      hotspot: 6,
    },
    {
      title: { zh: "並非懷孕", en: "Not pregnant" },
      body: {
        zh: "女子提起裙擺，腹部隆起，但她很可能並未懷孕。這是當時時裝的姿態：厚重的長裙須要提起才能行走，而豐滿的腹部亦是理想的女性形象。",
        en: "The woman gathers up her skirts and her belly looks rounded, but she is probably not pregnant. This was a fashionable pose: heavy gowns had to be lifted to walk, and a full abdomen was part of the feminine ideal.",
      },
    },
  ],
  anecdotes: [
    {
      zh: "鏡子上方的拉丁文{{1|題字}}「Johannes de eyck fuit hic 1434」意為「范艾克曾在此，1434 年」，書寫得像法律文件上的簽署一樣華麗。",
      en: "The Latin {{1|inscription}} above the mirror, “Johannes de eyck fuit hic 1434”, means “Jan van Eyck was here, 1434”, written in an ornate hand like a signature on a legal document.",
    },
    {
      zh: "紅外線掃描顯示，范艾克在繪畫過程中曾多次修改，例如男子的手和雙腳的位置、小狗亦是後來加上的。",
      en: "Infrared scans show that van Eyck made many changes while painting, altering the man's hand and feet; the dog was a late addition.",
    },
    {
      zh: "拉斐爾前派畫家對這幅畫着迷不已，羅塞蒂等人在作品中模仿了凸面鏡的構思。",
      en: "The Pre-Raphaelites were fascinated by the painting; Rossetti and others borrowed the idea of the convex mirror in their own work.",
    },
  ],
  legacy: [
    {
      zh: "這幅畫是現存最早的全身雙人室內肖像之一，證明肖像畫可以像歷史畫一樣複雜深刻。畫中以鏡子擴展空間的構思，直接啟發了兩百年後委拉斯開茲的《宮娥》。",
      en: "It is one of the earliest surviving full-length double portraits set in an interior, proving that portraiture could be as complex as history painting. Its use of a mirror to extend the space inspired Velázquez's Las Meninas two centuries later.",
    },
    {
      zh: "它亦奠定了北方繪畫以日常物件寄寓象徵的傳統，由荷蘭黃金時代的風俗畫一直延續到今天的藝術研究。",
      en: "It also set the Northern tradition of hiding symbolism in everyday objects, a thread that runs through Dutch Golden Age genre painting and still fascinates scholars today.",
    },
  ],
  hotspots: [
    { x: 0.51, y: 0.3, title: { zh: "凸面鏡", en: "The convex mirror" }, body: { zh: "鏡中映出夫婦的背影和門口兩個人影，其中一人可能是畫家本人。鏡框十個小圓圈描繪耶穌受難的故事。", en: "The mirror shows the couple from behind and two figures in the doorway, one perhaps the painter himself. Ten roundels in the frame depict the Passion." } },
    { x: 0.5, y: 0.2, title: { zh: "畫家題字", en: "The artist's inscription" }, body: { zh: "「Johannes de eyck fuit hic 1434」，即「范艾克在此，1434 年」。", en: "“Johannes de eyck fuit hic 1434”: “Jan van Eyck was here, 1434”." } },
    { x: 0.42, y: 0.09, title: { zh: "黃銅吊燈", en: "The brass chandelier" }, body: { zh: "每一道金屬反光都精準描繪，只有一根蠟燭點着。", en: "Every metallic highlight is precisely rendered; only one candle is lit." } },
    { x: 0.55, y: 0.42, title: { zh: "牽起的手", en: "The joined hands" }, body: { zh: "男子輕托女子的右手，另一隻手舉起，像在宣誓或祝福。", en: "The man lightly holds the woman's right hand and raises his other hand, as if taking an oath or giving a blessing." } },
    { x: 0.47, y: 0.92, title: { zh: "小狗", en: "The little dog" }, body: { zh: "一隻毛茸茸的小狗望向觀者，每一根毛髮都清晰可見。", en: "A shaggy little dog looks out at the viewer, every hair clearly visible." } },
    { x: 0.07, y: 0.92, title: { zh: "木屐", en: "The pattens" }, body: { zh: "男子的木屐隨意放在地上，女子的紅鞋則在後方。", en: "The man's wooden pattens lie casually on the floor; the woman's red shoes are further back." } },
    { x: 0.08, y: 0.46, title: { zh: "橙", en: "Oranges" }, body: { zh: "窗台和木箱上放着昂貴的進口橙。", en: "Expensive imported oranges sit on the windowsill and chest." } },
  ],
  related: ["las-meninas", "the-ambassadors", "mona-lisa"],
};

export default artwork;

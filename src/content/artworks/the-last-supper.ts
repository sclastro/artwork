import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-last-supper",
  title: { zh: "最後的晚餐", en: "The Last Supper" },
  artist: "leonardo",
  year: 1498,
  date: { zh: "約 1495–1498 年", en: "c. 1495–98" },
  period: "renaissance",
  medium: { zh: "灰泥牆面上的蛋彩與油彩", en: "Tempera and oil on plaster" },
  dimensions: { h: 460, w: 880 },
  museum: "santa-maria-delle-grazie",
  image: "The Last Supper - Leonardo Da Vinci - High Resolution 32x16.jpg",
  subjects: ["religious", "interior"],
  summary: {
    zh: "耶穌說出「你們中間有一個人要出賣我」的一刻，十二門徒驚愕、憤怒、否認，情緒如漣漪般擴散。達文西把這一瞬間畫在米蘭一間修道院飯堂的牆上，創造了西方藝術中最著名的宗教畫面。",
    en: "Jesus has just said, “One of you will betray me,” and shock, anger and denial ripple through the twelve apostles. Leonardo painted that instant on the wall of a monastery refectory in Milan, creating the most famous religious image in Western art.",
  },
  background: [
    {
      zh: "委託人是米蘭公爵盧多維科·斯福爾扎。他打算把恩寵聖母修道院改建為家族陵寢，並請達文西在修士用膳的飯堂北牆繪畫《最後的晚餐》，讓修士進食時彷彿與耶穌同桌。",
      en: "The commission came from Ludovico Sforza, Duke of Milan, who planned to make the church of Santa Maria delle Grazie his family mausoleum. He asked Leonardo to paint the Last Supper on the north wall of the monks' refectory, so that the friars would seem to dine with Christ.",
    },
    {
      zh: "據當時的目擊者記述，達文西有時從早到晚不停作畫，有時一連數日只是站在畫前凝視，然後添上一兩筆便離去。修道院院長曾向公爵投訴他拖延，達文西據說回應：若找不到猶大的臉，就以院長作模特兒。",
      en: "A contemporary recalled that Leonardo sometimes painted from dawn to dusk without stopping, and at other times stood before the wall for days, added a stroke or two and left. When the prior complained to the Duke about the delay, Leonardo reputedly replied that if he could not find a face for Judas, he would use the prior's.",
    },
    {
      zh: "壁畫完成後不久便開始剝落。十七世紀修士在牆上開了一道門，把耶穌的雙腳切去；二戰期間飯堂被盟軍炸彈擊中，牆壁靠沙包保護才倖存。1978 至 1999 年的修復工程歷時二十一年，才去除歷代的補筆與污垢。",
      en: "The painting began to flake within years of completion. In the seventeenth century the friars cut a doorway through the wall, removing Christ's feet; in 1943 an Allied bomb hit the refectory, and the wall survived only because it had been shored up with sandbags. A restoration from 1978 to 1999 took twenty-one years to remove centuries of overpaint and grime.",
    },
  ],
  technique: [
    {
      zh: "傳統壁畫以[[fresco|濕壁畫]]技法繪製，必須趁灰泥未乾時一口氣完成。達文西不願受此限制，改在乾燥的牆面上以蛋彩和油彩作畫，以便慢慢推敲、反覆修改。可惜顏料無法與牆壁結合，這個實驗正是壁畫迅速損壞的原因。",
      en: "Wall paintings were traditionally made in [[fresco]], which must be finished while the plaster is wet. Leonardo refused that constraint and painted in tempera and oil on the dry wall so he could work slowly and revise. Unfortunately the paint never bonded with the wall; that experiment is why the work deteriorated so fast.",
    },
    {
      zh: "畫中房間以精準的[[linear-perspective|線性透視]]建構：{{6|天花板的格子}}與兩側牆上的掛毯，所有線條都匯聚於耶穌的右太陽穴。飯堂的真實建築與畫中空間相連，令牆壁彷彿向後延伸。",
      en: "The room is built with rigorous [[linear-perspective]]: {{6|the coffered ceiling}} and the tapestries along the walls all converge on Christ's right temple. The painted space continues the real architecture of the refectory, as if the wall opened into another room.",
    },
    {
      zh: "十二門徒被分為四組，每組三人，各自以手勢和表情反應。{{0|耶穌}}獨自居中，身形構成穩定的三角形，與門徒的騷動形成強烈對比；背後{{4|窗外的光}}更為他形成一圈天然的光環。",
      en: "The twelve apostles are arranged in four groups of three, each reacting with gestures and expressions. {{0|Christ}} sits alone at the centre, his body a calm triangle against the agitation around him, and {{4|the light from the window}} behind forms a natural halo.",
    },
  ],
  symbolism: [
    {
      title: { zh: "猶大與錢袋", en: "Judas and the purse" },
      body: {
        zh: "以往的畫家通常把猶大單獨放在餐桌另一邊。達文西卻讓{{1|猶大}}與其他門徒同坐，只以他後仰的身體、臉上的陰影和手中緊握的錢袋暗示背叛；他的手肘還碰翻了鹽瓶。",
        en: "Earlier painters usually isolated Judas on the other side of the table. Leonardo seats {{1|Judas}} among the others and marks his betrayal only by his recoiling body, the shadow on his face and the purse clutched in his hand; his elbow has even knocked over the salt.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "彼得的刀", en: "Peter's knife" },
      body: {
        zh: "激動的彼得靠向約翰耳邊追問叛徒是誰，手中握着一把刀，預示他稍後在客西馬尼園砍下大祭司僕人耳朵的情節。",
        en: "An agitated Peter leans towards John to ask who the traitor is, a knife in his hand, foreshadowing the moment in Gethsemane when he cuts off the ear of the high priest's servant.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "多馬的手指", en: "Thomas's finger" },
      body: {
        zh: "耶穌左方的{{3|多馬}}舉起食指，彷彿在質問。這根手指預示了他日後要親手觸摸耶穌傷口才肯相信復活，即「多疑的多馬」。",
        en: "To Christ's left, {{3|Thomas}} raises his index finger as if in question, foreshadowing how he would later insist on touching Christ's wounds before believing in the Resurrection: “doubting Thomas”.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "麵包與酒", en: "Bread and wine" },
      body: {
        zh: "耶穌的雙手分別伸向麵包與酒杯，暗示他隨即設立的聖餐禮：麵包代表他的身體，酒代表他的血。",
        en: "Christ's hands reach towards the bread and the wine, pointing to the Eucharist he is about to institute: the bread as his body, the wine as his blood.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "參觀《最後的晚餐》須預約，每批最多約三十多人，只能停留十五分鐘，以控制室內濕度與灰塵。",
      en: "Visits to The Last Supper must be booked in advance; each group of around thirty people may stay only fifteen minutes, to control humidity and dust.",
    },
    {
      zh: "十七世紀開鑿的門位於畫面下方中央，今天仍可以看到那個拱形的缺口，耶穌的雙腳就在那裏消失了。",
      en: "The seventeenth-century doorway at the bottom centre is still visible as an arched gap; that is where Christ's feet disappeared.",
    },
    {
      zh: "小說《達文西密碼》聲稱耶穌右旁的人物是抹大拉的馬利亞。藝術史學者普遍認為那是年輕的約翰，文藝復興時期常以秀氣無鬚的形象描繪他。",
      en: "The novel The Da Vinci Code claims that the figure at Christ's right is Mary Magdalene. Art historians agree it is the young apostle John, whom Renaissance painters conventionally showed as beardless and gentle.",
    },
  ],
  legacy: [
    {
      zh: "《最後的晚餐》以心理描寫取代了中世紀的靜態排列，成為敘事畫的典範。它是文藝復興盛期的起點，影響了拉斐爾以至後世無數畫家；魯本斯、林布蘭都曾臨摹它。",
      en: "The Last Supper replaced the static rows of medieval art with psychological drama and became a model for narrative painting. It marks the beginning of the High Renaissance and influenced Raphael and generations of artists; Rubens and Rembrandt both made drawings after it.",
    },
    {
      zh: "它亦是流行文化中被戲仿最多的構圖之一，由電影海報到政治漫畫，長桌一字排開的場面立即令人聯想到這幅畫。1980 年，恩寵聖母修道院與壁畫一同列入聯合國教科文組織世界遺產。",
      en: "It is also one of the most parodied compositions in popular culture, from film posters to political cartoons; any long table with a row of figures instantly evokes it. In 1980 the church and the mural were inscribed together on the UNESCO World Heritage List.",
    },
  ],
  hotspots: [
    { x: 0.5, y: 0.6, title: { zh: "耶穌", en: "Christ" }, body: { zh: "耶穌垂下眼簾，雙臂張開，神情平靜而哀傷，是整個構圖的中心與透視的消失點所在。", en: "Christ lowers his eyes, arms outspread, calm and sorrowful; he is the centre of the composition and the vanishing point lies at his head." } },
    { x: 0.32, y: 0.6, title: { zh: "猶大", en: "Judas" }, body: { zh: "猶大身體後仰，臉在陰影之中，右手緊握錢袋，是十三人中唯一面部背光的人。", en: "Judas recoils, his face in shadow and his right hand clutching a purse; he is the only one of the thirteen whose face is not lit." } },
    { x: 0.34, y: 0.55, title: { zh: "彼得與約翰", en: "Peter and John" }, body: { zh: "白髮的彼得俯身向約翰耳語，手中的刀藏在猶大身後；約翰則溫順地側向一旁。", en: "White-haired Peter leans in to whisper to John, a knife in his hand behind Judas; John inclines gently away." } },
    { x: 0.575, y: 0.5, title: { zh: "多馬", en: "Thomas" }, body: { zh: "多馬在耶穌身後舉起食指，彷彿質問：「是誰？」", en: "Behind Christ, Thomas raises a finger as if to ask, “Who is it?”" } },
    { x: 0.5, y: 0.43, title: { zh: "中央的窗", en: "The central window" }, body: { zh: "耶穌背後的窗框與戶外光線環繞他的頭部，取代了傳統的金色光環。", en: "The window frame and daylight behind Christ encircle his head, replacing the traditional gold halo." } },
    { x: 0.5, y: 0.88, title: { zh: "後來開鑿的門", en: "The later doorway" }, body: { zh: "1652 年修士在牆上開門，切去了耶穌的雙腳和部分桌布。", en: "In 1652 the friars cut a door through the wall, destroying Christ's feet and part of the tablecloth." } },
    { x: 0.5, y: 0.08, title: { zh: "格子天花", en: "The coffered ceiling" }, body: { zh: "天花板的格子線條把觀者的視線引向畫面中心，展示了嚴謹的透視結構。", en: "The lines of the coffered ceiling draw the eye towards the centre, revealing the rigorous perspective." } },
  ],
  related: ["mona-lisa", "the-school-of-athens", "calling-of-saint-matthew"],
};

export default artwork;

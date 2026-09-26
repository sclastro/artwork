import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-ambassadors",
  title: { zh: "大使", en: "The Ambassadors" },
  artist: "holbein",
  year: 1533,
  period: "northern-renaissance",
  medium: { zh: "橡木板油畫", en: "Oil on oak panel" },
  dimensions: { h: 207, w: 209.5 },
  museum: "national-gallery-london",
  image: "Hans Holbein the Younger - The Ambassadors - Google Art Project.jpg",
  subjects: ["portrait", "interior"],
  summary: {
    zh: "兩位年輕的法國外交官自信地站在擺滿科學儀器的架子兩旁。然而地上橫着一團奇怪的灰白形狀，要從側面斜看，才會發現那是一個骷髏。荷爾拜因在權力與學問的炫耀之下，埋下了死亡的提醒。",
    en: "Two young French diplomats stand confidently on either side of a shelf crowded with scientific instruments. Yet a strange grey shape slants across the floor; only when viewed from the side does it resolve into a skull. Beneath this display of power and learning, Holbein planted a reminder of death.",
  },
  background: [
    {
      zh: "左邊的是法國駐英國大使讓·德丹特維爾，時年二十九歲；右邊是他的好友、拉沃爾主教喬治·德塞爾夫，時年二十五歲。1533 年，德塞爾夫到倫敦探望德丹特維爾，後者委託宮廷畫家荷爾拜因為兩人繪畫這幅真人大小的雙人像。",
      en: "On the left is Jean de Dinteville, French ambassador to England, aged twenty-nine; on the right his friend Georges de Selve, Bishop of Lavaur, aged twenty-five. In 1533 de Selve visited Dinteville in London, and Dinteville commissioned the court painter Holbein to paint this life-size double portrait.",
    },
    {
      zh: "1533 年是英國歷史的轉折點：英王亨利八世為了與安妮·博林結婚，與羅馬教廷決裂，英格蘭教會自此脫離天主教。德丹特維爾出使英國，正是要處理這場外交危機。",
      en: "1533 was a turning point in English history: to marry Anne Boleyn, Henry VIII broke with Rome, and the Church of England left the Catholic fold. Dinteville's mission in England was to manage precisely this diplomatic crisis.",
    },
    {
      zh: "畫作後來被帶回德丹特維爾在法國的城堡，十九世紀流入英國，1890 年由英國國家美術館購入。",
      en: "The painting went back to Dinteville's château in France, came to England in the nineteenth century and was bought by the National Gallery in 1890.",
    },
  ],
  technique: [
    {
      zh: "荷爾拜因的寫實功力令人驚嘆：絲綢的光澤、毛皮的柔軟、{{6|天球儀}}上的星座、地毯的紋樣，無不精準入微。地板的圖案仿照倫敦西敏寺祭壇前的中世紀鑲嵌地磚。",
      en: "Holbein's realism is breathtaking: the sheen of silk, the softness of fur, the constellations on {{6|the celestial globe}}, the pattern of the carpet. The floor copies the medieval Cosmati pavement before the high altar of Westminster Abbey.",
    },
    {
      zh: "畫面最大的謎團是前景的{{0|骷髏}}。它以[[anamorphosis|變形透視]]繪成，正面看是一團拉長的灰白形狀；站在畫作右側、貼近畫面斜看，才會還原為一個骷髏。畫作原本可能掛在樓梯旁，讓觀者在經過時突然發現。",
      en: "The picture's great puzzle is {{0|the skull}} in the foreground. Painted in [[anamorphosis]], it looks like a stretched grey smear from the front; seen at a sharp angle from the right, close to the surface, it resolves into a skull. The painting may once have hung beside a staircase so that passers-by would suddenly notice it.",
    },
    {
      zh: "兩人與架子構成穩定的對稱結構，綠色的錦緞帷幕為背景，令人物與物件都顯得格外突出。",
      en: "The two men and the shelf form a stable, symmetrical structure against a green damask curtain, which makes the figures and objects stand out vividly.",
    },
  ],
  symbolism: [
    {
      title: { zh: "天與地的知識", en: "Knowledge of heaven and earth" },
      body: {
        zh: "架子上層放着天球儀、日晷與天文儀器，代表對天象的研究；下層放着{{4|地球儀}}、算術書與樂器，代表人間的學問。兩位年輕人博學多才，正是文藝復興「通才」的理想。",
        en: "The upper shelf holds a celestial globe, sundials and astronomical instruments, representing the study of the heavens; the lower shelf holds {{4|a terrestrial globe}}, an arithmetic book and musical instruments, representing earthly knowledge. The two young men embody the Renaissance ideal of the learned all-rounder.",
      },
      hotspot: 6,
    },
    {
      title: { zh: "斷弦的魯特琴", en: "The lute with a broken string" },
      body: {
        zh: "{{2|魯特琴}}的一根弦斷了，旁邊攤開的是路德派的讚美詩集。這被解讀為宗教改革帶來的分裂與不和：基督教世界失去了和諧。",
        en: "{{2|The lute}} has a broken string, and beside it lies an open Lutheran hymnbook. These are read as signs of the discord brought by the Reformation: Christendom has lost its harmony.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "死亡與救贖", en: "Death and salvation" },
      body: {
        zh: "變形的骷髏是[[vanitas|虛空派]]的象徵：無論權力與學問多麼顯赫，死亡終將來臨。而在畫面左上角，帷幕後面隱約露出一個{{1|十字架}}，暗示信仰才是唯一的救贖。",
        en: "The distorted skull is a [[vanitas]] symbol: however great one's power and learning, death will come. Yet in the top left corner, half hidden by the curtain, a {{1|crucifix}} appears, suggesting that faith is the only salvation.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "德丹特維爾帽上的徽章也畫着一個小骷髏，可見「死亡的提醒」是他的個人座右銘。",
      en: "Dinteville's hat badge also bears a tiny skull, suggesting that “remember death” was his personal motto.",
    },
    {
      zh: "有研究者計算架子上的圓柱形日晷，認為它所示的日期可能是 1533 年 4 月 11 日或 15 日，恰巧接近耶穌受難日。",
      en: "Researchers who studied the cylindrical sundial on the shelf suggest it may indicate 11 or 15 April 1533, close to Good Friday that year.",
    },
    {
      zh: "在英國國家美術館，參觀者常會走到畫作右側，彎腰斜看，試圖找出骷髏的正確角度。",
      en: "At the National Gallery visitors often walk to the right of the painting and crouch sideways, hunting for the angle at which the skull appears.",
    },
  ],
  legacy: [
    {
      zh: "《大使》是變形透視最著名的例子，也是把肖像與寓意結合得最精妙的作品之一。它證明肖像畫可以同時是一篇關於知識、宗教與死亡的哲學論述。",
      en: "The Ambassadors is the most famous example of anamorphosis and one of the most brilliant fusions of portrait and allegory. It shows that a portrait can also be a philosophical essay on knowledge, religion and death.",
    },
    {
      zh: "它啟發了後世藝術家對視覺錯覺的探索，從巴洛克的天頂畫到達利的超現實作品；電影與電子遊戲亦常以隱藏骷髏的手法向它致敬。",
      en: "It inspired later artists' explorations of optical illusion, from Baroque ceiling painting to Dalí; films and video games still pay homage with hidden skulls.",
    },
  ],
  hotspots: [
    { x: 0.5, y: 0.8, title: { zh: "變形的骷髏", en: "The anamorphic skull" }, body: { zh: "從右方斜看，這團灰白的形狀會還原為一個骷髏。", en: "Viewed obliquely from the right, the grey shape turns into a skull." } },
    { x: 0.025, y: 0.04, title: { zh: "隱藏的十字架", en: "The hidden crucifix" }, body: { zh: "左上角帷幕後露出一個銀色十字架，很容易被忽略。", en: "A silver crucifix peeps from behind the curtain at top left, easily missed." } },
    { x: 0.63, y: 0.6, title: { zh: "斷弦的魯特琴", en: "The lute with a broken string" }, body: { zh: "細看可見琴上一根弦已經斷掉。", en: "Look closely and you can see one of the strings has snapped." } },
    { x: 0.62, y: 0.67, title: { zh: "讚美詩集", en: "The hymnbook" }, body: { zh: "攤開的是馬丁·路德翻譯的德文讚美詩。", en: "The open book contains German hymns translated by Martin Luther." } },
    { x: 0.45, y: 0.6, title: { zh: "地球儀", en: "The terrestrial globe" }, body: { zh: "地球儀上標有德丹特維爾的家鄉波利西。", en: "The globe marks Polisy, Dinteville's family seat." } },
    { x: 0.8, y: 0.2, title: { zh: "德塞爾夫主教", en: "Georges de Selve" }, body: { zh: "身穿深色長袍的年輕主教，手肘倚在書上，書邊寫着他的年齡二十五歲。", en: "The young bishop in a dark gown rests his elbow on a book whose edge records his age: twenty-five." } },
    { x: 0.43, y: 0.24, title: { zh: "天球儀", en: "The celestial globe" }, body: { zh: "天球儀上繪有星座與星辰，代表對天象的學問。", en: "The celestial globe shows constellations and stars, representing astronomical learning." } },
  ],
  related: ["arnolfini-portrait", "mona-lisa", "las-meninas"],
};

export default artwork;

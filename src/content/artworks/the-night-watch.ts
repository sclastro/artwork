import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-night-watch",
  title: { zh: "夜巡", en: "The Night Watch" },
  artist: "rembrandt",
  year: 1642,
  period: "baroque",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 379.5, w: 453.5 },
  museum: "rijksmuseum",
  image: "The Night Watch - HD.jpg",
  subjects: ["portrait", "history", "city"],
  summary: {
    zh: "阿姆斯特丹的民兵隊正要出發，隊長舉手發令，鼓手敲鼓，火槍手裝彈，一名金衣女孩在人群中閃現。林布蘭把呆板的團體肖像變成一場充滿動感的戲劇，這幅巨作是荷蘭的國寶。",
    en: "An Amsterdam civic militia company is setting off: the captain gives the order, the drummer beats his drum, musketeers load their guns, and a girl in gold flashes through the crowd. Rembrandt turned the static group portrait into a drama full of movement; this huge canvas is a Dutch national treasure.",
  },
  background: [
    {
      zh: "十七世紀的荷蘭城市設有民兵隊，負責守衛城市，後來更多是市民的社交組織。富裕的隊員會集資委託畫家繪畫團體肖像，掛在民兵會所之中，每人按在畫中的位置付款。",
      en: "Seventeenth-century Dutch cities had civic militia companies, originally to defend the town but increasingly social clubs for prosperous citizens. Members pooled money to commission group portraits for their guild halls, each paying according to his prominence in the picture.",
    },
    {
      zh: "本畫描繪的是由班寧·柯克隊長與羅伊滕伯赫副隊長率領的火槍手民兵隊，掛在阿姆斯特丹火槍手會所的大廳中。畫作原名很長，「夜巡」這個名稱是十八世紀才出現的。",
      en: "It shows the musketeer company led by Captain Frans Banninck Cocq and Lieutenant Willem van Ruytenburch, and hung in the great hall of the Kloveniersdoelen, the musketeers' headquarters in Amsterdam. Its original title was long; the name “Night Watch” appeared only in the eighteenth century.",
    },
    {
      zh: "1715 年，畫作被移往阿姆斯特丹市政廳，因為牆面不夠大，四邊都被裁去，左邊損失最多，兩個人物就此消失。倫敦國家美術館藏有一幅十七世紀的小型複製品，讓我們得知原貌。",
      en: "In 1715 the painting was moved to Amsterdam's Town Hall; because the wall was too small, it was trimmed on all four sides, most on the left, losing two figures. A small seventeenth-century copy in the National Gallery, London, shows what it originally looked like.",
    },
  ],
  technique: [
    {
      zh: "傳統的團體肖像把人物整齊排列，人人面目清晰。林布蘭卻把隊員安排成正在行動的一刻：有人舉旗、有人裝彈、有人交談，前後錯落，充滿動感。{{0|隊長}}正向{{1|副隊長}}下令出發，兩人彷彿要踏出畫面。",
      en: "Traditional group portraits lined up their sitters with every face clearly visible. Rembrandt instead caught the company in action: raising the flag, loading guns, talking, staggered in depth and full of movement. {{0|The captain}} gives {{1|his lieutenant}} the order to march, and the two seem about to step out of the canvas.",
    },
    {
      zh: "林布蘭以[[chiaroscuro|明暗對照]]把光集中在隊長、副隊長與{{2|金衣女孩}}身上，其餘人物則部分隱沒在陰影中。這種處理令畫面極具戲劇性，卻也代表並非每位付錢的隊員都能清楚露面。",
      en: "Rembrandt used [[chiaroscuro]] to concentrate light on the captain, the lieutenant and {{2|the girl in gold}}, leaving others partly in shadow. The effect is intensely dramatic, though it also meant that not every paying member was clearly visible.",
    },
    {
      zh: "隊長伸出的左手在副隊長的淡黃色外套上投下影子，這個細節顯示了林布蘭對光線的精準觀察，也令兩人之間的空間清晰可感。",
      en: "The captain's outstretched left hand casts a shadow on the lieutenant's pale yellow coat, a detail that shows Rembrandt's precise observation of light and makes the space between the two men tangible.",
    },
  ],
  symbolism: [
    {
      title: { zh: "金衣女孩", en: "The girl in gold" },
      body: {
        zh: "發光的女孩並非隊員，而是民兵隊的象徵化身。她腰間掛着一隻雞，雞爪是火槍手隊的徽號；她身上的金黃色亦呼應隊伍的代表色。",
        en: "The glowing girl is not a member of the company but a personification of it. A chicken hangs from her waist; its claws were the emblem of the musketeers, and her golden dress echoes the company's colours.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "火槍的三個動作", en: "Three stages of the musket" },
      body: {
        zh: "畫中有三名隊員分別在裝彈、開火與吹走火藥，展示了火槍操作的完整步驟，彷彿一本操練手冊，讚頌火槍手的專業技能。",
        en: "Three figures are loading, firing and blowing away powder, together showing the full sequence of handling a musket, like a drill manual celebrating the musketeers' skill.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "市民的驕傲", en: "Civic pride" },
      body: {
        zh: "荷蘭剛從西班牙統治下獨立，民兵隊代表市民自發保衛家園的精神。畫作以盛大的場面表達阿姆斯特丹的繁榮與自信。",
        en: "The Dutch Republic had recently won its independence from Spain, and the militia embodied citizens defending their own city. The painting's grand spectacle expresses Amsterdam's prosperity and confidence.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "「夜巡」其實是白天的場景。畫作表面的凡立水日久變暗，令人誤以為是夜晚，名稱就此流傳下來。",
      en: "The Night Watch actually shows a daytime scene. Its varnish darkened over time, making it look like night, and the name stuck.",
    },
    {
      zh: "畫作曾三度遭人破壞：1911 年被一名鞋匠以刀割、1975 年被人以刀大幅割傷、1990 年被潑上酸液，每次都得以修復。",
      en: "The painting has been attacked three times: slashed by a shoemaker in 1911, badly cut with a knife in 1975, and sprayed with acid in 1990. Each time it was restored.",
    },
    {
      zh: "二戰期間，畫作被捲起藏在荷蘭的地下室與洞穴中，躲過了戰火。",
      en: "During the Second World War the painting was rolled up and hidden in bunkers and caves in the Netherlands, safe from the fighting.",
    },
    {
      zh: "自 2019 年起，荷蘭國家博物館展開名為「夜巡行動」的大型研究修復計劃，全程在玻璃房中公開進行，觀眾可以即場觀看。",
      en: "Since 2019 the Rijksmuseum has carried out a major research and conservation project called Operation Night Watch, conducted in a glass chamber in full view of visitors.",
    },
  ],
  legacy: [
    {
      zh: "《夜巡》把團體肖像提升為歷史畫的高度，是荷蘭黃金時代最具雄心的作品。它是荷蘭國家博物館的鎮館之寶，博物館的建築甚至是圍繞它的展廳而設計的。",
      en: "The Night Watch raised the group portrait to the level of history painting and is the most ambitious work of the Dutch Golden Age. It is the centrepiece of the Rijksmuseum, whose building was designed around the gallery that houses it.",
    },
    {
      zh: "坊間流傳這幅畫令林布蘭失去顧客、走向破產，但這只是浪漫的傳說；事實上他此後仍接到不少重要委託，破產另有原因。",
      en: "A popular legend claims the painting lost Rembrandt his clients and led to his bankruptcy, but this is romantic myth; he continued to receive important commissions, and his financial ruin had other causes.",
    },
  ],
  hotspots: [
    { x: 0.47, y: 0.55, title: { zh: "班寧·柯克隊長", en: "Captain Banninck Cocq" }, body: { zh: "身穿黑衣、斜掛紅色綬帶的隊長正伸手下令，步伐向前。", en: "Dressed in black with a red sash, the captain stretches out his hand to give the order as he strides forward." } },
    { x: 0.6, y: 0.6, title: { zh: "羅伊滕伯赫副隊長", en: "Lieutenant van Ruytenburch" }, body: { zh: "穿淡黃色外套的副隊長側耳聆聽，外套上可見隊長手的影子。", en: "The lieutenant in pale yellow turns to listen; the shadow of the captain's hand falls on his coat." } },
    { x: 0.3, y: 0.63, title: { zh: "金衣女孩", en: "The girl in gold" }, body: { zh: "被光照亮的女孩腰掛一隻雞，是民兵隊的象徵。", en: "The illuminated girl carries a chicken at her waist, a symbol of the company." } },
    { x: 0.21, y: 0.6, title: { zh: "紅衣火槍手", en: "The musketeer in red" }, body: { zh: "穿紅衣的隊員正在為火槍裝彈，展示操作的第一步。", en: "A musketeer in red loads his gun, demonstrating the first step of the drill." } },
    { x: 0.93, y: 0.72, title: { zh: "鼓手", en: "The drummer" }, body: { zh: "右方的鼓手敲響鼓聲，令畫面彷彿充滿聲音。", en: "At the right the drummer beats his drum, filling the scene with sound." } },
    { x: 0.37, y: 0.42, title: { zh: "旗手", en: "The standard-bearer" }, body: { zh: "旗手高舉隊旗，位於畫面中軸稍左的高處。", en: "The ensign raises the company's flag high, just left of centre." } },
    { x: 0.55, y: 0.17, title: { zh: "盾形名牌", en: "The shield of names" }, body: { zh: "拱門上的盾牌寫着十八名隊員的名字，是後來加上的。", en: "The shield on the archway lists the names of eighteen members; it was added later." } },
  ],
  related: ["las-meninas", "the-milkmaid", "liberty-leading-the-people"],
};

export default artwork;

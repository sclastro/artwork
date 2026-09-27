import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-slave-ship",
  title: { zh: "奴隸船", en: "The Slave Ship" },
  artist: "turner",
  year: 1840,
  period: "romanticism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 90.8, w: 122.6 },
  museum: "mfa-boston",
  image: "Slave-ship.jpg",
  subjects: ["sea", "history"],
  summary: {
    zh: "血紅的夕陽下，颱風逼近，一艘奴隸船在怒海中顛簸，船員把已死和垂死的非洲人拋進海裏，前景的浪濤中只見鐐銬、伸出水面的腿和爭食的魚群。透納把自然的狂暴與人性的殘忍熔於一爐，這是他晚年最震撼、最具控訴力量的作品。",
    en: "Under a blood-red sunset, with a typhoon coming on, a slave ship pitches in a raging sea as its crew throws the dead and dying overboard; in the foreground waves we glimpse shackles, a leg raised above the water and fish swarming to feed. Turner fused the violence of nature with the cruelty of man in one of the most shocking and accusatory works of his late career.",
  },
  background: [
    {
      zh: "這幅畫的原名是《奴隸販子把死者與垂死者拋下海——颱風將至》。題材取自 1781 年「宗號」事件：英國奴隸船宗號的船長以食水不足為由，把一百三十多名被擄的非洲人拋進大海，再向保險公司索償「貨物損失」。",
      en: "Its original title was Slavers throwing overboard the Dead and Dying — Typhoon coming on. It draws on the Zong massacre of 1781, when the captain of the British slave ship Zong, claiming a shortage of water, threw more than 130 captive Africans into the sea and then claimed for the “lost cargo” on insurance.",
    },
    {
      zh: "英國在 1833 年已廢除殖民地的奴隸制度，但奴隸貿易仍在世界其他地方持續。1839 年，廢奴運動家克拉克森重印他記述宗號事件的著作；翌年倫敦舉行首屆世界反奴隸制大會，透納正是在這一年把本畫送到皇家藝術學院展出。",
      en: "Britain had abolished slavery in its colonies in 1833, but the trade continued elsewhere. In 1839 the abolitionist Thomas Clarkson reissued his account that included the Zong; the next year London hosted the first World Anti-Slavery Convention, and that was the year Turner sent this picture to the Royal Academy.",
    },
    {
      zh: "展出時，透納附上自己長詩《希望的謬誤》的詩句：「趁風暴未掃過甲板，把死者與垂死者拋下海——不必理會他們的鎖鏈。希望啊，希望，虛妄的希望！你的市場如今在哪裏？」",
      en: "He exhibited it with lines from his own poem Fallacies of Hope: “Before it sweeps your decks, throw overboard / The dead and dying — ne'er heed their chains. / Hope, Hope, fallacious Hope! / Where is thy market now?”",
    },
  ],
  technique: [
    {
      zh: "畫面的主角其實是光與色。{{1|夕陽}}在海天之間炸開一道血紅與金黃，從中央向四周燃燒，{{4|左上方翻滾的烏雲}}則預示颱風將至。透納以厚薄不一的顏料、刮擦與薄塗，令天空彷彿在震動。",
      en: "The true protagonists are light and colour. {{1|The setting sun}} bursts in blood-red and gold between sea and sky, burning outward from the centre, while {{4|the roiling clouds at upper left}} announce the typhoon. Turner used paint thick and thin, scraped and glazed, so that the sky seems to tremble.",
    },
    {
      zh: "{{0|奴隸船}}本身被推到遠處，桅杆在暴風中傾側，只是一個模糊的剪影。觀者的目光被引向前景：在{{5|湧動的浪濤}}之間，細看才會發現{{2|鐐銬}}、{{3|戴着腳鐐的腿}}以及撲食的魚與海鳥。恐怖不是一眼看見，而是慢慢浮現。",
      en: "{{0|The ship itself}} is pushed into the distance, its masts heeling in the gale, little more than a silhouette. The eye is drawn instead to the foreground: among {{5|the surging waves}}, only on closer looking do we find {{2|chains}}, {{3|a shackled leg}} and fish and gulls tearing at the bodies. The horror does not strike at once; it surfaces slowly.",
    },
  ],
  symbolism: [
    {
      title: { zh: "大自然的審判", en: "Nature's judgement" },
      body: {
        zh: "逼近的颱風可以理解為上天對罪行的懲罰：船員為了保險賠償把人拋下海，而他們自己亦即將被風暴吞沒。人間的不義與自然的憤怒在畫中互相呼應。",
        en: "The approaching typhoon can be read as heaven's punishment: the crew who cast people overboard for insurance money are themselves about to be engulfed. Human injustice and nature's wrath answer each other.",
      },
      hotspot: 4,
    },
    {
      title: { zh: "血色的海", en: "A sea of blood" },
      body: {
        zh: "夕陽把整片海面染成紅色，既是自然景象，也暗示被殺害者的鮮血。美麗的色彩與可怕的內容形成強烈反差，令觀者在讚歎之後感到不安。",
        en: "The sunset stains the whole sea red — a natural effect that also suggests the blood of the murdered. The clash between beautiful colour and appalling subject leaves the viewer uneasy after the first gasp of admiration.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "鐐銬", en: "The chains" },
      body: {
        zh: "即使被拋進海裏，受害者仍然戴着鐐銬。這些鐵鏈是全畫最具體、最冷酷的細節，提醒觀者奴隸制度把人當作貨物的本質。",
        en: "Even in the sea the victims remain in chains. These irons are the most concrete and chilling details in the picture, reminding us that slavery reduced people to cargo.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "藝評家羅斯金的父親在 1844 年把這幅畫送給兒子作新年禮物。羅斯金稱讚它是透納最偉大的海景，但後來覺得畫中題材令他難以長期面對，終於把畫出售。",
      en: "The critic John Ruskin's father gave him this painting as a New Year's present in 1844. Ruskin called it Turner's greatest seascape, but later found the subject too painful to live with and sold it.",
    },
    {
      zh: "美國作家馬克·吐溫看過此畫後挖苦說，它像「一隻玳瑁貓在一盤番茄中發瘋」。當時不少人未能接受透納近乎抽象的晚年畫風。",
      en: "Mark Twain mocked it as looking like “a tortoise-shell cat having a fit in a platter of tomatoes”. Many at the time could not accept Turner's almost abstract late style.",
    },
    {
      zh: "畫作幾經轉手，於 1876 年由波士頓的收藏家愛麗絲·胡珀購入，1899 年起入藏波士頓美術館。",
      en: "After changing hands several times, it was bought in 1876 by the Boston collector Alice Hooper and has been in the Museum of Fine Arts, Boston, since 1899.",
    },
  ],
  legacy: [
    {
      zh: "《奴隸船》被視為藝術介入社會議題的先驅，常與傑利柯的《梅杜莎之筏》並論。它的色彩與筆觸亦預示了印象派及抽象表現主義；今天，它更成為反思奴隸貿易歷史時經常被引用的影像。",
      en: "The Slave Ship is seen as a pioneer of art engaging with social injustice, often compared with Géricault's Raft of the Medusa. Its colour and brushwork anticipate Impressionism and Abstract Expressionism, and today it is one of the images most often invoked in reckoning with the history of the slave trade.",
    },
  ],
  hotspots: [
    { x: 0.3, y: 0.52, title: { zh: "奴隸船", en: "The slave ship" }, body: { zh: "遠處的奴隸船桅杆傾側，在風暴中只剩模糊剪影。", en: "In the distance the ship's masts heel over, a blurred silhouette in the storm." } },
    { x: 0.57, y: 0.52, title: { zh: "夕陽", en: "The setting sun" }, body: { zh: "血紅與金黃的夕陽在海天之間燃燒，照亮整個畫面。", en: "A blood-red and golden sun blazes between sea and sky, lighting the whole scene." } },
    { x: 0.39, y: 0.9, title: { zh: "鐐銬", en: "The chains" }, body: { zh: "浪花之間浮現鐵鏈與鐐銬，受害者至死仍被鎖住。", en: "Chains and manacles surface in the waves; the victims were shackled even in death." } },
    { x: 0.74, y: 0.85, title: { zh: "戴着腳鐐的腿", en: "A shackled leg" }, body: { zh: "一條戴着腳鐐的腿伸出水面，是全畫最令人心寒的細節。", en: "A leg in irons rises from the water, the most chilling detail of all." } },
    { x: 0.2, y: 0.3, title: { zh: "颱風將至", en: "Typhoon coming on" }, body: { zh: "左上方翻滾的烏雲預示颱風即將吞沒一切。", en: "Churning clouds at upper left warn of the typhoon about to engulf everything." } },
    { x: 0.1, y: 0.65, title: { zh: "怒海", en: "The raging sea" }, body: { zh: "浪濤以粗獷的筆觸堆疊，海面彷彿在翻騰。", en: "The waves are built up with rough strokes, so that the sea seems to heave." } },
    { x: 0.85, y: 0.9, title: { zh: "魚與海鳥", en: "Fish and gulls" }, body: { zh: "魚群與海鳥撲向落水者，把悲劇推向極點。", en: "Fish and seabirds swarm towards the drowning, pushing the tragedy to its extreme." } },
  ],
  related: ["the-fighting-temeraire", "raft-of-the-medusa", "rain-steam-and-speed"],
};

export default artwork;

import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-bedroom",
  title: { zh: "在亞爾的臥室", en: "The Bedroom" },
  artist: "van-gogh",
  year: 1888,
  date: { zh: "1888 年 10 月", en: "October 1888" },
  period: "post-impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 72.4, w: 91.3 },
  museum: "van-gogh-museum",
  image: "Vincent van Gogh - De slaapkamer - Google Art Project.jpg",
  subjects: ["interior", "still-life"],
  summary: {
    zh: "一張黃色的木床、兩把椅子、一張小桌、牆上幾幅畫。梵高把他在亞爾「黃屋」的簡樸臥室畫得色彩鮮明，說這幅畫要表達「絕對的休息」。",
    en: "A yellow wooden bed, two chairs, a small table and a few pictures on the wall. Van Gogh painted his simple bedroom in the Yellow House in Arles in vivid colours, saying it was meant to express “absolute repose”.",
  },
  background: [
    {
      zh: "1888 年 9 月，梵高搬進亞爾的黃屋，並用弟弟西奧寄來的錢購置家具。他對這個屬於自己的家十分自豪，同年 10 月畫下這幅臥室。",
      en: "In September 1888 Van Gogh moved into the Yellow House in Arles, furnishing it with money sent by his brother Theo. He was proud of having a home of his own and painted this picture of his bedroom in October.",
    },
    {
      zh: "他在給西奧的信中詳細解釋：「這次純粹畫我的臥室，只是這裏的色彩要做所有事情……要令人看到畫就想休息，或更廣泛地說，想像睡覺。」",
      en: "He explained to Theo: “This time it's simply my bedroom, only here colour is to do everything... it's to be suggestive here of rest or of sleep in general. In a word, looking at the picture ought to rest the brain, or rather the imagination.”",
    },
    {
      zh: "1889 年，畫作因亞爾的水災受損，梵高在聖雷米療養院時又畫了兩幅複本，今分藏芝加哥藝術博物館與奧賽美術館。本畫是第一個版本，藏阿姆斯特丹梵高博物館。",
      en: "In 1889 the painting was damaged by flooding in Arles, and at the asylum in Saint-Rémy Van Gogh painted two further versions, now in the Art Institute of Chicago and the Musée d'Orsay. This first version is in the Van Gogh Museum, Amsterdam.",
    },
  ],
  technique: [
    {
      zh: "梵高以平塗的色塊與深色輪廓線作畫，明顯受到日本浮世繪的影響。他在信中寫道，他刻意省略陰影，令畫面像日本版畫一樣平面而明亮。",
      en: "Van Gogh painted in flat areas of colour with dark outlines, clearly influenced by Japanese woodblock prints. He wrote that he deliberately suppressed shadows to make it flat and bright like a Japanese print.",
    },
    {
      zh: "房間的透視明顯扭曲：地板向前傾斜，{{0|床}}彷彿要滑向觀者，後牆亦歪斜。部分原因是臥室本身呈不規則的梯形，但梵高也刻意誇張了透視，以增加畫面的表現力。",
      en: "The perspective is noticeably distorted: the floor tilts up, {{0|the bed}} seems to slide towards us and the back wall slants. This is partly because the room really was an irregular trapezoid, but Van Gogh also exaggerated the perspective for expressive effect.",
    },
    {
      zh: "今天看到的牆壁是淡藍色，但梵高在信中描述為「淡紫色」。科學研究證實，原本的紅色顏料已經褪色，令紫色變成了藍色。",
      en: "The walls look pale blue today, but Van Gogh described them as pale violet. Scientific analysis has confirmed that a red pigment has faded, turning the violet blue.",
    },
  ],
  symbolism: [
    {
      title: { zh: "成雙的物件", en: "Things in pairs" },
      body: {
        zh: "畫中的物件多是成雙的：{{2|兩把椅子}}、兩個枕頭、牆上兩幅肖像。有學者認為，這反映梵高渴望有人相伴，尤其是期待高更的到來。",
        en: "Many objects come in pairs: {{2|two chairs}}, two pillows, two portraits on the wall. Some scholars see in this Van Gogh's longing for companionship, especially his anticipation of Gauguin's arrival.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "安穩的家", en: "A settled home" },
      body: {
        zh: "漂泊半生的梵高終於擁有自己的房間。畫中簡樸的家具與明亮的色彩，表達了他對安穩生活的嚮往。",
        en: "After years of wandering, Van Gogh finally had a room of his own. The simple furniture and bright colours express his longing for a settled life.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "牆上的{{3|兩幅肖像}}是梵高自己的作品，描繪他的朋友：比利時畫家博赫與軍官米列。",
      en: "The {{3|two portraits}} on the wall are Van Gogh's own paintings of his friends, the Belgian painter Eugène Boch and the soldier Paul-Eugène Milliet.",
    },
    {
      zh: "2016 年，芝加哥藝術博物館把畫中的臥室按原樣複製，放上民宿網站出租，吸引大批遊客預訂。",
      en: "In 2016 the Art Institute of Chicago recreated the bedroom as a real room and offered it for rent on a home-sharing website, drawing huge demand.",
    },
  ],
  legacy: [
    {
      zh: "《在亞爾的臥室》是梵高最個人化的作品之一，展示了他如何以色彩表達情感。它對平面色塊與誇張透視的運用，預示了野獸派與表現主義的出現。",
      en: "The Bedroom is one of Van Gogh's most personal works, showing how he used colour to express feeling. Its flat colour and exaggerated perspective anticipated Fauvism and Expressionism.",
    },
  ],
  hotspots: [
    { x: 0.65, y: 0.42, title: { zh: "黃色木床", en: "The yellow bed" }, body: { zh: "粗壯的黃色木床佔據了畫面右半部。", en: "The sturdy yellow bed fills the right half of the picture." } },
    { x: 0.5, y: 0.45, title: { zh: "紅色被子", en: "The red blanket" }, body: { zh: "床上鮮紅的被子，與黃色床架形成對比。", en: "The scarlet blanket contrasts with the yellow bedframe." } },
    { x: 0.08, y: 0.52, title: { zh: "兩把椅子", en: "The two chairs" }, body: { zh: "草編座椅的椅子，一把在前，一把在床邊。", en: "Rush-seated chairs, one in front and one by the bed." } },
    { x: 0.66, y: 0.06, title: { zh: "牆上的肖像", en: "The portraits on the wall" }, body: { zh: "梵高自己畫的朋友肖像。", en: "Portraits of friends painted by Van Gogh himself." } },
    { x: 0.32, y: 0.14, title: { zh: "窗戶", en: "The window" }, body: { zh: "半開的綠色窗戶，透出黃綠色的光。", en: "The half-open green window lets in yellow-green light." } },
    { x: 0.23, y: 0.28, title: { zh: "盥洗桌", en: "The washstand" }, body: { zh: "小桌上放着水壺、臉盆與瓶子。", en: "The small table holds a jug, basin and bottles." } },
    { x: 0.13, y: 0.3, title: { zh: "毛巾", en: "The towel" }, body: { zh: "門邊掛着一條毛巾。", en: "A towel hangs by the door." } },
  ],
  related: ["sunflowers", "cafe-terrace-at-night", "the-starry-night"],
};

export default artwork;

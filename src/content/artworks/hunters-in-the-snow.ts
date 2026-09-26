import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "hunters-in-the-snow",
  title: { zh: "雪中獵人", en: "The Hunters in the Snow" },
  artist: "bruegel",
  year: 1565,
  period: "northern-renaissance",
  medium: { zh: "橡木板油畫", en: "Oil on oak panel" },
  dimensions: { h: 117, w: 162 },
  museum: "kunsthistorisches",
  image: "Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project.jpg",
  subjects: ["landscape", "everyday"],
  summary: {
    zh: "三個疲憊的獵人帶着獵犬踏雪歸來，收穫只有一隻狐狸。山坡下的村民在冰上溜冰嬉戲，遠方是尖峭的雪山。這是西方藝術中最早、亦最動人的冬景之一。",
    en: "Three weary hunters trudge home through the snow with their dogs, carrying only a single fox. Below, villagers skate and play on the ice, and jagged snowy peaks rise in the distance. It is one of the earliest and most moving winter landscapes in Western art.",
  },
  background: [
    {
      zh: "1565 年，安特衛普富商尼克拉斯·容赫林克委託布勒哲爾繪畫一系列描繪一年四季（或十二個月）的畫作，掛在他的宅邸之中。系列原有六幅，今存五幅，其中三幅藏於維也納藝術史博物館。",
      en: "In 1565 the wealthy Antwerp merchant Niclaes Jongelinck commissioned Bruegel to paint a series showing the seasons or months of the year for his house. There were originally six panels; five survive, three of them in the Kunsthistorisches Museum in Vienna.",
    },
    {
      zh: "這個系列延續了中世紀祈禱書中「月令圖」的傳統：以農民在不同季節的勞作與生活，表現時間的循環。《雪中獵人》描繪的是十二月至一月的隆冬。",
      en: "The series continues the tradition of the “labours of the months” in medieval books of hours, using peasants' work and life across the seasons to express the cycle of time. The Hunters in the Snow shows deep winter, December to January.",
    },
    {
      zh: "1564 至 1565 年的冬天正值「小冰期」，歐洲經歷了異常嚴寒的天氣。有學者認為，這幅畫亦反映了畫家對當時酷寒的親身體驗。",
      en: "The winter of 1564–65 fell in the “Little Ice Age”, and Europe endured exceptionally harsh cold. Some scholars see the painting as reflecting the artist's own experience of that bitter season.",
    },
  ],
  technique: [
    {
      zh: "構圖以一條由左上至右下的斜線展開：{{0|獵人}}與樹木沿山坡排列，引導視線滑向下方的冰湖與遠方的雪山。前景的深色人影與樹幹，與白雪形成鮮明的剪影效果。",
      en: "The composition unfolds along a diagonal from upper left to lower right: {{0|the hunters}} and trees line the slope, leading the eye down to the frozen ponds and the distant peaks. The dark figures and trunks in the foreground stand out as silhouettes against the snow.",
    },
    {
      zh: "布勒哲爾以有限的色彩營造出冬日的寒意：灰綠色的天空與冰面、白雪、深褐色的人物與樹木。這種冷色調的統一，令觀者幾乎感受到刺骨的空氣。",
      en: "Bruegel evokes winter cold with a restricted palette: grey-green sky and ice, white snow, dark brown figures and trees. This unified cool tonality makes you almost feel the biting air.",
    },
    {
      zh: "畫中的{{6|尖峭雪山}}並不存在於平坦的法蘭德斯，而是畫家早年翻越阿爾卑斯山時的記憶。他把真實觀察與想像結合，創造出一幅既具體又具普遍性的「世界風景」。",
      en: "The {{6|jagged peaks}} do not exist in flat Flanders; they come from Bruegel's memories of crossing the Alps as a young man. He combined observation and imagination to create a “world landscape” at once specific and universal.",
    },
  ],
  symbolism: [
    {
      title: { zh: "失敗的狩獵", en: "A poor hunt" },
      body: {
        zh: "獵人們低頭彎腰，獵犬垂着尾巴，唯一的收穫是一隻瘦小的狐狸。這不是英雄式的狩獵，而是普通人在嚴冬中求存的寫照。",
        en: "The hunters stoop, the dogs droop their tails, and the only catch is a scrawny fox. This is no heroic hunt but a picture of ordinary people struggling to survive a hard winter.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "歪斜的招牌", en: "The crooked sign" },
      body: {
        zh: "左方旅館的{{2|招牌}}鬆脫歪斜，上面畫着鹿與聖人，一般認為是狩獵的主保聖人聖休伯特或聖尤斯塔斯。招牌搖搖欲墜，或許暗示這次狩獵並不受眷顧。",
        en: "The inn's {{2|sign}} on the left hangs askew, showing a stag and a saint, usually identified as Hubert or Eustace, patron saints of hunters. Its precarious angle may suggest the hunt was not blessed.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "冰上的歡樂", en: "Joy on the ice" },
      body: {
        zh: "與獵人的疲憊相比，下方{{4|冰上的村民}}在溜冰、打冰球、玩陀螺，一片歡樂。布勒哲爾展現了冬天的兩面：艱苦與樂趣並存，生活依然繼續。",
        en: "In contrast to the weary hunters, {{4|the villagers on the ice}} skate, play a form of hockey and spin tops. Bruegel shows both faces of winter: hardship and fun side by side, and life goes on.",
      },
      hotspot: 4,
    },
  ],
  anecdotes: [
    {
      zh: "俄國導演塔可夫斯基在電影《飛向太空》與《鏡子》中都引用了這幅畫，太空站上的角色凝視着它，思念地球。",
      en: "The Russian director Andrei Tarkovsky quoted the painting in his films Solaris and Mirror; in Solaris a character on the space station gazes at it, homesick for Earth.",
    },
    {
      zh: "旅館前的村民正在{{1|生火}}燒豬毛，準備宰豬過冬，這是當時冬季的日常。",
      en: "In front of the inn, villagers are {{1|building a fire}} to singe a pig's bristles, preparing meat for the winter, an everyday seasonal task.",
    },
    {
      zh: "右下角的{{5|水車}}被冰凍住，無法轉動，進一步強調了寒冬的嚴酷。",
      en: "At the lower right a {{5|mill wheel}} is frozen solid and cannot turn, underscoring the severity of the winter.",
    },
  ],
  legacy: [
    {
      zh: "《雪中獵人》被視為西方風景畫的重要里程碑：風景不再只是宗教故事的背景，而成為表達季節、氣候與人類處境的主角。",
      en: "The Hunters in the Snow is a milestone of Western landscape painting: landscape is no longer just a backdrop for religious stories but the main subject, expressing season, climate and the human condition.",
    },
    {
      zh: "它是最常被印在聖誕卡上的名畫之一，亦啟發了詩人威廉斯與約翰·貝里曼的詩作，至今仍是冬天的經典意象。",
      en: "It is one of the most popular images for Christmas cards and inspired poems by William Carlos Williams and John Berryman; it remains the classic image of winter.",
    },
  ],
  hotspots: [
    { x: 0.3, y: 0.73, title: { zh: "三個獵人", en: "The three hunters" }, body: { zh: "獵人肩扛長矛，踏雪而行，其中一人背上掛着一隻狐狸。", en: "The hunters carry spears over their shoulders as they trudge through the snow; one has a fox slung on his back." } },
    { x: 0.1, y: 0.61, title: { zh: "旅館前的火", en: "The fire by the inn" }, body: { zh: "村民在旅館前生火，火焰被風吹得偏向一邊。", en: "Villagers tend a fire outside the inn, its flames blown sideways by the wind." } },
    { x: 0.1, y: 0.36, title: { zh: "歪斜的招牌", en: "The crooked sign" }, body: { zh: "只靠一個鉸鏈掛着的招牌，畫着鹿與聖人。", en: "Hanging by a single hinge, the sign shows a stag and a saint." } },
    { x: 0.12, y: 0.82, title: { zh: "獵犬", en: "The hounds" }, body: { zh: "瘦削的獵犬跟在主人身後，大多垂頭喪氣。", en: "The lean hounds follow their masters, most with heads hanging low." } },
    { x: 0.72, y: 0.6, title: { zh: "冰上的村民", en: "Villagers on the ice" }, body: { zh: "冰湖上的人們溜冰、打冰球、拉雪橇，身影小如墨點。", en: "People skate, play hockey and pull sledges on the frozen ponds, tiny as ink dots." } },
    { x: 0.88, y: 0.83, title: { zh: "結冰的水車", en: "The frozen mill wheel" }, body: { zh: "水車上掛滿冰柱，已經無法轉動。", en: "Icicles hang from the mill wheel, which can no longer turn." } },
    { x: 0.82, y: 0.25, title: { zh: "雪山", en: "The snowy peaks" }, body: { zh: "遠方尖峭的山峰源自畫家翻越阿爾卑斯山的記憶。", en: "The jagged peaks in the distance come from the artist's memories of crossing the Alps." } },
  ],
  related: ["garden-of-earthly-delights", "the-gleaners", "the-hay-wain"],
};

export default artwork;

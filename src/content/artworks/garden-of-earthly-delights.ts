import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "garden-of-earthly-delights",
  title: { zh: "人間樂園", en: "The Garden of Earthly Delights" },
  artist: "bosch",
  year: 1500,
  date: { zh: "約 1490–1510 年", en: "c. 1490–1510" },
  period: "northern-renaissance",
  medium: { zh: "橡木板油畫（三聯畫）", en: "Oil on oak panels (triptych)" },
  dimensions: { h: 205.5, w: 384.9 },
  museum: "prado",
  image: "The Garden of earthly delights.jpg",
  subjects: ["religious", "nude"],
  summary: {
    zh: "左邊是伊甸園，中間是無數裸體男女沉溺享樂的奇異花園，右邊是充滿刑具與怪物的地獄。波希這幅三聯畫布滿數以百計的細節，五百年來沒有人能完全解讀它的含義。",
    en: "On the left is Eden; in the centre a strange garden where countless naked men and women indulge in pleasure; on the right a Hell of torture and monsters. Bosch's triptych teems with hundreds of details, and in five centuries no one has fully decoded its meaning.",
  },
  background: [
    {
      zh: "這幅三聯畫可能是為布魯塞爾的拿騷家族而作，用作宮殿中的談資，而非教堂的祭壇畫。十六世紀末，西班牙國王腓力二世購入，後來收藏於埃斯科里亞爾修道院，今藏馬德里普拉多博物館。",
      en: "The triptych was probably made for the Nassau family in Brussels, as a conversation piece for their palace rather than a church altarpiece. In the late sixteenth century Philip II of Spain acquired it for the Escorial; it now hangs in the Prado in Madrid.",
    },
    {
      zh: "畫作原本沒有標題，「人間樂園」一名是後世所加。三聯畫合上時，外側以灰色單色描繪上帝創造世界的第三日：一個透明的球體中，大地剛剛長出植物，尚未有人類與動物。",
      en: "The work had no title; “The Garden of Earthly Delights” was given later. When the wings are closed, their outer faces show in grey monochrome the third day of Creation: inside a transparent sphere, the earth has just sprouted plants, before animals or people exist.",
    },
    {
      zh: "波希身處中世紀晚期與文藝復興交替的時代，宗教改革尚未爆發，但教會的腐敗與世人的罪惡已是熱門話題。他的作品既有傳統的道德訓誡，也充滿前所未見的想像。",
      en: "Bosch lived at the turn from the late Middle Ages to the Renaissance. The Reformation had not yet begun, but the corruption of the Church and the sins of the world were burning topics. His work combines traditional moral warning with unprecedented imagination.",
    },
  ],
  technique: [
    {
      zh: "三塊畫板合起來寬近四米，按從左至右的順序閱讀：創世、墮落、懲罰。{{0|左翼}}與中幅共用一條地平線，令伊甸園與人間樂園在空間上相連，暗示罪惡由此蔓延。",
      en: "The three panels, nearly four metres wide together, read from left to right: creation, fall, punishment. {{0|The left wing}} and the centre share a horizon, so Eden flows into the garden of delights, suggesting how sin spreads.",
    },
    {
      zh: "波希以細小的筆觸描繪數以百計的人物、動物與奇異建築，色彩明亮如珠寶。{{2|中幅}}以粉紅、淡藍與翠綠為主調，氣氛輕盈歡樂；{{4|右翼}}則沉入黑暗，只有火光照亮。",
      en: "With tiny brushstrokes Bosch painted hundreds of figures, animals and bizarre structures in jewel-bright colour. {{2|The central panel}} is dominated by pink, pale blue and bright green, light and festive; {{4|the right wing}} sinks into darkness lit only by fire.",
    },
    {
      zh: "畫面沒有單一焦點，觀者的目光只能在各處遊走，每一次觀看都會發現新的細節。這種「百科全書式」的構圖，影響了後來的老彼得·布勒哲爾。",
      en: "There is no single focal point; the eye wanders endlessly and finds something new at every look. This encyclopaedic composition deeply influenced Pieter Bruegel the Elder.",
    },
  ],
  symbolism: [
    {
      title: { zh: "伊甸園", en: "Paradise" },
      body: {
        zh: "左翼中，上帝把剛創造的夏娃帶到亞當面前，猶如主持婚禮。然而細看周圍，已有動物在互相捕食，{{1|生命之泉}}下方的池中亦有怪物出沒，暗示罪惡早已潛伏。",
        en: "In the left wing God presents the newly created Eve to Adam, as if officiating at a wedding. Look closer, though: animals are already preying on one another, and creatures lurk in the pool beneath {{1|the Fountain of Life}}, hinting that evil is already present.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "短暫的歡愉", en: "Fleeting pleasures" },
      body: {
        zh: "中幅的男女與巨大的草莓、櫻桃和雀鳥嬉戲。在當時的文化中，這些水果多與肉慾和轉瞬即逝的享樂相連：草莓美味卻很快腐爛，正如塵世的歡愉。",
        en: "In the centre, men and women frolic with giant strawberries, cherries and birds. In the culture of the time such fruit were linked with lust and short-lived pleasure: the strawberry is delicious but soon rots, like earthly joys.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "音樂地獄", en: "Musical Hell" },
      body: {
        zh: "右翼中，樂器變成刑具：罪人被釘在豎琴上、困在魯特琴下。這可能是對放縱娛樂的懲罰。旁邊{{5|鳥頭怪物}}坐在高椅上吞食罪人，再把他們排泄到下方的深坑。",
        en: "In the right wing, musical instruments become instruments of torture: sinners are strung on a harp and pinned beneath a lute, perhaps punishment for idle revelry. Nearby, {{5|a bird-headed monster}} on a high chair devours sinners and excretes them into a pit below.",
      },
      hotspot: 5,
    },
    {
      title: { zh: "樹人", en: "The Tree Man" },
      body: {
        zh: "地獄中央的{{4|樹人}}身體是破裂的蛋殼，雙腿是枯樹幹，頭上頂着圓盤，回頭望向觀者。不少學者認為這張憂鬱的臉正是波希的自畫像。",
        en: "At the heart of Hell stands {{4|the Tree Man}}, his body a broken eggshell, his legs dead tree trunks, a disc on his head, looking back at us. Many scholars think the melancholy face is Bosch's self-portrait.",
      },
      hotspot: 4,
    },
  ],
  anecdotes: [
    {
      zh: "地獄中有一名罪人的臀部上畫着樂譜。2014 年，一名美國學生把它轉譜演奏，網上稱之為「五百年前的屁股之歌」，引起哄動。",
      en: "In Hell a sinner has a line of music written on his buttocks. In 2014 an American student transcribed and performed it; the internet dubbed it “the 500-year-old butt song”.",
    },
    {
      zh: "超現實主義畫家達利極其推崇波希，視他為前輩；兩人的作品都充滿夢境般的怪誕意象。",
      en: "The Surrealist Salvador Dalí revered Bosch as a forerunner; both filled their work with dreamlike, grotesque imagery.",
    },
    {
      zh: "普拉多博物館把三聯畫放在獨立展櫃中，讓觀眾可以繞到背後，欣賞外側的創世畫面。",
      en: "The Prado displays the triptych free-standing so visitors can walk behind it and see the Creation scene on the outer wings.",
    },
  ],
  legacy: [
    {
      zh: "《人間樂園》是西方藝術中最早的「幻想畫」之一。它影響了老彼得·布勒哲爾的群像畫，四百年後更被超現實主義者奉為先驅。",
      en: "The Garden of Earthly Delights is one of the earliest great works of fantastic art in the West. It shaped Pieter Bruegel the Elder's crowded panoramas and, four centuries later, was hailed by the Surrealists as a precursor.",
    },
    {
      zh: "今天，它的怪物與奇異建築出現在唱片封面、電影、電子遊戲與時裝設計中，仍然是想像力的無盡寶庫。",
      en: "Today its monsters and strange structures appear on album covers and in films, video games and fashion, an inexhaustible source of imagination.",
    },
  ],
  hotspots: [
    { x: 0.13, y: 0.78, title: { zh: "上帝、亞當與夏娃", en: "God, Adam and Eve" }, body: { zh: "上帝牽着夏娃的手，把她介紹給剛醒來的亞當。", en: "God takes Eve by the hand and presents her to the newly awakened Adam." } },
    { x: 0.13, y: 0.32, title: { zh: "生命之泉", en: "The Fountain of Life" }, body: { zh: "粉紅色的尖塔噴泉矗立在伊甸園中央，基部的圓孔中藏着一隻貓頭鷹。", en: "A pink, spire-like fountain rises in the centre of Eden; an owl peers from a hole at its base." } },
    { x: 0.46, y: 0.43, title: { zh: "中央水池", en: "The central pool" }, body: { zh: "池中沐浴的女子被騎着各種動物的男子圍繞轉圈，象徵慾望的循環。", en: "Women bathe in the pool while men riding all kinds of animals circle around them, a carousel of desire." } },
    { x: 0.33, y: 0.82, title: { zh: "巨大果實", en: "Giant fruits" }, body: { zh: "人們抱着巨大的草莓、櫻桃，或躲在果殼中，象徵短暫的肉體享樂。", en: "People embrace giant strawberries and cherries or hide in fruit husks, emblems of fleeting sensual pleasure." } },
    { x: 0.85, y: 0.4, title: { zh: "樹人", en: "The Tree Man" }, body: { zh: "身軀如破蛋殼、雙腿如枯樹的怪人，可能是畫家的自畫像。", en: "A figure with a body like a broken egg and legs like dead trees, possibly the artist's self-portrait." } },
    { x: 0.93, y: 0.7, title: { zh: "鳥頭怪物", en: "The bird-headed monster" }, body: { zh: "地獄之王坐在便椅上吞食罪人，頭戴大鍋。", en: "The Prince of Hell sits on a commode devouring sinners, a cauldron on his head." } },
  ],
  related: ["hunters-in-the-snow", "the-nightmare", "saturn-devouring-his-son"],
};

export default artwork;

import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-swing",
  title: { zh: "鞦韆", en: "The Swing" },
  artist: "fragonard",
  year: 1767,
  date: { zh: "約 1767 年", en: "c. 1767" },
  period: "rococo",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 81, w: 64.2 },
  museum: "wallace-collection",
  image: "Fragonard, The Swing.jpg",
  subjects: ["everyday", "landscape"],
  summary: {
    zh: "粉紅色裙擺的少女在林中盪鞦韆，一隻繡鞋飛脫而出；藏在花叢中的情人仰望着她，後方的老人渾然不覺地拉着繩子。這幅充滿挑逗意味的小畫，是洛可可風格最具代表性的作品。",
    en: "A young woman in a froth of pink skirts swings through a woodland glade, kicking off a dainty slipper; her lover, hidden in the bushes, gazes up at her while an older man, oblivious, works the ropes behind. This playful, provocative picture is the quintessential Rococo painting.",
  },
  background: [
    {
      zh: "根據同代劇作家科勒的記載，一位宮廷紳士請畫家多揚繪畫這幅畫，要求畫出他的情婦坐在由主教推動的鞦韆上，而他自己則在下方「欣賞她的美腿」。多揚認為題材不雅而拒絕，並推薦了福拉哥納爾。",
      en: "According to the dramatist Charles Collé, a courtier asked the painter Gabriel-François Doyen to paint his mistress on a swing pushed by a bishop, with himself placed below where he could admire her legs. Doyen found the subject improper, declined, and recommended Fragonard.",
    },
    {
      zh: "福拉哥納爾接受了委託，但把推鞦韆的主教改成一位年長的男子，可能是少女的丈夫。這樣一來，畫面由對教會的冒犯，變成一齣典型的偷情喜劇。",
      en: "Fragonard accepted but replaced the bishop with an older man, perhaps the woman's husband. The picture thus changed from an affront to the Church into a classic comedy of adultery.",
    },
    {
      zh: "十九世紀，英國收藏家華萊士家族購入此畫，今天它仍掛在倫敦華萊士典藏館，與其他法國洛可可藝術品一同展出。",
      en: "In the nineteenth century the Wallace family, English collectors, acquired the painting; it still hangs in the Wallace Collection in London among other masterpieces of French Rococo art.",
    },
  ],
  technique: [
    {
      zh: "福拉哥納爾的筆觸輕快流暢，{{0|少女的裙子}}以層層粉紅色堆疊，在陽光下閃爍如花瓣。畫面周圍是深綠的樹林，令粉紅色更加耀眼奪目。",
      en: "Fragonard's brushwork is quick and fluid. {{0|The woman's dress}} is built of layer upon layer of pink that flickers like petals in the sunlight, and the dark green woods around her make it glow all the more.",
    },
    {
      zh: "構圖以一條斜線為主軸：由左下角的{{2|情人}}、經過少女，延伸至右下角的{{3|老人}}，鞦韆的繩索則令整個畫面彷彿在擺動。",
      en: "The composition turns on a diagonal from {{2|the lover}} at lower left, through the woman, to {{3|the older man}} at lower right, while the ropes of the swing make the whole picture seem to sway.",
    },
    {
      zh: "光線如舞台聚光燈一樣集中在少女身上，其餘部分籠罩在朦朧的綠色陰影中，營造出隱秘花園的氣氛。",
      en: "Light falls on the woman like a stage spotlight while the rest dissolves into hazy green shade, creating the atmosphere of a secret garden.",
    },
  ],
  symbolism: [
    {
      title: { zh: "飛脫的繡鞋", en: "The flying slipper" },
      body: {
        zh: "少女把{{1|粉紅色的繡鞋}}踢向空中，在十八世紀的法國，失落的鞋子暗示失去貞潔，是大膽的情色暗示。",
        en: "The woman kicks {{1|her pink slipper}} into the air; in eighteenth-century France a lost shoe hinted at lost innocence, a daring erotic allusion.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "噓聲的邱比特", en: "The hushing Cupid" },
      body: {
        zh: "左方的{{4|邱比特雕像}}豎起手指放在唇邊，示意保守秘密，暗示這是一段不可告人的戀情。雕像模仿自雕塑家法爾科內的作品。",
        en: "On the left, {{4|a statue of Cupid}} holds a finger to his lips, urging secrecy about a clandestine affair. It is modelled on a sculpture by Étienne-Maurice Falconet.",
      },
      hotspot: 4,
    },
    {
      title: { zh: "擔憂的小天使與吠叫的狗", en: "Worried putti and a barking dog" },
      body: {
        zh: "鞦韆下方的{{5|小天使雕像}}神情擔憂地望着少女，右下角的小狗則向情人吠叫。狗通常象徵忠誠，這裏卻成了諷刺：忠誠已被拋諸腦後。",
        en: "Below the swing, {{5|a group of putti}} look up anxiously, while a small dog at lower right barks. Dogs usually symbolise fidelity; here the symbol is ironic, since fidelity has been abandoned.",
      },
      hotspot: 5,
    },
    {
      title: { zh: "脫下的帽子", en: "The doffed hat" },
      body: {
        zh: "情人手中舉着帽子，伸向少女的方向。帽子在當時的畫中亦帶有性暗示。",
        en: "The lover holds out his hat towards the woman; in paintings of the time hats also carried sexual connotations.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "這幅畫在二十一世紀初經過修復，清除了發黃的凡立水，重現了鮮豔的粉紅與翠綠。",
      en: "A restoration in the early twenty-first century removed yellowed varnish and revealed the brilliant pinks and greens once more.",
    },
    {
      zh: "畫作的原名是《鞦韆的快樂機會》，比今天的簡稱更直白地點出了畫中的調情意味。",
      en: "Its full French title is Les Hasards heureux de l'escarpolette (The Happy Accidents of the Swing), which spells out the flirtation more openly.",
    },
    {
      zh: "迪士尼動畫《魔髮奇緣》中，女主角樂佩的鞦韆場景，據說正是以這幅畫為靈感。",
      en: "The animators of Disney's Tangled are said to have drawn on this painting for Rapunzel's swinging scenes.",
    },
  ],
  legacy: [
    {
      zh: "《鞦韆》濃縮了洛可可藝術的一切特色：輕快的色彩、閒逸的題材、曖昧的情慾與華麗的裝飾。正因如此，它在法國大革命後成為舊制度奢靡生活的象徵，福拉哥納爾的聲譽亦隨之一落千丈。",
      en: "The Swing distils everything about Rococo art: light colour, leisurely subjects, ambiguous eroticism and ornate decoration. For that very reason, after the Revolution it became a symbol of the decadence of the old regime, and Fragonard's reputation collapsed.",
    },
    {
      zh: "二十世紀起，它被重新欣賞，成為流行文化中最常被引用的洛可可形象之一，英國藝術家修尼巴爾更以真人大小的雕塑重現了這個場景。",
      en: "Since the twentieth century it has been rediscovered and is now one of the most quoted Rococo images in popular culture; the British artist Yinka Shonibare restaged the scene as a life-size sculpture.",
    },
  ],
  hotspots: [
    { x: 0.53, y: 0.6, title: { zh: "盪鞦韆的少女", en: "The woman on the swing" }, body: { zh: "身穿粉紅色裙子的少女，頭戴草帽，笑着盪向高處。", en: "In a pink dress and straw hat, the woman laughs as she swings high." } },
    { x: 0.23, y: 0.54, title: { zh: "飛脫的繡鞋", en: "The flying slipper" }, body: { zh: "一隻粉紅色的繡鞋被踢向空中，劃過畫面。", en: "A pink slipper flies through the air across the picture." } },
    { x: 0.16, y: 0.83, title: { zh: "藏身花叢的情人", en: "The hidden lover" }, body: { zh: "年輕男子半躺在玫瑰叢中，伸手仰望少女。", en: "The young man reclines among the roses, reaching up and gazing at her." } },
    { x: 0.8, y: 0.77, title: { zh: "推鞦韆的老人", en: "The older man" }, body: { zh: "躲在陰影中的年長男子拉着繩子，完全不知道發生了甚麼。", en: "In the shadows, the older man pulls the ropes, unaware of what is going on." } },
    { x: 0.07, y: 0.53, title: { zh: "邱比特像", en: "Statue of Cupid" }, body: { zh: "豎指於唇的邱比特雕像，示意這是一個秘密。", en: "The statue of Cupid holds a finger to his lips: this is a secret." } },
    { x: 0.63, y: 0.8, title: { zh: "小天使雕像", en: "The putti" }, body: { zh: "騎着海豚的小天使抬頭望向少女，神情擔憂。", en: "Putti on a dolphin look up at the woman with worried expressions." } },
  ],
  related: ["pilgrimage-to-cythera", "madame-de-pompadour", "bal-du-moulin-de-la-galette"],
};

export default artwork;

import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-scream",
  title: { zh: "吶喊", en: "The Scream" },
  artist: "munch",
  year: 1893,
  period: "modern",
  medium: { zh: "紙板上的蛋彩、油彩及蠟筆", en: "Tempera, oil and crayon on cardboard" },
  dimensions: { h: 91, w: 73.5 },
  museum: "national-museum-norway",
  image: "Edvard Munch, 1893, The Scream, oil, tempera and pastel on cardboard, 91 x 73 cm, National Gallery of Norway.jpg",
  subjects: ["landscape", "portrait"],
  summary: {
    zh: "血紅的天空下，一個骷髏般的人影在橋上雙手捂耳，張口尖叫，天地彷彿隨之扭曲。孟克把內心的焦慮直接化為形象，這幅畫成為現代人精神不安的象徵，也是世上最著名的畫作之一。",
    en: "Under a blood-red sky, a skull-like figure on a bridge clutches its head and screams, and the whole world seems to warp around it. Munch turned inner anxiety directly into an image; the painting has become a symbol of modern angst and one of the most famous pictures in the world.",
  },
  background: [
    {
      zh: "孟克在日記中記述了這幅畫的靈感：「我和兩個朋友沿着路散步，太陽正在下山，天空突然變成血紅色……我站在那裏，因焦慮而顫抖，我感到一聲無盡的吶喊穿過大自然。」",
      en: "Munch described the inspiration in his diary: “I was walking along the road with two friends, the sun was setting, suddenly the sky turned blood red... I stood there trembling with anxiety, and I sensed an infinite scream passing through nature.”",
    },
    {
      zh: "畫中的地點是奧斯陸附近俯瞰峽灣的埃克貝里山。孟克以同一題材創作了多個版本：兩幅油畫、兩幅粉彩畫，以及一系列石版畫。本畫是 1893 年的第一幅繪畫版本，藏挪威國家博物館。",
      en: "The setting is the Ekeberg hill overlooking the fjord near Oslo. Munch made several versions: two paintings, two pastels and a series of lithographs. This is the first painted version of 1893, in the National Museum of Norway.",
    },
    {
      zh: "這幅畫屬於孟克的「生命的飾帶」系列，該系列探討愛情、焦慮、嫉妒與死亡等人生主題。",
      en: "It belongs to Munch's “Frieze of Life”, a cycle exploring love, anxiety, jealousy and death.",
    },
  ],
  technique: [
    {
      zh: "孟克以波浪般扭動的線條描繪{{2|天空}}與{{3|峽灣}}，只有{{5|橋的欄杆}}是一道筆直的斜線，衝向畫面左下方。曲線與直線的衝突，營造出強烈的不安與眩暈感。",
      en: "Munch painted {{2|the sky}} and {{3|the fjord}} in writhing, wave-like lines; only {{5|the bridge railing}} is a straight diagonal plunging to the lower left. The clash of curves and straight lines creates intense unease and vertigo.",
    },
    {
      zh: "{{0|人物}}被簡化為一個骷髏般的形象，沒有性別、沒有年齡，雙手捂耳，嘴巴張成橢圓形。它的身體與背景的曲線融為一體，彷彿被焦慮吞噬。",
      en: "{{0|The figure}} is reduced to a skull-like form without sex or age, hands over its ears, mouth an open oval. Its body merges with the swirling background, as if consumed by anxiety.",
    },
    {
      zh: "孟克在紙板上混合使用蛋彩、油彩與蠟筆，部分地方露出紙板的底色，令畫面帶有粗糙、急速的質感。",
      en: "Munch mixed tempera, oil and crayon on cardboard, leaving the board visible in places, which gives the surface a raw, hurried quality.",
    },
  ],
  symbolism: [
    {
      title: { zh: "存在的焦慮", en: "Existential anxiety" },
      body: {
        zh: "人物並非自己在尖叫，而是聽到「穿過大自然的吶喊」而捂住雙耳。這表現的是人面對世界時無法言喻的恐懼與孤獨，常被視為現代人存在焦慮的寫照。",
        en: "The figure is not itself screaming but covering its ears against “an infinite scream passing through nature”. It expresses an unspeakable fear and loneliness before the world, often seen as an image of modern existential anxiety.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "漠然的旁人", en: "The indifferent companions" },
      body: {
        zh: "身後的{{4|兩個朋友}}若無其事地繼續前行，對主角的恐懼毫無察覺，突顯了個人在痛苦中的孤立。",
        en: "{{4|The two friends}} behind continue walking, oblivious to the protagonist's terror, emphasising the isolation of the individual in suffering.",
      },
      hotspot: 4,
    },
    {
      title: { zh: "血紅的天空", en: "The blood-red sky" },
      body: {
        zh: "有科學家推測，紅色的天空可能與 1883 年喀拉喀托火山爆發後的異常晚霞，或挪威冬季罕見的珍珠雲有關。但更多人認為，這是孟克內心感受的投射。",
        en: "Some scientists suggest the red sky may reflect the vivid sunsets after the 1883 eruption of Krakatoa, or rare nacreous clouds over Norway. Most, however, see it as a projection of Munch's inner state.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "畫面左上角的天空中，有一行幾乎看不見的鉛筆字：「只有瘋子才畫得出來！」2021 年，挪威國家博物館經筆跡鑑定，確認這是孟克本人所寫。",
      en: "In the sky at upper left is a barely visible pencil inscription: “Could only have been painted by a madman!” In 2021 the National Museum of Norway confirmed through handwriting analysis that Munch wrote it himself.",
    },
    {
      zh: "這幅畫曾兩度被盜：1994 年挪威冬季奧運開幕當天，本畫在國家美術館被盜，數月後尋回；2004 年，孟克博物館的另一版本被持槍匪徒搶走，兩年後才尋回。",
      en: "The Scream has been stolen twice: this version was taken from the National Gallery in Oslo on the opening day of the 1994 Winter Olympics and recovered months later; in 2004 armed robbers took another version from the Munch Museum, recovered two years later.",
    },
    {
      zh: "2012 年，一幅 1895 年的粉彩版本以約一億二千萬美元拍出，當時是拍賣史上最昂貴的藝術品。手機上的「驚恐」表情符號，亦被認為是受這幅畫啟發。",
      en: "In 2012 a pastel version of 1895 sold for about $120 million, then the highest price ever paid at auction for a work of art. The “face screaming in fear” emoji is widely thought to be inspired by it.",
    },
  ],
  legacy: [
    {
      zh: "《吶喊》是[[expressionism|表現主義]]的先驅之作，證明繪畫可以直接表達內心而非模仿外在世界。它影響了德國表現主義畫家、培根，以至恐怖電影的視覺語言，電影《驚聲尖叫》的面具亦源於此畫。",
      en: "The Scream is a forerunner of [[expressionism]], proving that painting could express inner experience rather than imitate the outer world. It influenced the German Expressionists, Francis Bacon and the visual language of horror films; the mask in the film Scream derives from it.",
    },
  ],
  hotspots: [
    { x: 0.5, y: 0.63, title: { zh: "尖叫的人", en: "The screaming figure" }, body: { zh: "骷髏般的人影雙手捂耳，嘴巴張成橢圓。", en: "The skull-like figure clutches its ears, mouth an open oval." } },
    { x: 0.45, y: 0.58, title: { zh: "捂耳的雙手", en: "Hands over the ears" }, body: { zh: "人物以雙手捂住耳朵，試圖擋住那穿過大自然的吶喊。", en: "The figure presses its hands to its ears against the scream passing through nature." } },
    { x: 0.4, y: 0.15, title: { zh: "血紅的天空", en: "The blood-red sky" }, body: { zh: "紅、橙、黃交織的天空，以波浪般的線條描繪。", en: "The sky swirls in waves of red, orange and yellow." } },
    { x: 0.5, y: 0.4, title: { zh: "峽灣", en: "The fjord" }, body: { zh: "深藍色的峽灣以扭動的曲線表現。", en: "The deep blue fjord is painted in writhing curves." } },
    { x: 0.08, y: 0.45, title: { zh: "兩個朋友", en: "The two friends" }, body: { zh: "身後的兩個人影若無其事地向前走。", en: "Two figures behind walk on, unconcerned." } },
    { x: 0.25, y: 0.62, title: { zh: "欄杆", en: "The railing" }, body: { zh: "筆直的欄杆衝向畫面左下方，與曲線形成衝突。", en: "The straight railing plunges to the lower left, clashing with the curves." } },
    { x: 0.1, y: 0.97, title: { zh: "簽名", en: "The signature" }, body: { zh: "左下角的簽名「E. Munch 1893」。", en: "The signature “E. Munch 1893” at lower left." } },
  ],
  related: ["the-starry-night", "saturn-devouring-his-son", "the-nightmare"],
};

export default artwork;

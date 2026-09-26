import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "impression-sunrise",
  title: { zh: "印象·日出", en: "Impression, Sunrise" },
  artist: "monet",
  year: 1872,
  period: "impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 48, w: 63 },
  museum: "marmottan",
  image: "Monet - Impression, Sunrise.jpg",
  subjects: ["sea", "landscape", "city"],
  summary: {
    zh: "清晨的勒阿弗爾港籠罩在藍灰色的霧氣中，一輪橙紅的太陽剛剛升起，倒影在水面上閃爍。這幅隨手畫成的小畫，意外地為一整個藝術運動命名：印象派。",
    en: "The port of Le Havre lies wrapped in blue-grey morning mist; an orange sun has just risen, its reflection flickering on the water. This quickly painted little canvas unexpectedly gave its name to an entire movement: Impressionism.",
  },
  background: [
    {
      zh: "勒阿弗爾是莫內成長的地方，位於塞納河出海口，是繁忙的工業港口。莫內從港口旅館的窗戶望出去，以極快的速度畫下這幅日出。天文學家後來根據太陽位置與潮汐推算，認為畫作可能繪於 1872 年 11 月的一個早晨。",
      en: "Le Havre, where Monet grew up, is a busy industrial port at the mouth of the Seine. Monet painted this sunrise at great speed from a hotel window overlooking the harbour. An astronomer later used the sun's position and the tides to suggest it was painted on a November morning in 1872.",
    },
    {
      zh: "1874 年，一群屢遭官方沙龍拒絕的畫家在攝影師納達爾的舊工作室自辦展覽。莫內為這幅畫起名時隨口說了「印象」一詞。",
      en: "In 1874 a group of painters repeatedly rejected by the official Salon held their own exhibition in the former studio of the photographer Nadar. Asked for a title, Monet casually called this picture an “impression”.",
    },
    {
      zh: "評論家勒魯瓦在諷刺雜誌上撰文，借畫名嘲笑參展者為「印象派」，說「剛開始印花的牆紙也比這幅海景完整」。畫家們卻欣然接受了這個名稱。",
      en: "The critic Louis Leroy mocked the exhibitors as “Impressionists” in a satirical magazine, writing that wallpaper in its embryonic state was more finished than this seascape. The painters happily adopted the name.",
    },
  ],
  technique: [
    {
      zh: "莫內以稀薄的顏料和快速、分離的筆觸作畫，許多地方甚至露出底色。{{2|小船}}、{{4|起重機}}與煙囪只是幾筆模糊的剪影，他追求的不是物件的細節，而是某一刻的光線與氣氛。",
      en: "Monet used thin paint and quick, separate strokes, leaving the ground showing in places. {{2|The boats}}, {{4|cranes}} and chimneys are mere blurred silhouettes; he was after not detail but the light and atmosphere of a single moment.",
    },
    {
      zh: "橙色的{{0|太陽}}與藍灰色的霧氣是[[complementary-colours|互補色]]，令太陽顯得格外醒目。有趣的是，神經科學家指出，太陽與周圍天空的亮度幾乎相同；若把畫作轉為黑白，太陽幾乎會消失。正因如此，它看起來彷彿在閃爍。",
      en: "The orange {{0|sun}} and the blue-grey mist are [[complementary-colours]], making the sun leap out. Intriguingly, neuroscientists note that the sun has almost the same luminance as the surrounding sky; in a black-and-white version it nearly disappears. That is why it seems to shimmer.",
    },
    {
      zh: "{{1|水面上的倒影}}只以幾道橙色短筆觸表現，卻令人感到波光粼粼。這種以[[broken-colour|分色筆觸]]捕捉光影的做法，成為印象派的標誌。",
      en: "{{1|The reflection}} on the water is just a few short strokes of orange, yet it convincingly ripples. This use of [[broken-colour]] to capture light became the hallmark of Impressionism.",
    },
  ],
  symbolism: [
    {
      title: { zh: "新時代的曙光", en: "The dawn of a new age" },
      body: {
        zh: "畫中的港口充滿現代工業的痕跡：起重機、蒸汽船與煙囪。日出既描繪自然的一刻，也可以理解為現代社會與新藝術的曙光。",
        en: "The harbour is full of signs of modern industry: cranes, steamships and smokestacks. The sunrise depicts a natural moment but can also be read as the dawn of modern society and of a new art.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "印象而非描繪", en: "Impression, not description" },
      body: {
        zh: "莫內不打算描繪港口的全貌，而是記錄自己眼睛在那一刻感受到的「印象」。這個想法挑戰了學院派對「完成度」的要求，重新定義了繪畫的目的。",
        en: "Monet did not try to describe the harbour but to record the “impression” his eye received at that instant. The idea challenged the academic demand for finish and redefined the purpose of painting.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "1985 年，這幅畫在瑪摩丹美術館被持槍匪徒搶走，五年後才在法國科西嘉島尋回。",
      en: "In 1985 armed robbers stole the painting from the Musée Marmottan; it was recovered five years later in Corsica.",
    },
    {
      zh: "{{5|左下角}}的簽名寫着「Claude Monet 72」，但有學者認為畫作可能在 1873 年完成，簽名是後來補上的。",
      en: "The signature at {{5|lower left}} reads “Claude Monet 72”, though some scholars think the painting was finished in 1873 and signed later.",
    },
  ],
  legacy: [
    {
      zh: "《印象·日出》為印象派命名，也為現代藝術開啟了大門。它證明繪畫可以捕捉瞬間的感覺，而不必追求精確的細節，這個觀念直接影響了後印象派、野獸派以至抽象藝術。",
      en: "Impression, Sunrise named Impressionism and opened the door to modern art. It showed that painting could capture a fleeting sensation rather than precise detail, an idea that led directly to Post-Impressionism, Fauvism and abstraction.",
    },
  ],
  hotspots: [
    { x: 0.6, y: 0.3, title: { zh: "太陽", en: "The sun" }, body: { zh: "橙紅色的太陽只是一個簡單的圓點，卻是全畫的焦點。", en: "The orange-red sun is a simple disc, yet it is the focus of the whole picture." } },
    { x: 0.61, y: 0.62, title: { zh: "水中倒影", en: "The reflection" }, body: { zh: "數道橙色短筆觸，表現陽光在水面上閃爍。", en: "A few short orange strokes make sunlight glitter on the water." } },
    { x: 0.47, y: 0.72, title: { zh: "划艇", en: "The rowing boat" }, body: { zh: "深色的小船上站着一個划船的人影。", en: "A dark boat with a rower standing in it." } },
    { x: 0.29, y: 0.62, title: { zh: "另一艘小船", en: "Another boat" }, body: { zh: "較遠的小船在霧中更加模糊，營造深度。", en: "A more distant boat, hazier in the mist, creates depth." } },
    { x: 0.25, y: 0.25, title: { zh: "桅杆與起重機", en: "Masts and cranes" }, body: { zh: "背景中隱約可見港口的桅杆、起重機與煙囪。", en: "Masts, cranes and chimneys of the port loom faintly in the background." } },
    { x: 0.12, y: 0.94, title: { zh: "簽名", en: "The signature" }, body: { zh: "「Claude Monet 72」。", en: "“Claude Monet 72”." } },
  ],
  related: ["water-lilies", "the-fighting-temeraire", "woman-with-a-parasol"],
};

export default artwork;

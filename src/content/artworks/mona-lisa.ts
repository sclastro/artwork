import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "mona-lisa",
  title: { zh: "蒙娜麗莎", en: "Mona Lisa" },
  artist: "leonardo",
  year: 1503,
  date: { zh: "約 1503–1519 年", en: "c. 1503–19" },
  period: "renaissance",
  medium: { zh: "白楊木板油畫", en: "Oil on poplar panel" },
  dimensions: { h: 77, w: 53 },
  museum: "louvre",
  image: "Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg",
  subjects: ["portrait", "landscape"],
  summary: {
    zh: "一位佛羅倫斯商人之妻，雙手交疊，嘴角似笑非笑。達文西花了十多年反覆修改這幅小小的肖像，最終把它帶到法國，至死沒有交給委託人。它是世上最著名、參觀人數最多的畫作。",
    en: "A Florentine merchant's wife sits with folded hands and a smile that seems to come and go. Leonardo reworked this small portrait for more than a decade, took it to France, and never delivered it. It is the most famous and most visited painting in the world.",
  },
  background: [
    {
      zh: "畫中人一般認為是麗莎·蓋拉爾迪尼，佛羅倫斯絲綢商人弗朗切斯科·德爾焦孔多之妻，因此意大利人稱這幅畫為《焦孔達》。2005 年，學者在海德堡大學圖書館一部古籍的頁邊發現 1503 年的筆記，證實達文西當時正在繪畫麗莎的肖像。",
      en: "The sitter is generally identified as Lisa Gherardini, wife of the Florentine silk merchant Francesco del Giocondo, which is why Italians call the painting La Gioconda. In 2005 a scholar found a marginal note of 1503 in a book at Heidelberg University Library confirming that Leonardo was then painting Lisa's portrait.",
    },
    {
      zh: "達文西沒有如期交畫。他帶着這幅肖像輾轉米蘭、羅馬，最後應法王法蘭索瓦一世之邀定居法國，晚年仍不斷修改。他死後，畫作歸法國王室所有，曾掛在楓丹白露宮與凡爾賽宮，法國大革命後移入羅浮宮。",
      en: "Leonardo never handed it over. He carried the portrait with him to Milan and Rome and finally to France, at the invitation of King Francis I, still retouching it in his last years. After his death it entered the French royal collection, hung at Fontainebleau and Versailles, and moved to the Louvre after the Revolution.",
    },
    {
      zh: "它並非一開始就是世上最有名的畫。真正令它家喻戶曉的，是 1911 年的一宗盜竊案：意大利工人佩魯賈把它藏在外衣下偷走，兩年後在佛羅倫斯試圖出售時被捕。全球報章連續報道，令《蒙娜麗莎》成為第一幅國際「名人」畫作。",
      en: "It was not always the world's most famous painting. What made it a household name was the 1911 theft: the Italian workman Vincenzo Peruggia walked out of the Louvre with it under his smock and was caught two years later trying to sell it in Florence. The global press coverage turned the Mona Lisa into the first international celebrity painting.",
    },
  ],
  technique: [
    {
      zh: "這幅畫最著名的技法是[[sfumato|暈塗法]]。達文西以數十層極薄的半透明顏料，令輪廓與明暗如煙霧般漸變，看不到一條清晰的線。{{0|嘴角}}與{{1|眼角}}都籠罩在柔和的陰影中，令表情難以捉摸。",
      en: "Its most celebrated technique is [[sfumato]]. Leonardo applied dozens of extremely thin, translucent layers so that contours and shadows melt like smoke, without a single hard line. The corners of {{0|the mouth}} and {{1|the eyes}} dissolve into soft shadow, which makes the expression so elusive.",
    },
    {
      zh: "人物以穩定的[[pyramidal-composition|三角形構圖]]安坐，{{2|交疊的雙手}}構成金字塔的底部。她身後是一片以[[atmospheric-perspective|空氣透視]]描繪的奇幻山水：愈遠愈藍、愈模糊，營造出無限的深度。",
      en: "The figure sits in a stable [[pyramidal-composition]], with her {{2|folded hands}} as its base. Behind her stretches a fantastical landscape painted with [[atmospheric-perspective]]: the further away, the bluer and hazier it becomes, suggesting infinite depth.",
    },
    {
      zh: "細看背景，左方的{{3|地平線}}明顯比右方低。這種不一致令畫中人彷彿微微移動：視線由左至右掃過時，她的身形似乎隨之升高，表情亦跟着變化。",
      en: "Look closely at the background: the {{3|horizon}} on the left is noticeably lower than on the right. The mismatch makes the figure seem subtly alive; as the eye moves from left to right, she seems to rise and her expression to shift.",
    },
  ],
  symbolism: [
    {
      title: { zh: "神秘的微笑", en: "The enigmatic smile" },
      body: {
        zh: "神經科學家指出，人的周邊視覺對模糊的陰影較敏感。當我們直視她的眼睛時，嘴角的陰影令她看似在笑；直視嘴巴時，笑意反而消失。這種「忽隱忽現」正是暈塗法的效果。",
        en: "Neuroscientists point out that peripheral vision is more sensitive to soft shadows. When we look at her eyes, the shadows at the corners of her mouth make her seem to smile; when we look straight at her mouth, the smile fades. This flickering effect is the work of sfumato.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "人與自然", en: "Humanity and nature" },
      body: {
        zh: "背景中蜿蜒的道路、河流與{{4|橋樑}}，與她衣褶和頭髮的曲線互相呼應。達文西相信人體是宇宙的縮影，血脈猶如河流，畫中人與大地因而融為一體。",
        en: "The winding roads, rivers and {{4|bridge}} in the background echo the curves of her drapery and hair. Leonardo believed the human body was a microcosm of the universe, its veins like rivers, so figure and landscape become one.",
      },
      hotspot: 4,
    },
    {
      title: { zh: "端莊的主婦", en: "A respectable wife" },
      body: {
        zh: "她衣着樸素，沒有珠寶，頭上披着薄紗，右手輕放在左手上，這些都是當時良家婦女肖像的慣例，表示端莊與貞潔。",
        en: "Her dress is plain, without jewellery; a fine veil covers her hair; her right hand rests lightly on her left. All were conventions of portraits of respectable married women, signifying modesty and virtue.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "畫中人沒有眉毛和睫毛。有人認為是當時的時尚，也有人認為是早年清潔時被抹去；工程師科特以高解像度掃描，聲稱找到了原有眉毛的痕跡。",
      en: "She has no eyebrows or eyelashes. Some say this was the fashion of the time; others that they were cleaned away long ago. The engineer Pascal Cotte claimed high-resolution scans revealed traces of an eyebrow.",
    },
    {
      zh: "1911 年失竊期間，畢加索曾被警方盤問，詩人阿波利奈爾更被短暫拘留，兩人後來都獲證清白。",
      en: "During the 1911 theft, Picasso was questioned by police and the poet Guillaume Apollinaire was briefly jailed; both were cleared.",
    },
    {
      zh: "畫作自 2005 年起獨佔羅浮宮國家廳的一面牆，置於防彈玻璃後，曾多次遭人投擲油漆、蛋糕和湯，均未受損。",
      en: "Since 2005 it has had a wall of its own in the Louvre's Salle des États, behind bulletproof glass. It has survived attacks with paint, cake and soup without damage.",
    },
    {
      zh: "它其實比很多人想像的小：只有 77 × 53 厘米，約等於一張大型海報。",
      en: "It is smaller than many people expect: only 77 × 53 cm, about the size of a large poster.",
    },
  ],
  legacy: [
    {
      zh: "《蒙娜麗莎》確立了肖像畫的新範式：半身、四分之三側面、雙手入畫、以風景為背景。拉斐爾看過之後，立即在自己的肖像畫中借用這種構圖，此後數百年的肖像畫家無不受其影響。",
      en: "The Mona Lisa established a new model for portraiture: half-length, three-quarter view, with the hands included and a landscape behind. Raphael adopted the format almost at once, and portrait painters for centuries followed.",
    },
    {
      zh: "二十世紀起，它成為流行文化的符號。杜尚在明信片上為她加上鬍子，沃荷把她大量複製；她的形象被無數廣告與戲仿引用，本身已成為「名畫」這個概念的代名詞。",
      en: "In the twentieth century she became a pop-culture icon. Duchamp drew a moustache on a postcard of her, Warhol multiplied her in silkscreen, and countless adverts and parodies have borrowed her image. She has become shorthand for the very idea of a masterpiece.",
    },
  ],
  hotspots: [
    { x: 0.47, y: 0.31, title: { zh: "微笑", en: "The smile" }, body: { zh: "嘴角沒有清晰的輪廓，陰影柔和地融入臉頰，令笑意隨觀看角度而變化。", en: "The corners of the mouth have no clear outline; soft shadows melt into the cheeks, so the smile changes as you look." } },
    { x: 0.44, y: 0.23, title: { zh: "眼睛與眉宇", en: "Eyes and brows" }, body: { zh: "眼神直視觀者，眼角亦以暈塗法處理。畫中人沒有眉毛，令額頭顯得格外光潔。", en: "Her gaze meets the viewer's, and the corners of the eyes are also softened with sfumato. She has no eyebrows, making the forehead strikingly smooth." } },
    { x: 0.45, y: 0.84, title: { zh: "交疊的雙手", en: "The folded hands" }, body: { zh: "雙手細膩飽滿，右手輕搭在左手腕上，姿態放鬆自然，是肖像畫中罕見的入畫手部。", en: "The hands are soft and full, the right resting lightly on the left wrist in a relaxed, natural pose; hands were rarely included in portraits before this." } },
    { x: 0.12, y: 0.33, title: { zh: "較低的地平線", en: "The lower horizon" }, body: { zh: "左方的湖面與地平線明顯低於右方，兩邊的風景無法連成一線。", en: "The lake and horizon on the left sit noticeably lower than on the right; the two sides of the landscape do not line up." } },
    { x: 0.84, y: 0.45, title: { zh: "橋樑", en: "The bridge" }, body: { zh: "右方遠處有一道拱橋橫跨河上，是畫中罕有的人工建築，學者對其原型地點爭論不休。", en: "In the far right distance an arched bridge spans a river, one of the few man-made structures in the picture; scholars still debate which real bridge inspired it." } },
    { x: 0.44, y: 0.53, title: { zh: "領口刺繡", en: "Embroidered neckline" }, body: { zh: "深色衣裙的領口有精細的繩結圖案，相傳與達文西本人設計的紋樣相似。", en: "The neckline of her dark dress bears a fine interlaced pattern, similar to knot designs Leonardo himself drew." } },
  ],
  related: ["the-last-supper", "girl-with-a-pearl-earring", "arnolfini-portrait"],
};

export default artwork;

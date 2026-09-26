import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-nightmare",
  title: { zh: "夢魘", en: "The Nightmare" },
  artist: "fuseli",
  year: 1781,
  period: "romanticism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 101.6, w: 127 },
  museum: "detroit-institute-of-arts",
  image: "John Henry Fuseli - The Nightmare.JPG",
  subjects: ["interior", "night"],
  summary: {
    zh: "一位白衣女子仰臥床上，一隻醜陋的小魔怪蹲在她胸口，帷幕後探出一個雙眼空洞的馬頭。富塞利把惡夢化為可見的形象，這幅畫在 1782 年展出時轟動倫敦，成為哥德式恐怖的經典。",
    en: "A woman in white lies sprawled across a bed while a grotesque demon squats on her chest, and a horse's head with blank eyes pushes through the curtains. Fuseli made the nightmare visible; shown in 1782, the painting caused a sensation in London and became a classic of Gothic horror.",
  },
  background: [
    {
      zh: "富塞利生於瑞士，後移居倫敦，熱衷於描繪莎士比亞、彌爾頓作品中的超自然場景。《夢魘》在 1782 年的皇家藝術學院展覽中展出，觀眾既震驚又着迷。",
      en: "Born in Switzerland, Fuseli settled in London and loved to paint the supernatural scenes of Shakespeare and Milton. The Nightmare was shown at the Royal Academy in 1782, where visitors were both shocked and fascinated.",
    },
    {
      zh: "畫作隨即被製成版畫廣泛流傳，出版商賺取了豐厚利潤。富塞利其後又畫了多個版本，這個形象亦成為政治漫畫諷刺的常用題材。",
      en: "It was soon engraved and widely sold, earning the publisher a fortune. Fuseli painted several more versions, and the image became a favourite target of political cartoonists.",
    },
    {
      zh: "當時正值理性主導的啟蒙時代，這幅畫卻直探非理性的夢境與潛意識，被視為浪漫主義的先聲。",
      en: "At the height of the rational Enlightenment, the painting plunged into the irrational world of dreams and the unconscious, and is seen as a forerunner of Romanticism.",
    },
  ],
  technique: [
    {
      zh: "女子的白衣與肌膚在黑暗背景中發出強烈的光，身體向後彎曲，頭與手臂垂落床邊，姿態既脆弱又帶有情慾。光線集中在她身上，魔怪與馬頭則半隱於陰影之中。",
      en: "The woman's white gown and skin glow intensely against the dark background; her body arches back, her head and arm hanging over the edge of the bed, a pose both vulnerable and erotic. Light falls on her while the demon and horse half-emerge from the shadows.",
    },
    {
      zh: "構圖簡潔而具戲劇性，如同舞台上的一幕。深紅色的帷幕、金黃的床單與白衣形成強烈的色彩對比。",
      en: "The composition is simple and theatrical, like a scene on stage. The deep red curtains, golden bedclothes and white gown create strong contrasts of colour.",
    },
  ],
  symbolism: [
    {
      title: { zh: "胸口上的魔怪", en: "The demon on her chest" },
      body: {
        zh: "蹲在女子胸口的是民間傳說中的「夢淫妖」，據說會在夜間壓在睡眠者身上，令人窒息並做噩夢。今天醫學上稱之為「睡眠癱瘓」，即俗稱的「鬼壓床」。",
        en: "The creature squatting on her chest is an incubus of folklore, believed to sit on sleepers at night, suffocating them and causing bad dreams. Today medicine calls the experience sleep paralysis.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "夜之「馬」", en: "The night “mare”" },
      body: {
        zh: "英文「nightmare」中的「mare」原指古代傳說中壓人的夜魔，與「母馬」同形。富塞利以探頭的{{1|馬頭}}玩了一個視覺雙關語。",
        en: "The “mare” in “nightmare” originally meant a goblin that sat on sleepers, but it looks like the word for a female horse. Fuseli made a visual pun with {{1|the horse's head}}.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "慾望與恐懼", en: "Desire and fear" },
      body: {
        zh: "畫作同時帶有恐怖與情慾的意味。有學者認為它與富塞利對一位名叫安娜·蘭多爾特的女子的單戀有關：畫布背面有一幅未完成的少女肖像，可能就是她。",
        en: "The painting mixes terror and eroticism. Some scholars link it to Fuseli's unrequited love for a young woman named Anna Landolt; on the back of the canvas is an unfinished portrait of a young woman, possibly her.",
      },
      hotspot: 2,
    },
  ],
  anecdotes: [
    {
      zh: "據說心理學家佛洛伊德在維也納的寓所中掛有這幅畫的版畫，它被視為對潛意識與夢境的早期視覺探索。",
      en: "Sigmund Freud is said to have had an engraving of the painting in his Vienna apartment; it is seen as an early visual exploration of dreams and the unconscious.",
    },
    {
      zh: "瑪麗·雪萊的小說《科學怪人》中，伊莉莎白遇害後橫臥床上的描寫，常被認為受到這幅畫的影響；雪萊的母親與富塞利相識。",
      en: "The scene of Elizabeth lying dead across her bed in Mary Shelley's Frankenstein is often thought to echo the painting; Shelley's mother had known Fuseli.",
    },
  ],
  legacy: [
    {
      zh: "《夢魘》開創了以繪畫表現夢境與潛意識的傳統，對哥雅、布萊克以至二十世紀的超現實主義都有深遠影響。它亦是恐怖電影與哥德式文學中不斷被引用的經典形象。",
      en: "The Nightmare inaugurated the tradition of painting dreams and the unconscious, influencing Goya, Blake and the Surrealists of the twentieth century. It remains a constantly quoted image in horror films and Gothic literature.",
    },
  ],
  hotspots: [
    { x: 0.64, y: 0.22, title: { zh: "夢淫妖", en: "The incubus" }, body: { zh: "醜陋的小魔怪蹲在女子胸口，回頭望向觀者。", en: "The grotesque little demon squats on the woman's chest and looks out at us." } },
    { x: 0.25, y: 0.23, title: { zh: "馬頭", en: "The horse's head" }, body: { zh: "雙眼空洞、發光的馬頭從帷幕後探出。", en: "A horse's head with blank, glowing eyes pushes through the curtains." } },
    { x: 0.8, y: 0.6, title: { zh: "沉睡的女子", en: "The sleeping woman" }, body: { zh: "身穿白衣的女子向後仰臥，頭垂落床邊。", en: "The woman in white lies arched back, her head hanging over the edge of the bed." } },
    { x: 0.08, y: 0.63, title: { zh: "床頭小桌", en: "The bedside table" }, body: { zh: "小桌上放着藥瓶與鏡子，暗示病痛或虛榮。", en: "The small table holds a phial and a mirror, hinting at illness or vanity." } },
    { x: 0.8, y: 0.95, title: { zh: "垂下的手", en: "The hanging hand" }, body: { zh: "女子的手臂無力地垂到地面，彷彿失去知覺。", en: "Her arm hangs limply to the floor, as if she has lost consciousness." } },
  ],
  related: ["saturn-devouring-his-son", "garden-of-earthly-delights", "the-scream"],
};

export default artwork;

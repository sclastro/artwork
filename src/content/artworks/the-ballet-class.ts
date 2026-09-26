import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-ballet-class",
  title: { zh: "舞蹈課", en: "The Ballet Class" },
  artist: "degas",
  year: 1874,
  date: { zh: "1871–1874 年", en: "1871–74" },
  period: "impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 85, w: 75 },
  museum: "orsay",
  image: "Edgar Degas - The Ballet Class - Google Art Project.jpg",
  subjects: ["everyday", "interior"],
  summary: {
    zh: "巴黎歌劇院的排練室裏，年老的芭蕾舞大師拄着手杖指導學生，年輕的舞者或站立、或伸展、或抓癢、或閒談。竇加描繪的不是舞台上的華麗演出，而是幕後真實而疲憊的日常。",
    en: "In a rehearsal room of the Paris Opéra, an elderly ballet master leans on his cane as he instructs his pupils, while young dancers stand, stretch, scratch their backs or chat. Degas painted not the glamour of the stage but the real, weary routine behind the scenes.",
  },
  background: [
    {
      zh: "竇加一生創作了超過一千件以芭蕾舞者為題的作品，包括油畫、粉彩、素描與雕塑。他經常出入巴黎歌劇院，觀察排練與後台的情況。",
      en: "Degas made more than a thousand works on the theme of ballet dancers, in oil, pastel, drawing and sculpture. He frequented the Paris Opéra, observing rehearsals and backstage life.",
    },
    {
      zh: "畫中的舞蹈大師是著名的編舞家儒勒·佩羅。當時歌劇院的舊址在 1873 年被大火燒毀，竇加憑記憶與速寫重構了排練室的場景。",
      en: "The ballet master is the celebrated choreographer Jules Perrot. The old opera house where such classes took place burned down in 1873, and Degas reconstructed the rehearsal room from memory and sketches.",
    },
    {
      zh: "畫作由男中音歌唱家兼收藏家福爾委託，1876 年在第二屆印象派聯展中展出。",
      en: "The painting was commissioned by the baritone and collector Jean-Baptiste Faure and shown at the second Impressionist exhibition in 1876.",
    },
  ],
  technique: [
    {
      zh: "竇加的構圖受到日本浮世繪與攝影影響：視點略高，地板以斜線向右後方延伸，前景的舞者被畫框切去，畫面重心偏離中央，彷彿隨手拍下的一刻。",
      en: "Degas's composition shows the influence of Japanese prints and photography: a slightly raised viewpoint, floorboards receding diagonally to the right, foreground figures cropped by the frame and an off-centre balance, as if caught in a snapshot.",
    },
    {
      zh: "舞裙以輕薄的白色與灰色層層描繪，腰間的{{4|綠色與藍色蝴蝶結}}點綴其間。光線從窗外射入，照在舞者的白紗裙上，營造出柔和的氣氛。",
      en: "The tutus are built up in thin layers of white and grey, accented by {{4|green and blue sashes}}. Light from the windows falls on the white gauze, creating a soft atmosphere.",
    },
  ],
  symbolism: [
    {
      title: { zh: "幕後的真實", en: "Backstage reality" },
      body: {
        zh: "竇加筆下的舞者並非優雅的仙子，而是疲倦的少女：有人{{1|抓背}}，有人整理衣裙，有人發呆。她們多來自貧窮家庭，被稱為「小老鼠」，以跳舞維持生計。",
        en: "Degas's dancers are not ethereal sylphs but tired girls: one {{1|scratches her back}}, another adjusts her dress, another daydreams. Most came from poor families; known as “petits rats”, they danced to earn a living.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "陪伴的母親", en: "The chaperoning mothers" },
      body: {
        zh: "{{5|後方的母親們}}陪伴女兒上課，她們盼望女兒能成為明星，或得到富有贊助人的青睞。這個細節揭示了芭蕾世界背後複雜的社會現實。",
        en: "{{5|The mothers at the back}} accompany their daughters, hoping they will become stars or attract wealthy patrons. The detail hints at the complex social realities behind the ballet world.",
      },
      hotspot: 5,
    },
  ],
  anecdotes: [
    {
      zh: "左下角的鋼琴上有一隻綠色的{{3|灑水壺}}，是用來在地板上灑水，防止舞者滑倒的。",
      en: "The green {{3|watering can}} at lower left was used to sprinkle the floor so the dancers would not slip.",
    },
    {
      zh: "細看前景舞者腳邊，有一隻{{2|小狗}}正在嗅地板，為嚴肅的課堂添上一點趣味。",
      en: "Look closely by the feet of the dancer in the foreground: {{2|a little dog}} is sniffing the floor, a touch of humour in the serious class.",
    },
  ],
  legacy: [
    {
      zh: "竇加的芭蕾舞畫令他成為印象派中最獨特的一員。他對動作的研究與大膽的構圖，影響了羅特列克以及二十世紀的攝影與電影。",
      en: "His ballet pictures made Degas the most distinctive member of the Impressionist circle. His study of movement and bold compositions influenced Toulouse-Lautrec and twentieth-century photography and film.",
    },
  ],
  hotspots: [
    { x: 0.73, y: 0.5, title: { zh: "舞蹈大師佩羅", en: "The ballet master Perrot" }, body: { zh: "白髮的儒勒·佩羅拄着手杖，專注地看着學生。", en: "White-haired Jules Perrot leans on his cane, watching his pupils intently." } },
    { x: 0.18, y: 0.33, title: { zh: "抓背的舞者", en: "The dancer scratching her back" }, body: { zh: "倚在鋼琴上的舞者正伸手抓背，毫不在意儀態。", en: "Leaning on the piano, a dancer reaches back to scratch, unconcerned with poise." } },
    { x: 0.42, y: 0.87, title: { zh: "小狗", en: "The little dog" }, body: { zh: "舞者腳邊的小狗正在嗅地板。", en: "A little dog sniffs the floor by a dancer's feet." } },
    { x: 0.06, y: 0.9, title: { zh: "灑水壺", en: "The watering can" }, body: { zh: "用來灑濕地板、防止滑倒的綠色灑水壺。", en: "A green watering can for dampening the floor to prevent slipping." } },
    { x: 0.32, y: 0.62, title: { zh: "綠色蝴蝶結", en: "The green sash" }, body: { zh: "前景舞者腰間的綠色蝴蝶結，是畫面的色彩焦點。", en: "The green sash of the foreground dancer is a focal point of colour." } },
    { x: 0.94, y: 0.34, title: { zh: "陪伴的母親", en: "The mothers" }, body: { zh: "後方陪伴女兒上課的母親們。", en: "Mothers at the back of the room accompanying their daughters." } },
  ],
  related: ["bal-du-moulin-de-la-galette", "paris-street-rainy-day", "la-grande-odalisque"],
};

export default artwork;

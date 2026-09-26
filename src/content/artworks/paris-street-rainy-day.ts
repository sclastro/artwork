import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "paris-street-rainy-day",
  title: { zh: "巴黎街道，雨天", en: "Paris Street; Rainy Day" },
  artist: "caillebotte",
  year: 1877,
  period: "impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 212.2, w: 276.2 },
  museum: "art-institute-chicago",
  image: "Gustave Caillebotte - Paris Street; Rainy Day - Google Art Project.jpg",
  subjects: ["city", "everyday"],
  summary: {
    zh: "雨中的巴黎新街區，濕漉漉的石板路閃着微光，衣着時髦的市民撐着雨傘各自走過。卡耶博特以近乎攝影的精準構圖，描繪了奧斯曼改造後現代巴黎的疏離與優雅。",
    en: "In a new district of Paris, rain-slicked cobblestones glisten as fashionable citizens pass under their umbrellas. With an almost photographic precision of composition, Caillebotte captured the elegance and detachment of modern Paris after Haussmann's renovation.",
  },
  background: [
    {
      zh: "1850 至 1870 年間，奧斯曼男爵奉拿破崙三世之命大規模改造巴黎，拆除狹窄的中世紀街巷，修建寬闊的林蔭大道與統一風格的公寓樓。畫中是聖拉扎爾火車站附近一個新建的交叉路口，今稱都柏林廣場。",
      en: "Between 1850 and 1870 Baron Haussmann, on the orders of Napoleon III, transformed Paris, replacing narrow medieval streets with broad boulevards and uniform apartment buildings. The painting shows a newly built intersection near the Gare Saint-Lazare, now the Place de Dublin.",
    },
    {
      zh: "卡耶博特出身富裕家庭，就在這一帶長大。畫作在 1877 年第三屆印象派聯展中展出，是展覽中最大的作品之一。",
      en: "Caillebotte came from a wealthy family and grew up in this neighbourhood. The painting was shown at the third Impressionist exhibition in 1877, one of the largest works on view.",
    },
  ],
  technique: [
    {
      zh: "與其他印象派畫家不同，卡耶博特的筆觸細膩平滑，輪廓清晰，更接近學院派的寫實風格。但他的構圖極其現代：{{1|綠色的路燈柱}}把畫面分為左右兩半，前景的人物被畫框切割，猶如一張照片。",
      en: "Unlike other Impressionists, Caillebotte painted with smooth, careful brushwork and crisp contours, closer to academic realism. But his composition is radically modern: {{1|the green lamppost}} splits the canvas in two, and figures in the foreground are cut off by the frame, as in a photograph.",
    },
    {
      zh: "街道以強烈的透視向遠方延伸，{{3|楔形的建築}}指向畫面深處。前景的{{2|石板路}}被雨水打濕，反射着天光，每一塊石頭都清晰可見，愈遠則愈模糊，模仿了人眼與鏡頭的焦點效果。",
      en: "The streets recede in steep perspective, and {{3|the wedge-shaped building}} points deep into the picture. {{2|The cobblestones}} in front, wet with rain, reflect the sky, each stone sharp near us and blurring into the distance, imitating the focus of the eye or a camera lens.",
    },
  ],
  symbolism: [
    {
      title: { zh: "城市的疏離", en: "Urban alienation" },
      body: {
        zh: "街上的行人各自走路，沒有任何交流，連{{0|前景的情侶}}也望向不同方向。畫作捕捉了現代都市生活的特質：人群擁擠，卻彼此疏離。",
        en: "The pedestrians go their own ways without any interaction; even {{0|the couple in front}} look in different directions. The painting captures a defining quality of modern city life: crowded, yet isolated.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "新巴黎的秩序", en: "The order of the new Paris" },
      body: {
        zh: "寬闊的街道、統一的樓房與整潔的行人，展示了奧斯曼改造後巴黎的理性秩序與中產階級的優雅生活。",
        en: "Wide streets, uniform buildings and well-dressed pedestrians display the rational order of Haussmann's Paris and the elegant life of its bourgeoisie.",
      },
      hotspot: 3,
    },
  ],
  anecdotes: [
    {
      zh: "{{4|右方邊緣}}的男子只露出半個身體，彷彿正要走進畫中，與前景的情侶擦肩而過。這種大膽的截斷，受到攝影與日本浮世繪的啟發。",
      en: "At {{4|the right edge}} a man is cut in half, as if about to walk into the picture and brush past the couple. This bold cropping was inspired by photography and Japanese prints.",
    },
    {
      zh: "卡耶博特的作品在他死後長期被忽視，直到二十世紀七十年代才重新受到重視。芝加哥藝術博物館在 1964 年購入此畫，今天它是館中最受歡迎的作品之一。",
      en: "Caillebotte's own paintings were long neglected after his death and only re-evaluated in the 1970s. The Art Institute of Chicago bought this work in 1964, and it is now one of the museum's most popular paintings.",
    },
  ],
  legacy: [
    {
      zh: "《巴黎街道，雨天》是描繪現代都市最具代表性的畫作之一。它的構圖與氣氛影響了後世的街頭攝影與電影，被譽為「現代生活的畫像」。",
      en: "Paris Street; Rainy Day is one of the defining images of the modern city. Its composition and mood influenced later street photography and cinema, and it has been called a portrait of modern life.",
    },
  ],
  hotspots: [
    { x: 0.6, y: 0.48, title: { zh: "撐傘的情侶", en: "The couple under the umbrella" }, body: { zh: "衣着時髦的男女挽手而行，卻望向不同方向。", en: "A fashionable couple walk arm in arm, yet look in different directions." } },
    { x: 0.5, y: 0.3, title: { zh: "綠色路燈柱", en: "The green lamppost" }, body: { zh: "路燈柱把畫面分為左右兩半。", en: "The lamppost divides the picture into two halves." } },
    { x: 0.2, y: 0.8, title: { zh: "濕漉漉的石板路", en: "The wet cobblestones" }, body: { zh: "被雨水打濕的石板反射着天光。", en: "The rain-soaked cobbles reflect the light of the sky." } },
    { x: 0.3, y: 0.25, title: { zh: "楔形建築", en: "The wedge-shaped building" }, body: { zh: "奧斯曼式公寓樓位於兩條街道交匯處，如船頭般指向前方。", en: "A Haussmann apartment block at the fork of two streets points forward like a ship's prow." } },
    { x: 0.92, y: 0.55, title: { zh: "被截斷的男子", en: "The cropped man" }, body: { zh: "右方邊緣只露出半個身體的男子。", en: "A man at the right edge, only half visible." } },
    { x: 0.38, y: 0.55, title: { zh: "過馬路的人", en: "The man crossing" }, body: { zh: "一名男子撐傘橫過廣場，身影孤單。", en: "A lone man crosses the square under his umbrella." } },
  ],
  related: ["rain-steam-and-speed", "a-sunday-on-la-grande-jatte", "bal-du-moulin-de-la-galette"],
};

export default artwork;

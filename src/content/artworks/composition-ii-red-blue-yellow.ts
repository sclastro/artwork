import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "composition-ii-red-blue-yellow",
  title: { zh: "紅黃藍的構成", en: "Composition II in Red, Blue and Yellow" },
  artist: "mondrian",
  year: 1930,
  period: "modern",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 46, w: 46 },
  museum: "kunsthaus-zurich",
  image: "Piet Mondriaan, 1930 - Mondrian Composition II in Red, Blue, and Yellow.jpg",
  subjects: ["abstract"],
  summary: {
    zh: "一個巨大的紅色方塊、一小塊藍色、一角黃色，由粗細不一的黑線分隔在白色的畫面上。蒙德里安把繪畫簡化到只剩直線與三原色，卻創造出一種動態的平衡。這個形象已成為現代設計的代名詞。",
    en: "A large red square, a small block of blue and a corner of yellow, separated by black lines of varying thickness on a white ground. Mondrian reduced painting to straight lines and the three primary colours, yet created a dynamic balance. The image has become a byword for modern design.",
  },
  background: [
    {
      zh: "蒙德里安早年畫荷蘭的風景、樹木與風車。受立體派啟發後，他逐步把樹枝與建築簡化為水平與垂直的線條，最終完全拋棄具象，走向純粹的抽象。",
      en: "Mondrian began by painting Dutch landscapes, trees and windmills. Inspired by Cubism, he gradually reduced branches and buildings to horizontal and vertical lines, and finally abandoned representation altogether for pure abstraction.",
    },
    {
      zh: "1917 年，他與杜斯伯格等人創辦雜誌《風格》，形成「風格派」運動。他提出「[[neo-plasticism|新造形主義]]」，主張藝術只應使用直線、直角、三原色與黑白灰，以表達宇宙的普遍和諧。",
      en: "In 1917 he and Theo van Doesburg founded the magazine De Stijl, launching the movement of the same name. He developed [[neo-plasticism]], arguing that art should use only straight lines, right angles, the three primaries and black, white and grey to express universal harmony.",
    },
    {
      zh: "本畫是他在巴黎時期的作品，是「紅黃藍構成」系列中最著名的一幅，今藏蘇黎世美術館。",
      en: "This work dates from his Paris years and is the most famous of his red, yellow and blue compositions; it is in the Kunsthaus Zürich.",
    },
  ],
  technique: [
    {
      zh: "畫面看似簡單，其實經過精密的計算與反覆調整。巨大的{{0|紅色方塊}}佔據右上方，與左下方的{{1|藍色}}和右下角的{{2|黃色}}形成不對稱的平衡。紅色的重量被細小的藍與黃抵消，畫面既穩定又充滿張力。",
      en: "The picture looks simple but was carefully calculated and repeatedly adjusted. {{0|The large red square}} dominates the upper right, balanced asymmetrically by {{1|the blue}} at lower left and {{2|the yellow}} in the lower right corner. The weight of the red is offset by the small blue and yellow, so the composition is both stable and tense.",
    },
    {
      zh: "{{3|黑線}}的粗細並不一致，有些線條在畫布邊緣之前便停止。蒙德里安以手工繪畫而非尺規印製，細看可以看到筆觸與顏料的層次。",
      en: "{{3|The black lines}} vary in thickness, and some stop short of the edge. Mondrian painted them by hand rather than mechanically; up close one can see brushwork and layers of paint.",
    },
  ],
  symbolism: [
    {
      title: { zh: "普遍的和諧", en: "Universal harmony" },
      body: {
        zh: "蒙德里安深受神智學影響，相信水平線代表陰性、物質與靜止，垂直線代表陽性、精神與活力。兩者交會，象徵宇宙中對立力量的平衡。",
        en: "Influenced by Theosophy, Mondrian believed horizontal lines represented the feminine, material and passive, and verticals the masculine, spiritual and active. Their intersection symbolised the balance of opposing forces in the universe.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "三原色", en: "The primary colours" },
      body: {
        zh: "紅、黃、藍是無法由其他顏色混合而成的三原色。蒙德里安認為它們是最純粹、最基本的色彩，代表現實的本質。",
        en: "Red, yellow and blue are the primaries, which cannot be mixed from other colours. Mondrian considered them the purest, most fundamental colours, representing the essence of reality.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "1965 年，時裝設計師伊夫·聖羅蘭以蒙德里安的畫作為靈感，設計了著名的「蒙德里安裙」，令他的形象走進時尚界。",
      en: "In 1965 the fashion designer Yves Saint Laurent created his famous “Mondrian dress”, bringing the painter's imagery into fashion.",
    },
    {
      zh: "畫作左下角有蒙德里安的縮寫簽名「PM 30」，表示 1930 年所作。",
      en: "At lower left is Mondrian's monogram “PM 30”, indicating 1930.",
    },
  ],
  legacy: [
    {
      zh: "蒙德里安的作品深刻影響了現代建築、平面設計、家具與時裝。包浩斯的設計、國際主義建築以至今天的網頁與品牌設計，都可以看到他簡潔網格與純粹色彩的影子。",
      en: "Mondrian's work profoundly influenced modern architecture, graphic design, furniture and fashion. His clean grids and pure colours can be seen in Bauhaus design, International Style architecture and today's web and brand design.",
    },
  ],
  hotspots: [
    { x: 0.6, y: 0.35, title: { zh: "紅色方塊", en: "The red square" }, body: { zh: "佔據畫面大部分的紅色方塊，是構圖的重心。", en: "The red square filling most of the canvas is the compositional centre of gravity." } },
    { x: 0.12, y: 0.85, title: { zh: "藍色", en: "The blue" }, body: { zh: "左下角的藍色方塊，平衡了紅色的重量。", en: "The blue block at lower left balances the weight of the red." } },
    { x: 0.94, y: 0.93, title: { zh: "黃色", en: "The yellow" }, body: { zh: "右下角一小塊黃色，是畫中最細小卻最明亮的色塊。", en: "A small patch of yellow in the lower right corner, the smallest yet brightest block." } },
    { x: 0.24, y: 0.72, title: { zh: "黑線的交會", en: "Where the black lines meet" }, body: { zh: "水平與垂直的黑線在此交會，粗細並不一致。", en: "Horizontal and vertical black lines intersect here, their widths uneven." } },
    { x: 0.12, y: 0.15, title: { zh: "白色平面", en: "The white planes" }, body: { zh: "白色的區域並非空白，而是與色塊同樣重要的構成元素。", en: "The white areas are not empty but compositional elements as important as the colours." } },
    { x: 0.15, y: 0.96, title: { zh: "簽名", en: "The signature" }, body: { zh: "左下角的縮寫簽名「PM 30」。", en: "The monogram “PM 30” at lower left." } },
  ],
  related: ["composition-vii", "the-kiss", "mont-sainte-victoire"],
};

export default artwork;

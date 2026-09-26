import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "the-starry-night",
  title: { zh: "星夜", en: "The Starry Night" },
  artist: "van-gogh",
  year: 1889,
  date: { zh: "1889 年 6 月", en: "June 1889" },
  period: "post-impressionism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 73.7, w: 92.1 },
  museum: "moma",
  image: "Van Gogh - Starry Night - Google Art Project.jpg",
  subjects: ["landscape", "night"],
  summary: {
    zh: "1889 年夏天，梵高在法國南部聖雷米的療養院裏，憑記憶與想像畫下黎明前的夜空。翻騰的星雲、燃燒般的柏樹與沉睡的村莊，令這幅不足一米寬的畫作成為世上最多人認得的油畫之一。",
    en: "In the summer of 1889, in an asylum at Saint-Rémy in the south of France, Van Gogh painted the sky before dawn from memory and imagination. Its churning nebulae, flame-like cypress and sleeping village have made this canvas, less than a metre wide, one of the most recognised paintings in the world.",
  },
  background: [
    {
      zh: "1888 年 12 月，梵高在亞爾與高更激烈爭吵後精神崩潰，割下自己的左耳。其後數月病情反覆，鎮上居民甚至聯署要求把他送走。1889 年 5 月，他自願入住附近聖雷米的聖保羅修道院療養院，一住便是一年。",
      en: "In December 1888, after a violent quarrel with Gauguin in Arles, Van Gogh suffered a breakdown and cut off his left ear. His condition fluctuated for months, and some townspeople even petitioned to have him removed. In May 1889 he voluntarily admitted himself to the asylum of Saint-Paul-de-Mausole at nearby Saint-Rémy, where he would stay for a year.",
    },
    {
      zh: "療養院給了他兩個房間：一間臥室，一間地下的畫室。臥室的窗戶朝東，鐵枝外是一片麥田，遠處是阿爾皮勒山。梵高在這扇窗前畫了二十多幅不同季節、不同時刻的麥田，《星夜》是其中唯一的夜景。",
      en: "The asylum gave him two rooms: a bedroom and a ground-floor studio. The barred bedroom window faced east over a walled wheat field towards the Alpilles hills. Van Gogh painted that view more than twenty times, in different seasons and at different hours; The Starry Night is the only night scene among them.",
    },
    {
      zh: "他不能在夜間於臥室作畫，因此這幅畫是日間在畫室裏憑記憶完成的。1889 年 6 月初，他寫信給弟弟西奧：「今早日出之前，我從窗口望着田野良久，除了晨星之外甚麼也沒有，那顆星看來非常大。」天文學家其後證實，那段日子的黎明前，金星確實明亮地懸在東方。",
      en: "He was not allowed to paint in his bedroom at night, so the picture was made by day in the studio, from memory. In early June 1889 he wrote to his brother Theo: “This morning I saw the countryside from my window a long time before sunrise, with nothing but the morning star, which looked very big.” Astronomers have since confirmed that Venus was indeed shining brightly in the eastern sky before dawn at that time.",
    },
    {
      zh: "然而畫面並非窗外景色的忠實記錄。從臥室窗口根本看不到村莊，畫中的小鎮與教堂是他的想像；柏樹亦被移近並放大；月亮畫成新月，但當時的月相其實接近滿月。梵高把觀察、記憶與情感揉合在一起，創造出一個內心的夜空。",
      en: "Yet the painting is no faithful record of the view. The village cannot be seen from the bedroom window at all; the town and its church are imagined. The cypress has been moved closer and enlarged, and the moon is shown as a crescent, although at the time it was nearly full. Van Gogh fused observation, memory and feeling into an inner night sky.",
    },
  ],
  technique: [
    {
      zh: "《星夜》幾乎沒有一處平塗。梵高以短而有方向的筆觸，把顏料一筆一筆排列成流動的線條，天空的每一道漩渦都由數十筆平行的色條組成。顏料塗得頗厚，屬於典型的[[impasto|厚塗法]]，在側光下可以看到明顯的凹凸。",
      en: "There is hardly a flat area anywhere in The Starry Night. Van Gogh laid down short, directional strokes one after another, arranging them into flowing lines; every eddy in the sky is made of dozens of parallel ribbons of colour. The paint is thick, a classic [[impasto]], and raking light reveals pronounced ridges.",
    },
    {
      zh: "色彩上，他以[[ultramarine|群青]]與鈷藍構成夜空的主調，再以鉻黃、檸檬黃與白色畫出星月的光暈。藍與黃接近[[complementary-colours|互補色]]，並置時互相映襯，令星光彷彿在振動。暗綠近黑的柏樹與深藍的山巒，則為畫面提供沉穩的重量。",
      en: "For colour, he built the night from [[ultramarine]] and cobalt blue, then painted the halos of stars and moon in chrome yellow, lemon yellow and white. Blue and yellow are near [[complementary-colours]]; side by side they intensify each other, so the starlight seems to vibrate. The near-black green of the cypress and the deep blue hills give the picture a grounding weight.",
    },
    {
      zh: "構圖以水平與垂直的對比為骨架。天空佔去畫面約四分之三，{{1|中央的巨大漩渦}}由左至右橫掃而過；{{6|起伏的山丘}}與村莊的屋頂延續這股水平的節奏。左前方的{{0|柏樹}}與村中的{{4|教堂尖塔}}則是兩道垂直線，把大地與天空連接起來。",
      en: "The composition is built on the contrast of horizontal and vertical. The sky takes up about three-quarters of the canvas, with {{1|the great central swirl}} sweeping from left to right; {{6|the rolling hills}} and village rooftops continue this horizontal rhythm. The {{0|cypress}} in the left foreground and the {{4|church steeple}} are two verticals that tie earth to sky.",
    },
    {
      zh: "梵高又以深色線條勾勒山巒與房屋的輪廓，並以平面化的形狀處理天體光暈，這些手法受到日本浮世繪與他在巴黎接觸的[[cloisonnism|景泰藍主義]]啟發。畫面雖然激動，結構卻相當嚴謹。",
      en: "Van Gogh outlined the hills and houses in dark contours and treated the halos as flattened shapes, devices inspired by Japanese prints and by the [[cloisonnism]] he encountered in Paris. For all its agitation, the picture is carefully structured.",
    },
  ],
  symbolism: [
    {
      title: { zh: "柏樹：生與死之間", en: "The cypress: between life and death" },
      body: {
        zh: "在地中海地區，柏樹常種於墓園，象徵死亡與哀悼。梵高卻形容柏樹「美得像埃及方尖碑」，畫中的柏樹如火焰般向上竄升，直抵星空，可以理解為連接塵世與天國、生命與永恆的橋樑。",
        en: "Around the Mediterranean, cypresses are planted in cemeteries and associated with death and mourning. Van Gogh, though, called them “beautiful as an Egyptian obelisk”. Here the tree rises like a flame into the stars, a bridge between earth and heaven, life and eternity.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "星辰：死後的旅程", en: "The stars: a journey after death" },
      body: {
        zh: "1888 年梵高寫道：「看着星星總令我做夢……正如我們乘火車去塔拉斯孔或盧昂，我們乘死亡去到一顆星。」十一顆碩大的星星，或許寄託了他對死後世界與慰藉的想像。",
        en: "In 1888 Van Gogh wrote: “Looking at the stars always makes me dream… Just as we take the train to get to Tarascon or Rouen, we take death to reach a star.” The eleven enormous stars may carry his hopes of consolation and of a world beyond death.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "教堂尖塔：故鄉的回憶", en: "The steeple: a memory of home" },
      body: {
        zh: "畫中的尖塔瘦長高聳，不像普羅旺斯的教堂，反而更似荷蘭北布拉班特的鄉村教堂。不少學者認為，這是梵高在異鄉病中對故鄉與童年的懷念。",
        en: "The tall, slender spire looks less like a Provençal church than a village church in North Brabant, in the Netherlands. Many scholars read it as Van Gogh's longing, ill and far from home, for his homeland and childhood.",
      },
      hotspot: 4,
    },
    {
      title: { zh: "漩渦：宇宙的能量", en: "The swirl: cosmic energy" },
      body: {
        zh: "天空中翻騰的漩渦既像風，也像星雲，有人認為與當時流行的天文插圖有關。無論來源為何，它表現的是一種超越肉眼所見的能量：宇宙在運轉，而畫家的內心亦同樣激盪。",
        en: "The churning spiral reads as wind and as nebula; some suggest a link with astronomical illustrations popular at the time. Whatever its source, it expresses an energy beyond what the eye can see: the cosmos in motion, and the painter's inner turmoil with it.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "村莊：沉睡的人間", en: "The village: the sleeping world" },
      body: {
        zh: "與天空的狂舞相比，村莊寧靜而細小，窗戶透出溫暖的燈光。人間的安穩與宇宙的浩瀚形成對照，也令觀者感受到個人在天地之間的渺小。",
        en: "Beside the frenzy of the sky, the village is small and still, its windows glowing with warm light. The calm of human life set against the immensity of the cosmos makes the viewer feel their own smallness between earth and sky.",
      },
      hotspot: 5,
    },
  ],
  anecdotes: [
    {
      zh: "梵高本人並不特別滿意這幅畫。他在寫給畫家朋友貝爾納的信中說，自己畫了「太大的星星」，是「又一次挫敗」。西奧收到畫作後亦坦言，覺得哥哥對風格的追求蓋過了真實的感受。",
      en: "Van Gogh himself was not especially pleased with the painting. Writing to his friend the painter Émile Bernard, he said he had let himself paint “stars that are too big”, calling it “a new setback”. When Theo received it, he admitted he felt his brother's search for style had overtaken real feeling.",
    },
    {
      zh: "有物理學家分析畫中漩渦的明暗分佈，發現其變化規律與流體力學中描述湍流的柯爾莫哥洛夫理論驚人地吻合。梵高當然不懂這套數學，卻憑直覺畫出了真實的湍流。",
      en: "Physicists who analysed the distribution of light and dark in the swirls found that it closely matches Kolmogorov's statistical theory of turbulence in fluid dynamics. Van Gogh knew nothing of the mathematics, yet intuitively painted something very like real turbulence.",
    },
    {
      zh: "梵高在世時只賣出極少作品。《星夜》在他死後由家人保存，輾轉數手，1941 年才由紐約現代藝術博物館購入，至今是該館最受歡迎的展品。",
      en: "Van Gogh sold very few works in his lifetime. After his death The Starry Night stayed with his family, then passed through several hands until the Museum of Modern Art in New York acquired it in 1941. It remains the museum's most popular work.",
    },
    {
      zh: "美國歌手唐·麥克林在 1971 年以此畫為靈感，寫成歌曲〈Vincent〉，首句即為「Starry, starry night」，令這幅畫的名字傳遍流行文化。",
      en: "In 1971 the American singer Don McLean wrote the song “Vincent”, inspired by the painting. Its opening line, “Starry, starry night”, carried the picture's name deep into popular culture.",
    },
    {
      zh: "梵高在亞爾時已畫過兩幅星空：《夜間的露天咖啡座》與《隆河上的星夜》。那兩幅都是對景寫生，只有《星夜》是憑想像完成，這亦是它與眾不同之處。",
      en: "In Arles, Van Gogh had already painted two starry skies: Café Terrace at Night and Starry Night Over the Rhône. Both were painted from the motif; The Starry Night alone was made from imagination, which is part of what makes it unique.",
    },
  ],
  legacy: [
    {
      zh: "梵高以扭曲的形體與主觀的色彩表達情感，這種做法直接啟發了二十世紀初的[[expressionism|表現主義]]。德國「橋社」與「藍騎士」的畫家，以至孟克、康丁斯基，都從他的作品中看到了繪畫表達內心的可能。",
      en: "Van Gogh's use of distorted form and subjective colour to convey emotion led directly to early twentieth-century [[expressionism]]. The painters of Die Brücke and the Blue Rider, as well as Munch and Kandinsky, found in his work proof that painting could express the inner life.",
    },
    {
      zh: "今天，《星夜》早已超越美術館的範圍：它出現在電影、電視、音樂、廣告和無數紀念品上，也啟發了以全手繪油畫製作的電影《情謎梵高》，以及遍佈全球的沉浸式投影展覽。它甚至被做成積木模型，成為許多人認識西方藝術的第一幅畫。",
      en: "Today The Starry Night has long outgrown the museum. It appears in films, television, music, advertising and countless souvenirs; it inspired Loving Vincent, a feature film made entirely of hand-painted oil frames, and immersive projection exhibitions around the world. It has even become a brick-built model, and for many people it is the first Western painting they ever get to know.",
    },
    {
      zh: "它的名聲亦成就了「受苦天才」的浪漫神話。然而梵高的書信顯示，他是一位思考縝密、閱讀廣博、對色彩理論有深入研究的畫家。欣賞《星夜》時，不妨把它看作一位清醒而勤奮的藝術家，在困境中對美與希望的追尋。",
      en: "Its fame has also fed the romantic myth of the “suffering genius”. Van Gogh's letters, however, reveal a thoughtful, widely read painter who studied colour theory in depth. When looking at The Starry Night, it is worth seeing it as the work of a lucid, hard-working artist searching for beauty and hope in the midst of hardship.",
    },
  ],
  hotspots: [
    {
      x: 0.22,
      y: 0.56,
      title: { zh: "柏樹", en: "The cypress" },
      body: {
        zh: "暗綠近黑的柏樹如火焰般扭動向上，高度直達畫頂，是畫面最強烈的垂直元素。梵高以深色的長筆觸層層堆疊，形成近乎雕塑的質感。",
        en: "The near-black cypress writhes upward like a flame to the top edge of the canvas, the strongest vertical in the picture. Long, dark strokes are layered to give it an almost sculptural texture.",
      },
    },
    {
      x: 0.44,
      y: 0.33,
      title: { zh: "巨大漩渦", en: "The great swirl" },
      body: {
        zh: "兩股氣流在畫面中央交纏成巨大的漩渦，筆觸以白、淡藍與深藍交替排列，營造旋轉的動感。",
        en: "Two currents meet at the centre in a vast whirl. Alternating strokes of white, pale blue and deep blue create a sense of rotation.",
      },
    },
    {
      x: 0.905,
      y: 0.17,
      title: { zh: "新月", en: "The crescent moon" },
      body: {
        zh: "橙黃色的新月被一圈圈光暈包圍，亮得近乎太陽。當時真實的月相接近滿月，新月造型是梵高有意的選擇。",
        en: "The orange-yellow crescent is ringed with halos, bright as a sun. The real moon at the time was nearly full; the crescent was Van Gogh's deliberate choice.",
      },
    },
    {
      x: 0.355,
      y: 0.53,
      title: { zh: "晨星（金星）", en: "The morning star (Venus)" },
      body: {
        zh: "柏樹右旁最大最白的一顆星，很可能就是梵高信中提到「看來非常大」的晨星，即金星。",
        en: "The largest, whitest star just right of the cypress is probably the morning star Van Gogh described as “very big” in his letter: the planet Venus.",
      },
    },
    {
      x: 0.565,
      y: 0.76,
      title: { zh: "教堂尖塔", en: "The church steeple" },
      body: {
        zh: "瘦長的尖塔穿越山線，是村中唯一高出地平線的建築，其造型令人聯想到梵高荷蘭故鄉的教堂。",
        en: "The slender spire pierces the line of the hills, the only building in the village to rise above the horizon. Its shape recalls the churches of Van Gogh's Dutch homeland.",
      },
    },
    {
      x: 0.72,
      y: 0.88,
      title: { zh: "亮燈的窗戶", en: "Lit windows" },
      body: {
        zh: "小屋的窗戶以一點點黃色表現燈光，與天上的星光遙相呼應，暗示人間的溫暖。",
        en: "Tiny dabs of yellow mark lamplit windows, echoing the stars above and suggesting human warmth below.",
      },
    },
    {
      x: 0.8,
      y: 0.6,
      title: { zh: "阿爾皮勒山", en: "The Alpilles" },
      body: {
        zh: "起伏的山丘以深藍輪廓勾勒，其波浪般的線條延續天空的律動，把畫面的上下兩部分連成一體。",
        en: "The rolling hills are outlined in deep blue; their wave-like contours continue the rhythm of the sky and bind the upper and lower parts of the painting together.",
      },
    },
  ],
  related: ["cafe-terrace-at-night", "sunflowers", "the-bedroom", "the-scream", "wanderer-above-the-sea-of-fog"],
};

export default artwork;

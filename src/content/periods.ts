import type { Period, PeriodSlug } from "./types";

export const periods: Period[] = [
  {
    slug: "renaissance",
    name: { zh: "文藝復興", en: "Renaissance" },
    start: 1400,
    end: 1520,
    color: "#9a6b3f",
    colorDark: "#c89a6a",
    tagline: {
      zh: "以人為本，重新發現古典世界的秩序與美。",
      en: "Humanity at the centre, and the rediscovered order and beauty of the classical world.",
    },
    intro: [
      {
        zh: "十五世紀的佛羅倫斯，銀行家、行會與教會爭相資助藝術。畫家重新研讀古希臘羅馬的雕塑與典籍，把目光由天國移回人間：人體有了重量，空間有了深度，神話人物亦可以與聖徒並列。",
        en: "In fifteenth-century Florence, bankers, guilds and the Church competed to patronise the arts. Painters studied ancient Greek and Roman sculpture and texts, and turned their gaze from heaven back to earth: bodies gained weight, space gained depth, and pagan myths could stand beside the saints.",
      },
      {
        zh: "[[linear-perspective|線性透視]]的發明，令平面畫布彷彿開了一扇窗。到十六世紀初，達文西、米開朗基羅與拉斐爾把這套語言推至頂峰，史稱「盛期文藝復興」。",
        en: "The invention of [[linear-perspective]] turned the flat panel into a window onto the world. By the early sixteenth century Leonardo, Michelangelo and Raphael had carried this new language to its height, the moment known as the High Renaissance.",
      },
    ],
    traits: [
      {
        title: { zh: "透視與比例", en: "Perspective and proportion" },
        body: {
          zh: "以數學方法建構空間，人物比例參照古典雕塑。",
          en: "Space is built mathematically; figures follow the proportions of classical sculpture.",
        },
      },
      {
        title: { zh: "古典題材復興", en: "Classical subjects revived" },
        body: {
          zh: "希臘羅馬神話與哲學重新成為繪畫的主題。",
          en: "Greek and Roman myth and philosophy return as subjects for painting.",
        },
      },
      {
        title: { zh: "和諧均衡", en: "Harmony and balance" },
        body: {
          zh: "構圖講求對稱、穩定，常以三角形組織人物。",
          en: "Compositions favour symmetry and stability, often grouping figures in a pyramid.",
        },
      },
    ],
    hero: "the-birth-of-venus",
  },
  {
    slug: "northern-renaissance",
    name: { zh: "北方文藝復興", en: "Northern Renaissance" },
    start: 1430,
    end: 1580,
    color: "#5f6b4a",
    colorDark: "#9fae84",
    tagline: {
      zh: "油彩下的微觀世界：每一根毛髮、每一道反光都一絲不苟。",
      en: "A microscopic world in oil paint, where every hair and every reflection is rendered with care.",
    },
    intro: [
      {
        zh: "阿爾卑斯山以北的法蘭德斯、荷蘭與德國，商業城市富庶，市民階層崛起。這裏的畫家未必熟悉古典雕塑，卻把[[oil-paint|油畫]]技法發展得爐火純青，以層層透明的[[glazing|罩染]]描繪絲絨、金屬與玻璃的質感。",
        en: "North of the Alps, in the trading cities of Flanders, the Netherlands and Germany, a prosperous merchant class was on the rise. Painters here knew less of classical sculpture, but they perfected [[oil-paint|oil painting]], building up transparent [[glazing|glazes]] to capture velvet, metal and glass.",
      },
      {
        zh: "宗教題材之外，肖像、農民生活與風景亦逐漸登上畫面；宗教改革之後，更多作品轉為服務私人收藏家，而非教堂祭壇。",
        en: "Alongside religious scenes, portraits, peasant life and landscape found their way onto the panel. After the Reformation, more and more works were made for private collectors rather than church altars.",
      },
    ],
    traits: [
      {
        title: { zh: "極致細節", en: "Meticulous detail" },
        body: {
          zh: "以放大鏡般的精確描繪物件質感與微小細節。",
          en: "Textures and tiny details are rendered with near-microscopic precision.",
        },
      },
      {
        title: { zh: "隱藏象徵", en: "Hidden symbolism" },
        body: {
          zh: "日常物件往往暗藏宗教或道德寓意。",
          en: "Everyday objects often carry concealed religious or moral meaning.",
        },
      },
      {
        title: { zh: "人間百態", en: "Everyday life" },
        body: {
          zh: "農民、市民與四季風景成為獨立題材。",
          en: "Peasants, townspeople and the seasons become subjects in their own right.",
        },
      },
    ],
    hero: "hunters-in-the-snow",
  },
  {
    slug: "baroque",
    name: { zh: "巴洛克", en: "Baroque" },
    start: 1600,
    end: 1720,
    color: "#7a2e2a",
    colorDark: "#d0766c",
    tagline: {
      zh: "黑暗中的一束強光，戲劇性的瞬間撼動觀者。",
      en: "A shaft of light in the darkness, and a dramatic instant that moves the viewer.",
    },
    intro: [
      {
        zh: "十七世紀的歐洲飽受宗教戰爭與瘟疫蹂躪。天主教會以反宗教改革為號召，要求藝術直接打動信眾的情感；卡拉瓦喬以強烈的[[chiaroscuro|明暗對照]]把聖經故事搬到羅馬街頭，震驚一時。",
        en: "Seventeenth-century Europe was torn by religious war and plague. The Catholic Church, leading the Counter-Reformation, wanted art that would speak directly to the emotions of the faithful. Caravaggio's fierce [[chiaroscuro]] brought biblical stories onto the streets of Rome and shocked his contemporaries.",
      },
      {
        zh: "與此同時，信奉新教的荷蘭共和國成為商業強國。那裏沒有教會的大型委託，畫家轉而為市民繪畫肖像、風俗畫與靜物，林布蘭與維梅爾因此成就了「荷蘭黃金時代」。",
        en: "Meanwhile the Protestant Dutch Republic became a commercial powerhouse. Without large church commissions, painters worked for citizens instead, producing portraits, genre scenes and still lifes; Rembrandt and Vermeer made this the Dutch Golden Age.",
      },
    ],
    traits: [
      {
        title: { zh: "強烈明暗", en: "Dramatic light" },
        body: {
          zh: "以[[tenebrism|暗色調主義]]製造舞台般的聚光效果。",
          en: "[[tenebrism|Tenebrism]] creates stage-like spotlight effects.",
        },
      },
      {
        title: { zh: "動態與情感", en: "Movement and emotion" },
        body: {
          zh: "捕捉故事最緊張的一刻，對角線構圖充滿動感。",
          en: "Stories are caught at their most intense moment, in energetic diagonal compositions.",
        },
      },
      {
        title: { zh: "真實可觸", en: "Tangible realism" },
        body: {
          zh: "人物取材自平民，衣紋、皮膚與器物都極具實感。",
          en: "Models are drawn from ordinary people; skin, cloth and objects feel real enough to touch.",
        },
      },
    ],
    hero: "the-night-watch",
  },
  {
    slug: "rococo",
    name: { zh: "洛可可", en: "Rococo" },
    start: 1720,
    end: 1780,
    color: "#b07a8c",
    colorDark: "#dba7b8",
    tagline: {
      zh: "粉彩、絲綢與花園中的調情，屬於貴族沙龍的輕盈時光。",
      en: "Pastels, silks and flirtation in the garden: the lighthearted hours of the aristocratic salon.",
    },
    intro: [
      {
        zh: "路易十四去世後，法國貴族離開莊嚴的凡爾賽宮，回到巴黎的私人宅邸。藝術隨之由宏大轉向親密：畫面變得明亮輕快，題材多為戀愛、遊園與閒適生活。",
        en: "After the death of Louis XIV, the French aristocracy left the solemn grandeur of Versailles for private town houses in Paris. Art followed, turning from the monumental to the intimate: canvases grew light and airy, filled with courtship, garden parties and leisure.",
      },
      {
        zh: "華鐸開創了「[[fete-galante|遊樂畫]]」這一類型，布雪與福拉哥納爾則把粉紅、淡藍與金色推至極致。到了啟蒙運動與大革命前夕，這種風格被批評為輕浮奢靡，很快讓位予新古典主義。",
        en: "Watteau invented the [[fete-galante]]; Boucher and Fragonard pushed pink, powder blue and gold to their limits. On the eve of the Enlightenment's triumph and the Revolution, critics condemned the style as frivolous and decadent, and it soon gave way to Neoclassicism.",
      },
    ],
    traits: [
      {
        title: { zh: "粉彩色調", en: "Pastel palette" },
        body: {
          zh: "淡粉、天藍與象牙白，營造輕盈甜美的氣氛。",
          en: "Soft pinks, sky blues and ivory create a sweet, weightless mood.",
        },
      },
      {
        title: { zh: "閒逸題材", en: "Pleasure and leisure" },
        body: {
          zh: "描繪戀愛、遊園、音樂與貴族的閒暇生活。",
          en: "Love, garden parties, music and aristocratic leisure dominate.",
        },
      },
      {
        title: { zh: "曲線裝飾", en: "Curving ornament" },
        body: {
          zh: "流動的S形曲線與繁複裝飾，源自貝殼與植物紋樣。",
          en: "Flowing S-curves and ornate decoration inspired by shells and foliage.",
        },
      },
    ],
    hero: "the-swing",
  },
  {
    slug: "neoclassicism",
    name: { zh: "新古典主義", en: "Neoclassicism" },
    start: 1760,
    end: 1830,
    color: "#4f6478",
    colorDark: "#93a9bf",
    tagline: {
      zh: "以古羅馬的德行與理性，回應革命的時代。",
      en: "The virtue and reason of ancient Rome, answering an age of revolution.",
    },
    intro: [
      {
        zh: "龐貝與赫庫蘭尼姆古城的發掘，令歐洲重新迷上古典世界；啟蒙思想則推崇理性、公民責任與自我犧牲。畫家摒棄洛可可的柔媚，改以清晰輪廓、冷靜色彩與莊嚴構圖講述英雄故事。",
        en: "The excavation of Pompeii and Herculaneum revived Europe's fascination with antiquity, while Enlightenment thinkers prized reason, civic duty and self-sacrifice. Painters rejected Rococo charm for crisp outlines, restrained colour and solemn compositions that told heroic stories.",
      },
      {
        zh: "大衛是這一運動的旗手，他的作品與法國大革命及拿破崙帝國緊密相連；其學生安格爾則以無懈可擊的線條，把古典理想延續至十九世紀。",
        en: "Jacques-Louis David led the movement, and his work became bound up with the French Revolution and Napoleon's empire. His pupil Ingres carried the classical ideal into the nineteenth century with his flawless line.",
      },
    ],
    traits: [
      {
        title: { zh: "清晰輪廓", en: "Clear contours" },
        body: {
          zh: "線條先於色彩，形體如雕塑般明確。",
          en: "Line takes precedence over colour; forms are as definite as sculpture.",
        },
      },
      {
        title: { zh: "道德教化", en: "Moral seriousness" },
        body: {
          zh: "取材古典歷史，歌頌愛國、犧牲與公民美德。",
          en: "Classical history celebrates patriotism, sacrifice and civic virtue.",
        },
      },
      {
        title: { zh: "舞台式構圖", en: "Frieze-like staging" },
        body: {
          zh: "人物如浮雕般橫向排列，空間簡潔。",
          en: "Figures are arranged across the picture like a relief, in a pared-down space.",
        },
      },
    ],
    hero: "oath-of-the-horatii",
  },
  {
    slug: "romanticism",
    name: { zh: "浪漫主義", en: "Romanticism" },
    start: 1790,
    end: 1850,
    color: "#3f5a73",
    colorDark: "#8fb0cf",
    tagline: {
      zh: "情感高於理性，大自然的崇高與人心的激情同樣震撼。",
      en: "Feeling over reason: the sublime in nature and the passions of the heart.",
    },
    intro: [
      {
        zh: "法國大革命的理想化為恐怖統治與連年戰爭，工業革命又改變了城市與鄉村的面貌。一代藝術家開始懷疑啟蒙時代的理性，轉而重視個人情感、想像與直覺。",
        en: "The ideals of the French Revolution had turned into the Terror and decades of war, and the Industrial Revolution was transforming town and country. A generation of artists began to doubt Enlightenment reason and turned instead to personal feeling, imagination and intuition.",
      },
      {
        zh: "浪漫主義並非單一風格：德國的弗里德里希在霧海與廢墟中尋找心靈的[[sublime|崇高]]；英國的透納與康斯特勃讓光線與天氣成為主角；法國的傑利柯與德拉克洛瓦以奔放的筆觸與濃烈的[[colorito|色彩]]描繪時事與異國；西班牙的哥雅則直視戰爭與人性的黑暗。",
        en: "Romanticism was never a single style. In Germany, Friedrich sought the [[sublime]] in seas of fog and ruined abbeys; in England, Turner and Constable made light and weather the true subject; in France, Géricault and Delacroix painted current events and exotic lands with bold brushwork and rich [[colorito|colour]]; in Spain, Goya stared into the darkness of war and human nature.",
      },
      {
        zh: "這是本網站收錄最多的時期之一：它既承接古典傳統，又直接孕育了寫實主義與印象派。",
        en: "It is one of the periods most fully represented on this site: rooted in tradition, it led directly to Realism and Impressionism.",
      },
    ],
    traits: [
      {
        title: { zh: "崇高自然", en: "The sublime in nature" },
        body: {
          zh: "風暴、海洋、高山與廢墟，令人敬畏又渺小。",
          en: "Storms, oceans, mountains and ruins inspire awe and a sense of human smallness.",
        },
      },
      {
        title: { zh: "情感與想像", en: "Emotion and imagination" },
        body: {
          zh: "夢境、恐懼、激情與孤獨都是題材。",
          en: "Dreams, terror, passion and solitude all become subjects.",
        },
      },
      {
        title: { zh: "色彩與筆觸", en: "Colour and brushwork" },
        body: {
          zh: "色彩先於線條，筆觸奔放而富表現力。",
          en: "Colour leads line; brushwork is free and expressive.",
        },
      },
    ],
    hero: "wanderer-above-the-sea-of-fog",
  },
  {
    slug: "realism",
    name: { zh: "寫實主義", en: "Realism" },
    start: 1840,
    end: 1880,
    color: "#6b5a3e",
    colorDark: "#b9a47e",
    tagline: {
      zh: "不美化、不說教：畫家如實描繪眼前的勞動者與日常。",
      en: "No idealising, no sermons: painters show workers and daily life as they are.",
    },
    intro: [
      {
        zh: "1848 年歐洲革命浪潮過後，庫爾貝宣稱：「我不畫天使，因為我從未見過天使。」寫實主義者拒絕學院派的神話與歷史題材，轉而描繪農民、工人與小城葬禮，並以歷史畫的巨大尺幅呈現，挑戰藝術的等級秩序。",
        en: "After the revolutions of 1848, Courbet declared, “I cannot paint an angel because I have never seen one.” Realists rejected the myths and histories of the [[academy|Academy]] and painted peasants, labourers and provincial funerals instead, often on the grand scale reserved for history painting, challenging art's hierarchy of subjects.",
      },
      {
        zh: "米勒以莊嚴的筆調描寫農村勞動；馬奈把古典構圖套用在當代巴黎人身上，引發醜聞；俄國的列賓則以社會批判精神描繪底層勞工。",
        en: "Millet gave rural labour a quiet dignity; Manet dressed classical compositions in the clothes of modern Parisians and caused scandal; in Russia, Repin painted the poor with a sharp social conscience.",
      },
    ],
    traits: [
      {
        title: { zh: "當代生活", en: "Contemporary life" },
        body: {
          zh: "描繪眼前的真實社會，而非遠古傳說。",
          en: "The real society of the present, not the legends of the past.",
        },
      },
      {
        title: { zh: "平凡人物", en: "Ordinary people" },
        body: {
          zh: "農民與勞工成為畫面的主角。",
          en: "Peasants and workers take centre stage.",
        },
      },
      {
        title: { zh: "樸實色調", en: "Earthy palette" },
        body: {
          zh: "以大地色系與沉穩筆法呈現現實質感。",
          en: "Earth tones and sober handling convey the texture of reality.",
        },
      },
    ],
    hero: "the-gleaners",
  },
  {
    slug: "impressionism",
    name: { zh: "印象派", en: "Impressionism" },
    start: 1860,
    end: 1890,
    color: "#4d7a8c",
    colorDark: "#8cc3d6",
    tagline: {
      zh: "走出畫室，捕捉光線在某一刻的顫動。",
      en: "Out of the studio to catch the flicker of light at a single moment.",
    },
    intro: [
      {
        zh: "一群屢被官方沙龍拒於門外的年輕畫家，在 1874 年自行舉辦展覽。評論家借莫內《印象·日出》的畫名譏諷他們為「印象派」，這個名稱卻從此流傳下來。",
        en: "In 1874 a group of young painters repeatedly rejected by the official [[salon|Salon]] organised their own exhibition. A critic mocked them as “Impressionists” after Monet's Impression, Sunrise, and the name stuck.",
      },
      {
        zh: "錫管顏料與鐵路的普及，令畫家可以攜帶畫具到戶外[[en-plein-air|寫生]]。他們以短促、分離的筆觸並置純色，讓觀者的眼睛自行混色，捕捉陽光、水面與城市生活稍縱即逝的印象。",
        en: "Paint in tin tubes and the spread of the railways let artists carry their equipment outdoors to paint [[en-plein-air]]. They laid pure colours side by side in short, broken strokes, letting the viewer's eye do the mixing, to capture fleeting impressions of sunlight, water and city life.",
      },
    ],
    traits: [
      {
        title: { zh: "戶外寫生", en: "Painting outdoors" },
        body: {
          zh: "直接面對景物，追求光線與天氣的真實感受。",
          en: "Working directly from the motif to capture real light and weather.",
        },
      },
      {
        title: { zh: "分離筆觸", en: "Broken brushwork" },
        body: {
          zh: "短促筆觸並置純色，畫面閃爍生動。",
          en: "Short strokes of pure colour placed side by side make the surface shimmer.",
        },
      },
      {
        title: { zh: "現代生活", en: "Modern life" },
        body: {
          zh: "咖啡館、舞會、火車站與郊遊都是題材。",
          en: "Cafés, dance halls, railway stations and outings in the countryside.",
        },
      },
    ],
    hero: "impression-sunrise",
  },
  {
    slug: "post-impressionism",
    name: { zh: "後印象派", en: "Post-Impressionism" },
    start: 1886,
    end: 1905,
    color: "#2f4f8a",
    colorDark: "#86a6e0",
    tagline: {
      zh: "超越光影的記錄，以色彩與結構表達內心和秩序。",
      en: "Beyond recording light: colour and structure express inner feeling and order.",
    },
    intro: [
      {
        zh: "印象派確立之後，一批畫家各自尋找新的方向。他們並非同一團體，卻都不滿足於捕捉視覺印象：塞尚追求自然背後堅實的幾何結構；秀拉以科學的[[pointillism|點彩法]]重建畫面秩序；高更遠赴大溪地尋找原始的象徵；梵高則以扭動的筆觸和強烈的色彩傾訴情感。",
        en: "Once Impressionism was established, a number of painters went their separate ways. They never formed a group, but none was content simply to record visual impressions. Cézanne sought the solid geometry beneath nature; Seurat rebuilt pictorial order with scientific [[pointillism]]; Gauguin travelled to Tahiti in search of primal symbols; Van Gogh poured out emotion in swirling strokes and intense colour.",
      },
      {
        zh: "「後印象派」一詞由英國評論家弗萊在 1910 年提出。這些畫家生前多不得志，卻為二十世紀的野獸派、立體派與表現主義鋪好了道路。梵高的《星夜》即屬此時期。",
        en: "The term “Post-Impressionism” was coined by the English critic Roger Fry in 1910. Most of these artists struggled during their lifetimes, yet they paved the way for Fauvism, Cubism and Expressionism. Van Gogh's The Starry Night belongs to this period.",
      },
    ],
    traits: [
      {
        title: { zh: "主觀色彩", en: "Subjective colour" },
        body: {
          zh: "色彩用來表達情感，不必忠於自然。",
          en: "Colour expresses feeling rather than copying nature.",
        },
      },
      {
        title: { zh: "結構與秩序", en: "Structure and order" },
        body: {
          zh: "以幾何形體或點狀色塊重新組織畫面。",
          en: "Geometric forms or dots of colour reorganise the picture.",
        },
      },
      {
        title: { zh: "象徵與個性", en: "Symbol and personality" },
        body: {
          zh: "每位畫家發展出鮮明的個人語言。",
          en: "Each painter develops an unmistakable personal language.",
        },
      },
    ],
    hero: "the-starry-night",
  },
  {
    slug: "modern",
    name: { zh: "現代", en: "Modern" },
    start: 1900,
    end: 1930,
    color: "#8a6a2f",
    colorDark: "#d8b46a",
    tagline: {
      zh: "告別再現，走向表現與抽象。",
      en: "Farewell to representation; towards expression and abstraction.",
    },
    intro: [
      {
        zh: "二十世紀初，攝影已能忠實記錄世界，畫家於是追問：繪畫還可以做甚麼？維也納的克林姆以金箔與裝飾圖案融合繪畫與工藝；挪威的孟克把內心的焦慮直接化為扭曲的線條與色彩，成為表現主義的先聲。",
        en: "By the early twentieth century photography could record the world faithfully, so painters asked what else painting could do. In Vienna, Klimt fused painting and craft with gold leaf and ornament; in Norway, Munch turned inner anxiety directly into writhing line and colour, heralding Expressionism.",
      },
      {
        zh: "康丁斯基相信色彩與形狀如音樂般可以直接觸動心靈，創作出最早一批純[[abstraction|抽象]]畫；蒙德里安則把繪畫簡化為直線與三原色，追求普遍的和諧。本網站只收錄已進入公有領域的少數代表作。",
        en: "Kandinsky believed colour and form could move the soul directly, like music, and painted some of the first purely [[abstraction|abstract]] pictures; Mondrian reduced painting to straight lines and the three primary colours in search of universal harmony. This site includes only a few key works that are now in the public domain.",
      },
    ],
    traits: [
      {
        title: { zh: "表現內心", en: "Inner expression" },
        body: {
          zh: "以扭曲形象與強烈色彩呈現心理狀態。",
          en: "Distorted forms and intense colour convey states of mind.",
        },
      },
      {
        title: { zh: "走向抽象", en: "Towards abstraction" },
        body: {
          zh: "畫面不再描繪具體物件，而是色彩與形狀本身。",
          en: "The picture no longer depicts objects but colour and form themselves.",
        },
      },
      {
        title: { zh: "裝飾與平面", en: "Ornament and flatness" },
        body: {
          zh: "承認畫面的平面性，融合裝飾藝術。",
          en: "The flatness of the picture is embraced and fused with decorative art.",
        },
      },
    ],
    hero: "the-kiss",
  },
];

export const periodMap = Object.fromEntries(periods.map((p) => [p.slug, p])) as Record<PeriodSlug, Period>;

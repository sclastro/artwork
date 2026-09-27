import type { Artist } from "./types";

export const artists: Artist[] = [
  {
    slug: "botticelli",
    name: { zh: "波提切利", en: "Sandro Botticelli" },
    born: 1445,
    died: 1510,
    birthPlace: { zh: "佛羅倫斯", en: "Florence" },
    nationality: "italian",
    bio: [
      {
        zh: "波提切利是佛羅倫斯早期文藝復興的代表畫家，曾隨菲利波·利比習畫，後來得到美第奇家族的賞識。他的線條優美流暢，人物帶着一種略帶憂鬱的輕盈感。",
        en: "Botticelli was a leading painter of the Florentine Early Renaissance. He trained under Filippo Lippi and won the patronage of the Medici family. His line is graceful and flowing, and his figures have a weightless, slightly melancholy beauty.",
      },
      {
        zh: "晚年受修士薩伏那洛拉的講道影響，他的畫風轉趨嚴肅虔誠。死後聲名沉寂近三百年，直至十九世紀才被英國的拉斐爾前派重新推崇。",
        en: "In later life, influenced by the preaching of the friar Savonarola, his style became more austere and devout. After his death his reputation faded for nearly three centuries, until the English Pre-Raphaelites rediscovered him in the nineteenth century.",
      },
    ],
  },
  {
    slug: "leonardo",
    name: { zh: "達文西", en: "Leonardo da Vinci" },
    born: 1452,
    died: 1519,
    birthPlace: { zh: "意大利芬奇鎮", en: "Vinci, Italy" },
    nationality: "italian",
    bio: [
      {
        zh: "達文西是文藝復興「全才」的典型：畫家、雕塑家、工程師、解剖學家與發明家。他在佛羅倫斯韋羅基奧的工作坊學藝，後來服務於米蘭公爵、教廷及法國國王。",
        en: "Leonardo is the archetypal Renaissance polymath: painter, sculptor, engineer, anatomist and inventor. He trained in Verrocchio's workshop in Florence and later served the Duke of Milan, the papal court and the King of France.",
      },
      {
        zh: "他傳世的畫作不足二十幅，卻幾乎每一幅都改寫了繪畫史。他發展出[[sfumato|暈塗法]]，以柔和漸變取代生硬輪廓，並留下數千頁科學與藝術筆記。",
        en: "Fewer than twenty paintings survive, yet almost every one changed the course of art. He developed [[sfumato]], replacing hard outlines with soft gradations, and left thousands of pages of scientific and artistic notes.",
      },
    ],
  },
  {
    slug: "raphael",
    name: { zh: "拉斐爾", en: "Raphael" },
    born: 1483,
    died: 1520,
    birthPlace: { zh: "意大利烏爾比諾", en: "Urbino, Italy" },
    nationality: "italian",
    bio: [
      {
        zh: "拉斐爾是宮廷畫家之子，年少已嶄露頭角。他吸收了達文西的構圖與米開朗基羅的人體力量，融會成一種清晰、和諧、優雅的風格。",
        en: "The son of a court painter, Raphael showed his talent early. He absorbed Leonardo's composition and Michelangelo's powerful figures, fusing them into a style of clarity, harmony and grace.",
      },
      {
        zh: "1508 年起他為教宗儒略二世裝飾梵蒂岡宮的房間，聲望如日中天。他三十七歲英年早逝，葬於羅馬萬神殿，後世學院派奉他為古典美的最高典範。",
        en: "From 1508 he decorated rooms in the Vatican Palace for Pope Julius II and became the most celebrated artist in Rome. He died at thirty-seven and was buried in the Pantheon; later academies treated him as the supreme model of classical beauty.",
      },
    ],
  },
  {
    slug: "michelangelo",
    name: { zh: "米開朗基羅", en: "Michelangelo" },
    born: 1475,
    died: 1564,
    birthPlace: { zh: "意大利卡普雷塞", en: "Caprese, Italy" },
    nationality: "italian",
    bio: [
      {
        zh: "米開朗基羅自認是雕塑家，二十多歲已完成《聖殤》與《大衛》。然而教宗儒略二世堅持要他繪畫西斯汀禮拜堂天花板，他花了四年完成這項艱巨工程。",
        en: "Michelangelo considered himself a sculptor first, and had carved the Pietà and David by his twenties. Yet Pope Julius II insisted he paint the ceiling of the Sistine Chapel, a gruelling task that took him four years.",
      },
      {
        zh: "他以雄渾有力的人體表現精神的掙扎，晚年更主持設計聖伯多祿大殿的圓頂。他享壽近九十歲，生前已被譽為「神聖的米開朗基羅」。",
        en: "His muscular figures express spiritual struggle. In old age he designed the dome of St Peter's Basilica. He lived to almost ninety and was hailed as “the divine Michelangelo” in his own lifetime.",
      },
    ],
  },
  {
    slug: "van-eyck",
    name: { zh: "范艾克", en: "Jan van Eyck" },
    born: 1390,
    died: 1441,
    birthPlace: { zh: "今比利時馬塞克", en: "Maaseik, present-day Belgium" },
    nationality: "flemish",
    bio: [
      {
        zh: "范艾克是勃艮第公爵「好人菲臘」的宮廷畫家，長居布魯日。他並非油畫的發明者，卻把油彩的透明特性發揮至前所未有的境界，被譽為早期尼德蘭繪畫之父。",
        en: "Van Eyck was court painter to Philip the Good, Duke of Burgundy, and lived mainly in Bruges. He did not invent oil paint, but he exploited its transparency as no one had before, and is regarded as the father of Early Netherlandish painting.",
      },
      {
        zh: "他的作品細緻得近乎不可思議，常在畫框上簽名並寫上座右銘「盡我所能」，在當時罕見地流露出畫家的自我意識。",
        en: "His work is almost unbelievably detailed. He often signed his frames with the motto “As I can”, an unusual assertion of artistic identity for his time.",
      },
    ],
  },
  {
    slug: "bosch",
    name: { zh: "波希", en: "Hieronymus Bosch" },
    born: 1450,
    died: 1516,
    birthPlace: { zh: "荷蘭斯海爾托亨博斯", en: "'s-Hertogenbosch, Netherlands" },
    nationality: "netherlandish",
    bio: [
      {
        zh: "波希一生幾乎都住在家鄉斯海爾托亨博斯，其名字即取自這座城市。他出身畫家世家，是當地一個宗教兄弟會的成員。",
        en: "Bosch spent almost his whole life in his home town of 's-Hertogenbosch, from which he took his name. He came from a family of painters and belonged to a local religious brotherhood.",
      },
      {
        zh: "他筆下充滿怪誕生物、半人半獸與奇異建築，以荒誕的想像描寫罪惡與救贖。五百年來，學者對其作品含義爭論不休，超現實主義者則奉他為先驅。",
        en: "His paintings teem with grotesque creatures, human–animal hybrids and bizarre structures, using wild fantasy to depict sin and salvation. Scholars have argued over their meaning for five centuries, and the Surrealists claimed him as a forerunner.",
      },
    ],
  },
  {
    slug: "bruegel",
    name: { zh: "老彼得·布勒哲爾", en: "Pieter Bruegel the Elder" },
    born: 1525,
    died: 1569,
    birthPlace: { zh: "布拉班特（今荷蘭或比利時）", en: "Brabant (present-day Netherlands or Belgium)" },
    nationality: "netherlandish",
    bio: [
      {
        zh: "布勒哲爾早年翻越阿爾卑斯山遊歷意大利，沿途的山巒景色深深影響了他日後的風景畫。他在安特衛普與布魯塞爾工作，最初以設計版畫成名。",
        en: "As a young man Bruegel crossed the Alps to Italy, and the mountain scenery he saw shaped his later landscapes. He worked in Antwerp and Brussels, first making his name designing prints.",
      },
      {
        zh: "他以描繪農民生活聞名，有「農民布勒哲爾」之稱，但他本人其實是與人文學者往來的城市知識分子。他的兩個兒子亦成為畫家。",
        en: "Nicknamed “Peasant Bruegel” for his scenes of country life, he was in fact an urban intellectual who mixed with humanist scholars. Both his sons became painters.",
      },
    ],
  },
  {
    slug: "holbein",
    name: { zh: "小漢斯·荷爾拜因", en: "Hans Holbein the Younger" },
    born: 1497,
    died: 1543,
    birthPlace: { zh: "德國奧格斯堡", en: "Augsburg, Germany" },
    nationality: "german",
    bio: [
      {
        zh: "荷爾拜因在瑞士巴塞爾成名，與人文學者伊拉斯謨結為好友。宗教改革令巴塞爾的藝術委託銳減，他於是帶着伊拉斯謨的推薦信前往英國。",
        en: "Holbein made his name in Basel, where he befriended the humanist Erasmus. When the Reformation dried up art commissions there, he travelled to England with a letter of recommendation from Erasmus.",
      },
      {
        zh: "他後來成為英王亨利八世的宮廷畫家，留下大量都鐸王朝人物的肖像，其精準寫實的風格定義了後世對那個時代的想像。",
        en: "He became court painter to Henry VIII and left a gallery of Tudor portraits whose precise realism still shapes how we picture that age.",
      },
    ],
  },
  {
    slug: "caravaggio",
    name: { zh: "卡拉瓦喬", en: "Caravaggio" },
    born: 1571,
    died: 1610,
    birthPlace: { zh: "米蘭（成長於卡拉瓦喬鎮）", en: "Milan (raised in Caravaggio)" },
    nationality: "italian",
    bio: [
      {
        zh: "卡拉瓦喬本名米開朗基羅·梅里西，二十歲左右到羅馬闖蕩。他直接以街頭平民作模特兒，配合劇烈的明暗對照，令宗教畫變得前所未有地真實而震撼。",
        en: "Born Michelangelo Merisi, Caravaggio arrived in Rome in his early twenties. He used ordinary people from the streets as models and combined them with violent contrasts of light and dark, making religious painting more real and startling than ever before.",
      },
      {
        zh: "他脾氣暴烈，屢次涉及鬥毆，1606 年更因殺人而逃離羅馬，此後流亡那不勒斯、馬耳他與西西里，三十八歲死於返回羅馬途中。他的畫風影響遍及整個歐洲，追隨者被稱為「卡拉瓦喬派」。",
        en: "He was violent and often in trouble with the law; in 1606 he killed a man and fled Rome, spending his last years on the run in Naples, Malta and Sicily. He died at thirty-eight on his way back to Rome. His style spread across Europe, and his followers became known as the Caravaggisti.",
      },
    ],
  },
  {
    slug: "artemisia-gentileschi",
    name: { zh: "阿特米謝·真蒂萊斯基", en: "Artemisia Gentileschi" },
    born: 1593,
    died: 1656,
    birthPlace: { zh: "羅馬", en: "Rome" },
    nationality: "italian",
    bio: [
      {
        zh: "阿特米謝是畫家奧拉齊奧·真蒂萊斯基之女，在父親的畫室學藝，深受卡拉瓦喬影響。十八歲時遭父親的合作者侵犯，其後的審訊中她被施以酷刑以驗證證詞。",
        en: "The daughter of the painter Orazio Gentileschi, Artemisia trained in her father's studio and was strongly influenced by Caravaggio. At eighteen she was raped by her father's collaborator, and at the trial that followed she was tortured to test her testimony.",
      },
      {
        zh: "她後來成為佛羅倫斯繪畫學院首位女院士，作品受到美第奇家族與英王查理一世的青睞。她筆下的女性堅毅有力，在男性主導的藝術史中獨樹一幟。",
        en: "She went on to become the first woman admitted to the Accademia delle Arti del Disegno in Florence, and worked for the Medici and Charles I of England. Her women are strong and resolute, a singular voice in a male-dominated history of art.",
      },
    ],
  },
  {
    slug: "rembrandt",
    name: { zh: "林布蘭", en: "Rembrandt van Rijn" },
    born: 1606,
    died: 1669,
    birthPlace: { zh: "荷蘭萊頓", en: "Leiden, Netherlands" },
    nationality: "dutch",
    bio: [
      {
        zh: "林布蘭是荷蘭黃金時代最偉大的畫家。他在阿姆斯特丹迅速成名，肖像委託源源不絕，卻因揮霍與市場轉變，晚年宣告破產。",
        en: "Rembrandt is the greatest painter of the Dutch Golden Age. He found fame quickly in Amsterdam and never lacked portrait commissions, but extravagance and changing tastes led to bankruptcy in later life.",
      },
      {
        zh: "他一生繪畫了近百幅自畫像，由意氣風發的青年到滄桑的老人，毫不掩飾。他對光線的駕馭與對人性的洞察，令他的作品至今動人。",
        en: "He made nearly a hundred self-portraits, from confident youth to weathered old age, without flattery. His mastery of light and his insight into human nature keep his work moving today.",
      },
    ],
  },
  {
    slug: "velazquez",
    name: { zh: "委拉斯開茲", en: "Diego Velázquez" },
    born: 1599,
    died: 1660,
    birthPlace: { zh: "西班牙塞維亞", en: "Seville, Spain" },
    nationality: "spanish",
    bio: [
      {
        zh: "委拉斯開茲二十四歲成為西班牙國王腓力四世的宮廷畫家，此後近四十年為王室繪畫肖像，並擔任宮廷總管等職務。",
        en: "At twenty-four Velázquez became court painter to Philip IV of Spain, and for nearly forty years he painted the royal family while also serving as a senior court official.",
      },
      {
        zh: "他兩度出訪意大利，吸收了提香等威尼斯畫家的鬆動筆法。近看只是幾筆顏料，退後卻成了閃亮的絲綢；馬奈稱他為「畫家中的畫家」。",
        en: "Two journeys to Italy introduced him to the loose brushwork of Titian and the Venetians. Up close his strokes are mere dabs of paint; from a step back they become shimmering silk. Manet called him “the painter of painters”.",
      },
    ],
  },
  {
    slug: "vermeer",
    name: { zh: "維梅爾", en: "Johannes Vermeer" },
    born: 1632,
    died: 1675,
    birthPlace: { zh: "荷蘭代爾夫特", en: "Delft, Netherlands" },
    nationality: "dutch",
    bio: [
      {
        zh: "維梅爾一生幾乎都在代爾夫特度過，兼營畫商與旅館生意。他作畫極慢，傳世作品只有三十多幅，多為寧靜室內中專注於日常事務的女性。",
        en: "Vermeer spent almost his whole life in Delft, where he also dealt in art and ran an inn. He worked slowly, and only about thirty-five paintings survive, most showing women absorbed in quiet tasks in sunlit interiors.",
      },
      {
        zh: "他去世時負債纍纍，死後名聲湮沒近二百年，直至十九世紀才被法國評論家托雷–比爾熱重新發掘，被稱為「代爾夫特的斯芬克斯」。",
        en: "He died deep in debt, and his name was all but forgotten for two centuries until the French critic Thoré-Bürger rediscovered him in the nineteenth century, calling him “the Sphinx of Delft”.",
      },
    ],
  },
  {
    slug: "watteau",
    name: { zh: "華鐸", en: "Antoine Watteau" },
    born: 1684,
    died: 1721,
    birthPlace: { zh: "法國瓦朗謝訥", en: "Valenciennes, France" },
    nationality: "french",
    bio: [
      {
        zh: "華鐸出身寒微，早年在巴黎為劇院繪畫佈景，深受意大利即興喜劇與魯本斯作品影響。",
        en: "Born into modest circumstances, Watteau worked as a young man painting theatre scenery in Paris, and was deeply influenced by the Italian commedia dell'arte and the work of Rubens.",
      },
      {
        zh: "他開創的「遊樂畫」描繪貴族男女在園林中嬉戲談情，輕盈中帶着一絲感傷。他患肺結核，三十六歲便離世。",
        en: "The fête galante he invented shows elegant couples at play in parkland, light yet tinged with melancholy. He suffered from tuberculosis and died at thirty-six.",
      },
    ],
  },
  {
    slug: "fragonard",
    name: { zh: "福拉哥納爾", en: "Jean-Honoré Fragonard" },
    born: 1732,
    died: 1806,
    birthPlace: { zh: "法國格拉斯", en: "Grasse, France" },
    nationality: "french",
    bio: [
      {
        zh: "福拉哥納爾曾師從布雪，並贏得羅馬大獎赴意大利深造。他本可走學院歷史畫家的道路，卻選擇為私人收藏家繪畫輕快浪漫的題材。",
        en: "Fragonard studied with Boucher and won the Prix de Rome to study in Italy. He could have become an academic history painter, but chose instead to paint light, romantic subjects for private collectors.",
      },
      {
        zh: "他筆觸飛快，色彩明麗，是洛可可晚期的代表。法國大革命後，他的風格被視為舊制度的象徵，晚年貧困而被遺忘。",
        en: "His brushwork is quick and his colour radiant; he is the defining painter of late Rococo. After the Revolution his style was seen as a relic of the old regime, and he died poor and forgotten.",
      },
    ],
  },
  {
    slug: "boucher",
    name: { zh: "布雪", en: "François Boucher" },
    born: 1703,
    died: 1770,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "布雪是洛可可風格最具代表性的畫家，作品涵蓋神話、田園、肖像及掛毯與瓷器設計，並擔任法國皇家首席畫家。",
        en: "Boucher is perhaps the quintessential Rococo painter. His output ranged from mythologies, pastorals and portraits to designs for tapestries and porcelain, and he became First Painter to the King of France.",
      },
      {
        zh: "路易十五的情婦蓬巴度夫人是他最重要的贊助人。啟蒙思想家狄德羅批評他的畫矯揉造作，這也反映了時代品味的轉變。",
        en: "Madame de Pompadour, mistress of Louis XV, was his most important patron. The Enlightenment critic Diderot attacked his work as artificial, a sign of shifting taste.",
      },
    ],
  },
  {
    slug: "david",
    name: { zh: "大衛", en: "Jacques-Louis David" },
    born: 1748,
    died: 1825,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "大衛是新古典主義的領袖。法國大革命期間，他是激進的雅各賓派成員，曾投票贊成處決路易十六，並為革命策劃節慶典禮。",
        en: "David was the leader of Neoclassicism. During the French Revolution he was a radical Jacobin who voted for the execution of Louis XVI and staged revolutionary festivals.",
      },
      {
        zh: "羅伯斯庇爾倒台後他兩度入獄，後來成為拿破崙的首席畫家。波旁王朝復辟後，他流亡布魯塞爾直至去世。他培育了大批學生，包括安格爾。",
        en: "After Robespierre's fall he was imprisoned twice; he later became Napoleon's First Painter. When the Bourbons returned he went into exile in Brussels, where he died. He trained many pupils, including Ingres.",
      },
    ],
  },
  {
    slug: "ingres",
    name: { zh: "安格爾", en: "Jean-Auguste-Dominique Ingres" },
    born: 1780,
    died: 1867,
    birthPlace: { zh: "法國蒙托邦", en: "Montauban, France" },
    nationality: "french",
    bio: [
      {
        zh: "安格爾是大衛的學生，一生奉拉斐爾為典範，堅信「素描是藝術的誠實」。他的線條精準純淨，肖像畫尤為出色。",
        en: "A pupil of David, Ingres revered Raphael all his life and believed that “drawing is the probity of art”. His line is pure and exact, and his portraits are especially fine.",
      },
      {
        zh: "他與德拉克洛瓦被視為十九世紀法國畫壇的兩極：一方重線條與古典，一方重色彩與激情。然而他筆下刻意拉長、變形的人體，其實影響了後來的竇加與畢加索。",
        en: "He and Delacroix were seen as the two poles of French painting: line and classicism against colour and passion. Yet his deliberately elongated, distorted figures went on to influence Degas and Picasso.",
      },
    ],
  },
  {
    slug: "friedrich",
    name: { zh: "弗里德里希", en: "Caspar David Friedrich" },
    born: 1774,
    died: 1840,
    birthPlace: { zh: "德國格賴夫斯瓦爾德", en: "Greifswald, Germany" },
    nationality: "german",
    bio: [
      {
        zh: "弗里德里希是德國浪漫主義最重要的畫家，長居德勒斯登。童年時弟弟為救他而溺斃，這份陰影或許造就了他作品中深沉的孤寂與對死亡的沉思。",
        en: "Friedrich is the most important painter of German Romanticism and lived mostly in Dresden. As a boy he saw his younger brother drown trying to save him, a trauma that may lie behind the solitude and meditation on death in his work.",
      },
      {
        zh: "他筆下常見背向觀者的人物，凝望霧海、月色或廢墟，把風景轉化為宗教與心靈的冥想。死後被遺忘，直到二十世紀初才重獲重視。",
        en: "His paintings often show figures seen from behind, gazing at fog, moonlight or ruins, turning landscape into spiritual meditation. Forgotten after his death, he was rediscovered in the early twentieth century.",
      },
    ],
  },
  {
    slug: "delacroix",
    name: { zh: "德拉克洛瓦", en: "Eugène Delacroix" },
    born: 1798,
    died: 1863,
    birthPlace: { zh: "法國沙朗通–聖莫里斯", en: "Charenton-Saint-Maurice, France" },
    nationality: "french",
    bio: [
      {
        zh: "德拉克洛瓦是法國浪漫主義的領袖。他崇拜魯本斯與威尼斯畫派的色彩，筆觸奔放，題材取自文學、時事與異國風情。",
        en: "Delacroix led French Romanticism. He admired the colour of Rubens and the Venetians, and painted with bold brushwork, drawing subjects from literature, current events and exotic lands.",
      },
      {
        zh: "1832 年他隨外交使團到訪摩洛哥，北非的光線與色彩令他畢生難忘。他的日記是珍貴的藝術論著，而他對色彩的研究深深啟發了印象派與梵高。",
        en: "In 1832 he travelled to Morocco with a diplomatic mission, and the light and colour of North Africa stayed with him for life. His journal is a classic of art writing, and his study of colour inspired the Impressionists and Van Gogh.",
      },
    ],
  },
  {
    slug: "gericault",
    name: { zh: "傑利柯", en: "Théodore Géricault" },
    born: 1791,
    died: 1824,
    birthPlace: { zh: "法國盧昂", en: "Rouen, France" },
    nationality: "french",
    bio: [
      {
        zh: "傑利柯出身富裕家庭，熱愛馬匹，早期作品多描繪騎兵與賽馬。他是法國浪漫主義的開路先鋒，對德拉克洛瓦影響深遠。",
        en: "From a wealthy family and passionate about horses, Géricault painted cavalrymen and horse races in his early work. He was a pioneer of French Romanticism and a major influence on Delacroix.",
      },
      {
        zh: "他一生短暫，三十二歲因墮馬傷患及病症去世，作品不多，卻以《梅杜莎之筏》改寫了歷史畫的定義。",
        en: "He died at thirty-two after riding accidents and illness, leaving relatively few works; yet The Raft of the Medusa redefined what history painting could be.",
      },
    ],
  },
  {
    slug: "goya",
    name: { zh: "哥雅", en: "Francisco Goya" },
    born: 1746,
    died: 1828,
    birthPlace: { zh: "西班牙豐德托多斯", en: "Fuendetodos, Spain" },
    nationality: "spanish",
    bio: [
      {
        zh: "哥雅由掛毯設計師做起，後來成為西班牙宮廷首席畫家。1793 年一場大病令他完全失聰，此後作品愈見陰鬱與批判。",
        en: "Goya began as a tapestry designer and rose to become First Court Painter in Spain. A severe illness in 1793 left him completely deaf, and his work grew darker and more critical thereafter.",
      },
      {
        zh: "拿破崙入侵西班牙期間，他以版畫《戰爭的災難》記錄暴行。晚年在寓所牆上繪畫「黑色繪畫」，最後流亡法國波爾多。他被視為最後一位古典大師，也是第一位現代畫家。",
        en: "During Napoleon's invasion of Spain he recorded its atrocities in the prints The Disasters of War. In old age he painted the “Black Paintings” on the walls of his house before going into exile in Bordeaux. He is often called the last of the Old Masters and the first of the moderns.",
      },
    ],
  },
  {
    slug: "turner",
    name: { zh: "透納", en: "J. M. W. Turner" },
    born: 1775,
    died: 1851,
    birthPlace: { zh: "倫敦", en: "London" },
    nationality: "english",
    bio: [
      {
        zh: "透納是理髮師之子，十四歲入讀皇家藝術學院，二十六歲已成為院士。他一生遊歷歐洲，留下數以萬計的素描與水彩。",
        en: "The son of a barber, Turner entered the Royal Academy Schools at fourteen and became a full Academician at twenty-six. He travelled constantly and left tens of thousands of sketches and watercolours.",
      },
      {
        zh: "他晚年的作品把船隻、火車與風暴溶解在光與霧之中，當時被譏為「肥皂泡與石灰水」，卻預示了印象派與抽象藝術。他把大批作品遺贈國家，今藏泰特不列顛美術館。",
        en: "His late works dissolve ships, trains and storms into light and vapour; critics mocked them as “soapsuds and whitewash”, yet they anticipate Impressionism and abstraction. He bequeathed a vast body of work to the nation, now mostly at Tate Britain.",
      },
    ],
  },
  {
    slug: "constable",
    name: { zh: "康斯特勃", en: "John Constable" },
    born: 1776,
    died: 1837,
    birthPlace: { zh: "英國薩福克郡東伯格霍特", en: "East Bergholt, Suffolk, England" },
    nationality: "english",
    bio: [
      {
        zh: "康斯特勃是磨坊主之子，一生描繪故鄉斯托爾河谷的田園景色，說：「我應當畫自己的家鄉。」",
        en: "The son of a mill owner, Constable spent his life painting the Stour valley where he grew up. “I should paint my own places best,” he wrote.",
      },
      {
        zh: "他在戶外畫了大量油畫速寫，尤其熱衷研究雲層，在英國生前並不得志，作品在巴黎沙龍卻大獲好評，啟發了法國的巴比松畫派。",
        en: "He made many oil sketches outdoors and was fascinated by clouds. Recognition in England came slowly, but his work was acclaimed at the Paris Salon and inspired the French Barbizon painters.",
      },
    ],
  },
  {
    slug: "fuseli",
    name: { zh: "富塞利", en: "Henry Fuseli" },
    born: 1741,
    died: 1825,
    birthPlace: { zh: "瑞士蘇黎世", en: "Zürich, Switzerland" },
    nationality: "swiss",
    bio: [
      {
        zh: "富塞利原為神職人員，後移居倫敦，在雷諾茲鼓勵下轉而習畫，並赴羅馬研究米開朗基羅八年。",
        en: "Fuseli trained for the ministry before settling in London, where Joshua Reynolds encouraged him to paint; he then spent eight years in Rome studying Michelangelo.",
      },
      {
        zh: "他熱衷描繪莎士比亞、彌爾頓作品中的超自然場景，後來出任皇家藝術學院教授。他的幻想風格影響了威廉·布萊克。",
        en: "He loved the supernatural scenes of Shakespeare and Milton and later became Professor of Painting at the Royal Academy. His visionary style influenced William Blake.",
      },
    ],
  },
  {
    slug: "millet",
    name: { zh: "米勒", en: "Jean-François Millet" },
    born: 1814,
    died: 1875,
    birthPlace: { zh: "法國諾曼第格呂希", en: "Gruchy, Normandy, France" },
    nationality: "french",
    bio: [
      {
        zh: "米勒出身農家，1849 年為躲避巴黎的霍亂與政治動盪，遷居楓丹白露森林邊的巴比松村，成為巴比松畫派的一員。",
        en: "Born into a farming family, Millet moved in 1849 to Barbizon on the edge of the Forest of Fontainebleau to escape cholera and political unrest in Paris, joining the Barbizon school.",
      },
      {
        zh: "他以莊嚴的筆調描繪農民勞動，被保守派視為社會主義宣傳。梵高極其敬仰他，曾臨摹他的作品超過二十幅。",
        en: "He painted peasant labour with solemn dignity, and conservatives accused him of socialist propaganda. Van Gogh revered him and made more than twenty copies after his work.",
      },
    ],
  },
  {
    slug: "courbet",
    name: { zh: "庫爾貝", en: "Gustave Courbet" },
    born: 1819,
    died: 1877,
    birthPlace: { zh: "法國奧爾南", en: "Ornans, France" },
    nationality: "french",
    bio: [
      {
        zh: "庫爾貝是寫實主義的旗手，性格高傲，自信十足。1855 年作品被世界博覽會拒收，他乾脆在會場旁自建「寫實主義館」展出。",
        en: "Courbet was the standard-bearer of Realism, proud and supremely self-confident. When the 1855 World's Fair rejected some of his works, he built his own “Pavilion of Realism” next door.",
      },
      {
        zh: "他參與 1871 年巴黎公社，被指要為拆毀旺多姆圓柱負責，後流亡瑞士直至去世。",
        en: "He took part in the Paris Commune of 1871, was held responsible for the toppling of the Vendôme Column, and died in exile in Switzerland.",
      },
    ],
  },
  {
    slug: "manet",
    name: { zh: "馬奈", en: "Édouard Manet" },
    born: 1832,
    died: 1883,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "馬奈出身上流家庭，渴望在官方沙龍取得成功，作品卻屢屢引起醜聞。他以平塗的色塊和當代人物改寫古典題材，被視為現代繪畫的起點。",
        en: "From a well-to-do family, Manet longed for success at the official Salon, yet his work caused scandal after scandal. By recasting classical subjects with flat colour and modern figures, he is often seen as the starting point of modern painting.",
      },
      {
        zh: "他是印象派畫家的精神領袖，卻從未參加他們的聯展。晚年因病截肢，五十一歲去世。",
        en: "He was a mentor to the Impressionists but never exhibited with them. Illness led to the amputation of his leg late in life, and he died at fifty-one.",
      },
    ],
  },
  {
    slug: "whistler",
    name: { zh: "惠斯勒", en: "James McNeill Whistler" },
    born: 1834,
    died: 1903,
    birthPlace: { zh: "美國麻薩諸塞州洛厄爾", en: "Lowell, Massachusetts, USA" },
    nationality: "american",
    bio: [
      {
        zh: "惠斯勒是美國人，主要在倫敦與巴黎活動。他主張「為藝術而藝術」，常以音樂術語為作品命名，如「編曲」「夜曲」。",
        en: "An American who worked mainly in London and Paris, Whistler championed “art for art's sake” and often gave his pictures musical titles such as “Arrangement” and “Nocturne”.",
      },
      {
        zh: "1877 年評論家羅斯金指他「把一罐顏料潑在公眾臉上」，他控告羅斯金誹謗，雖然勝訴，卻只獲賠一法新，更因訟費而破產。",
        en: "In 1877 the critic John Ruskin accused him of “flinging a pot of paint in the public's face”. Whistler sued for libel and won, but was awarded a single farthing, and legal costs bankrupted him.",
      },
    ],
  },
  {
    slug: "repin",
    name: { zh: "列賓", en: "Ilya Repin" },
    born: 1844,
    died: 1930,
    birthPlace: { zh: "今烏克蘭丘胡伊夫", en: "Chuhuiv, present-day Ukraine" },
    nationality: "russian",
    bio: [
      {
        zh: "列賓生於俄羅斯帝國治下的烏克蘭，入讀聖彼得堡帝國藝術學院，後加入「巡迴展覽畫派」，把藝術帶到各地城鎮。",
        en: "Born in Ukraine under the Russian Empire, Repin studied at the Imperial Academy of Arts in St Petersburg and joined the Peredvizhniki (the Wanderers), who took exhibitions to towns across the country.",
      },
      {
        zh: "他以宏大的寫實作品描繪俄國社會與歷史，被譽為俄國最重要的寫實主義畫家。晚年居於芬蘭，直至去世。",
        en: "His large realist canvases depict Russian society and history, and he is regarded as the foremost Russian realist painter. He spent his final years in Finland.",
      },
    ],
  },
  {
    slug: "monet",
    name: { zh: "莫內", en: "Claude Monet" },
    born: 1840,
    died: 1926,
    birthPlace: { zh: "巴黎（成長於勒阿弗爾）", en: "Paris (raised in Le Havre)" },
    nationality: "french",
    bio: [
      {
        zh: "莫內在諾曼第海港勒阿弗爾長大，少年時受風景畫家布丹啟發，開始戶外寫生。他是印象派的核心人物，一生堅持直接面對自然作畫。",
        en: "Monet grew up in the Normandy port of Le Havre, where the landscape painter Eugène Boudin introduced him to painting outdoors. He was the heart of Impressionism and painted directly from nature all his life.",
      },
      {
        zh: "他早年極其貧困，後來名利雙收，定居吉維尼並親手打造睡蓮池。晚年雖受白內障困擾，仍創作了巨幅《睡蓮》系列。",
        en: "Desperately poor in his early years, he later achieved wealth and fame, settling at Giverny, where he created his own water-lily pond. Despite cataracts in old age, he painted the monumental Water Lilies series.",
      },
    ],
  },
  {
    slug: "renoir",
    name: { zh: "雷諾瓦", en: "Pierre-Auguste Renoir" },
    born: 1841,
    died: 1919,
    birthPlace: { zh: "法國利摩日", en: "Limoges, France" },
    nationality: "french",
    bio: [
      {
        zh: "雷諾瓦少年時在瓷器工廠繪畫圖案，後進入格萊爾畫室，結識莫內、西斯萊等人。他熱愛描繪人群、歡樂與女性之美。",
        en: "As a boy Renoir painted designs in a porcelain factory. He later entered Gleyre's studio, where he met Monet and Sisley. He loved to paint crowds, pleasure and feminine beauty.",
      },
      {
        zh: "他曾說：「一幅畫應該是可愛、愉悅而美麗的。」晚年飽受類風濕關節炎折磨，據說要把畫筆綁在手上繼續作畫。",
        en: "“A picture ought to be something likeable, joyous and pretty,” he said. Crippled by rheumatoid arthritis in old age, he is said to have kept painting with the brush strapped to his hand.",
      },
    ],
  },
  {
    slug: "caillebotte",
    name: { zh: "卡耶博特", en: "Gustave Caillebotte" },
    born: 1848,
    died: 1894,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "卡耶博特是富家子弟，既是畫家，也是印象派同儕最慷慨的贊助人，購買了大量朋友的作品，並資助他們的聯展。",
        en: "A wealthy heir, Caillebotte was both a painter and the Impressionists' most generous patron, buying many of his friends' works and funding their exhibitions.",
      },
      {
        zh: "他死後把收藏遺贈法國政府，幾經爭議才被部分接受，這批作品成為今日奧賽美術館印象派館藏的基礎。他自己的畫作則長期被忽視，至二十世紀後期才重獲肯定。",
        en: "He left his collection to the French state, which accepted only part of it after much controversy; those works became the core of the Musée d'Orsay's Impressionist holdings. His own paintings were long overlooked until the late twentieth century.",
      },
    ],
  },
  {
    slug: "degas",
    name: { zh: "竇加", en: "Edgar Degas" },
    born: 1834,
    died: 1917,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "竇加受過嚴格的學院訓練，崇拜安格爾。他參與了大部分印象派聯展，卻自稱「寫實主義者」，也不喜歡戶外寫生。",
        en: "Trained in the academic tradition and a devoted admirer of Ingres, Degas took part in most of the Impressionist exhibitions, yet he called himself a realist and disliked painting outdoors.",
      },
      {
        zh: "他以芭蕾舞者、賽馬與洗衣女工為題，構圖受日本浮世繪與攝影影響，常以偏離中心的角度截取畫面。晚年視力衰退，轉而以粉彩與雕塑創作。",
        en: "He painted ballet dancers, racehorses and laundresses, with off-centre, cropped compositions influenced by Japanese prints and photography. As his eyesight failed he turned increasingly to pastel and sculpture.",
      },
    ],
  },
  {
    slug: "van-gogh",
    name: { zh: "梵高", en: "Vincent van Gogh" },
    born: 1853,
    died: 1890,
    birthPlace: { zh: "荷蘭津德爾特", en: "Zundert, Netherlands" },
    nationality: "dutch",
    bio: [
      {
        zh: "梵高做過畫商店員、教師與傳教士，二十七歲才決心成為畫家。他的藝術生涯只有短短十年，卻留下約八百六十幅油畫及逾一千幅素描。",
        en: "Van Gogh worked as an art dealer's clerk, a teacher and a lay preacher before deciding, at twenty-seven, to become an artist. His career lasted barely ten years, yet he produced some 860 paintings and more than a thousand drawings.",
      },
      {
        zh: "他在巴黎接觸印象派與日本浮世繪後，色彩驟然明亮；1888 年遷往法國南部亞爾，進入創作高峰。他長期受精神疾病困擾，1890 年在奧維爾去世，年僅三十七歲。弟弟西奧一直在經濟與精神上支持他，兩人的書信是理解其藝術的重要資料。",
        en: "In Paris he discovered Impressionism and Japanese prints, and his palette suddenly brightened. In 1888 he moved to Arles in the south of France and entered his most productive period. He suffered from recurring mental illness and died at Auvers in 1890, aged thirty-seven. His brother Theo supported him financially and emotionally throughout, and their letters are an essential key to his art.",
      },
    ],
  },
  {
    slug: "seurat",
    name: { zh: "秀拉", en: "Georges Seurat" },
    born: 1859,
    died: 1891,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "秀拉在巴黎美術學院受訓，醉心於色彩科學理論。他以細小的純色點子並置作畫，開創了新印象派的點彩法。",
        en: "Trained at the École des Beaux-Arts, Seurat immersed himself in scientific theories of colour. By placing tiny dots of pure colour side by side, he founded the Neo-Impressionist technique of pointillism.",
      },
      {
        zh: "他作畫極其嚴謹，每幅大作都經過大量習作準備。他三十一歲猝逝，完成的大型油畫只有六幅。",
        en: "He worked with great rigour, preparing each major canvas with dozens of studies. He died suddenly at thirty-one, having completed only six large paintings.",
      },
    ],
  },
  {
    slug: "gauguin",
    name: { zh: "高更", en: "Paul Gauguin" },
    born: 1848,
    died: 1903,
    birthPlace: { zh: "巴黎", en: "Paris" },
    nationality: "french",
    bio: [
      {
        zh: "高更原是成功的證券經紀人，業餘作畫；1882 年股市崩盤後，他放棄事業與家庭，全職投身藝術。",
        en: "Gauguin was a successful stockbroker who painted as a hobby. After the stock market crash of 1882 he gave up his career, and eventually his family, to devote himself to art.",
      },
      {
        zh: "他曾在亞爾與梵高同住兩個月，最終以梵高割耳事件收場。1891 年起他遠赴法屬玻里尼西亞，尋找未受文明污染的「原始」世界，以平塗的濃烈色彩創作，死於馬克薩斯群島。他對當地少女的剝削，至今仍備受批評。",
        en: "He spent two months with Van Gogh in Arles, an episode that ended with Van Gogh cutting his ear. From 1891 he lived in French Polynesia, seeking a “primitive” world untouched by civilisation and painting in flat, intense colour; he died in the Marquesas Islands. His exploitation of young local girls remains the subject of strong criticism today.",
      },
    ],
  },
  {
    slug: "cezanne",
    name: { zh: "塞尚", en: "Paul Cézanne" },
    born: 1839,
    died: 1906,
    birthPlace: { zh: "法國艾克斯普羅旺斯", en: "Aix-en-Provence, France" },
    nationality: "french",
    bio: [
      {
        zh: "塞尚是銀行家之子，少年時與作家左拉是好友。他早年參加印象派聯展，後來回到故鄉艾克斯，孤獨地探索繪畫的結構。",
        en: "The son of a banker and a boyhood friend of the novelist Émile Zola, Cézanne showed with the Impressionists before withdrawing to his native Aix, where he pursued the structure of painting in solitude.",
      },
      {
        zh: "他主張「以圓柱體、球體和圓錐體處理自然」，把物象簡化為色塊與幾何形狀。畢加索與馬蒂斯都稱他為「我們所有人的父親」。",
        en: "He advised treating nature “by means of the cylinder, the sphere and the cone”, reducing objects to planes of colour and geometric form. Picasso and Matisse both called him “the father of us all”.",
      },
    ],
  },
  {
    slug: "klimt",
    name: { zh: "克林姆", en: "Gustav Klimt" },
    born: 1862,
    died: 1918,
    birthPlace: { zh: "奧地利維也納近郊鮑姆加滕", en: "Baumgarten, near Vienna, Austria" },
    nationality: "austrian",
    bio: [
      {
        zh: "克林姆是金匠之子，早年以裝飾公共建築的壁畫成名。1897 年他與一群藝術家脫離保守的藝術家協會，創立「維也納分離派」，並任首屆會長。",
        en: "The son of a goldsmith, Klimt first made his name decorating public buildings. In 1897 he led a group of artists who broke away from the conservative artists' association to found the Vienna Secession, becoming its first president.",
      },
      {
        zh: "他以金箔、馬賽克般的裝飾圖案與感性的女性形象著稱，其「黃金時期」作品融合了拜占庭藝術與新藝術運動。他死於 1918 年的流感大流行。",
        en: "He is known for gold leaf, mosaic-like ornament and sensual images of women; his “Golden Phase” fuses Byzantine art with Art Nouveau. He died during the influenza pandemic of 1918.",
      },
    ],
  },
  {
    slug: "munch",
    name: { zh: "孟克", en: "Edvard Munch" },
    born: 1863,
    died: 1944,
    birthPlace: { zh: "挪威勒滕", en: "Løten, Norway" },
    nationality: "norwegian",
    bio: [
      {
        zh: "孟克五歲喪母，少年時姐姐亦死於肺結核，父親則篤信宗教、性情陰鬱。他說：「疾病、瘋狂與死亡是守護我搖籃的黑色天使。」",
        en: "Munch lost his mother at five and his sister to tuberculosis in his teens, and his father was intensely religious and gloomy. “Illness, insanity and death were the black angels that kept watch over my cradle,” he wrote.",
      },
      {
        zh: "他把愛情、焦慮、嫉妒與死亡組織成「生命的飾帶」系列，以扭曲的線條與強烈色彩表達內心，成為表現主義的先驅。",
        en: "He organised his paintings of love, anxiety, jealousy and death into “The Frieze of Life”, using writhing line and intense colour to express inner experience and paving the way for Expressionism.",
      },
    ],
  },
  {
    slug: "kandinsky",
    name: { zh: "康丁斯基", en: "Wassily Kandinsky" },
    born: 1866,
    died: 1944,
    birthPlace: { zh: "莫斯科", en: "Moscow" },
    nationality: "russian",
    bio: [
      {
        zh: "康丁斯基原是法學講師，三十歲看到莫內的《乾草堆》後，決心赴慕尼黑學畫。他在德國創立「藍騎士」團體，著有《論藝術的精神》。",
        en: "Kandinsky was a law lecturer until, at thirty, a Monet Haystack moved him to study painting in Munich. In Germany he co-founded the Blue Rider group and wrote Concerning the Spiritual in Art.",
      },
      {
        zh: "他相信色彩與形狀如音符般能直接觸動靈魂，是抽象藝術的開拓者。他後來在包浩斯任教，納粹上台後遷居法國。",
        en: "He believed colours and shapes, like musical notes, could touch the soul directly, and was a pioneer of abstract art. He later taught at the Bauhaus and moved to France after the Nazis came to power.",
      },
    ],
  },
  {
    slug: "mondrian",
    name: { zh: "蒙德里安", en: "Piet Mondrian" },
    born: 1872,
    died: 1944,
    birthPlace: { zh: "荷蘭阿默斯福特", en: "Amersfoort, Netherlands" },
    nationality: "dutch",
    bio: [
      {
        zh: "蒙德里安早年畫荷蘭風景與風車，受立體派啟發後，逐步把樹木與建築簡化為水平與垂直的線條。",
        en: "Mondrian began by painting Dutch landscapes and windmills; inspired by Cubism, he gradually reduced trees and buildings to horizontal and vertical lines.",
      },
      {
        zh: "他與杜斯伯格等人創立「風格派」，提出「新造形主義」，只用直線、直角、三原色與黑白灰。二戰期間移居紐約，爵士樂令他晚年畫風更見節奏。",
        en: "With Theo van Doesburg and others he founded De Stijl and developed Neo-Plasticism, using only straight lines, right angles, the three primaries and black, white and grey. He moved to New York during the Second World War, where jazz gave his late work a new rhythm.",
      },
    ],
  },
  {
    slug: "aivazovsky",
    name: { zh: "艾華佐夫斯基", en: "Ivan Aivazovsky" },
    born: 1817,
    died: 1900,
    birthPlace: { zh: "克里米亞費奧多西亞", en: "Feodosia, Crimea" },
    nationality: "russian",
    bio: [
      {
        zh: "艾華佐夫斯基是亞美尼亞裔的俄國畫家，生於黑海岸邊的港口費奧多西亞。他在聖彼得堡帝國藝術學院學畫，二十多歲便獲委任為俄國海軍總部的畫家。",
        en: "Aivazovsky was a Russian painter of Armenian descent, born in the Black Sea port of Feodosia. He trained at the Imperial Academy of Arts in St Petersburg and in his twenties was appointed painter to the Main Naval Staff.",
      },
      {
        zh: "他一生畫了約六千幅作品，絕大部分是海景。他很少對景寫生，而是憑記憶在畫室作畫，認為浪花與閃電的一瞬無法照着畫下來。他筆下透光的海水與晨光，令他成為十九世紀最受歡迎的海景畫家之一。",
        en: "He produced some six thousand works, most of them seascapes. He rarely painted outdoors, working instead from memory in the studio, convinced that a breaking wave or a flash of lightning could not be copied from life. His translucent water and glowing light made him one of the most popular marine painters of the nineteenth century.",
      },
    ],
  },
  {
    slug: "cole",
    name: { zh: "托馬斯·科爾", en: "Thomas Cole" },
    born: 1801,
    died: 1848,
    birthPlace: { zh: "英格蘭蘭開夏郡", en: "Lancashire, England" },
    nationality: "american",
    bio: [
      {
        zh: "科爾生於英格蘭，十七歲隨家人移居美國，自學成為畫家。1825 年他沿哈德遜河寫生，畫下卡茨基爾山的荒野風光，一舉成名，被視為[[hudson-river-school|哈德遜河畫派]]的奠基人。",
        en: "Born in England, Cole emigrated with his family to the United States at seventeen and taught himself to paint. In 1825 he sketched along the Hudson River and made his name with views of the Catskill wilderness; he is regarded as the founder of the [[hudson-river-school]].",
      },
      {
        zh: "他不滿足於單純描繪風景，而是以連作講述道德寓言，例如五幅《帝國的歷程》及四幅《人生的旅程》。他四十七歲便因病去世，但深刻影響了美國的風景畫傳統。",
        en: "Not content with pure landscape, he painted moral allegories in series, such as the five-part Course of Empire and the four-part Voyage of Life. He died of illness at forty-seven, but shaped the whole tradition of American landscape painting.",
      },
    ],
  },
  {
    slug: "millais",
    name: { zh: "米萊", en: "John Everett Millais" },
    born: 1829,
    died: 1896,
    birthPlace: { zh: "英格蘭南安普敦", en: "Southampton, England" },
    nationality: "english",
    bio: [
      {
        zh: "米萊是神童，十一歲便成為皇家藝術學院史上最年輕的學生。1848 年他與羅塞蒂、亨特創立[[pre-raphaelites|拉斐爾前派]]，主張回歸拉斐爾以前藝術的真誠，以鮮明色彩與細緻入微的自然觀察，反抗學院的陳規。",
        en: "A child prodigy, Millais became the youngest student ever admitted to the Royal Academy Schools, at eleven. In 1848 he founded the [[pre-raphaelites|Pre-Raphaelite Brotherhood]] with Rossetti and Holman Hunt, seeking the sincerity of art before Raphael and rebelling against academic convention with bright colour and minute observation of nature.",
      },
      {
        zh: "後來他的畫風轉趨通俗，成為維多利亞時代最富有、最受歡迎的畫家之一，獲封男爵，並在去世那年出任皇家藝術學院院長。",
        en: "His later style became more popular in appeal; he grew into one of the richest and best-loved painters of the Victorian age, was made a baronet, and became President of the Royal Academy in the year of his death.",
      },
    ],
  },
];

export const artistMap = Object.fromEntries(artists.map((a) => [a.slug, a]));

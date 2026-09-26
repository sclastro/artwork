import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "raft-of-the-medusa",
  title: { zh: "梅杜莎之筏", en: "The Raft of the Medusa" },
  artist: "gericault",
  year: 1819,
  date: { zh: "1818–1819 年", en: "1818–19" },
  period: "romanticism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 491, w: 716 },
  museum: "louvre",
  image: "JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del Louvre, 1818-19).jpg",
  subjects: ["history", "sea"],
  summary: {
    zh: "一艘簡陋的木筏在怒海中漂流，筏上堆滿垂死與已死的人，只有頂端一個男子仍在拚命揮動布條，向遠方一艘幾乎看不見的船求救。傑利柯以真人大小描繪一宗震驚全國的海難，把當代的醜聞提升為史詩式的悲劇。",
    en: "A makeshift raft drifts on a raging sea, heaped with the dying and the dead; only at the top does one man still wave a cloth frantically towards a ship barely visible on the horizon. Géricault painted a shipwreck that scandalised France on a life-size scale, raising a contemporary scandal to the level of epic tragedy.",
  },
  background: [
    {
      zh: "1816 年 7 月，法國海軍護衛艦「梅杜莎號」在前往塞內加爾途中，於今毛里塔尼亞外海觸礁擱淺。艦長德舒馬雷是一名多年未曾出海的貴族，靠政治關係獲任命。救生艇不足，約一百五十人被安置在臨時紮成的木筏上。",
      en: "In July 1816 the French frigate Méduse ran aground off the coast of present-day Mauritania on its way to Senegal. Its captain, Viscount de Chaumareys, was an aristocrat who had hardly sailed in twenty years and owed his post to political connections. With too few lifeboats, some 150 people were put on a hastily built raft.",
    },
    {
      zh: "救生艇原本拖着木筏，卻很快割斷繩索，任由木筏漂流。十三天裏，筏上的人經歷飢渴、暴動、自殺甚至人吃人，最後只有十五人被「阿爾戈斯號」救起，其中數人其後死去。倖存者出版的記述，令事件成為抨擊波旁復辟政府無能的醜聞。",
      en: "The lifeboats were supposed to tow the raft but soon cut the ropes and left it adrift. Over thirteen days those aboard endured starvation, thirst, mutiny, suicide and cannibalism; only fifteen were rescued by the brig Argus, and several of them died afterwards. The survivors' published account turned the disaster into a scandal exposing the incompetence of the restored Bourbon government.",
    },
    {
      zh: "二十七歲的傑利柯為此投入一年多的時間：他訪問倖存者，請木匠按原樣造了一個木筏模型，又到醫院觀察垂死的病人，並把從停屍間取來的屍塊帶回畫室研究，力求真實。",
      en: "The twenty-seven-year-old Géricault devoted over a year to the project: he interviewed survivors, had a carpenter build a scale model of the raft, observed dying patients in hospital, and brought body parts from the morgue to his studio to study decomposition.",
    },
  ],
  technique: [
    {
      zh: "構圖由兩個金字塔組成：左邊是以{{3|桅杆}}與繩索構成的三角形，象徵絕望；右邊是由人體堆疊而上、以{{0|揮動布條的男子}}為頂點的三角形，象徵希望。視線由左下的屍體一路攀升到右上的求救者。",
      en: "The composition is built on two pyramids: one on the left formed by {{3|the mast}} and ropes, symbolising despair, and one on the right, a mound of bodies rising to {{0|the man waving the cloth}}, symbolising hope. The eye climbs from the corpses at lower left to the signaller at upper right.",
    },
    {
      zh: "人物以古典雕塑般的肌肉描繪，令人聯想到米開朗基羅；而陰暗的色調、強烈的明暗與奔放的筆觸，則屬於浪漫主義。傑利柯大量使用瀝青顏料以加深陰影，可惜這種顏料不穩定，令畫面逐漸變暗龜裂。",
      en: "The figures have the heroic musculature of classical sculpture, recalling Michelangelo, while the sombre palette, dramatic chiaroscuro and vigorous handling are Romantic. Géricault used large amounts of bitumen to deepen the shadows; the unstable pigment has caused the surface to darken and crack.",
    },
    {
      zh: "木筏向觀者傾斜，前景的{{4|屍體}}幾乎滑出畫面，令觀者彷彿站在木筏邊緣，直接面對這場災難。",
      en: "The raft tilts towards us, and {{4|the bodies}} in the foreground almost slide out of the frame, placing the viewer at the edge of the raft, face to face with the disaster.",
    },
  ],
  symbolism: [
    {
      title: { zh: "希望與絕望", en: "Hope and despair" },
      body: {
        zh: "畫面捕捉的是倖存者第一次看到{{1|救援船}}的一刻。但那艘船在地平線上細小如一點，而且當時並沒有看見他們。希望與絕望同時存在，令這一刻格外令人揪心。",
        en: "The painting captures the moment the survivors first sighted {{1|the rescue ship}}. But it is a mere speck on the horizon and, at that moment, did not see them. Hope and despair coexist, making the scene almost unbearable.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "父親與兒子", en: "Father and son" },
      body: {
        zh: "左方一位{{2|老人}}抱着死去兒子的屍體，茫然望向遠方，對救援毫無反應。這個形象借自但丁《神曲》中吞食子孫的烏戈利諾伯爵，暗示了木筏上人吃人的慘劇。",
        en: "On the left {{2|an old man}} holds the body of his dead son, staring blankly into space, indifferent to rescue. The figure recalls Count Ugolino in Dante's Inferno, who devoured his children, a veiled reference to the cannibalism on the raft.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "黑人男子", en: "The Black signaller" },
      body: {
        zh: "位於金字塔頂端、揮動布條的是一名黑人男子。在奴隸貿易仍未廢除的年代，傑利柯把他放在希望的頂點，被不少學者視為支持廢奴運動的表態。",
        en: "At the apex, waving the cloth, is a Black man. At a time when the slave trade had not been abolished, Géricault placed him at the summit of hope, a choice many scholars read as a statement of support for abolition.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "年輕的德拉克洛瓦曾為這幅畫擔任模特兒，前景中央一個面朝下、手臂伸出的人物，據說就是以他為原型。",
      en: "The young Delacroix posed for the painting; the face-down figure with outstretched arm in the centre foreground is said to be modelled on him.",
    },
    {
      zh: "1819 年沙龍展出時，為免觸怒政府，畫作以《海難場景》為名展出，但人人都知道它描繪的是甚麼。",
      en: "To avoid offending the government, it was exhibited at the Salon of 1819 as Scene of a Shipwreck, but everyone knew what it depicted.",
    },
    {
      zh: "傑利柯剃光頭髮，閉門作畫八個月，以免分心。",
      en: "Géricault shaved his head and shut himself away in his studio for eight months to avoid distractions.",
    },
  ],
  legacy: [
    {
      zh: "《梅杜莎之筏》把當代新聞事件以歷史畫的規模呈現，打破了學院只畫古代與神話的傳統，是浪漫主義的奠基之作。它啟發了德拉克洛瓦的《自由引導人民》，以至後來庫爾貝等寫實主義畫家對當代社會的關注。",
      en: "The Raft of the Medusa presented a contemporary news event on the scale of history painting, breaking the academic tradition of painting only ancient and mythological subjects. A founding work of Romanticism, it inspired Delacroix's Liberty Leading the People and later the Realists' engagement with contemporary society.",
    },
    {
      zh: "今天，「梅杜莎之筏」已成為描述災難與被遺棄處境的比喻，常被當代藝術家用以回應難民危機等議題。",
      en: "Today “the raft of the Medusa” has become a metaphor for disaster and abandonment, often invoked by contemporary artists responding to issues such as the refugee crisis.",
    },
  ],
  hotspots: [
    { x: 0.68, y: 0.26, title: { zh: "揮動布條的男子", en: "The signaller" }, body: { zh: "站在酒桶上的黑人男子高舉布條，向遠方的船隻求救。", en: "Standing on a barrel, a Black man raises a cloth to signal the distant ship." } },
    { x: 0.93, y: 0.39, title: { zh: "遠方的救援船", en: "The distant ship" }, body: { zh: "地平線上幾乎看不見的一點，是「阿爾戈斯號」。", en: "An almost invisible speck on the horizon: the Argus." } },
    { x: 0.3, y: 0.62, title: { zh: "父親與死去的兒子", en: "Father and dead son" }, body: { zh: "老人以手托頭，抱着兒子的屍體，對救援毫無反應。", en: "Head in hand, the old man holds his son's corpse, unmoved by the hope of rescue." } },
    { x: 0.27, y: 0.25, title: { zh: "桅杆與帆", en: "Mast and sail" }, body: { zh: "被風吹脹的帆把木筏推離救援船的方向。", en: "The wind-filled sail pushes the raft away from the rescue ship." } },
    { x: 0.45, y: 0.8, title: { zh: "前景的屍體", en: "Bodies in the foreground" }, body: { zh: "面朝下的屍體，據說以年輕的德拉克洛瓦為模特兒。", en: "The face-down body, said to be modelled on the young Delacroix." } },
    { x: 0.07, y: 0.36, title: { zh: "巨浪", en: "The great wave" }, body: { zh: "左方的巨浪隨時可能吞沒木筏。", en: "A towering wave on the left threatens to engulf the raft." } },
  ],
  related: ["liberty-leading-the-people", "the-third-of-may-1808", "the-creation-of-adam"],
};

export default artwork;

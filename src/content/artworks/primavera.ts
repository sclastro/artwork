import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "primavera",
  title: { zh: "春", en: "Primavera" },
  artist: "botticelli",
  year: 1480,
  date: { zh: "約 1477–1482 年", en: "c. 1477–82" },
  period: "renaissance",
  medium: { zh: "木板蛋彩", en: "Tempera on panel" },
  dimensions: { h: 202, w: 314 },
  museum: "uffizi",
  image: "Botticelli-primavera.jpg",
  subjects: ["mythology", "landscape"],
  summary: {
    zh: "在一片結滿金橙的樹林裏，九位神話人物由右至左演出春天的降臨。《春》是西方藝術史上最著名、亦最難解的畫作之一，畫中辨認得出的植物多達數百種。",
    en: "In a grove heavy with golden oranges, nine mythological figures enact the arrival of spring from right to left. Primavera is one of the most famous and most enigmatic paintings in Western art, and hundreds of plant species can be identified in it.",
  },
  background: [
    {
      zh: "這幅巨大的木板畫原本掛在美第奇家族旁支洛倫佐·迪皮耶爾弗朗切斯科·德美第奇的佛羅倫斯宅邸。有學者認為它是為其 1482 年的婚禮而作，畫中對愛情、婚姻與豐饒的歌頌與此十分吻合。",
      en: "This huge panel originally hung in the Florentine town house of Lorenzo di Pierfrancesco de' Medici, from a junior branch of the Medici family. Some scholars link it to his wedding in 1482, which would suit its celebration of love, marriage and fertility.",
    },
    {
      zh: "畫作的內容大量參考古羅馬詩人奧維德的《歲時記》與盧克萊修等人的詩句，反映了美第奇圈子中人文學者對古典文學的熱愛。然而畫家並沒有留下說明，五百年來學者提出了無數種解讀。",
      en: "Its imagery draws on the Roman poet Ovid's Fasti and on Lucretius and other classical writers, reflecting the passion for ancient literature among the humanists of the Medici circle. The artist left no explanation, however, and scholars have proposed countless readings over five centuries.",
    },
    {
      zh: "《春》與《維納斯的誕生》並非一對，但兩者同樣以異教神話為題、同樣出自波提切利之手，又都在十九世紀移入烏菲茲美術館，今天並列於同一展廳。",
      en: "Primavera and The Birth of Venus were not made as a pair, but both treat pagan myth, both are by Botticelli, and both entered the Uffizi in the nineteenth century, where they now hang in the same room.",
    },
  ],
  technique: [
    {
      zh: "畫面宛如一張掛毯：人物排成一列，彼此之間幾乎沒有深度，背景的深色樹林像布景一樣把他們襯托出來。這種平面化的處理源自北方掛毯，在當時的佛羅倫斯極受歡迎。",
      en: "The picture reads like a tapestry: the figures stand in a frieze with almost no depth between them, set off by the dark trees like a stage backdrop. This flattened treatment recalls the Northern tapestries so fashionable in Florence at the time.",
    },
    {
      zh: "植物描繪得極其細緻。學者在草地上辨認出約五百種植物，其中約一百九十種開着花，大部分都能在佛羅倫斯周邊的春季原野找到。{{2|花神}}裙上的花卉尤其精美。",
      en: "The plants are rendered with extraordinary care. Botanists have identified around five hundred plant species in the meadow, some 190 of them in flower, most of which grow in the countryside around Florence in spring. The flowers on {{2|Flora's}} dress are especially exquisite.",
    },
    {
      zh: "{{5|三美神}}身上的薄紗透明得幾乎看不見，波提切利以極淡的白色罩在膚色之上，表現出紗衣的飄逸。人物的動作連綿如舞蹈，視線由右至左依次流轉。",
      en: "The veils of {{5|the Three Graces}} are so sheer they almost vanish; Botticelli laid the faintest white over the flesh tones to suggest floating gauze. The figures' movements link like a dance, drawing the eye from right to left.",
    },
  ],
  symbolism: [
    {
      title: { zh: "由右至左的故事", en: "A story from right to left" },
      body: {
        zh: "右方的{{0|西風之神}}追逐寧芙克洛里斯，她口中吐出鮮花，隨即化身為{{2|花神芙洛拉}}，把玫瑰撒向大地。這段變形取自奧維德的詩，象徵春風帶來萬物復甦。",
        en: "On the right, {{0|Zephyr, the west wind}}, seizes the nymph Chloris; flowers spill from her mouth as she is transformed into {{2|Flora}}, who scatters roses on the earth. The metamorphosis comes from Ovid and signifies the spring wind bringing the world back to life.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "維納斯與愛神", en: "Venus and Cupid" },
      body: {
        zh: "居中的維納斯站在一個拱形的樹叢前，彷彿置身聖母像的神龕。她頭上的{{4|邱比特}}蒙着眼睛，隨意射出愛之箭，暗示愛情是盲目的。",
        en: "Venus stands at the centre before an arch of foliage, almost like the Virgin in a shrine. Above her, a blindfolded {{4|Cupid}} aims his arrow at random, a reminder that love is blind.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "三美神", en: "The Three Graces" },
      body: {
        zh: "三位女神手牽手跳舞，常被解讀為貞潔、美麗與歡愉。邱比特的箭正對着中間那位，她望向左方的墨丘利，或許正要墮入愛河。",
        en: "The three dancing goddesses are often read as Chastity, Beauty and Pleasure. Cupid's arrow is aimed at the central one, who gazes towards Mercury on the left; she may be about to fall in love.",
      },
      hotspot: 5,
    },
    {
      title: { zh: "墨丘利驅散雲霧", en: "Mercury dispels the clouds" },
      body: {
        zh: "最左方的{{6|墨丘利}}舉起權杖撥開雲霧，確保花園永遠晴朗。在新柏拉圖主義中，他亦代表引導靈魂上升的理性。",
        en: "At the far left, {{6|Mercury}} raises his staff to push away the clouds and keep the garden in eternal sunshine. In Neoplatonic terms he also stands for reason, guiding the soul upward.",
      },
      hotspot: 6,
    },
  ],
  anecdotes: [
    {
      zh: "畫中的金色果實是橙。橙在拉丁文中稱為「mala medica」，與美第奇家族的姓氏諧音，這片橙林可能是對贊助人的致意。",
      en: "The golden fruit are oranges. In Latin oranges were called mala medica, a pun on the Medici name, so the orange grove may be a compliment to the patrons.",
    },
    {
      zh: "「春」這個名稱並非畫家所取，而是十六世紀瓦薩里描述此畫時提到畫中的花神象徵春天，後人便沿用至今。",
      en: "The title Primavera, “Spring”, was not given by the artist. It derives from Vasari's sixteenth-century description, which mentions Flora as a sign of spring, and the name stuck.",
    },
    {
      zh: "維納斯微微隆起的腹部並非表示懷孕，而是十五世紀的審美標準；當時理想的女性身形正是如此。",
      en: "Venus's rounded belly does not mean she is pregnant; it reflects fifteenth-century ideals of female beauty.",
    },
  ],
  legacy: [
    {
      zh: "《春》展示了異教神話可以承載深刻的哲學寓意，成為文藝復興人文主義藝術的代表作。它對拉斐爾前派及十九世紀末象徵主義畫家影響深遠，他們從中汲取了夢幻、裝飾與詩意的氣質。",
      en: "Primavera showed that pagan myth could carry profound philosophical meaning, and it became an emblem of Renaissance humanist art. It deeply influenced the Pre-Raphaelites and the Symbolists of the late nineteenth century, who drew on its dreamlike, decorative and poetic qualities.",
    },
    {
      zh: "它亦是植物學家與園藝愛好者的寶庫；近年不少研究以這幅畫為資料，探討文藝復興時期托斯卡納的原生植物。",
      en: "It is also a treasure trove for botanists and gardeners; recent studies have used it as evidence for the native flora of Renaissance Tuscany.",
    },
  ],
  hotspots: [
    { x: 0.89, y: 0.35, title: { zh: "西風之神", en: "Zephyr" }, body: { zh: "藍綠色的西風之神從樹林間撲出，雙頰鼓起，身體前傾，連樹枝亦被他吹得彎曲。", en: "The blue-green wind god bursts from the trees, cheeks puffed and body leaning forward; even the branches bend in his wake." } },
    { x: 0.78, y: 0.5, title: { zh: "寧芙克洛里斯", en: "The nymph Chloris" }, body: { zh: "被西風抓住的克洛里斯驚惶回望，口中吐出的花朵與身旁花神的衣裙相連，表現變形的過程。", en: "Seized by Zephyr, Chloris looks back in alarm. The flowers spilling from her mouth merge into the dress of the figure beside her, showing her transformation." } },
    { x: 0.66, y: 0.52, title: { zh: "花神芙洛拉", en: "Flora" }, body: { zh: "變身後的花神穿着繡滿花卉的長裙，神情安詳自信，正把懷中的玫瑰撒向大地。", en: "Transformed into Flora, she wears a gown covered in flowers and, calm and assured, scatters roses from her lap." } },
    { x: 0.52, y: 0.35, title: { zh: "維納斯", en: "Venus" }, body: { zh: "愛神維納斯略略側頭，舉起右手，像在迎接觀者進入她的花園。", en: "Venus tilts her head and raises her right hand, as if welcoming the viewer into her garden." } },
    { x: 0.51, y: 0.07, title: { zh: "邱比特", en: "Cupid" }, body: { zh: "蒙眼的邱比特在維納斯頭頂盤旋，火焰般的箭頭指向三美神。", en: "Blindfolded Cupid hovers over Venus, his flaming arrow pointed at the Three Graces." } },
    { x: 0.3, y: 0.42, title: { zh: "三美神", en: "The Three Graces" }, body: { zh: "三位女神手指交纏，高舉的手形成優雅的節奏，薄紗在身上飄動。", en: "The Graces' fingers intertwine; their raised hands create an elegant rhythm as sheer veils drift around them." } },
    { x: 0.09, y: 0.42, title: { zh: "墨丘利", en: "Mercury" }, body: { zh: "披紅袍、佩短劍的墨丘利背向眾人，舉起蛇杖撥開天上的雲。", en: "Wearing a red cloak and a sword, Mercury turns away from the group and lifts his caduceus to clear the clouds." } },
  ],
  related: ["the-birth-of-venus", "pilgrimage-to-cythera", "the-kiss"],
};

export default artwork;

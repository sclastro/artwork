import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "death-of-marat",
  title: { zh: "馬拉之死", en: "The Death of Marat" },
  artist: "david",
  year: 1793,
  period: "neoclassicism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 165, w: 128 },
  museum: "royal-museums-brussels",
  image: "Death of Marat by David.jpg",
  subjects: ["history", "portrait"],
  summary: {
    zh: "法國大革命激進派記者馬拉在浴缸中遇刺，手中仍握着羽毛筆與兇手的信。大衛在他死後數月內完成此畫，把一宗政治謀殺化為一幅莊嚴的「革命聖像」。",
    en: "The radical revolutionary journalist Jean-Paul Marat lies murdered in his bath, still holding his quill and his killer's letter. David painted the picture within months of the death, turning a political assassination into a solemn icon of the Revolution.",
  },
  background: [
    {
      zh: "馬拉是雅各賓派的激進記者，主辦報章《人民之友》，鼓吹清洗革命的敵人。他患有嚴重的皮膚病，須長時間浸在藥浴中，於是在浴缸上架起木板辦公。",
      en: "Marat was a radical Jacobin journalist whose newspaper L'Ami du peuple called for purging the Revolution's enemies. He suffered from a severe skin disease and spent long hours in a medicinal bath, working on a board laid across the tub.",
    },
    {
      zh: "1793 年 7 月 13 日，支持溫和派吉倫特派的年輕女子夏洛特·科黛以告密為名求見馬拉，趁機以廚刀刺死他。科黛四天後被送上斷頭台。",
      en: "On 13 July 1793 Charlotte Corday, a young woman sympathetic to the moderate Girondins, gained entry by promising information on traitors and stabbed him to death with a kitchen knife. She was guillotined four days later.",
    },
    {
      zh: "大衛是馬拉的朋友，前一天才探望過他。國民公會委託大衛為馬拉作畫，他在三個多月內完成，畫作隨即在會議廳展出，成為政治宣傳的一部分。",
      en: "David was Marat's friend and had visited him the day before. The National Convention asked him to commemorate Marat; he finished the painting in just over three months, and it was displayed in the assembly hall as part of revolutionary propaganda.",
    },
  ],
  technique: [
    {
      zh: "畫面上半部是一片空無一物的深色牆壁，佔去整幅畫的一半。這片虛空令人感到沉重與寂靜，也令光線集中照射的{{0|馬拉}}更加突出。",
      en: "The upper half of the canvas is an empty dark wall, taking up half the picture. This void creates a sense of weight and silence and makes the brightly lit figure of {{0|Marat}} stand out all the more.",
    },
    {
      zh: "大衛刻意美化了馬拉：現實中他因病皮膚潰爛，畫中卻光滑如雕像；浴室亦簡化成只有浴缸、木箱與布料。{{1|傷口}}只是一道細小的切口，幾乎不見血腥。",
      en: "David deliberately idealised Marat: in life his skin was ravaged by disease, but here it is smooth as marble; the bathroom is reduced to a tub, a crate and some cloth. {{1|The wound}} is a small, neat cut, with almost no gore.",
    },
    {
      zh: "構圖簡潔而莊嚴，水平的浴缸與垂直的{{6|木箱}}形成穩定的結構。木箱上寫着「致馬拉，大衛」，猶如一塊墓碑。",
      en: "The composition is spare and solemn, the horizontal bath and vertical {{6|crate}} forming a stable structure. The crate bears the words “À Marat, David”, like a tombstone.",
    },
  ],
  symbolism: [
    {
      title: { zh: "革命的聖殤", en: "A revolutionary Pietà" },
      body: {
        zh: "馬拉垂下的右臂，令人聯想到米開朗基羅《聖殤》或卡拉瓦喬《基督下葬》中基督的手臂。大衛借用基督教殉道者的形象，把馬拉塑造成為人民犧牲的「革命聖人」。",
        en: "Marat's hanging right arm recalls Christ's arm in Michelangelo's Pietà or Caravaggio's Entombment. David borrowed the imagery of Christian martyrdom to present Marat as a revolutionary saint who died for the people.",
      },
      hotspot: 0,
    },
    {
      title: { zh: "兩封信", en: "Two letters" },
      body: {
        zh: "馬拉左手握着{{2|科黛的信}}，上面寫着：「我十分不幸，這已足以讓我得到你的恩惠。」木箱上則有另一張字條與一張紙幣，是馬拉要送給一位陣亡士兵的遺孀。兩相對照，突顯兇手的狡詐與死者的仁慈。",
        en: "In his left hand Marat holds {{2|Corday's letter}}, which reads: “It is enough that I am very unhappy to have a right to your benevolence.” On the crate lies another note with a banknote, which Marat was sending to the widow of a soldier. The contrast highlights the killer's deceit and the victim's kindness.",
      },
      hotspot: 2,
    },
    {
      title: { zh: "刀與筆", en: "Knife and pen" },
      body: {
        zh: "地上的{{3|染血的刀}}與馬拉手中的{{4|羽毛筆}}遙遙相對：一邊是暴力，一邊是言論與思想。",
        en: "{{3|The bloodied knife}} on the floor faces {{4|the quill}} in Marat's hand: violence on one side, words and ideas on the other.",
      },
      hotspot: 3,
    },
  ],
  anecdotes: [
    {
      zh: "羅伯斯庇爾倒台後，馬拉的聲望一落千丈，畫作被歸還大衛。大衛流亡布魯塞爾後，畫作留在家人手中，1893 年才捐贈比利時皇家美術館。",
      en: "After Robespierre's fall Marat's reputation collapsed and the painting was returned to David. After his exile to Brussels it stayed with his family, who gave it to the Royal Museums of Fine Arts of Belgium in 1893.",
    },
    {
      zh: "木箱底部寫着「共和二年」，這是法國大革命新曆法的年份，即 1793 至 1794 年。",
      en: "The base of the crate is inscribed “L'An Deux” (Year Two) in the new Revolutionary calendar, corresponding to 1793–94.",
    },
    {
      zh: "作家波特萊爾在十九世紀盛讚此畫「充滿溫柔與哀傷」，是大衛最偉大的作品。",
      en: "In the nineteenth century Baudelaire praised it as full of tenderness and sorrow, David's greatest work.",
    },
  ],
  legacy: [
    {
      zh: "《馬拉之死》被視為最早的現代政治圖像之一：它把真實事件轉化為具有宗教力量的宣傳畫面。二十世紀的政治海報以至新聞攝影，都延續了這種把死者英雄化的手法。",
      en: "The Death of Marat is considered one of the first modern political images, transforming a real event into propaganda with religious force. Twentieth-century political posters and even news photography have continued this way of heroising the dead.",
    },
    {
      zh: "它亦啟發了後世無數藝術家的回應，由畢加索、孟克到當代攝影師，都曾重新演繹浴缸中的馬拉。",
      en: "It has also inspired countless artistic responses; Picasso, Munch and contemporary photographers have all restaged Marat in his bath.",
    },
  ],
  hotspots: [
    { x: 0.16, y: 0.48, title: { zh: "馬拉", en: "Marat" }, body: { zh: "頭纏白巾的馬拉仰靠浴缸邊，神情平靜，猶如沉睡。", en: "His head wrapped in a white cloth, Marat leans back against the tub, peaceful as if asleep." } },
    { x: 0.26, y: 0.56, title: { zh: "傷口", en: "The wound" }, body: { zh: "胸前一道細小的傷口，是畫中唯一明顯的暴力痕跡。", en: "A small wound in the chest is the only obvious sign of violence." } },
    { x: 0.76, y: 0.56, title: { zh: "科黛的信", en: "Corday's letter" }, body: { zh: "信上寫着日期與科黛的名字，以及她騙取馬拉信任的句子。", en: "The letter bears the date, Corday's name and the words she used to win Marat's trust." } },
    { x: 0.17, y: 0.97, title: { zh: "染血的刀", en: "The bloodied knife" }, body: { zh: "兇刀被丟在地上，刀刃沾着血。", en: "The murder weapon lies on the floor, its blade stained with blood." } },
    { x: 0.5, y: 0.89, title: { zh: "羽毛筆", en: "The quill" }, body: { zh: "馬拉垂下的右手仍握着羽毛筆。", en: "Marat's hanging right hand still holds his quill." } },
    { x: 0.66, y: 0.66, title: { zh: "字條與紙幣", en: "Note and banknote" }, body: { zh: "木箱上的字條與紙幣，是要送給一位陣亡士兵遺孀的。", en: "The note and banknote on the crate were meant for a fallen soldier's widow." } },
    { x: 0.64, y: 0.92, title: { zh: "木箱題字", en: "The crate inscription" }, body: { zh: "「致馬拉，大衛」，猶如墓碑上的銘文。", en: "“À Marat, David”, like an epitaph on a tombstone." } },
  ],
  related: ["oath-of-the-horatii", "raft-of-the-medusa", "the-third-of-may-1808"],
};

export default artwork;

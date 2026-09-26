import type { Artwork } from "../types";

const artwork: Artwork = {
  slug: "oath-of-the-horatii",
  title: { zh: "荷拉斯兄弟之誓", en: "Oath of the Horatii" },
  artist: "david",
  year: 1784,
  period: "neoclassicism",
  medium: { zh: "布面油畫", en: "Oil on canvas" },
  dimensions: { h: 330, w: 425 },
  museum: "louvre",
  image: "Jacques-Louis David - Oath of the Horatii - Google Art Project.jpg",
  subjects: ["history"],
  summary: {
    zh: "三兄弟伸直手臂，向父親高舉的三把劍宣誓：為羅馬戰死沙場。右方的女眷則悲痛欲絕。大衛以冷峻的線條與嚴整的構圖，歌頌愛國與犧牲，這幅畫成為新古典主義的宣言，也預示了即將到來的法國大革命。",
    en: "Three brothers thrust out their arms and swear on the three swords their father raises: they will fight to the death for Rome. On the right, the women collapse in grief. With stern lines and rigorous composition, David glorified patriotism and sacrifice; the painting became the manifesto of Neoclassicism and foreshadowed the French Revolution.",
  },
  background: [
    {
      zh: "故事出自古羅馬史家李維的記載：羅馬與鄰城阿爾巴隆加交戰，雙方決定各派三名勇士決鬥定勝負。羅馬派出荷拉斯三兄弟，阿爾巴派出庫里亞斯三兄弟。然而兩家是姻親：荷拉斯家的妹妹卡米拉與一名庫里亞斯訂婚，而庫里亞斯家的妹妹薩賓娜則嫁給了荷拉斯家的長子。",
      en: "The story comes from the Roman historian Livy. Rome and neighbouring Alba Longa, at war, agreed to settle the conflict by a combat between three champions each. Rome chose the three Horatii brothers, Alba the three Curiatii. But the families were intertwined: the Horatii's sister Camilla was engaged to one of the Curiatii, and the Curiatii's sister Sabina was married to one of the Horatii.",
    },
    {
      zh: "這幅畫由法國王室委託，大衛特地前往羅馬，在古典遺跡中完成創作。1785 年在巴黎沙龍展出時引起轟動，觀眾排隊觀看，被譽為新時代的開端。",
      en: "The painting was commissioned by the French crown, and David went to Rome to paint it among the classical ruins. When shown at the Paris Salon of 1785 it caused a sensation; crowds queued to see it, and it was hailed as the start of a new era.",
    },
    {
      zh: "諷刺的是，這幅為國王路易十六繪畫的作品，其「為國犧牲」的精神後來被革命者奉為圭臬。大衛本人亦成為激進的革命黨人，更投票贊成處決國王。",
      en: "Ironically, this work painted for Louis XVI was later embraced by revolutionaries for its spirit of self-sacrifice for the nation. David himself became a radical revolutionary and voted for the King's execution.",
    },
  ],
  technique: [
    {
      zh: "背景的三道拱門把畫面分為三部分，各自框住一組人物：左邊是{{0|三兄弟}}，中間是{{2|父親}}，右邊是{{3|女眷}}。這種「三」的節奏貫穿全畫：三兄弟、三把劍、三道拱門。",
      en: "Three arches divide the background into three parts, each framing a group: {{0|the brothers}} on the left, {{2|the father}} in the centre, {{3|the women}} on the right. The rhythm of three runs through the whole picture: three brothers, three swords, three arches.",
    },
    {
      zh: "男性以剛直的線條組成：伸直的手臂、繃緊的雙腿、筆直的長矛，充滿力量與決心。女性則以柔軟的曲線構成，身體癱軟、低頭哭泣。大衛以線條本身表達理性與情感、公義與私情的對立。",
      en: "The men are built from rigid lines, outstretched arms, braced legs and upright spear, full of strength and resolve. The women are all soft curves, slumped and weeping. David used line itself to express the conflict between reason and emotion, public duty and private feeling.",
    },
    {
      zh: "舞台般的淺空間、均勻的光線、光滑得看不見筆觸的畫面，都是新古典主義的典型特徵，與洛可可的柔媚輕快形成強烈對比。",
      en: "The shallow, stage-like space, even lighting and smooth, brushless surface are hallmarks of Neoclassicism, in stark contrast to the soft frivolity of the Rococo.",
    },
  ],
  symbolism: [
    {
      title: { zh: "三把劍", en: "The three swords" },
      body: {
        zh: "位於畫面正中央的{{1|三把劍}}是全畫的焦點，由父親高舉，象徵國家賦予的使命。三兄弟的手伸向劍，表示他們把個人生命交給國家。",
        en: "{{1|The three swords}} at the exact centre are the focus of the painting, raised by the father as the mission entrusted by the state. The brothers' hands reach towards them, pledging their lives to their country.",
      },
      hotspot: 1,
    },
    {
      title: { zh: "公與私的衝突", en: "Duty versus family" },
      body: {
        zh: "右方的女眷預見了悲劇：無論哪一方勝出，她們都會失去至親。李維記載，最終荷拉斯家只有一兄弟生還，他回城時見妹妹卡米拉為死去的未婚夫哭泣，竟怒而殺之。",
        en: "The women on the right foresee tragedy: whichever side wins, they will lose someone they love. Livy tells that only one Horatius survived; when he returned and found his sister Camilla weeping for her dead fiancé, he killed her in anger.",
      },
      hotspot: 3,
    },
    {
      title: { zh: "並不存在的一幕", en: "An invented scene" },
      body: {
        zh: "李維的原文並沒有「宣誓」這一幕，這是大衛自己的創造。他把故事濃縮成一個莊嚴的誓言瞬間，令道德意義一目了然。",
        en: "Livy's text contains no oath scene; David invented it, condensing the story into a single solemn moment of vow that makes its moral meaning unmistakable.",
      },
      hotspot: 0,
    },
  ],
  anecdotes: [
    {
      zh: "大衛不理會王室規定的尺寸，自行把畫布放大，令畫作更具震撼力。",
      en: "David ignored the size stipulated by the crown and enlarged the canvas to make the painting more imposing.",
    },
    {
      zh: "據說為了捕捉準確的古羅馬服飾和兵器，大衛在羅馬仔細研究古代浮雕與雕像，並請人按古代樣式製作道具。",
      en: "To get Roman costume and weapons right, David is said to have studied ancient reliefs and statues in Rome and had props made on ancient models.",
    },
    {
      zh: "畫中「伸臂宣誓」的姿勢，日後被革命時期的各種宣誓儀式模仿，例如大衛本人所畫的《網球場宣誓》。",
      en: "The outstretched-arm oath gesture was later echoed in revolutionary ceremonies, including David's own Tennis Court Oath.",
    },
  ],
  legacy: [
    {
      zh: "《荷拉斯兄弟之誓》確立了新古典主義的藝術語言，影響了整整一代法國畫家，包括大衛的學生安格爾、格羅與傑拉德。它亦證明繪畫可以成為傳播政治理想的有力工具。",
      en: "Oath of the Horatii established the artistic language of Neoclassicism and shaped a whole generation of French painters, including David's pupils Ingres, Gros and Gérard. It also showed that painting could be a powerful vehicle for political ideals.",
    },
    {
      zh: "它嚴謹的構圖至今仍是美術教育的經典範例，常被用來說明線條、節奏與構圖如何傳達意義。",
      en: "Its rigorous composition remains a classic example in art education, used to show how line, rhythm and design convey meaning.",
    },
  ],
  hotspots: [
    { x: 0.3, y: 0.44, title: { zh: "三兄弟", en: "The three brothers" }, body: { zh: "三兄弟身體緊靠，手臂整齊地伸向前方，宛如一個整體。", en: "The three brothers stand pressed together, arms extended in unison as if one body." } },
    { x: 0.45, y: 0.4, title: { zh: "三把劍", en: "The three swords" }, body: { zh: "父親高舉的三把劍位於畫面中心，劍刃閃着冷光。", en: "The three swords raised by the father sit at the centre, their blades glinting coldly." } },
    { x: 0.55, y: 0.48, title: { zh: "父親", en: "The father" }, body: { zh: "身披紅袍的老荷拉斯仰望天空，主持神聖的誓言。", en: "The elder Horatius in a red cloak looks heavenward as he presides over the sacred oath." } },
    { x: 0.86, y: 0.6, title: { zh: "悲痛的女眷", en: "The grieving women" }, body: { zh: "薩賓娜與卡米拉倚在一起哭泣，她們的至親將在決鬥中對陣。", en: "Sabina and Camilla lean together in tears; their loved ones will face each other in combat." } },
    { x: 0.67, y: 0.64, title: { zh: "母親與孩子", en: "Mother and children" }, body: { zh: "後方的老婦人擁着孫兒，黑衣暗示哀悼。", en: "Behind, an old woman shelters her grandchildren, her dark robe suggesting mourning." } },
    { x: 0.2, y: 0.16, title: { zh: "三道拱門", en: "The three arches" }, body: { zh: "羅馬式拱門與多立克柱，把畫面分為三部分。", en: "Roman arches and Doric columns divide the picture into three parts." } },
  ],
  related: ["death-of-marat", "the-school-of-athens", "liberty-leading-the-people"],
};

export default artwork;

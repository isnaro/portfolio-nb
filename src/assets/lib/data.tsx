import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import FlexProMockup from "../../assets/img/flexproscreenshort.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import elementoricon from "../../assets/icons/elementor-icon.svg";
import woocommerceicon from "../../assets/icons/woocommerce-icon.svg";
import splineicon from "..//..//assets/icons/splinelogo.png";
import squarespaceicon from "..//..//assets/icons/squarespace-icon.svg";
import discordlogo from "../../assets/icons/icons8-discord-25.svg";
import instagramLogo from "../../assets/icons/icons8-instagram.svg";
import githublogo from "../icons/icons8-github.svg";
import { BsInstagram } from "react-icons/bs";
import phpicon from "../icons/php-icon.svg";
import fluttericon from "../icons/flutter-svgrepo-com.svg";

export const headerIntroData = {
  title: {
    de: "Hi, I'm NB",
    en: "Hi, I'm NB",
  },
  subtitle: "Frontend/UI Developer ",
  description: {
    de: "أنا أطور وأصمم واجهات المستخدم وملهم بكل مايخص البرمجة و التكنولوجيا بشكل عام",
    en: "“I develop and design User Interfaces and inspired by everything related to programming and technology in general.”",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "تواصل معي",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "البعض من أعمالي",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
 
  {
    title: "FlexPro",
    description:
    "فليكسبرو هي العلامة التجارية الجزائرية رقم واحد المتخصصة في توفير المعدات الرياضية . كخبير ووردبريس وإليمنتور، كان عملي تصميم متجرهم الإلكتروني وربطه بووكوميرس",
    description_EN:
      "FlexPro is the No. 1 Algerian brand that specializes in providing professional sports equipment. As a WordPress and Elementor expert, my job was to design their online store and link it with WooCommerce",
    technologies: [
      { name: "WordPress", icon: wordpressicon },
      { name: "WooCommerce", icon: woocommerceicon},    
      { name: "Elementor Pro", icon: elementoricon },
      { name: "PHP", icon: phpicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Rest API", icon: apiicon },
      { name: "Canva", icon: canvaicon },

    ],
    image: FlexProMockup,
    deploymenturl: "https://flexpro.site",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    iglogo: BsInstagram,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
    
  },
  {
    title: "FlexPro",
    description:
    "فليكسبرو هي العلامة التجارية الجزائرية رقم واحد المتخصصة في توفير المعدات الرياضية . كخبير ووردبريس وإليمنتور، كان عملي تصميم متجرهم الإلكتروني وربطه بووكوميرس",
    description_EN:
      "FlexPro is the No. 1 Algerian brand that specializes in providing professional sports equipment. As a WordPress and Elementor expert, my job was to design their online store and link it with WooCommerce",
    technologies: [
      { name: "WordPress", icon: wordpressicon },
      { name: "WooCommerce", icon: woocommerceicon},    
      { name: "Elementor Pro", icon: elementoricon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Rest API", icon: apiicon },
      { name: "Canva", icon: canvaicon },

    ],
    image: FlexProMockup,
    deploymenturl: "https://flexpro.site",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    iglogo: BsInstagram,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
    
  },
  
] as const;

export const liveTickerData = {
  content: {
    de: "المزيد من أعمالي أعمالي أنستغرام",
    en: "More works on instagram",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Coding",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      { 
        title: "Flutter",
        hash: "#flutter"
        ,
        icon: fluttericon,
        color: "#007ACC",
      },
    
     
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Elementor",
        hash: "#Adobe XD",
        icon: elementoricon,
        color: "#3D3535",
      },
      {
        title: "Spline",
        hash: "#Adobe XD",
        icon: splineicon,
        color: "#328bee",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;


export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      
      {
        title: "Woo-Commerce",
        hash: "#Shopify",
        icon: woocommerceicon,
        color: "#9b5c8f",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#91b946",
      },
      {
        title: "Square-Space",
        hash: "#Shopify",
        icon: squarespaceicon,
        color: "#000100",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "الرئيسية", en: "Home", hash: "#home", icon: GoHome },
  { de: "المهارات", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "أعمالي", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "حولي", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "تواصل معي", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "ملاحظات", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "الخصوصية", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:contact@nasro.pro",
  text: "contact@nasro.pro",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://discord.com/users/387923086730723329",
    icon: discordlogo,
    altimgname: "discord",
  },
  {
    link: "",
    icon: githublogo,
    altimgname: "github",
  },
  {
    link: "https://www.instagram.com/naasro",
    icon: instagramLogo,
    altimgname: "instagram",
  },
  
  {
    link: "mailto:contact@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"الإبداع .. عندما يصبح الذكاء نوع من المتعة."',
    en: `"Creativity is intelligence having fun."`,
    author: "Albert Einstein",
  },
  {
    de: '"تصميم جيد هو استثمار جيد."',
    en: `"Good design is good business."`,
    author1: "Albrt ",
  },

] as const;

export const aboutMeData = {
  title: "عني",
  title_EN: "About me",
  description: "بعض المعلومات عني",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "تواصل معي",
    en: "Contact",
  },
  description: {
    de: "اكتب لي رسالة وسأعود إليك.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "إسمك",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "أكتب إسمك رجاءا",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "الإيميل",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "أكتب الإيميل رجاءا",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "الموضوع",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "أكتب الموضوع رجاءا",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "الرسالة",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "أكتب الراسالة رجاءا",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "إرسال",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "أوافق على أنه يجوز لـ NB استخدام بياناتي الشخصية (الاسم وعنوان البريد الإلكتروني) للاتصال بي.",
      en: "I agree that NB may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "من خلال تقديم هذا الطلب، فإنك تقر بأنك قد قرأت السياسة الخاصة",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 سيتم فتح العرض التجريبي المباشر قريبا. بدء تشغيل الخوادم...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 شكرا لك على بريدك الإلكترونى. سأعود إليك في أقرب وقت ممكن",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 للأسف لا نتلقى البريد الإلكتروني في الوقت الحالي. الرجاء اختيار طريقة أخرى للاتصال بي",
    en: "🦄 Unfortunately we dont receive email for the current time. Please choose another way to contact me",
  },
  failedValidationName: {
    de: "اكتب اسمك لو سمحت",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "AR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};

export type tutsDataType = {
  title: string;
  id: number;
  img: string;
  author: string;
  category: string;
  tags: string[];
  source: string;
  view: number;
  featured?: false;
  hidden?: false;
  description?: string;
  url: string;
  date: string;
};

// see public folder for thumbnail and logos
// TODO: automate fetching downloads
export const tutsData: tutsDataType[] = [
  {
    id: 19,
    title: "Cool Loader using Figma Variable",
    img: "loader-figma-variable.png",
    date: "7 Jul, 2023",
    description: `Here quick @figma tutorials on how to create a functional loader with variable and conditions 🤩. Small video tutorials added. And get the code cheatsheet and more from here`,
    author: "realvjy",
    tags: ["figma", "video"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1677281849431793664",
    source: "twitter",
  },
  {
    id: 21,
    title: "Juice glass animation with figma Variable",
    img: "juice-glass.png",
    date: "19 June, 2023",
    description: `Another quick @figma tutorial to create this animation using variable and conditions 🥤.  Small video to create this included. And get the code cheatsheet shared below. ✨`,
    author: "realvjy",
    tags: ["figma", "video"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1681610818046107651",
    source: "twitter",
  },
  {
    id: 31,
    title: "Figma Variable Experiment to create Segment Control",
    img: "segment-control-variable.png",
    date: "27 Dec, 2023",
    description: `It’s @figma fun day - Here's a quick tutorial demo for smart use case of the new variable updates. Created a smart segment control button and it’s so intelligent. Also shared cheatsheet for all variables below.`,
    author: "realvjy",
    tags: ["figma", "video"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1733104300354646473",
    source: "twitter",
  },
  {
    id: 32,
    title: "Create Hex Grid",
    img: "hex-grid-cheatsheet.jpeg",
    date: "27 Dec, 2023",
    description: `I was creating a layout for a game idea and looking for an easier way to generate a hex grid in @figma . After experimenting, found the exact values and tricks using smart components and auto layout to solve it. Added a quick tutorial video and demo here. Enjoy 🤩`,
    author: "realvjy",
    tags: ["figma", "video"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1739973126270885973",
    source: "twitter",
  },
  {
    id: 41,
    title: "Juice glass animation with figma Variable",
    img: "juice-glass.png",
    date: "19 June, 2023",
    description: `Another quick @figma tutorial to create this animation using variable and conditions 🥤.  Small video to create this included. And get the code cheatsheet shared below. ✨`,
    author: "realvjy",
    tags: ["figma", "video"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1808854859371733261",
    source: "twitter",
  },
  {
    id: 62,
    title: "Modular Illustration",
    img: "modular-ticket-illustration.gif",
    date: "14 May, 2024",
    description: `Quick experment and demo in @figma : A non-destructive workflow to create modular illustrations or design ✨`,
    author: "realvjy",
    tags: ["figma"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1790353490071507013",
    source: "twitter",
  },
  {
    id: 113,
    title: "Glow Effect",
    img: "glow-cheatsheet.gif",
    date: "24 June, 2024",
    description: `Steps to create glow effect in figma`,
    author: "realvjy",
    tags: ["figma", "any"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1805220290382717219",
    source: "twitter",
  },
  {
    id: 114,
    title: "Create Shiny Metal",
    img: "shiny-metal.jpeg",
    date: "12 May, 2024",
    description: `Let's qucikly create some realstic and shiny metal @figma✨`,
    author: "realvjy",
    tags: ["figma", "any"],
    view: 51000,
    hidden: false,
    category: "figma",
    url: "https://x.com/realvjy/status/1808854859371733261",
    source: "twitter",
  },
];

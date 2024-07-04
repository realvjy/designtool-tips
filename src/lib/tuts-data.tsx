export type tutsDataType = {
  title: string;
  id: string;
  img: string;
  author: string;
  category: string;
  tags: "free" | "paid" | "freemium";
  source: string;
  view: number;
  featured?: false;
  description?: string;
  url: string;
  date: string;
};

// see public folder for thumbnail and logos
// TODO: automate fetching downloads
export const tutsData: tutsDataType[] = [
  {
    id: "2",
    title: "Create Shiny Metal",
    img: "shiny-metal.jpeg",
    date: "12 May, 2024",
    description: `Let's qucikly create some realstic and shiny metal @figma✨`,
    author: "realvjy",
    tags: "free",
    view: 51000,
    category: "figma",
    url: "https://x.com/realvjy/status/1808854859371733261",
    source: "twitter",
  },
  {
    id: "2",
    title: "Create Shiny Metal",
    img: "shiny-metal.jpeg",
    date: "12 May, 2024",
    description: `Let's qucikly create some realstic and shiny metal @figma✨`,
    author: "realvjy",
    tags: "free",
    view: 51000,
    category: "figma",
    url: "https://x.com/realvjy/status/1808854859371733261",
    source: "twitter",
  },
];

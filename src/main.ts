interface Link {
  id: number;
  title: string;
  url: string;
  dateAdded: Date;
  reminder?: Reminder;
  visited?: boolean;
  category: LinkCategory;
  tags: string[];
}

interface Reminder {
  time: Date;
  reminded: boolean;
}

type LinkCategory = "Blog" | "Social" | "Resource" | "Documentation";

const links: Link[] = [
  {
    id: 1,
    title: "Date is out, Temporal is in",
    url: "https://piccalil.li/blog/date-is-out-and-temporal-is-in/?ref=dailydev",
    dateAdded: new Date(),
    category: "Blog",
    visited: true,
    tags: ["JavaScript", "Development"],
  },
  {
    id: 2,
    title: "Lit Documentation",
    url: "https://lit.dev/docs",
    dateAdded: new Date("2025-04-16T20:30:45"),
    reminder: { time: new Date("2025-04-17T08:45:00"), reminded: true },
    category: "Documentation",
    visited: false,
    tags: ["JavaScript", "Development", "HTML"],
  },
  {
    id: 3,
    title: "FreeCode Camp Learn MERN Stack",
    url: "https://www.linkedin.com/posts/javascript-developer_activity-7417197636782317568-kpA0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABV0o5cBRXvWxGKcwVL_aMHnyyLL69JyQ2k",
    dateAdded: new Date("15/12/2025"),
    reminder: { time: new Date(), reminded: false },
    category: "Social",
    tags: [
      "Tutorial",
      "Development",
      "JavaScript",
      "React",
      "MongoDB",
      "Node.js",
    ],
  },
];

console.log(links);

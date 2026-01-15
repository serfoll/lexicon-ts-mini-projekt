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

const appEl = document.querySelector<HTMLElement>("#app");

const linksEl: HTMLUListElement = document.createElement("ul");

linksEl.classList.add("links");

for (const link of links) {
  const itemEl: HTMLLIElement = document.createElement("li");
  const linkEl: HTMLAnchorElement = document.createElement("a");
  const copyBtnEl: HTMLButtonElement = document.createElement("button");
  const copyBtnIconEl: HTMLSpanElement = document.createElement("span");
  const copyBtnTxtEl: HTMLSpanElement = document.createElement("span");
  const deleteBtnEl: HTMLButtonElement = document.createElement("button");
  const deleteBtnIconEl: HTMLSpanElement = document.createElement("span");
  const deleteBtnTxtEl: HTMLSpanElement = document.createElement("span");
  const editBtnEl: HTMLButtonElement = document.createElement("button");
  const editBtnIconEl: HTMLSpanElement = document.createElement("span");
  const editBtnTxtEl: HTMLSpanElement = document.createElement("span");

  itemEl.classList.add("item");
  linkEl.classList.add("link");

  copyBtnEl.classList.add("btn");
  copyBtnIconEl.classList.add("material-icons");
  copyBtnIconEl.textContent = "content_copy";
  copyBtnTxtEl.textContent = "Copy link";
  copyBtnTxtEl.classList.add("sr-only");
  copyBtnEl.append(copyBtnIconEl, copyBtnTxtEl);

  editBtnEl.classList.add("btn");
  editBtnIconEl.classList.add("material-icons");
  editBtnIconEl.textContent = "edit";
  editBtnTxtEl.textContent = "Edit link";
  editBtnTxtEl.classList.add("sr-only");
  editBtnEl.append(editBtnIconEl, editBtnTxtEl);

  deleteBtnEl.classList.add("btn");
  deleteBtnIconEl.classList.add("material-icons");
  deleteBtnIconEl.textContent = "delete";
  deleteBtnTxtEl.textContent = "Delete link";
  deleteBtnTxtEl.classList.add("sr-only");
  deleteBtnEl.append(deleteBtnIconEl, deleteBtnTxtEl);

  linkEl.href = link.url;
  linkEl.textContent = link.title;
  linkEl.target = "_blank";
  linkEl.rel = "noopener noreferrer";

  itemEl.append(linkEl, copyBtnEl, editBtnEl, deleteBtnEl);

  linksEl.append(itemEl);
}

appEl && appEl.append(linksEl);

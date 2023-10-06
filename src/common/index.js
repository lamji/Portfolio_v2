/** @format */

import React from "react";
import covidDark from "../../src/Assets/Projects/Covid10Dark.png";
import budget from "../../src/Assets/Projects/budget.png";

export default function Common() {
  const projects = [
    {
      title: "Covid 19 tracker - dark mode",
      subtext:
        "React.js - Next.js - React Bootstrap - React Sass - MapBox - JavaScrip Es6 - Public API",
      img: covidDark,
      position: "right",
      ghLink: "https://github.com/lamji/Covid19_Tracker_v.2/tree/main",
      demoLink: "https://covid19-tracker-v-2-git-main-lamji.vercel.app/",
    },
    {
      title: "Budget Tacker",
      subtext:
        "Next.js - MUI 5 - Axios - redux-toolkit - node.js - express.js - mongoose - mongoDb",
      img: budget,
      position: "left",
      ghLink: "",
      demoLink: "https://trackerv1.vercel.app/login",
    },
  ];
  return {
    projects,
  };
}

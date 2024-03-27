/** @format */

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
      descriptions:
        "Discover real-time COVID-19 updates and insights with our Next.js-powered web app. Featuring an interactive map for visualizing global data, a smart search function for quick location-based information, and a curated list of top 10 affected countries. Seamlessly switch to dark mode for comfortable browsing day or night. Stay informed responsibly, stay empowered.",
    },
    {
      title: "Budget Tacker",
      subtext:
        "Next.js - MUI 5 - Axios - redux-toolkit - node.js - express.js - mongoose - mongoDb",
      img: budget,
      position: "left",
      ghLink: "",
      demoLink: "https://trackerv1.vercel.app/login",
      descriptions:
        "Empower yourself to take control of your finances with our Budget Tracker web application. Designed for efficiency and simplicity, our app enables users to manage their money effectively, whether at home or on the go.",
    },
  ];
  return {
    projects,
  };
}

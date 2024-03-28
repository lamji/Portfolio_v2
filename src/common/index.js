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

export const jobExperienceData = [
  // {
  //   year: "March 2020 to June 2020",
  //   company: "Kenn Flynn",
  //   address: "Pasay City, PH",
  //   position: "Full Stack Developer",
  //   years: 3,
  //   description:
  //     "This is a project-based assignment. The company already has a website, but it is outdated. My role is to update and convert their website to the latest version using React.js. The project is expected to take three months, including API integration and payment integration using PayPal.",
  // },
  {
    year: "November 2020 to December 2020",
    company: "Codally Tech",
    address: "Pasay City, PH",
    position: "React.js Developer ",
    years: 2,
    description:
      "This project is project-based, and my role involves UI development. Codally Tech is currently working on a project called A+ Learning Platform, which serves as an online school during the pandemic. We collaborate as a team and utilize Agile Methodology. The entire UI project is being developed using Next.js and Material UI",
  },
  {
    year: "March 2021 to May 2022",
    company: "Abakada Studios",
    address: "Pasig (WFH)",
    position: "Full Stack Developer",
    years: 2,
    description:
      "I am a javascript developer in this enterprise, working on a frontend using vanilla javascript, Vue.js,html5, bootstrap and jquery. At the same time, since we use an open source tool that is developed in Javascript and Python, I also used basic python on a back end. I have worked on a number of projects in this company",
  },
  {
    year: "June 2022 to August 2022",
    company: "Elearnified",
    address: "Makati City(WFH Part time)",
    position: "Front End Developer",
    years: 2,
    description:
      "As a front-end developer within the company. My role was to replace the existing moodle design in response to the UI/Ux design using scss, javascript and jquery.",
  },
  {
    year: "May 2022 to Present",
    company: "Serino360",
    address: "Makati City (WFH)",
    position: "React Developer",
    years: 2,
    description:
      "I am a React Developer at this company. My role is to convert all figma designs into a functional React project using the MVVM approach, Implement Redux on every React project, including API integration and validation.",
  },
  // Add more job experiences as needed
];

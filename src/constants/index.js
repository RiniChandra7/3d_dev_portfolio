import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript as bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import react_bootstrap from "../assets/tech/react_bootstrap.png";
import ucertify from "../assets/company/ucertify.png";
import tcs from "../assets/company/tcs.png";
import iiita from "../assets/company/iiita.png";
import qualcomm from "../assets/company/qualcomm.png";

import moviemania from "../assets/moviemania.png";
import weather from "../assets/weather.png";
import lipcolor from "../assets/lipcolor.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Coding Trainer",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "BootStrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React BootStrap",
    icon: react_bootstrap,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Application Developer",
    company_name: "uCertify",
    icon: ucertify,
    iconBg: "#383E56",
    date: "July 2017 - March 2018",
    points: [
      "Spearheaded the completion of the Rubric Item Type project, working independently, to provide instructors/teachers with a dynamic evaluation table creation tool using React.",
      "Successfully delivered several smaller projects, including browser games and an in-house text annotator, all built using React.",
      "Commended as the Trainee of the Month for consistent exceptional performance."
    ],
  },
  {
    title: "Assistant System Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "March 2018 - August 2019",
    points: [
      "Collaborated as part of a DevOps team in an Agile-based environment, focusing on the development & maintenance of the Secure DevOps Kit for Azure.",
      "Enhanced manual test suites, reducing effort by 60%, and also revamped and maintained the project website for improved functionality.",
      "Acknowledged with the ‘Step Up’ award in recognition of highly positive client feedback and exemplary performance.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Masters Student & Teaching Assistant",
    company_name: "Indian Institute of Information Technology, Allahabad (IIIT-A)",
    icon: iiita,
    iconBg: "#E6DEDD",
    date: "August 2019 - July 2021",
    points: [
      "Pursued a degree in Master of Technology in IT with a specialization in Software Engineering.",
      "Worked as a teaching assistant to professors teaching undergraduate computer science courses.",
      "Oublished a research paper in the field of Bioinfomatics and presented it at BIBM 2021 conference.",
      "Completed my degree with a GPA of 9.3 (Honors with distinction).",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Qualcomm",
    icon: qualcomm,
    iconBg: "#E6DEDD",
    date: "January 2021 - January 2023",
    points: [
      "Acted as the sole secure boot POC for pre-existing and new Automotive chipsets, responsible for SW enablement on actual HW and handling change requests in this domain.",
      "Achieved a remarkable 40% reduction in boot-up time by optimizing necessary wait time-outs and introduced OEM customization capabilities to enhance flexibility.",
      "Automated error-prone processes, resulting in a 60% increase in efficiency and 100% accuracy, significantly improving productivity.",
      "Consistently recognized for exceptional contributions with multiple ThanQ awards.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Various organizations",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Currently active as a Freelancer, in roles like MERN stack developer, Coding Trainer, & Technical Writer.",
    ],
  },
];

const projects = [
  {
    name: "Movie Mania",
    description:
      "A website that allows users to login and browse movies, get movie suggestions and get answers to their questions related to the same via the integrated AI feature. To access all features, kindly use non-Indian VPN.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moviemania,
    source_code_link: "https://github.com/RiniChandra7/movies-gpt",
  },
  {
    name: "Lipcolor Engine",
    description:
      "Toolkit for makeup enthusiasts to easily find duplicates of their favourite lipstick shades, receive recommendations, and suggest duplicates. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: lipcolor,
    source_code_link: "https://github.com/RiniChandra7/makeup_lipstick_project",
  },
  {
    name: "Weather Now",
    description:
      "A feature-packed web app that detects and illustrates weather conditions at your current location as well as 2 lakh+ cities around the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "context",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/RiniChandra7/weather-app",
  },
];

export { services, technologies, experiences, projects };

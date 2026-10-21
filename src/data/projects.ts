import vet1 from "../assets/images/vetiGo1.png";
import vet2 from "../assets/images/vetiGo2.png";
import vet3 from "../assets/images/vetiGo3.png";
import vetMockup from "../assets/images/vetigo_mokup.png";



import bose1 from "../assets/images/bose1.png";
import bose2 from "../assets/images/bose2.png";
import bose3 from "../assets/images/bose3.png";
import boseMockup from "../assets/images/bose_mokup.png";



import gadgets1 from "../assets/images/niceGadgets1.png";
import gadgets2 from "../assets/images/niceGadgets2.png";
import gadgets3 from "../assets/images/niceGadgets3.png";
import gadgetsMockup from "../assets/images/gadgets_mokup.png";
import { javaScriptIcon, typeScriptIcon, reactIcon, reduxIcon, tailwindIcon, axiosIcon, netlifyIcon, sassIcon, htmlIcon, cssIcon, daisyUIIcon, nodeJsIcon, viteIcon, formikIcon, mongodbIcon, mongooseIcon } from "./stack";

import type { ProjectProps } from "../types/projects";

export const projects: ProjectProps[] = [
  {
    index: 0,
    title: "VetiGo Reservation App",
    description: "AI-powered patient reservation app for pet owners that helps them with first-aid guidance, AI-powered emergency support, and vet appointment booking. ",
    fullDescription: 
      {
        desc: "A web application that helps pet owners with instant first aid guidance, AI-powered emergency support, and seamless vet appointment booking.",
        frontend: "Built using Vite, React, HTML, Tailwind CSS, DaisyUI, Axios, Formik, Yup, Google Maps MarkerClusterer. Deployed on Netlify.",
        backend: "Backend: Built using Node.js, Express, REST APIs, MongoDB (Mongoose), Firebase, OpenAI, Multer, JWT, BcryptJS. Deployed on Render."
      }
    ,
    features: [
      {frontend: ["User authentication. User tokens are stored in cookies.","Role-based access. Pet Owners and Veterinarians, each with tailored functionalities.","Pets management for Pet Owners. Creating, updating, storing, and deleting details about pets.","Appointments management. Creating, updating, deleting, and filtering appointments.","AI-powered emergency support. Instant first aid guidance.", "Find Nearby Veterinarians. Google Maps MarkerClusterer integration for locating veterinarians on an interactive map."]},
      {backend: ["JWT-based authentication. BcryptJS password hashing, session check and auth middleware.","User Upload Management: Secure file handling using Multer & Firebase.","OpenAI Chat Completions API."]}
    ],
    tech: ["HTML, Css,JavaScript", "Vite", "React", "MongoDB", "Mongoose", "Tailwind", "DaisyUl", "Axios", "Formik", "Yup", "Google Maps", "Netlify"],
    icons: [[htmlIcon, "HTML"], [cssIcon, "CSS"], [javaScriptIcon, "JavaScript"], [viteIcon, "Vite"], [reactIcon, "React"], [mongodbIcon, "MongoDB"], [mongooseIcon, "Mongoose"], [tailwindIcon, "Tailwind"], [daisyUIIcon, "DaisyUI"], [axiosIcon, "Axios"], [formikIcon, "Formik"], [netlifyIcon, "Netlify"]],
    image: [vet1, vet2, vet3, vetMockup],
    demo: "https://vetigo.netlify.app/",
    github: "https://github.com/darynazin/VetiGo/blob/main/README.md"
  },
  {
    index: 1,
    title: "Nice Gadgets Store",
    description: "An e-commerce platform for gadget sales featuring a responsive design, product catalog, advanced filtering and sorting options, detailed product pages, favorites management, and a shopping cart. ",
    fullDescription: 
      {
        desc: "E-commerce platform for gadget sales",
        frontend: "Built using Webpack, React, Redux, HTML, and SCSS.",
        backend: "Built using Node.js, TypeScript, deployed on Render"
      }
    ,
    features: [
      {frontend: [ "Product catalog with filtering and sorting."]} 
    ],
    tech: ["React", "Node.js", "TypeScript", "Redux", "HTML"],
    icons: [[reactIcon, "React"], [nodeJsIcon, "Node.js"], [typeScriptIcon, "TypeScript"], [reduxIcon, "Redux"], [htmlIcon, "HTML"]],
    image: [gadgets1, gadgets2, gadgets3, gadgetsMockup],
    demo: "https://daryna-z.github.io/product_catalog",
    github: "https://github.com/orgs/fe-oct22-wonder-devs/repositories"
  },
  {
    index: 2,
    title: "Bose Landing Page",
    description:"A fully responsive and visually engaging landing page, thoughtfully designed with a modern layout and aesthetic elements inspired by the official BOSE website to reflect a clean, premium brand experience.",
    fullDescription: 
      {
        desc: "A fully responsive and visually engaging landing page, thoughtfully designed with a modern layout and aesthetic elements inspired by the official BOSE website to reflect a clean, premium brand experience.",
        frontend: "Built using SCSS, HTML, and BEM. Deployed on GitHub Pages.",
      }
    ,
    features: [
      {frontend: ["User authentication. User tokens are stored in cookies.","Role-based access. Pet Owners and Veterinarians, each with tailored functionalities.","Pets management for Pet Owners. Creating, updating, storing, and deleting details about pets.","Appointments management. Creating, updating, deleting, and filtering appointments.","AI-powered emergency support. Instant first aid guidance.", "Find Nearby Veterinarians. Google Maps MarkerClusterer integration for locating veterinarians on an interactive map."]},
      {backend: ["JWT-based authentication. BcryptJS password hashing, session check and auth middleware.","User Upload Management: Secure file handling using Multer & Firebase.","OpenAI Chat Completions API."]}
    ],
    tech: ["SCSS", "HTML", "BEM"],
    icons: [[sassIcon, "SCSS"], [htmlIcon, "HTML"], [cssIcon, "CSS"]],
    image: [bose1, bose2, bose3, boseMockup],
    demo: "https://daryna-z.github.io/BOSE-landing/",
    github: "https://github.com/daryna-z/BOSE-landing"
  }
];
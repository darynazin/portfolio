import vet from "../assets/images/vet.png";
import bose from "../assets/images/bose.png";
import gadgets from "../assets/images/gadgets.png";

import type { ProjectProps } from "../types/projects";

export const projects: ProjectProps[] = [
  {
    index: 0,
    title: "AI Powered Patient Reservation App For Pets",
    description:
      "Web application that helps pet owners with instant first aid guidance, AI-powered emergency support, " +
        "and seamless vet appointment booking.",
    tech: ["Vite", "React", "Tailwind", "DaisyUl", "Axios", "Formik", "Yup", "Google Maps", "Netlify"],
    image: vet,
    demo: "https://vetigo.netlify.app/",
    github: "https://github.com/darynazin/Pets_app_frontend"
  },
  {
    index: 2,
    title: "Landing Page",
    description:
        "A fully responsive landing page.\n" +
        "The design and layout are inspired by the official BOSE website.",
    tech: ["SCSS", "HTML", "BEM"],
    image: gadgets,
    demo: "https://daryna-z.github.io/BOSE-landing/",
    github: "https://github.com/daryna-z/BOSE-landing"
  },
  {
    index: 1,
    title: "E-commerce platform for gadget sales",
    description:
      "Interact is a revolutionary mobile app designed to help families connect with other families and promote social interaction. With Interact, families can easily find and connect with other families in their local area, create events, and chat with family partners. The app uses geolocation features to show other families within a specific radius, making it easy to find and connect with like-minded families nearby.",
    tech: ["React", "Node.js", "TypeScript", "Redux", "HTML"],
    image: bose,
    demo: "https://fe-oct22-wonder-devs.github.io/product_catalog/",
    github: "https://petfirstaid.netlify.app/"
  }
];
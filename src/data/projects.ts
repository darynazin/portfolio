import vet from "../assets/images/vet.png";
import bose from "../assets/images/bose.png";
import gadgets from "../assets/images/gadgets.png";

import type { ProjectProps } from "../types/projects";

export const projects: ProjectProps[] = [
  {
    index: 0,
    title: "VetiGo",
    description:
      "AI powered patient reservation app for pet owners that helps them with instant first aid guidance, AI-powered emergency support, " +
        "and seamless vet appointment booking.",
    tech: ["Vite", "React", "Tailwind", "DaisyUl", "Axios", "Formik", "Yup", "Google Maps", "Netlify"],
    image: vet,
    demo: "https://vetigo.netlify.app/",
    github: "https://github.com/darynazin/VetiGo/blob/main/README.md"
  },
  {
    index: 1,
    title: "Nice Gadgets",
    description: "An e-commerce platform for gadget sales featuring a responsive design, product catalog, advanced filtering and sorting options, detailed product pages, favorites management, and a shopping cart. ",
    tech: ["React", "Node.js", "TypeScript", "Redux", "HTML"],
    image: gadgets,
    demo: "https://fe-oct22-wonder-devs.github.io/product_catalog/",
    github: "https://petfirstaid.netlify.app/"
  },
  {
    index: 2,
    title: "Bose",
    description:
        "A fully responsive and visually engaging landing page, thoughtfully designed with a modern layout and aesthetic elements inspired by the official BOSE website to reflect a clean, premium brand experience.",
    tech: ["SCSS", "HTML", "BEM"],
    image: bose,
    demo: "https://daryna-z.github.io/BOSE-landing/",
    github: "https://github.com/daryna-z/BOSE-landing"
  }
];
import vet1 from "../assets/images/vetiGo1.png";
import vet2 from "../assets/images/vetiGo2.png";
import vet3 from "../assets/images/vetiGo3.png";



import bose1 from "../assets/images/bose1.png";
import bose2 from "../assets/images/bose2.png";
import bose3 from "../assets/images/bose3.png";



import gadgets1 from "../assets/images/niceGadgets1.png";
import gadgets2 from "../assets/images/niceGadgets2.png";
import gadgets3 from "../assets/images/niceGadgets3.png";

import type { ProjectProps } from "../types/projects";

export const projects: ProjectProps[] = [
  {
    index: 0,
    title: "VetiGo",
    description:
      "AI-powered patient reservation app for pet owners that helps them with first-aid guidance, AI-powered emergency support, and vet appointment booking. " +
  "For a full demo experience, you can use the following test account:\n" +
  "email: test@gmail.com\n" +
  "password: 12345678",
    tech: ["Vite", "React", "Tailwind", "DaisyUl", "Axios", "Formik", "Yup", "Google Maps", "Netlify"],
    image: [vet1, vet2, vet3],
    demo: "https://vetigo.netlify.app/",
    github: "https://github.com/darynazin/VetiGo/blob/main/README.md"
  },
  {
    index: 1,
    title: "Nice Gadgets",
    description: "An e-commerce platform for gadget sales featuring a responsive design, product catalog, advanced filtering and sorting options, detailed product pages, favorites management, and a shopping cart. ",
    tech: ["React", "Node.js", "TypeScript", "Redux", "HTML"],
    image: [gadgets1, gadgets2, gadgets3],
    demo: "https://fe-oct22-wonder-devs.github.io/product_catalog/",
    github: "https://github.com/orgs/fe-oct22-wonder-devs/repositories"
  },
  {
    index: 2,
    title: "Bose",
    description:
        "A fully responsive and visually engaging landing page, thoughtfully designed with a modern layout and aesthetic elements inspired by the official BOSE website to reflect a clean, premium brand experience.",
    tech: ["SCSS", "HTML", "BEM"],
    image: [bose1, bose2, bose3],
    demo: "https://daryna-z.github.io/BOSE-landing/",
    github: "https://github.com/daryna-z/BOSE-landing"
  }
];
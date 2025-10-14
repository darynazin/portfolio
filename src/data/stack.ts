import javaScriptIcon from "../assets/images/javascript.svg";
import typeScriptIcon from "../assets/images/typescript.svg";
import reactIcon from "../assets/images/react.svg";
import reduxIcon from "../assets/images/redux.svg";
import tailwindIcon from "../assets/images/tailwind.svg";
import sassIcon from "../assets/images/sass.svg";
import htmlIcon from "../assets/images/html.svg";
import cssIcon from "../assets/images/css3.svg";
import bootstrapIcon from "../assets/images/bootstrap.svg";
import materialUIIcon from "../assets/images/materialui.svg";
import threeJsIcon from "../assets/images/threejs.png";
import daisyUIIcon from "../assets/images/daisyui.png";
import nodeJsIcon from "../assets/images/nodejs.svg";
import expressIcon from "../assets/images/express.png";
import mysqlIcon from "../assets/images/mysql.svg";
import postgresqlIcon from "../assets/images/postgresql.svg";
import mongodbIcon from "../assets/images/mongodb.svg";
import gitIcon from "../assets/images/git.svg";
import githubIcon from "../assets/images/github.png";
import figmaIcon from "../assets/images/figma.svg";
import postmanIcon from "../assets/images/postman.svg";
import viteIcon from "../assets/images/vite.svg";
import webpackIcon from "../assets/images/webpack.svg";
import eslintIcon from "../assets/images/eslint.svg";
import jestIcon from "../assets/images/jest.svg";
import type { Section } from "../types/stack";

export const stack: Section[] = [
  {
    index: 0,
    title: "Frontend",
    items: [
      { idx: 0, name: "JavaScript", icon: javaScriptIcon },
      { idx: 1, name: "TypeScript", icon: typeScriptIcon },
      { idx: 2, name: "React", icon: reactIcon },
      { idx: 3, name: "Redux", icon: reduxIcon },
      { idx: 4, name: "Tailwind", icon: tailwindIcon },
      { idx: 5, name: "Sass", icon: sassIcon },
      { idx: 6, name: "HTML", icon: htmlIcon },
      { idx: 7, name: "CSS", icon: cssIcon },
      { idx: 8, name: "Bootstrap", icon: bootstrapIcon },
      { idx: 9, name: "Material UI", icon: materialUIIcon },
      { idx: 10, name: "Three.js", icon: threeJsIcon },
      { idx: 11, name: "DaisyUI", icon: daisyUIIcon },
    ],
  },
  {
    index: 1,
    title: "Backend",
    items: [
      { idx: 0, name: "Node.Js", icon: nodeJsIcon },
      { idx: 1, name: "Express.Js", icon: expressIcon },
    ],
  },
  {
    index: 2,
    title: "Database",
    items: [
      { idx: 0, name: "MySQL", icon: mysqlIcon },
      { idx: 1, name: "PostgreSQL", icon: postgresqlIcon },
      { idx: 2, name: "MongoDB", icon: mongodbIcon },
    ],
  },
  {
    index: 3,
    title: "Tools",
    items: [
      { idx: 0, name: "Git", icon: gitIcon },
      { idx: 1, name: "GitHub", icon: githubIcon },
      { idx: 2, name: "Figma", icon: figmaIcon },
      { idx: 3, name: "Postman", icon: postmanIcon },
      { idx: 4, name: "Vite", icon: viteIcon },
      { idx: 5, name: "Webpack", icon: webpackIcon },
      { idx: 6, name: "ESLint", icon: eslintIcon },
      { idx: 7, name: "Jest", icon: jestIcon },
    ],
  },
];
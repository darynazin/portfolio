import javaScriptIcon from "../assets/javascript.svg";
import typeScriptIcon from "../assets/typescript.svg";
import reactIcon from "../assets/react.svg";
import reduxIcon from "../assets/redux.svg";
import tailwindIcon from "../assets/tailwind.svg";
import sassIcon from "../assets/sass.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css3.svg";
import bootstrapIcon from "../assets/bootstrap.svg";
import materialUIIcon from "../assets/materialui.svg";
import threeJsIcon from "../assets/threejs.svg";
import daisyUIIcon from "../assets/daisyui.png";
import nodeJsIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/express.svg";
import mysqlIcon from "../assets/mysql.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import mongodbIcon from "../assets/mongodb.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github.svg";
import figmaIcon from "../assets/figma.svg";
import postmanIcon from "../assets/postman.svg";
import viteIcon from "../assets/vite.svg";
import webpackIcon from "../assets/webpack.svg";
import eslintIcon from "../assets/eslint.svg";
import jestIcon from "../assets/jest.svg";

interface Tech {
  name: string;
  icon: string;
}

interface Section {
  title: string;
  items: Tech[];
}

export const stack: Section[] = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: javaScriptIcon },
      { name: "TypeScript", icon: typeScriptIcon },
      { name: "React", icon: reactIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "Sass", icon: sassIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Material UI", icon: materialUIIcon },
      { name: "Three.js", icon: threeJsIcon },
      { name: "DaisyUI", icon: daisyUIIcon },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.Js", icon: nodeJsIcon },
      { name: "Express.Js", icon: expressIcon },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: mysqlIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MongoDB", icon: mongodbIcon },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "Vite", icon: viteIcon },
      { name: "Webpack", icon: webpackIcon },
      { name: "ESLint", icon: eslintIcon },
      { name: "Jest", icon: jestIcon },
    ],
  },
];
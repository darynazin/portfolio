import vet1 from "../assets/images/vetiGo1.png";
import vet2 from "../assets/images/vetiGo2.png";
import vet3 from "../assets/images/vetiGo3.png";
import vet4 from "../assets/images/vetiGo4.png";
import vet5 from "../assets/images/vetiGo5.png";
import vet6 from "../assets/images/vetiGo6.png";
import vetMockup from "../assets/images/vetigo_mokup.png";

import bose1 from "../assets/images/bose1.png";
import bose2 from "../assets/images/bose2.png";
import bose3 from "../assets/images/bose3.png";
import boseMockup from "../assets/images/bose_mokup.png";

import gadgets1 from "../assets/images/niceGadgets1.png";
import gadgets2 from "../assets/images/niceGadgets2.png";
import gadgets3 from "../assets/images/niceGadgets3.png";
import gadgetsMockup from "../assets/images/gadgets_mokup.png";

import {
  javaScriptIcon,
  typeScriptIcon,
  reactIcon,
  reduxIcon,
  tailwindIcon,
  axiosIcon,
  netlifyIcon,
  sassIcon,
  htmlIcon,
  cssIcon,
  daisyUIIcon,
  nodeJsIcon,
  viteIcon,
  formikIcon,
  mongodbIcon,
  mongooseIcon,
} from "./stack";

import type { ProjectProps } from "../types/projects";

export const projects: ProjectProps[] = [
  {
    index: 0,
    title: "VetiGo — Veterinary Booking Platform",
    description:
      "A full-stack veterinary platform that simplifies pet care through appointment booking, pet profile management, nearby veterinarian discovery, and AI-powered first-aid guidance for pet emergencies.",
    fullDescription: {
      desc: "VetiGo is a full-stack web application designed to make veterinary care more accessible. It enables pet owners to manage their pets' profiles, schedule veterinary appointments, discover nearby clinics, and access AI-assisted first-aid guidance when urgent situations arise.",
      frontend:
        "Developed with React, Vite, Tailwind CSS, and DaisyUI. Integrated Axios for API communication, Formik for form management, and Google Maps MarkerClusterer for interactive veterinarian discovery. Deployed on Netlify.",
      backend:
        "Developed with Node.js, Express, and MongoDB using Mongoose for data modeling. Integrated Firebase for file storage, OpenAI for AI-assisted support, Multer for file uploads, and JWT with bcryptjs for authentication and password security. Deployed on Render.",
    },
    features: [
      {
        frontend: [
          "Authentication and Access Control: Secure user authentication with role-specific experiences for pet owners and veterinarians.",
          "Pet Profile Management: Create, update, view, and delete pet profiles and their associated information.",
          "Appointment Management: Schedule, update, cancel, and filter veterinary appointments.",
          "AI-Assisted Emergency Guidance: Access AI-generated first-aid information to help pet owners respond to potential emergencies.",
          "Veterinarian Discovery: Explore nearby veterinary services through an interactive Google Maps integration with marker clustering.",
          "Responsive User Interface: Access core platform functionality across desktop and mobile screen sizes.",
        ],
      },
      {
        backend: [
          "Authentication and Authorization: JWT-based authentication, password hashing with bcryptjs, session validation, and authorization middleware.",
          "File Upload and Storage: Handle user-uploaded files using Multer and Firebase.",
          "AI Integration: Connect the OpenAI Chat Completions API to provide AI-assisted emergency guidance.",
          "REST API Development: Support frontend functionality through structured API endpoints and server-side request handling.",
          "Database Management: Store and manage application data using MongoDB and Mongoose.",
        ],
      },
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "Formik",
      "Yup",
      "Google Maps",
      "Firebase",
      "OpenAI API",
      "JWT",
      "Netlify",
      "Render",
    ],
    icons: [
      [htmlIcon, "HTML"],
      [cssIcon, "CSS"],
      [javaScriptIcon, "JavaScript"],
      [viteIcon, "Vite"],
      [reactIcon, "React"],
      [mongodbIcon, "MongoDB"],
      [mongooseIcon, "Mongoose"],
      [tailwindIcon, "Tailwind CSS"],
      [daisyUIIcon, "DaisyUI"],
      [axiosIcon, "Axios"],
      [formikIcon, "Formik"],
      [netlifyIcon, "Netlify"],
    ],
    image: [vet1, vet4, vet2, vet3, vet5, vet6],
    mockup: vetMockup,
    demo: "https://vetigo.netlify.app/",
    github: "https://github.com/darynazin/VetiGo/blob/main/README.md",
  },
  {
    index: 1,
    title: "Nice Gadgets — E-commerce Platform",
    description:
      "A responsive e-commerce application for browsing and purchasing consumer electronics, featuring product discovery, detailed product pages, sorting and filtering, favorites, and shopping cart functionality.",
    fullDescription: {
      desc: "Nice Gadgets is an e-commerce web application built to deliver a streamlined online shopping experience. Users can explore a product catalog, refine results using filtering and sorting controls, view detailed product information, save favorite items, and manage their shopping cart through an intuitive, responsive interface.",
      frontend:
        "Developed with React, Redux, HTML, and SCSS, using Webpack for bundling. Implemented reusable interface components and centralized state management to support product browsing, favorites, and shopping cart interactions.",
      backend:
        "The project includes a Node.js and TypeScript backend component deployed on Render. The frontend is deployed on GitHub Pages.",
    },
    features: [
      {
        frontend: [
          "Product Catalog: Browse a structured collection of consumer electronics and access detailed product information.",
          "Filtering and Sorting: Refine product listings to make product discovery more efficient.",
          "Favorites Management: Save and revisit preferred products.",
          "Shopping Cart: Add products to the cart and manage selected items.",
          "State Management: Use Redux to coordinate application state across interactive shopping features.",
          "Responsive Design: Provide a consistent browsing experience across different screen sizes.",
        ],
      },
    ],
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Node.js",
      "HTML",
      "SCSS",
      "Webpack",
      "GitHub Pages",
      "Render",
    ],
    icons: [
      [reactIcon, "React"],
      [nodeJsIcon, "Node.js"],
      [typeScriptIcon, "TypeScript"],
      [reduxIcon, "Redux"],
      [htmlIcon, "HTML"],
    ],
    image: [gadgets1, gadgets2, gadgets3],
    mockup: gadgetsMockup,
    demo: "https://daryna-z.github.io/product_catalog",
    github:
      "https://github.com/orgs/fe-oct22-wonder-devs/repositories",
  },
  {
    index: 2,
    title: "BOSE — Responsive Landing Page",
    description:
      "A responsive landing page inspired by BOSE's premium digital brand experience, combining a clean visual hierarchy, carefully structured layouts, and responsive styling to showcase products across devices.",
    fullDescription: {
      desc: "This project recreates the visual experience of a BOSE-inspired product landing page, with an emphasis on modern layout techniques, consistent spacing, and a polished presentation. The implementation focuses on translating a premium brand aesthetic into a responsive, accessible web interface.",
      frontend:
        "Developed using semantic HTML, SCSS, and the BEM naming methodology to maintain a modular, organized, and maintainable stylesheet architecture. Deployed on GitHub Pages.",
    },
    features: [
      {
        frontend: [
          "Responsive Layout: Adapt the page structure to different viewport sizes and devices.",
          "Structured Styling: Use SCSS to organize styles and improve maintainability.",
          "BEM Methodology: Apply a consistent CSS naming convention for modular styling.",
          "Visual Hierarchy: Use typography, spacing, and layout to create a clean, product-focused presentation.",
          "Reusable Styling Patterns: Maintain consistency across page sections through structured CSS classes.",
        ],
      },
    ],
    tech: ["HTML", "CSS", "SCSS", "BEM", "GitHub Pages"],
    icons: [
      [sassIcon, "SCSS"],
      [htmlIcon, "HTML"],
      [cssIcon, "CSS"],
    ],
    image: [bose1, bose2, bose3],
    mockup: boseMockup,
    demo: "https://daryna-z.github.io/BOSE-landing/",
    github: "https://github.com/daryna-z/BOSE-landing",
  },
];
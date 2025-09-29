import projectImage from "../assets/images/project1.png";
import type { ProjectProps } from "../types/projects";

export const projects: ProjectProps[] = [
  {
    index: 0,
    title: "AI Powered Patient Reservation App For Pets",
    subtitle: "Stock Market App",
    description:
      "Web application that helps pet owners with instant first aid guidance, AI-powered emergency support, " +
        "and seamless vet appointment booking.",
    tech: ["Vite", "React", "Tailwind", "DaisyUl", "Axios", "Formik", "Yup", "Google Maps", "Netlify"],
    featured: true,
    image: projectImage,
    demo: "https://vetigo.netlify.app/",
    github: "https://petfirstaid.netlify.app/"
  },
  {
    index: 1,
    title: "Interect Family Chat App",
    subtitle: "Interact - Family App",
    description:
      "Interact is a revolutionary mobile app designed to help families connect with other families and promote social interaction. With Interact, families can easily find and connect with other families in their local area, create events, and chat with family partners. The app uses geolocation features to show other families within a specific radius, making it easy to find and connect with like-minded families nearby.",
    tech: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
    featured: true,
    image: projectImage,
    demo: "https://petfirstaid.netlify.app/",
    github: "https://petfirstaid.netlify.app/"
  }
];
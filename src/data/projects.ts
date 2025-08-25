import projectImage from "../assets/project1.png";

export type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  featured?: boolean;
  image: string;
  link: string;
};

export const projects: ProjectProps[] = [
  {
    title: "X-Dividend Mobile App",
    subtitle: "Stock Market App",
    description:
      "The app offers comprehensive data on companies, including categories of Most Actives, Gainers and Losers Stock Market. Users can sort the information by sector, name, highest or lowest price, dividend date, and ex-dividend date. This data is updated in real-time, ensuring that users always have access to the most current information.",
    tech: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
    featured: true,
    image: projectImage,
    link: "#"
  },
  {
    title: "Interect Family Chat App",
    subtitle: "Interact - Family App",
    description:
      "Interact is a revolutionary mobile app designed to help families connect with other families and promote social interaction. With Interact, families can easily find and connect with other families in their local area, create events, and chat with family partners. The app uses geolocation features to show other families within a specific radius, making it easy to find and connect with like-minded families nearby.",
    tech: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
    featured: true,
    image: projectImage,
    link: "#"
  }
];
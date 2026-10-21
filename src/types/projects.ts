type ProjectDescription = { 
  desc: string,
  frontend?: string,
  backend?: string,
};


export type ProjectProps = {
  index: number;
  title: string;
  description: string;
  fullDescription: ProjectDescription;
  features: { frontend?: string[]; backend?: string[] }[];
  tech: string[];
  icons: string[][];
  image: string[];
  demo: string;
  github: string;
};

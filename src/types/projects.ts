type ProjectDescription = { 
  desc: string,
  automation?: string,
  frontend?: string,
  backend?: string,
};


export type ProjectProps = {
  index: number;
  title: string;
  description: string;
  fullDescription: ProjectDescription;
  features: { automation?: string[]; frontend?: string[]; backend?: string[] }[];
  tech: string[];
  icons: string[][];
  image: string[];
  mockup: string;
  demo?: string;
  github?: string;
};

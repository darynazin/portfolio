export interface Tech {
  idx: number;
  name: string;
  icon: string;
}

export interface Section {
  index: number;
  title: string;
  items: Tech[];
}
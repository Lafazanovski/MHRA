

export interface BlogPost {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  subtitle?: string;
}

export interface Member {
  id: number;
  name: string;
  company: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  paragraph: string;
  image: string;
}
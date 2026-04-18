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

export interface Badge {
  id: number;
  image: string;
  name: string;
}

export interface PurchasedTicket {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
}

export interface Connection {
  id: number;
  name: string;
  image: string;
}
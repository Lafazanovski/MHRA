import { Badge, PurchasedTicket, Connection } from "@/types";

export const badges: Badge[] = [
  { id: 1, image: "/images/img1.png", name: "Бронза" },
  { id: 2, image: "/images/img2.png", name: "Сребро" },
  { id: 3, image: "/images/img3.png", name: "Злато" },
];

export const purchasedTickets: PurchasedTicket[] = [
  {
    id: 1,
    image: "/images/img1.png",
    title: "HR кафе: Потребата од зачувување на соработ...",
    date: "Август, Понеделник 12:00",
    location: "Скопје",
  },
  {
    id: 2,
    image: "/images/img2.png",
    title: "13та меѓународна МАЧР конференција",
    date: "Јуни 08, Понеделник 09:00",
    location: "Скопје",
  },
];

export const connections: Connection[] = [
  { id: 1, name: "Марко", image: "/images/img1.png" },
  { id: 2, name: "Валери", image: "/images/img2.png" },
  { id: 3, name: "Марија", image: "/images/img3.png" },
  { id: 4, name: "Ана", image: "/images/img4.png" },
  { id: 5, name: "Алексан", image: "/images/img5.png" },
  { id: 6, name: "Благо", image: "/images/img6.png" },
];
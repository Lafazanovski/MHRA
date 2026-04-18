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
  { id: 1, name: "Јована Б.", image: "/images/olgica.png" },
  { id: 2, name: "Влатко М.", image: "/images/ljupco.png" },
  { id: 3, name: "Борче К.", image: "/images/majk.png" },
  { id: 4, name: "Јовче Ј.", image: "/images/dzejms.png" },
  { id: 5, name: "Анабела П.", image: "/images/img9.png" },
  { id: 6, name: "Баже К.", image: "/images/darko.png" },
];
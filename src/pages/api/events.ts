import type { NextApiRequest, NextApiResponse } from "next";
import { eventsPosts } from "@/data/events";
import { getRandomItems } from "@/utils/random";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const event = eventsPosts.find((post) => post.id === Number(id));
    if (!event) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }
    return res.status(200).json({ success: true, data: event });
  }

  const randomEvents = getRandomItems(eventsPosts, 4);
  res.status(200).json({
    success: true,
    data: randomEvents,
  });
}

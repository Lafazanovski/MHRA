import type { NextApiRequest, NextApiResponse } from "next";
import { blogPosts } from "@/data/blogs";
import { getRandomItems } from "@/utils/random";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const blog = blogPosts.find((post) => post.id === Number(id));
    if (!blog) {
      return res.status(404).json({ success: false, message: "Not Found" });
    }
    return res.status(200).json({ success: true, data: blog });
  }

  const randomBlogs = getRandomItems(blogPosts, 4);

  res.status(200).json({
    success: true,
    data: randomBlogs,
  });
}

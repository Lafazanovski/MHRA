import BlogsInfoComponent from "@/components/blogsInfoComponent/blogsInfoComponent";
import Carousel from "@/components/carousel/carousel";
import Culture from "@/components/culture/culture";
import Hero from "@/components/hero/hero";
import LatestBlogs from "@/components/latestBlogs/latestBlogs";
import { BlogPost } from "@/types";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((json) => setPosts(json.data));
  }, []);

  return (
    <>
      <Hero
        title="Како до најдобар избор при процесот на регрутација?"
        subtitle="Од Ѓоко Вукановски / 20 Јуни, 2024"
        buttonText="Прочитај повеќе"
        buttonLink="/blogArticle"
      />
      <Carousel />
      <BlogsInfoComponent />
      <LatestBlogs />
      <Culture />
      <Culture />
    </>
  );
};

export default Blogs;

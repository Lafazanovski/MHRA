import BlogComments from "@/components/blogComments/blogComments";
import BlogContent from "@/components/blogContent/blogContent";
import Carousel from "@/components/carousel/carousel";
import HeroDetail from "@/components/heroDetail/heroDetail";
import SimilarBlogs from "@/components/similarBlogs/similarBlogs";
import { BlogPost } from "@/types";

interface BlogArticleProps {
  blog: BlogPost;
}

const defaultBlog: BlogPost = {
  id: 0,
  title: "Како до најдобар избор при процесот на регрутација?",
  paragraph: "Од Ѓоко Вукановски / 20 Јуни, 2024",
  image: "/images/img1.png",
};

const BlogArticle = ({ blog = defaultBlog }: BlogArticleProps) => {
  if (!blog) return null;

  return (
    <>
      <HeroDetail title={blog.title} subtitle={blog.paragraph} image="/images/img3.png" />
      <Carousel />
      <BlogContent />
      <BlogComments />
      <SimilarBlogs />
    </>
  );
};

export default BlogArticle;

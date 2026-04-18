import { BlogPost } from "@/types";
import BlogArticle from "../blogArticle";
import { GetServerSideProps } from "next";
import { blogPosts } from "@/data/blogs";

interface BlogPageProps {
    blog: BlogPost;
}

const BlogPage = ({blog}: BlogPageProps ) => {
    return <BlogArticle blog={blog} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const blog = blogPosts.find((post) => post.id === Number(id))

    if (!blog) {
        return { notFound: true };
    }

    return {
        props: {
            blog,
        }
    }
}

export default BlogPage
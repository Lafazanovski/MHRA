import { BlogPost } from "@/types";
import BlogArticle from "../blogArticle";
import { GetServerSideProps } from "next";





interface BlogPageProps {
    blog: BlogPost;
}

const BlogPage = ({blog}: BlogPageProps ) => {
    return <BlogArticle blog={blog} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`);
    const json = await res.json();

    if (!json.success) {
        return { notFound: true };
    }

    return {
        props: {
            blog: json.data,
        }
    }
}

export default BlogPage
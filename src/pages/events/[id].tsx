
import { BlogPost } from "@/types";
import { GetServerSideProps } from "next";
import SingleEventPage from "../singleEventPage";

interface SingleEventProps {
    event: BlogPost;
}

const SingleEvent = ({ event }: SingleEventProps) => {
    return <SingleEventPage event={event} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const res = await fetch(`http://localhost:3000/api/events?id=${id}`);
    const json = await res.json();

    if (!json.success) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            event: json.data,
        },
    };
};

export default SingleEvent
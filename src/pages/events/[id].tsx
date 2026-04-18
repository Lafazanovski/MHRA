
import { BlogPost } from "@/types";
import { GetServerSideProps } from "next";
import SingleEventPage from "../singleEventPage";
import { eventsPosts } from "@/data/events";

interface SingleEventProps {
    event: BlogPost;
}

const SingleEvent = ({ event }: SingleEventProps) => {
    return <SingleEventPage event={event} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const event = eventsPosts.find((post) => post.id === Number(id))

    if (!event) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            event,
        },
    };
};

export default SingleEvent
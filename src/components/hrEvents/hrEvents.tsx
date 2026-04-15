import { BlogPost } from "@/types";
import React, { useEffect, useState } from "react";
import CardContainer from "../cardContainer/cardContainer";
import Link from "next/link";

interface HrEventsProps {
  title: string;
  id: string;
}

const HrEvents = ({ title, id }: HrEventsProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((json) => setPosts(json.data));
  }, []);

  return (
    <>
      <div id={id} className="hrEventsSection">
        <div className="hrEventsContainer wrapper">
          <div className="hrEventsHeadingDiv">
            <h2>{title}</h2>
            <Link href="/eventListing">
              <p>Види ги сите</p>
            </Link>
          </div>

          <CardContainer posts={posts} linkPrefix="/events" />
        </div>
      </div>
    </>
  );
};

export default HrEvents;

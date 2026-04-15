import React, { useEffect, useState } from "react";
import CardContainer from "../cardContainer/cardContainer";
import { BlogPost } from "@/types";

const Events = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((json) => setPosts(json.data));
  }, []);

  return (
    <>
      <div className="eventsSection">
        <div className="eventsContainer wrapper">
          <h2>Актуелни настани</h2>
          <CardContainer posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Events;

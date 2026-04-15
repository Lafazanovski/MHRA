import React, { useEffect, useState } from 'react'
import CardContainer from '../cardContainer/cardContainer';
import { BlogPost } from '@/types';

const Research = () => {

  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blogs').then((res) => res.json()).then((json) => setPosts(json.data));
  }, [])

  return (
    <>
      <div className="researchSection">
        <div className="researchContainer wrapper">
          <h2>Популарни истражувања</h2>
          <CardContainer posts={posts}  linkPrefix="/blogs"/>
        </div>
      </div>
    </>
  );
}

export default Research
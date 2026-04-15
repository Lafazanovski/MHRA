import React, { useEffect, useState } from 'react'
import CardContainer from '../cardContainer/cardContainer';
import { BlogPost } from '@/types';

const SimilarBlogs = () => {
      const [posts, setPosts] = useState<BlogPost[]>([]);
    
      useEffect(() => {
        fetch('/api/blogs').then((res) => res.json()).then((json) => setPosts(json.data));
      }, [])
    
  return (
    <>
      <div className="similarBlogsSection">
        <div className="similarBlogsContainer wrapper">
          <h2>Слични Блогови</h2>
          <CardContainer posts={posts} linkPrefix="/blogs" />
        </div>
      </div>
    </>
  );
}

export default SimilarBlogs
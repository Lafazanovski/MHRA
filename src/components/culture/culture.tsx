import React, { useEffect, useState } from 'react'
import CardContainer from '../cardContainer/cardContainer';
import { BlogPost } from '@/types';

const Culture = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        fetch('/api/blogs').then((res) => res.json()).then((json) => setPosts(json.data))
    }, [])

  return (
    <>
      <div className="cultureSection">
        <div className="cultureContainer wrapper">
          <h2>Тема: Култура во компанијата</h2>
          <CardContainer posts={posts}  linkPrefix="/blogs" />
        </div>
      </div>
    </>
  );
}

export default Culture
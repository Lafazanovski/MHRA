import React, { useEffect, useState } from 'react'
import CardContainer from '../cardContainer/cardContainer';
import { BlogPost } from '@/types';

const SimilarEvents = () => {
      const [posts, setPosts] = useState<BlogPost[]>([]);
    
      useEffect(() => {
        fetch('/api/events').then((res) => res.json()).then((json) => setPosts(json.data));
      }, [])
    
  return (
    <>
    <div className='similarEventsSection'>
        <div className='similarEventsContainer wrapper'>
            <h2>Слични Настани</h2>
            <CardContainer posts={posts} />
        </div>
    </div>
    </>
  )
}

export default SimilarEvents
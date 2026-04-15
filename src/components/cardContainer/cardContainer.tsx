import React from 'react'
import Card from '../card/card'
import { BlogPost } from '@/types';

interface CardContainerProps {
  posts: BlogPost[];
  linkPrefix?: string;
}

const CardContainer = ({ posts = [], linkPrefix = "/events" }: CardContainerProps) => {
  return (
    <>
    <div className='cardContainer'>
      {posts.map((post) => (
        <Card key={post.id} post={post} linkPrefix={linkPrefix} />
      ))}   
    </div>
    </>
  )
}

export default CardContainer
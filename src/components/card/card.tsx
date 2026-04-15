import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface CardProps {
  post: BlogPost;
  linkPrefix?: string;
}

const Card = ({ post, linkPrefix = "/events" }: CardProps) => {
  return (
    <>
      {/* Card */}
      <div className="card fadeIn">
        <div className="cardImgDiv">
          <Image
            src={post.image}
            alt={post.title}
            className="cardImg"
            width={300}
            height={200}
          />
        </div>
        <div className="cardTextDiv">
          <h5 className="cardTitle">{post.title}</h5>
          <p className="cardParagraph">{post.paragraph}</p>
          <Link href={`${linkPrefix}/${post.id}`}>
            <button className="readMoreBtn cardTextDivBtn">
              Прочитај повеќе
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card
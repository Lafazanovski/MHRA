import React, { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval); 
  }, [total]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const person = testimonials[current];

  return (
    <div className="testimonialSection">
      <div className="testimonialContainer wrapper">
        <div className="testimonialLeft">
          <span className="testimonialQuote"></span>
          <div className="testimonialImgDiv">
            <Image
            className="testimonialImage"
              src={person.image}
              alt={person.name}
              width={300}
              height={300}  
            />
          </div>
        </div>

        <div className="testimonialRight">
          <h2 className="testimonialName">{person.name}</h2>
          <p className="testimonialPosition">{person.position}</p>
          <p className="testimonialParagraph">{person.paragraph}</p>

          <div className="testimonialNav">
            <button onClick={handlePrev} className="testimonialNavBtn">
              ‹
            </button>
            <span className="testimonialCounter">
              {current + 1} / {total}
            </span>
            <button onClick={handleNext} className="testimonialNavBtn">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

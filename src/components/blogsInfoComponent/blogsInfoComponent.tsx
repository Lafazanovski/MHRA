import React from "react";
import Image from "next/image";

const BlogsInfoComponent = () => {
  return (
    <>
      <div className="blogsInfoSection">
        <div className="blogsInfoContainer wrapper">
          <div className="blogsInfoLeftDiv">
            <Image
              src="/images/img5.png"
              alt="Blogs Info Img"
              className="blogsInfoImg"
              width={200}
              height={250}
            />
          </div>
          <div className="blogsInfoRightDiv">
            <h5>
              Биди активен/на, споделувај настани на социјалните медиуми,
              собирај поени, добивај значки и рамки, кани пријатели на настани и
              освојувај попусти за следната купена карта.
            </h5>
            <p>
              Доколку овој месец си најактивен/а во форумот, добиваш награди за
              да го направиш твојот профил уникатен, а ако каниш пријатели и тие
              купат карта преку твојот линк за покана, добиваш попуст на
              следната купена карта за настан.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsInfoComponent;

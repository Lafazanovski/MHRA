import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="blogSection">
        <div className="blogContainer wrapper">
          {/* div1 */}
          <div className="blogDivTopLeft slideFromLeft">
            <div className="blogImgLeftDiv"></div>
          </div>

          {/* div2 */}
          <div className="blogDivBottomLeft slideFromLeft">
            <div className="blogImgBottomDiv"></div>
            <div className="ourBlogDiv">
              <p>Упати се уште сега кон </p>
              <Link href="/blogs">
                <button className="primaryButton">Нашиот блог</button>
              </Link>
            </div>
          </div>

          {/* div3 */}
          <div className="blogDivTopRight slideFromRight">
            <h1>
              Кажи ги своите мислења и поврзи се со остнатите HR ентузијасти
            </h1>
            <p>
              Во нашиот <strong>блог</strong> од сега ќе можеш да разменуваш
              мислења на актуелни теми со останатите корисници.
            </p>
          </div>

          {/* div4 */}
          <div className="blogDivBottomRight slideFromRight">
            <div className="blogImgRightDiv"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

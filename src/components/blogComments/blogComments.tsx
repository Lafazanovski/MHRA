import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const BlogComments = () => {
  return (
    <>
      <div className="blogCommentsSection">
        <div className="blogCommentsContainer wrapper">
          {/* 1 */}
          <div className="blogCommentsInputDiv">
            <div className="blogCommentsButtons">
              <button>
                <FontAwesomeIcon icon={faThumbsUp} /> 153
              </button>
              <button>
                {" "}
                <FontAwesomeIcon icon={faHeart} /> 25
              </button>
              <button>
                <FontAwesomeIcon icon={faComment} /> 18
              </button>
            </div>
            <div className="blogCommentsIconsDiv">
              <p>Ти се допаѓа овој блог? Сподели го!</p>
              <div className="blogCommentsIcons">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
            <div className="blogCommentsInput">
              <textarea
                className="blogCommentsTextarea"
                name="blogComments"
                rows={10}
                cols={70}
                id="blogComments"
              >
                Напиши го твојот коментар...
              </textarea>
            </div>
          </div>
          {/* 2 */}
          <div className="blogCommentsTextDiv">
            <h2>Коментари</h2>

            {/* Comment 1 */}
            <div className="blogComment">
              <div className="blogCommentImageAndNameDiv">
                <Image
                  src="/images/img1.png"
                  alt="image1"
                  width={50}
                  height={50}
                  className="commentImage"
                />
                <div className="blogCommentNameAndTimeDiv">
                  <h4>Попај Морнаровски</h4>
                  <p>Пред 10 минути</p>
                </div>
              </div>
              <p>
                Регрутацијата е комплексен процес кој бара планирање и
                имплементација.
              </p>
            </div>

            {/* Comment 2 */}
            <blockquote>
              <div className="blogComment">
                <div className="blogCommentImageAndNameDiv">
                  <Image
                    src="/images/img10.png"
                    alt="image1"
                    width={50}
                    height={50}
                    className="commentImage"
                  />
                  <div className="blogCommentNameAndTimeDiv">
                    <h4>Фрањо</h4>
                    <p>Пред 6 минути</p>
                  </div>
                </div>
                <p>
                  Регрутацијата е комплексен процес кој бара планирање и
                  имплементација.
                </p>
              </div>
            </blockquote>
            {/* Comment 3 */}
            <blockquote>
              <div className="blogComment">
                <div className="blogCommentImageAndNameDiv">
                  <Image
                    src="/images/img3.png"
                    alt="image1"
                    width={50}
                    height={50}
                    className="commentImage"
                  />
                  <div className="blogCommentNameAndTimeDiv">
                    <h4>Бобан</h4>
                    <p>Пред 30 минути</p>
                  </div>
                </div>
                <p>
                  Регрутацијата е комплексен процес кој бара планирање и
                  имплементација.
                </p>
              </div>
            </blockquote>
            {/* Comment 4 */}
            <blockquote>
              <div className="blogComment">
                <div className="blogCommentImageAndNameDiv">
                  <Image
                    src="/images/img9.png"
                    alt="image1"
                    width={50}
                    height={50}
                    className="commentImage"
                  />
                  <div className="blogCommentNameAndTimeDiv">
                    <h4>Весна</h4>
                    <p>Пред 12 минути</p>
                  </div>
                </div>
                <p>
                  Регрутацијата е комплексен процес кој бара планирање и
                  имплементација.
                </p>
              </div>
            </blockquote>
            {/* Comment 5 */}
            <div className="blogComment">
              <div className="blogCommentImageAndNameDiv">
                <Image
                  src="/images/img5.png"
                  alt="image1"
                  width={50}
                  height={50}
                  className="commentImage"
                />
                <div className="blogCommentNameAndTimeDiv">
                  <h4>Јовче Попов</h4>
                  <p>Пред 10 минути</p>
                </div>
              </div>
              <p>
                Регрутацијата е комплексен процес кој бара планирање и
                имплементација.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComments;

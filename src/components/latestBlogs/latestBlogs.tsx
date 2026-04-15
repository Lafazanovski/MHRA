import React, { useEffect, useState } from "react";
import Card from "../card/card";
import { BlogPost } from "@/types";
import { getRandomItems } from "@/utils/random";

const filters = [
  "Сите",
  "Регрутирање",
  "Компензации",
  "HR согласност",
  "Организациска структура",
  "Обучување",
  "Развој",
  "Менаџмент на перформанси",
];

const LatestBlogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeFilter, setActiveFilter] = useState("Сите");

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((json) => setPosts(json.data as BlogPost[]));
  }, []);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((json) => {
        const random = getRandomItems(json.data as BlogPost[], 2);
        setPosts(random);
      });
  };

  return (
    <>
      <div className="latestBlogsSection">
        <div className="latestBlogsContainer wrapper">
          {/* filters */}
          <div className="latestBlogsSearchDiv">
            <div className="latestBlogsFilterButtons">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilter(filter)}
                  className={`latestBlogsFilterBtn ${activeFilter === filter ? "activeButton" : ""}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="latestBlogsHeadingAndSearchDiv">
              <h2>Најнови Блогови</h2>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Пребарај"
              />
            </div>
          </div>

          {/* Cards Div */}
          <div className="latestBlogsCardsDiv">
            {/* Left Div */}
            <div className="latestBlogsCardsLeftDiv">
              {/* Left Top Div */}
              <div className="latestBlogsCardsLeftTopDiv">
                {posts[0] && <Card post={posts[0]} linkPrefix="/blogs" />}
                <div className="carouselItem latestBlogsCarouselItem">
                  <div className="carouselItemContent">
                    <div className="carouselItemInfo">
                      <p>Конференција</p>
                      <p>HR Кафе</p>
                    </div>
                    <div className="carouselItemDate">
                      <p>Сеп</p>
                      <p className="carouselItemDateNumber">18</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Bottom Div */}
              <div className="latestBlogsCardsLeftBottomDiv">
                <div className="carouselItem latestBlogsCarouselItem">
                  <div className="carouselItemContent">
                    <div className="carouselItemInfo">
                      <p>Конференција</p>
                      <p>HR Кафе</p>
                    </div>
                    <div className="carouselItemDate">
                      <p>Мај</p>
                      <p className="carouselItemDateNumber">12</p>
                    </div>
                  </div>
                </div>
                {posts[1] && <Card post={posts[1]} linkPrefix="/blogs" />}
              </div>
            </div>
            {/* Right Div */}
            <div className="latestBlogsCardsRightDiv">
              <h4>Најнови огласи:</h4>
              <ul>
                <li>HR админ</li>
                <li>Практикант</li>
                <li>Извршен менаџер</li>
                <li>HR практикант</li>
                <li>Management trainee</li>
                <li>Практикант</li>
                <li>Менаџер за HR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;

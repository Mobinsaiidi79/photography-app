import React from "react";
import Footer from "../../component/Footer/Footer";
import { FaUserAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { Blogs, RecentPosts } from "../../data";
import "./Blog.css";
export default function Blog() {
  return (
    <div className="about">
      {/* portfolio header */}
      <section className="about-header">
        <img className="about-header__img" alt="img" src="./img/gallery8.jpg" />
        <div className="about-header__text">
          <span className="about-header__title">Explore</span>
          <p className="about-header__subtitle">MY BLOG</p>
        </div>
      </section>

      {/* start section content blog page */}
      <section className="blog-content">
        {/* content left */}
        <div className="blog-content__left">
          {Blogs.map((blogData) => (
            <div className="blog-box">
              <div className="blog-box__header">
                <img src={blogData.img} alt="img blog" />
                <span className="blog-box__header-date">
                  15 <br /> JUN
                </span>
              </div>
              <div className="blog-box__content">
                <span className="blog-box__title">{blogData.title}</span>
                <span className="blog-box__subtitle">{blogData.subtitle}</span>
              </div>
              <div className="blog-box__footer">
                <div className="blog-box__footer-category">
                  <FaUserAlt className="blog-box__footer-icon" />
                  <span className="blog-box__footer-text">
                    Travel, Lifestyle
                  </span>
                </div>
                <div className="blog-box__footer-comment">
                  <FaRegComments className="blog-box__footer-icon" />
                  <span className="blog-box__footer-text">03 Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* content right */}
        <div className="blog-content__right">
          {/* search box */}
          <div className="blog-content__right-searchBox">
            <input
              type="text"
              placeholder="Search Keyword"
              className="blog-content__right-input"
            />
            <button type="button" className="blog-content__right-btn">
              Search
            </button>
          </div>

          {/* category box */}

          <div className="blog-content__right-categorys">
            <span className="blog__right-categorys-title">Category</span>
            <ul className="blog__right-category-items">
              <li className="blog__right-category-item">Resaurant food (37)</li>
              <li className="blog__right-category-item">Travel news (10)</li>
              <li className="blog__right-category-item">
                Modern technology (03)
              </li>
              <li className="blog__right-category-item">Product (11)</li>
              <li className="blog__right-category-item">Inspiration (21)</li>
              <li className="blog__right-category-item">Health Care (21)</li>
            </ul>
          </div>

          {/* Recent Post box*/}
          <div className="blog-content__right-RecentPosts">
            <span className="blog__right-RecentPosts-title">Recent Post</span>
            <ul className="blog__right-RecentPosts-items">
              {RecentPosts.map((post) => (
                <li className="blog__right-RecentPosts-item">
                  <img
                    src={post.img}
                    className="blog__right-RecentPosts-item-img"
                    alt="post"
                  />
                  <div className="blog__right-recentPost-description">
                    <span className="blog__right-recentPost-title">
                      {post.title}
                    </span>
                    <span className="blog__right-recentPost-subtitle">
                      {post.subtitle}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tag box */}
          <div className="blog-content__right-RecentPosts">
            <span className="blog__right-RecentPosts-title">Tag Clouds</span>
            <ul className="blog__right-tag-items">
              <li className="blog__right-tag-item">project</li>
              <li className="blog__right-tag-item"> love</li>
              <li className="blog__right-tag-item">technology</li>
              <li className="blog__right-tag-item">travel</li>
              <li className="blog__right-tag-item">restaurant</li>
              <li className="blog__right-tag-item">life style</li>
              <li className="blog__right-tag-item">design</li>
              <li className="blog__right-tag-item">illustration</li>
            </ul>
          </div>

          {/* Instagram Feeds */}
          <div className="blog-content__right-RecentPosts">
            <span className="blog__right-RecentPosts-title">Tag Clouds</span>
            <ul className="blog__right-tag-items">
              <img src="./img/post_1.jpg.webp" alt="post" />
              <img src="./img/post_6.jpg.webp" alt="post" />
              <img src="./img/post_5.jpg.webp" alt="post" />
              <img src="./img/post_7.jpg.webp" alt="post" />
              <img src="./img/post_9.jpg.webp" alt="post" />
              <img src="./img/post_10.jpg.webp" alt="post" />
            </ul>
          </div>

          {/* news box */}
          <div className="blog-content__right-RecentPosts">
            <span className="blog__right-RecentPosts-title">Newsletter</span>
           <div className="blog-content__right-Newsletter-content">
            <input type="text" className="blog-content__right-Newsletter-input" placeholder="Enter Email"/>
            <button className="blog-content__right-Newsletter-btn">SUBSCRIBE</button>
           </div>
          </div>

        </div>
      </section>
      {/* end section content blog page */}

      <Footer />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import loaderImage from '../../assets/images/loading.gif';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import './MainPage.css';
const Home = () => {

    const TopBlogs = [
      {
        id: 1,
        article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
        blog_name: 'journey to the Mountains',
        author_name: 'Mathhew',
        description:"this is descriptio for moving too mountains for journey"
      },
      {
        id: 2,
        article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
        blog_name: 'journey to the Mountains',
        author_name: 'Mathhew',
         description:"this is descriptio for moving too mountains for journey"
      },
      {
        id: 3,
        article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
        blog_name: 'journey to the Mountains',
        author_name: 'Mathhew',
        description:"this is descriptio for moving too mountains for journey"
      }
    ]
  return (
    <Layout>
    <div className="main-page">
        <h1>Top Blogs</h1>
        <div className="blogs-container">
            {TopBlogs.map((blog, index) => (
                <Link to={`/article/${blog.id}`} key={index} className="blog-card-link">
                <div key={index} className="blog-card">
                    <img src={blog.article_image} alt={blog.blog_name} className="blog-image" />
                    <h2 className="blog-title">{blog.blog_name}</h2>
                    <p className="blog-author">By {blog.author_name}</p>
                </div>
                </Link>
            ))}
        </div>
    </div>
    </Layout>
);
};
export default Home;
import React, { useEffect, useState } from 'react';
import loaderImage from '../../assets/images/load.gif';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import './MainPage.css';
const Home = () => {

    const TopBlogs = [
      {
        id: 1,
        article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
        blog_name: 'Journey to the Mountains',
        author_name: 'Adarsh',
        description:"This is description for moving to mountains for journey."
      },
      {
        id: 2,
        article_image: 'https://img.freepik.com/free-photo/road-cliff_53876-15101.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais',
        blog_name: 'Journey to the Sea',
        author_name: 'Abhay',
         description:"This is description for moving to sea for journey.."
      },
      {
        id: 3,
        article_image: 'https://www.shutterstock.com/image-photo/footsteps-desert-before-sunrise-landscape-260nw-1479236717.jpg',
        blog_name: 'Journey to the Desert',
        author_name: 'Yash',
        description:"This is description for moving to desert for journey."
      },
      {
        id: 4,
        article_image: "https://www.fao.org/images/newsroomlibraries/breafing-notes/36949400340_030e4ae5f9_oab4ccd35-fd6a-4230-bd2e-f0113f50357d.jpg?sfvrsn=426ca1c_3",
        blog_name: "Journey to the Forest",
        author_name: "Emily",
        description: "Embark on a serene and captivating Journey through the Forest. This blog explores the lush greenery, diverse wildlife, and the tranquil beauty of forest trails. From hidden waterfalls to majestic old-growth trees, join Emily as she uncovers the secrets and wonders of the forest."
  },
      {
         id: 5,
         article_image: "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?cs=srgb&dl=pexels-pixabay-256150.jpg&fm=jpg",
         blog_name: "Journey to the City Lights",
         author_name: "Alex",
         description: "Dive into the vibrant and bustling world of city life with Journey to the City Lights. Alex takes you on an urban adventure, exploring the dynamic culture, stunning architecture, and the lively nightlife that cities around the world have to offer. Discover hidden gems, iconic landmarks, and the pulse of city living."
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

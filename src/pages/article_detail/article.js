import React from 'react';
import { useParams } from 'react-router-dom';
import './article.css';
import Layout from '../layout/Layout';
 
const ArticleDetail = () => {
  const { id } = useParams();
  const TopBlogs = [
    {
      id: 1,
      article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
      blog_name: 'Journey to the Mountains',
      author_name: 'Matthew',
      description: 'This is a detailed description about Journey to the Mountains.',
    },
    {
      id: 2,
      article_image: 'https://img.freepik.com/free-photo/road-cliff_53876-15101.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais',
      blog_name: 'Journey to the Sea',
      author_name: 'John',
      description: 'This is a detailed description about Journey to the Sea.',
    },
    {
      id: 3,
      article_image: 'https://www.shutterstock.com/image-photo/footsteps-desert-before-sunrise-landscape-260nw-1479236717.jpg',
      blog_name: 'Journey to the Desert',
      author_name: 'Sarah',
      description: 'This is a detailed description about Journey to the Desert.',
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
  ];
 
  const blog = TopBlogs.find(blog => blog.id === parseInt(id));
 
  if (!blog) {
    return <div>Article not found</div>;
  }
 
  return (
<Layout>
<div className="article-detail">
<h1>{blog.blog_name}</h1>
<img src={blog.article_image} alt={blog.blog_name} className="article-image" />
<p><strong>Author:</strong> {blog.author_name}</p>
<p>{blog.description}</p>
</div>
</Layout>
  );
};
 
export default ArticleDetail;

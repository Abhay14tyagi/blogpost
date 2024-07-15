import React from 'react';
import { useParams } from 'react-router-dom';
import './article.css';
 
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
      article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
      blog_name: 'Journey to the Sea',
      author_name: 'John',
      description: 'This is a detailed description about Journey to the Sea.',
    },
    {
      id: 3,
      article_image: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg',
      blog_name: 'Journey to the Desert',
      author_name: 'Sarah',
      description: 'This is a detailed description about Journey to the Desert.',
    }
  ];
 
  const blog = TopBlogs.find(blog => blog.id === parseInt(id));
 
  if (!blog) {
    return <div>Article not found</div>;
  }
 
  return (
<div className="article-detail">
<h1>{blog.blog_name}</h1>
<img src={blog.article_image} alt={blog.blog_name} className="article-image" />
<p><strong>Author:</strong> {blog.author_name}</p>
<p>{blog.description}</p>
</div>
  );
};
 
export default ArticleDetail;
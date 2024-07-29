import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './blogDetails.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/api/v1/blog/fetch/${id}`);
        console.log('API response:', response); // Log the response for debugging
        if (response.data.data && response.data.data.Blog_Title) {
          setBlog(response.data.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Fetch error:', err); // Log the error for debugging
        setError('Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="blog-detail">
      <h2 className="blog-title">{blog.Blog_Title}</h2>
      <p className="blog-content">{blog.Description}</p>
      <p className="blog-author">By {blog.Author_Name}</p>
      <p className="blog-date">Created at: {new Date(blog.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default BlogDetail;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AllBlogs.css';
import Layout from '../layout/Layout';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3030/api/v1/blog/getAllBlogs');
        setBlogs(response.data.data);
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <Layout>
    <div className="blog-container">
      {blogs.map(blog => (
        <div key={blog._id} className="blog-card">
          <Link to={`/blog/${blog._id}`}>
            <h2 className="blog-title">{blog.Blog_Title}</h2>
          </Link>
          <p className="blog-content">{blog.Description}</p>
          <p className="blog-author">By {blog.Author_Name}</p>
          <p className="blog-date">Created at: {new Date(blog.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default AllBlogs;

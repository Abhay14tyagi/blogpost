import React from 'react'
import Home from './pages/home/MainPage'
import './App.css'
import AddBlog from './pages/Addblogs/addblog'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllBlogs from './pages/AllBlogs/AllBlogs'
 import ArticleDetail from './pages/article_detail/article'
import BlogDetail from './pages/BlogDetails/blogDetails'
import About from './pages/AboutUs/About'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/article/:id" exact element={<ArticleDetail/>} />
        <Route path="/add-blog" exact element={<AddBlog/>} />
        <Route path="/blogs" exact element={<AllBlogs/>} />
        <Route path="/blog/:id" exact element={<BlogDetail/>} />
        <Route path="/about" exact element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Home from './pages/home/MainPage'
import './App.css'
// import About from './pages/about/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// //import Error from './pages/error/Error'
 import ArticleDetail from './pages/article_detail/article'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/article/:id" exact element={<ArticleDetail/>} />
        {/* <Route path="/about-us" exact element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<PageNotFound/>} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
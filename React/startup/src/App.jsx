import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './website/Pages/Home'
import About from './website/Pages/About'
import Service from './website/Pages/Service'
import Blogs from './website/Pages/Blogs'
import BlogDatil from './website/Pages/BlogDatil'
import Contact from './website/Pages/Contact'
import Feature from './website/Pages/Feature'
import Team from './website/Pages/Team'
import Teasti from './website/Pages/Teasti'
import Quota from './website/Pages/Quota'
import Price from './website/Pages/Price'
import NotFound from './website/Pages/NotFound'
import Dashboard from './Admin/Apages/Dashboard'
import CourseMang from './Admin/Apages/CourseMang'
import CourseAdd from './Admin/Apages/CourseAdd'

function App() {
  return (
    <BrowserRouter>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blogd' element={<BlogDatil />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feact' element={<Feature />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testi' element={<Teasti />} />
          <Route path='/quta' element={<Quota />} />
          <Route path='/price' element={<Price />} />

          <Route path='*' element={<NotFound />} />

          {/* admin route */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/course' element={<CourseMang />} />
          <Route path='/courseadd' element={<CourseAdd />} />


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <Header />
        <h1 className='p-5 bg-success'>hello this About Pages</h1>
        <Link to="/about/about1" className='btn btn-primary mx-3'>About 1</Link>
        <Link to="/about/about2" className='btn btn-primary'>About 2</Link>
        <Outlet />
      <Footer />
    </div>
  )
}

export default About

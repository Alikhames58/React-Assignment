import React from 'react'
import './about.css'
export default function About() {
  return (
    <>
      <section className=' vh-100 about d-flex align-items-center mt-3 '>
    <div className="container">
    <div className="content d-flex justify-content-center flex-column my-4">
   <h1 className='text-uppercase text-white'>about component</h1>
   <div className="line-icon d-flex justify-content-center ">
    <i className='star-icon fa-solid fa-star'></i>
   </div>
    </div>
    <div className="row">
    <div className="col-md-6">
      <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className="col-md-6">
      <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}
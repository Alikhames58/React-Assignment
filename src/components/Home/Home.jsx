import React from 'react'
import img from '../../img/home.svg'
import './Home.css'
export default function Home() {
  return (
    <>
    <section className='home  vh-100 d-flex align-items-center p-5'> 
    <div className="container ">
    <div className="content d-flex justify-content-center align-items-center flex-column">
        <div className="img">
        <img src={img} className='w-100' alt="" />
        </div>
    <div className="content-info d-flex flex-column align-items-center">
        <h1 className='text-uppercase '>start Framework</h1>
        <div className="icon">
        <i className='fa-solid fa-star '></i>
        </div>
        <span className='my-2'>Graphic Artist - Web Designer - Illustrator</span>
    </div>
    </div>
    </div>
    </section>
    </> 
  )
}

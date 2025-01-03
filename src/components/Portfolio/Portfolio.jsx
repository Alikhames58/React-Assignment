import React from 'react'
import './portfolio.css'
import img1 from '../../img/port1.png'
import img2 from '../../img/port2.png'
import img3 from '../../img/port3.png'
export default function Portfolio() {
  return (
    <>
      <section className='portfolio  d-flex align-items-center my-5 '>
        <div className="container">
      <div className="head-content d-flex  align-items-center flex-column text-center p-5">
      <h1 className='text-uppercase '>portfolio component</h1>
        <div className="icon">
        <i className='fa-solid fa-star '></i>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
         <div className="layer-container ">
          <div className="layer d-flex justify-content-center align-items-center  ">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            <div className="img">
              <img src={img1} alt="" className='w-100'/>
            </div>
         </div>
        </div>
        <div className="col-md-4">
         <div className="layer-container  ">
          <div className="layer d-flex  justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            <div className="img">
              <img src={img2} alt="" className='w-100'/>
            </div>
         </div>
        </div>
        <div className="col-md-4">
         <div className="layer-container ">
          <div className="layer d-flex  justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            <div className="img">
              <img src={img3} alt="" className='w-100'/>
            </div>
         </div>
        </div>
        <div className="col-md-4">
         <div className="layer-container ">
          <div className="layer d-flex  justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            <div className="img">
              <img src={img1} alt="" className='w-100'/>
            </div>
         </div>
        </div>
        <div className="col-md-4">
         <div className="layer-container ">
          <div className="layer d-flex  justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            <div className="img">
              <img src={img2} alt="" className='w-100'/>
            </div>
         </div>
        </div>
        <div className="col-md-4">
         <div className="layer-container ">
          <div className="layer d-flex  justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            <div className="img">
              <img src={img3} alt="" className='w-100'/>
            </div>
         </div>
        </div>
       



      </div>
      </div>
      </section>
    </>
  )
}

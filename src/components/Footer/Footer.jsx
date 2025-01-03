import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="container">
        <div className="row g-5 justify-content-center align-items-center text-center">
          <div className="col-md-4">
            <h2 className='text-uppercase'>location</h2>
            <span className='d-block'>2215 John Daniel Drive</span>
            <span>Clark, MO 65243</span>
          </div>
          <div className="col-md-4">
            <h2 className='text-uppercase'>around the web</h2>
            <div className="icons d-flex justify-content-center align-items-center     w-100">
              <div className="icon">
                <i className="fab fa-facebook-f mx-1"></i>
              </div>
              <div className="icon">
                <i className="fab fa-twitter mx-1"></i>
              </div>
              <div className='icon'>
                <i className="fab fa-linkedin-in mx-1"></i>
              </div>
              <div className='icon'>
                <i className="fa-solid fa-globe mx-1 "></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
         
          </div>
        </div>
      </footer>
        <div className=" bottom-footer d-flex justify-content-center align-items-center">
            <span>Copyright © Your Website 2021</span>
          </div>
    </>
  )
}

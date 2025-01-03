import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <>
      <section className='contact p-1 my-5'>
      <div className="container">
        <div className="contact-content d-flex justify-content-center align-items-center flex-column  my-5">
          <h1 className="text-center text-uppercase py-3">Contact section</h1>
          <div className="contact-icon">
          <i className='fa-solid fa-star  '></i>
          </div>
        </div>
        <div className="form-container w-100">
      <div className="row g-4">
        <div className="col-md-12">
          <div className="form-group my-3 w-100">
            <input
              type="text"
              id="userName"
              placeholder=" "
              className="w-100"
            />
            <label htmlFor="userName">userName</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group my-3 w-100">
            <input
              type="number"
              id="userAge"
              placeholder=" "
              className="w-100"
            />
            <label htmlFor="userAge">userAge</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group my-3 w-100">
            <input
              type="email"
              id="userEmail"
              placeholder=" "
              className="w-100"
            />
            <label htmlFor="userEmail">userEmail</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group my-3 w-100">
            <input
              type="password"
              id="userPassword"
              placeholder=" "
              className="w-100"
            />
            <label htmlFor="userPassword">userPassword</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <button className="myBtn">Send Message</button>
          </div>
        </div>
      </div>
    </div>

      </div>
      </section>
    </>
  )
}


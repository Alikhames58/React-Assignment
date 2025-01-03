import React from 'react'

export default function NotFound() {
  return (
    <>
        <section className='vh-100 d-flex justify-content-center align-items-center'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
            <div className="not-found-content d-flex justify-content-center align-items-center flex-column">
                    <h1 className="text-center text-uppercase">404</h1>
                    <h2 className="text-center text-uppercase">Page Not Found</h2>
                    <div className="not-found-icon">
                    <i className='fa-solid fa-ghost fa-10x'></i>
                    </div>
                </div>
            </div>
          </div>
          </div>
        </section>
    </>
  )
}

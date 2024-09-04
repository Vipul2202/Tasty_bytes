import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
            <img src="./assets/img/lgg.png" alt="Logo" style={{width: "160px", height: "100px"}}/>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto p-4 p-lg-0">
                <Link to='/' className="nav-item nav-link active">Home</Link>
                <Link to='/about' className="nav-item nav-link">About</Link>
                <a href="/service" className="nav-item nav-link">Services</a>
                <a href="/products" className="nav-item nav-link">Products</a>
                <a href="/Testmonial" className="nav-item nav-link">Testimonial</a>
                <div className="nav-item dropdown">

                </div>
                <a href="/contact" className="nav-item nav-link">Contact</a>
            </div>
            <div className=" d-none d-lg-flex">
                <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                    <i className="fa fa-phone text-primary"></i>
                </div>
                <div className="ps-3">
                    <small className="text-primary mb-0">Call Us</small>
                    <p className="text-light fs-5 mb-0">+91 95689-81068</p>
                </div>
            </div>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}
    </>
  )
}

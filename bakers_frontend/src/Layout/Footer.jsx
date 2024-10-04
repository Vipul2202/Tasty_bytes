import React from "react";
import Testimonial from '../Pages/Testimonial';

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <h4 className="text-light mb-4">Bakery Address</h4>
              <p className="mb-2 flex justify-start">
                <i className="fa fa-map-marker-alt me-3"></i>SM 37, GIC Rd,
                Hastinapur, Hastinapur Kaurwan, Uttar Pradesh (250404)
              </p>
              <p className="mb-2 justify-start flex">
                <i className="fa fa-phone-alt me-3 "></i>+91 95689-81068
              </p>
              <p className="mb-2 flex justify-start">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2 pl-4 gap-6">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href="https://www.facebook.com/SunnyTanejaBakers"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-0"
                  href="https://www.instagram.com/shree_krishna_bekers/?hl=en"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="/">
                Home
              </a>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/products">
                Products
              </a>

              <a className="btn btn-link" href="/Testmonial">
                Testimonial
              </a>
              <a className="btn btn-link" href="/contact">
                Contact
              </a>
            </div>
           
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Photo Gallery</h4>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="./assets/img/pt.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="./assets/img/b.jpeg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="./assets/img/p.jpeg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="./assets/img/pt.jpeg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="./assets/img/cake.jpeg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light rounded p-1"
                    src="./assets/img/k.jpeg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End -->


    <!-- Copyright Start --> */}
      <div
        className="container-fluid copyright text-light py-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a href="https://www.facebook.com/SunnyTanejaBakers">
                Shree Krishna Bakers
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a href="https://vipul2202.github.io/vipul_portfolio_updated/">
                Er.Taneja
              </a>
              {/* <br/>Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>  */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
    </>
  );
}

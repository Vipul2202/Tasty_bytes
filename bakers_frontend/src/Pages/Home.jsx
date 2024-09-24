import React, { useEffect, useState } from "react";
import apiServices, { BASE_URL_IMG } from '../ApiServices/ApiServices'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from "react-router-dom";
import axios from "axios";
import cake from "../photo/cake.jpg"
export default function Home() {

        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(true);
        const [url,setUrl]=useState(cake)
        useEffect(()=>{
            const getbanner= async ()=>{
                try {
                    const res = (await axios.get("http://localhost:5000/banner/showbanner"))
                    setUrl(res)
                    
                    
                } catch (error) {
                    console.log(error,"error in banner")
                }
            
            }
            getbanner()


        },[])
        console.log("Data response",url)

        


        useEffect(() => {
          setTimeout(() => {
              setLoading(false);
          }, 1500);
          apiServices.getallProduct()
              .then((data) => {
                  if (data.data.success) {
      
                      setProduct(data.data.data);
      
                  } else {
                      toast.error(data.data.msg);
                  }
              })
              .catch((err) => {
      
                  toast.error("Something went wrong");
              });
            }, [loading]);
  return (
   <>
    
 {/* <!-- Carousel Start --> */}
 {/* <div className=" p-0 pb-5 wow fadeIn" >
        <div className=" header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="" src="./assets/img/cake.jpg" alt="" style={{width:"100%"}}/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-8">
                                <p className="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                <p className="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    </div> */}
    {/* {/* <!-- Carousel End --> */}
    <div className="container-fluid bg-dark text-white py-5 bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${url.data})` }}>
        
      <div className="container text-center py-5 heroinside">
        {/* <p className="text-warning text-uppercase mb-3">// The Best Bakery</p> */}
        <h1 className="display-4 fw-bold mb-4 text-white">We Bake With Passion</h1>
        <p className="lead mb-4">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
        <a href="https://www.facebook.com/SunnyTanejaBakers/" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Read More</a>

      </div>
    </div>
    {/* <!-- Facts Start --> */} 
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Years Experience</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-users fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Skilled Professionals</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">175</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-bread-slice fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Total Products</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">135</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Order Everyday</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">500+</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Facts End -->


    {/* <!-- About Start --> */} 
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="/assets/img/p.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="/assets/img/c.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 p-8 rounded-lg shadow-lg animate-fadeIn">
    <h1 className="text-4xl font-bold text-black mb-6 ">We Provide the Best Taste and Quality in Cakes, Pastries, Patties, Pizza, Burgers, and More!</h1>
    
    <p className="text-white text-lg leading-relaxed mb-4"> we bake with passion and care, creating beautiful cakes according to your favorite flavors and choices. Every bite is crafted with love to bring joy to your taste buds.</p>
    
    <div className="row g-2 mb-6">
        <div className="col-sm-6 text-white text-lg">
            <i className="fa fa-check text-yellow-300 mr-2"></i>Quality Products
        </div>
        <div className="col-sm-6 text-white text-lg">
            <i className="fa fa-check text-yellow-300 mr-2"></i>Custom Products
        </div>
       
    </div>

    <a className="btn bg-white text-pink-500 font-semibold  py-3 px-6 transition-transform duration-300 hover:scale-105 rounded-full" href="https://www.facebook.com/SunnyTanejaBakers/">Read More</a>
</div>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End -->


    <!-- Product Start --> */}
    <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
        <div className="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">

                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 text-light mb-0">The Best Bakery In Your City && (Village)</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <div className="d-inline-flex align-items-center text-start">
                            <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                            <div className="ms-4">
                                <p className="fs-5 fw-bold mb-0">Call Us</p>
                                <p className="fs-1 fw-bold mb-0">+91 95689-81068</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>

                <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
            </div>
            <div className="row g-4">
            {product.map((data, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s" key={index}>
                <div className="product-item d-flex flex-column rounded overflow-hidden ">
                  
                  <div className="position-relative mt-auto">
                    <img className="img-fluid w-full h-96 " src={BASE_URL_IMG + data?.Image} alt={data.productname} />
                    <div className="product-overlay">
                       <Link to={"/single-product/" + `${data?._id}`} className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></Link>
                       <div className="text-center p-4">
                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">{data.new_price}{data.old_price}</div>
                    <h3 className="mb-3">{data.productname}</h3>
                    <h4 className="mb-3">{data.category}</h4>
                    <span>{data.description}</span>
                  </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
    </div>
    {/* <!-- Product End -->


    <!-- Service Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  
                    <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-bread-slice text-white"></i>
                                </div>
                                <h5 className="mb-0">Quality Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-birthday-cake text-white"></i>
                                </div>
                                <h5 className="mb-0">Custom Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-cart-plus text-white"></i>
                                </div>
                                <h5 className="mb-0">Online Order</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-truck text-white"></i>
                                </div>
                                <h5 className="mb-0">Home Delivery</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="/assets/img/service-1.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="/assets/img/service-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End -->


    <!-- Team Start --> */}
    {/* <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Our Team</p>
                <h1 className="display-6 mb-4">We're Super Professional At Our Skills</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-1.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-2.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-3.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-4.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Team End -->


    <!-- Testimonial Start --> */}
    {/* <div className="container-xxl bg-light my-6 py-6 pb-0">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Client's Review</p>
                <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-1.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-2.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-3.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-4.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
            <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="position-relative">
                            <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Testimonial End --> */}

<ToastContainer/>
   </>
  )
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Effect to automatically close sidebar when switching from mobile to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) { // Typically 992px is the breakpoint for desktop in Bootstrap
        setIsSidebarOpen(false); // Close the sidebar
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="/" className="navbar-brand ms-4 ms-lg-0">
          {/* Main Navbar Logo */}
          <img
            src="./assets/img/lgg.png"
            alt="Logo"
            className="navbar-logo"
            style={{ width: "160px", height: "100px" }}
          />
        </a>
        <button type="button" className="navbar-toggler me-4" onClick={toggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isSidebarOpen ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <a href="/products" className="nav-item nav-link">Products</a>
            <a href="/Testmonial" className="nav-item nav-link">Testimonial</a>
            <a href="/contact" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}>
          <div className="sidebar">
          <div className="sidebar-logo">
              <img
                src="./assets/img/lgg.png"
                alt="Sidebar Logo"
                className="logo"
                style={{ width: "150px", height: "auto" }}
              />
            </div>
            {/* Sidebar Links */}
            <Link to="/" className="sidebar-item" onClick={toggleSidebar}>
              <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/about" className="sidebar-item" onClick={toggleSidebar}>
              <i className="fa fa-info-circle"></i> About
            </Link>
            <a href="/products" className="sidebar-item" onClick={toggleSidebar}>
              <i className="fa fa-box"></i> Products
            </a>
            <a href="/Testmonial" className="sidebar-item" onClick={toggleSidebar}>
              <i className="fa fa-users"></i> Testimonial
            </a>
            <a href="/contact" className="sidebar-item" onClick={toggleSidebar}>
              <i className="fa fa-envelope"></i> Contact
            </a>

            {/* Sidebar Logo at Bottom */}
            
          </div>
        </div>
      )}

      {/* Custom CSS for Sidebar */}
      <style jsx>{`
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        }
        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 250px;
          height: 100%;
          background-color: #282c34;
          padding: 20px;
          z-index: 10000;
          transform: ${isSidebarOpen ? 'translateX(0)' : 'translateX(100%)'};
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          
        }
        .sidebar-logo {
          text-align: start;
       
          
        }
        .navbar-logo {
          display: inline-block;
        }
        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 15px;
          color: #61dafb;
          text-decoration: none;
          font-size: 18px;
          transition: background-color 0.3s ease;
        }
        .sidebar-item i {
          margin-right: 10px;
        }
        .sidebar-item:hover {
          background-color: #444;
        }
      `}</style>
    </>
  );
}

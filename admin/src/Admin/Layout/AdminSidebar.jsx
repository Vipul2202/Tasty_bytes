import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebar({ setIsActive, isActive }) {
    // const [isActive, setIsActive]= useState(false)
  return (
    <div>
          {/* <!-- ======= Sidebar ======= --> */}

  <aside id="sidebar" className={`adminsidebar ${isActive === true && 'active'}` }>

<ul className="adminsidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <Link className="nav-link " to="/admin">
      <i className="bi bi-grid"></i>
      <span>Dashboard</span>
    </Link>
  </li>
  {/* <!-- End Dashboard Nav --> */}
{/* add banner start */}
<li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#banner-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-menu-button-wide"></i><span>Add Banner</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="banner-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

      <li>
        <Link to="/admin/AddBanner">
          <i className="bi bi-circle"></i><span>New banner</span>
        </Link>
      </li>
     
      
      
    </ul>
  </li>
{/* add banner end */}
  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">

      <li>
        <Link to="/admin/card-page">
          <i className="bi bi-circle"></i><span>Cards</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/crousel">
          <i className="bi bi-circle"></i><span>Carousel</span>
        </Link>
      </li>
     
      <li>
        <Link to="/admin/tab">
          <i className="bi bi-circle"></i><span>Tabs</span>
        </Link>
      </li>
      
      
    </ul>
  </li>
  {/* <!-- End Components Nav --> */}

 
  {/* <!-- End Forms Nav --> */}

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-layout-text-window-reverse"></i><span>Product</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <Link to="/admin/create-product">
          <i className="bi bi-circle"></i><span>Add Product</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/manage-product">
          <i className="bi bi-circle"></i><span>Manage Product</span>
        </Link>
      </li>
    </ul>
  </li>

 
  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#review-nav" data-bs-toggle="collapse" href="#">
    <i class="bi-star-half"></i><span>Review</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="review-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
      <Link to="/admin/manage-review">
          <i className="bi bi-circle"></i><span>Manage Review</span>
        </Link>
      </li>
    </ul>
  </li>
 

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#contact-nav" data-bs-toggle="collapse" href="#">
    <i class="fa-solid fa-message"></i><span>Contact</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="contact-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
      <Link to="/admin/manage-contact">
          <i className="bi bi-circle"></i><span>Contact List</span>
        </Link>
      </li>
    </ul>
  </li>
  {/* <!-- End Tables Nav --> */}

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
    <i class="fa-solid fa-users-viewfinder"></i><span>User</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <Link to="/admin/create-user">
          <i className="bi bi-circle"></i><span>Create User</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/manage-user">
          <i className="bi bi-circle"></i><span>Manage User</span>
        </Link>
      </li>
    
      
    </ul>
  </li>
  {/* <!-- End Charts Nav --> */}

  
  {/* <!-- End Icons Nav --> */}

  {/* <li className="nav-heading text-start">Pages</li> */}
{/* 
 
  <li className="nav-item">
    <Link className="nav-link collapsed" to="/profile">
      <i className="bi bi-person"></i>
      <span>Profile</span>
    </Link>
  </li> */}
  {/* <!-- End Profile Page Nav --> */}

  {/* <li className="nav-item">
    <a className="nav-link collapsed" href="pages-faq.html">
      <i className="bi bi-question-circle"></i>
      <span>F.A.Q</span>
    </a>
  </li> */}
  {/* <!-- End F.A.Q Page Nav --> */}

  {/* <li className="nav-item">
    <Link className="nav-link collapsed" to="/admin/contact">
      <i className="bi bi-envelope"></i>
      <span>Contact</span>
    </Link>
  </li> */}
  {/* <!-- End Contact Page Nav --> */}

 
  {/* <!-- End Login Page Nav --> */}

  {/* <li className="nav-item">
    <Link className="nav-link collapsed" to="/admin/error">
      <i className="bi bi-dash-circle"></i>
      <span>Error 404</span>
    </Link>
  </li> */}
  {/* <!-- End Error 404 Page Nav --> */}


  {/* <!-- End Blank Page Nav --> */}

</ul>

</aside>

{/* <!-- End Sidebar--> */}
    </div>
  )
}

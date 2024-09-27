import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiServices from '../../ApiServices/ApiServices'
import { ToastContainer, toast } from 'react-toastify'
import moment from 'moment';

export default function AdminHeader({ setIsActive, isActive }) {
    const [message, setMessage] = useState([]);
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        setTimeout(() => {
            navigate("/login");
        }, 500);
    };

    useEffect(() => {
        fetchData(),
        getData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await ApiServices.latestContact();
            setMessage(response.data.data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getData = async () => {
        try {
            const response = await ApiServices.getallTestimonial();
            console.log("vipul ka console hai yeh",getallTestimonial)
            setReview(response.data.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <header id="header" className="adminheader fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="index.html" className="adminlogo d-flex align-items-center">
                        <span className="d-none d-lg-block">Backers</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={() => setIsActive(!isActive)}></i>
                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <nav className="adminheader-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number">{review ? review.length : 0}</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications dropdown-notification">
                                <li className="dropdown-header d-flex ">
                                    You have {review ? review.length : 0} Customer Reviews
                                    <a href="/admin/manage-review"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                {review.map((item, index) => (
                                    <li key={index} className="message-item">
                                        <a href="#">
                                            <img src="/assets/img/nf.png" alt="" className="rounded-circle" />
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p>{item.message}</p>
                                                <p>{moment(item.created_at).fromNow()}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                <li className="dropdown-footer">
                                    <a href="#">Show all Reviews</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text"></i>
                                <span className="badge bg-success badge-number">{message ? message.length : 0}</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages dropdown-messages">
                                <li className="dropdown-header d-flex">
                                    You have {message ? message.length : 0} new messages
                                    <Link to="/admin/manage-contact"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                {message.map((msg, index) => (
                                    <li key={index} className="message-item">
                                        <a href="#">
                                            <img src="/assets/img/download.png" alt="" className="rounded-circle" />
                                            <div>
                                                <h4>{msg.name}</h4>
                                                <p>{msg.message}</p>
                                                <p>{moment(msg.created_at).fromNow()}</p>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <Link to="/admin/manage-contact">Show all messages</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="/assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Admin</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header text-start">
                                    <h6>Admin</h6>
                                    <span>Sunny Taneja</span>
                                </li>
                                <li onClick={logout}>
                                    <a className="dropdown-item d-flex align-items-center" href="/">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <ToastContainer />
        </div>
    );
}

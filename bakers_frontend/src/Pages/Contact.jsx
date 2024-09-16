import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import apiservices from "../ApiServices/ApiServices";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Team = () => {
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    const validateContact = (contact) => {
      const regex = /^\d{10}$/;
      return regex.test(contact);
    };

    const validateName = (name) => {
      const regex = /^[a-zA-Z\s]+$/;
      return regex.test(name);
    };

    const handelForm = (e) => {
      e.preventDefault();

      if (!validateName(name)) {
        toast.error("Please enter a valid name (alphabets only)");
        return;
      }

      if (!validateEmail(email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      if (!validateContact(contact)) {
        toast.error("Please enter a valid 10-digit contact number");
        return;
      }

      if (subject.length > 500) {
        toast.error("Subject cannot exceed 500 characters");
        return;
      }

      if (!message.trim()) {
        toast.error("Message cannot be empty");
        return;
      }

      let data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        contact: contact,
      };

      apiservices
        .contact(data)
        .then((x) => {
          if (x.data.success === true) {
            setTimeout(() => {
              nav("/");
            }, 1000);
            toast.success("Message sent");
          } else {
            toast.error("Error try again");
          }
        })
        .catch(() => {
          toast.error("Error in sending message");
        });
    };
    return (
      <div>
        {/* Page Header */}
        <div
          className="container-fluid page-header py-6 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center pt-5 pb-3">
            <h1 className="display-4 text-white animated slideInDown mb-3">
              Our Team
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-primary active"
                  aria-current="page"
                >
                  Our Team
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center py-10 ">
          <form
            onSubmit={handelForm}
            className="bg-black p-6 rounded-lg shadow-lg w-full max-w-lg"
          >
            <h1 className="display-6 mb-4 text-white">
              If You Have Any Query, Please Contact Us
            </h1>
            {/* <h2 className="text-2xl font-bold mb-5 text-yellow-600">Contact Us</h2> */}
            <div className="mb-4">
              <label
                className="text-white text-sm font-bold mb-2 items-start flex"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
        
            </div>
            <div className="mb-4">
              <label
                className="flex items-start text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
             
            </div>
            <div className="mb-4">
              <label
                className="flex text-white text-sm font-bold mb-2 items-start"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="text-white text-sm font-bold mb-2 items-start flex"
                htmlFor="name"
              >
                Subject*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Your Subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
             
            </div>
            <div className="mb-6 items-start">
              <label
                className="flex items-start text-white text-sm font-bold mb-2"
                htmlFor="query"
              >
                Your Query
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="query"
                name="query"
                placeholder="Write your query here..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Team;
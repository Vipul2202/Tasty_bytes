import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa"; // User icon
import axios from 'axios';

const Testimonial = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3; // Number of reviews to show per page

  // Handle star rating click
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !comment || rating === 0) {
      alert("Please fill out all fields, including a rating.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/review/add", {
        name,
        email,
        rating,
        comment
      });
      console.log(response.data);
      setReviews([...reviews, { name, email, rating, comment }]);
      setName("");
      setEmail("");
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // Fetch reviews from backend on component mount
  useEffect(() => {
    axios.get("http://localhost:5001/review/all")
      .then(response => setReviews(response.data.review))
      .catch(error => console.error(error));
  }, []);

  // Calculate the number of pages needed
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Slice reviews for the current page
  const displayedReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);

  return (
    <div className="testimonial-container">
      <div className="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">Testimonial</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <p className='text-white font-serif text-2xl font-bold'>Your reviews inspire us! We’re dedicated to fulfilling your cravings and making every bite better than the last</p>
            </ol>
          </nav>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center my-6">Customer Testimonials</h2>

      {/* Review submission form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-lg font-medium text-gray-700">Your Review</label>
          <textarea
            id="comment"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your review here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Rating</label>
          <div className="stars flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} onClick={() => handleStarClick(i)} className="cursor-pointer text-yellow-400">
                {i < rating ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>

      {/* Display of reviews in a single row with pagination */}
      <div className="reviews-list flex flex-wrap justify-center gap-4  mt-8">
        {displayedReviews.length > 0 ? (
          displayedReviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-200 shadow-lg rounded-lg flex flex-col items-start w-80">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-gray-500">{review.email}</p>
              <p>{review.comment}</p>
              <div className="flex mb-2">
                
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? <AiFillStar className="text-yellow-400" /> : <AiOutlineStar />}
                  </span>
                ))}
              </div>
             
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet. Be the first to leave a review!</p>
        )}
      </div>

      {/* Pagination Controls */}   
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === pageIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

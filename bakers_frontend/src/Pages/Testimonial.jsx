import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from 'axios';

const Testimonial = () => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

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
      const response = await axios.post("http://localhost:5000/review/add", {
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
let a = axios.get("http://localhost:5000/review/all")
.then(response => setReviews(response.data.review))
.catch(error => console.error(error));
console.log("my console",a);
  // Fetch reviews from backend on component mount
  useEffect(() => {
    axios.get("http://localhost:5000/review/all")
      .then(response => setReviews(response.data.review))
      .catch(error => console.error(error));
      
  }, []);

  return (
    <div className="testimonial-container">
      <h2 className="text-3xl font-bold text-center my-6">Customer Testimonials</h2>

      {/* Review submission form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
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

      {/* Display of reviews */}
      <div className="reviews-list mt-8">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="p-4 border-b border-gray-300">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-gray-500">{review.email}</p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? <AiFillStar className="text-yellow-400" /> : <AiOutlineStar />}
                  </span>
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

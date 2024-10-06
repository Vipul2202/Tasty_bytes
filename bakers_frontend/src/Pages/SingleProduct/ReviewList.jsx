
import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewsList = ({ displayedReviews, currentPage, setCurrentPage, totalPages }) => {
  return (
    <div>
      <div className="reviews-list flex flex-wrap justify-center gap-4 mt-8">
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

export default ReviewsList;
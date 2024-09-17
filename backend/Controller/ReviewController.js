// controllers/reviewController.js

const Review = require('../Model/Reviewmodel');
const Product = require('../Model/Productmodel');

// Controller to get reviews for a specific product
getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const reviews = await Review.find({ product: productId })
    .populate('user')
    .populate('product');
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to add a review for a product
const addReview= async (req, res) => {
  try {

    const {name, rating, comment } = req.body;

    // const userId = req.decoded; // Assuming req.decoded contains the user ID
    if(!name,!rating,!comment) return res.status(500).json({message:"please fill all fields"})
      
      const rev=await Review.create({
    name,
    rating,
    comment,
    
      })
      res.status(200).json({
        success: true,
        message: "Review added successfully",
        review: rev,

      })


    // Check if the user has already reviewed this product
    // const existingReview = await Review.findOne({ user: userId, product: productId });
    // if (existingReview) {
    //   return res.status(400).json({
    //     message: 'You have already reviewed this product',
    //   });
    // }

    // Check if the product exists
    // const product = await Product.findById(productId);
    // if (!product) {
    //   return res.status(404).json({ error: 'Product not found' });
    // }

    // Create a new review
    // const newReview = new Review({
    //   user: userId,
    //   product: productId,
    //   rating,
    //   comment,
    // });

    // await newReview.save();

    // res.json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller to update a review
updateReview = async (req, res) => {
  try {
    const { reviewId } = req.body;
    const { rating, comment } = req.body;
    const userId = req.body.userId; 

  
    const review = await Review.findOne({ _id: reviewId, user: userId });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Update the review
    review.rating = rating;
    review.comment = comment;

   
    await review.save();

    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to delete a review
const deleteReview = async (req, res) => {
  console.log(req.params)
  try {
    const {id}=req.params
    const review = await Review.findByIdAndDelete(id);
    if (!review) return res.status(400).json({msg:"review not deleted"})
      res.json({msg:"review deleted"})


    
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    

  }
};



// get all the Review
getallReview = async(req,res)=>{
  try {
    const review = await Review.find()
    res.status(200).json({
      success: true,
      review,
      msg:"all reviews"
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    
  }
  
 
  
}

const updateReviewStatus = async (req, res) => {
  try {
    const formData = req.body;

    if (!formData._id || !formData.status) {
      return res.status(422).json({
        success: false,
        status: 422,
        message: "Both _id and status are required",
      });
    }

    const revie = await Review.findOne({ _id: formData._id });

    if (!revie) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "No revie Found",
      });
    }

    revie.status = formData.status;
    await revie.save();

    return res.status(200).json({
      success: true,
      status: 200,
      message: "revie Status Changed Successfully",
      data: revie,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = {
    getReviewsByProduct,
    addReview,
    updateReview,
    deleteReview,
    getallReview,
    updateReviewStatus
  
  }
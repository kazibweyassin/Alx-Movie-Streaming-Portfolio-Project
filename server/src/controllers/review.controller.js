import responseHandler from "../handlers/response.handler.js";
import reviewModel from "../models/review.model.js";

/**
 * Create a new review for a movie.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters extracted from the request URL.
 * @param {string} req.params.movieId - The ID of the movie for which the review is being created.
 * @param {Object} req.user - The user object representing the user creating the review.
 * @param {Object} req.body - The request body containing the review details.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the review is created and saved.
 */
const create = async (req, res) => {
    try {
        const { movieId } = req.params;

        const review = new reviewModel({
            user: req.user.id,
            movieId,
            ...req.body
        });

        await review.save();

        responseHandler.created(res, {
            ...review._doc,
            id: review.id,
            user: req.user
        });
    } catch {
        responseHandler.error(res);
    }
};

const remove = async (req, res) => {
    try {
        const { reviewId } = req.params;

        const review = await reviewModel.findOne({
            _id: reviewId,
            user: req.user.id
        });

        if (!review) return responseHandler.notfound(res);

        await review.remove();

        responseHandler.ok(res);
    } catch {
        responseHandler.error(res);
    }
};

const getReviewsOfUser = async (req, res) => {
    try {
        const reviews = await reviewModel.find({
            user: req.user.id
        }).sort("-createdAt");

        responseHandler.ok(res, reviews);
    } catch {
        responseHandler.error(res);
    }
};


export default { create, remove, getReviewsOfUser };
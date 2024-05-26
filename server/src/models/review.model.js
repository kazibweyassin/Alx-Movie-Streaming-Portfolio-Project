import mongoose from "mongoose";
import modelOptions from "./model.options.js";

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    mediaType: {
        type: String,
        required: true,
        enum: ["movie", "show"]
    },
    mediaId: {
        type: String,
        required: true
    },
    mediaTitle: {
        type: String,
        required: true
    },
    mediaPoster: {
        type: String,
        required: true
    }
}, modelOptions);

export default mongoose.model("Review", reviewSchema);

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users")
const PostModel = require("./models/posts")

const cors = require("cors");

app.use(express.json());
app.use(cors());

require('dotenv').config();

mongoose.connect(process.env.DB_URI);


  ///////////////
 //////GET//////
///////////////
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
app.get("/getPosts", (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


  ////////////////
 //////POST//////
////////////////
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});
app.post("/createPost", async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    await newPost.save();

    res.json(post);
});


app.listen(process.env.PORT, () => {
    console.log("server running");
});

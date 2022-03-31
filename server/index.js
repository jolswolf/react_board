const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users")
const PostModel = require("./models/posts")

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

require('dotenv').config();

mongoose.connect(process.env.DB_URI);



  ///////////////
 //////GET//////
///////////////
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
app.post("/createPost", async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    await newPost.save();

    res.json(post);
});

app.post("/login",(req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email:email}, (err, user) => {
        if(user){
            if(password === user.password){
                res.json({message: "login succesful", user:user});  
            }else{
                res.json({message: "wrong password or email"})
            }
        }else{
            res.json("not registered");
        }
    });
});

app.post("/register", (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    UserModel.findOne({email:email}, (err, user) => {
        if(user){
            res.send({message:"user already exists"});
        }else{
            const user = new UserModel({name, email, password});
            user.save(err => {
                if(err){
                    res.json(err);
                }else{
                    res.json({message:"succesful"});
                }
            });
        }
    });
});


app.listen(process.env.PORT, () => {
    console.log("server running");
});

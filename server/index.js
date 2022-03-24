const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users")

const cors = require("cors");

app.use(express.json());
app.use(cors());

require('dotenv').config();

mongoose.connect(process.env.DB_URI);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(process.env.PORT, () => {
    console.log("server running");
});

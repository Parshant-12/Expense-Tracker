const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const User = require('./Models/User');
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/ExpenseTracker')
    .then(() => {
        console.log("Connected to MongoDB!");
        // Only start the server if the DB connection is successful
        app.post('/api/signup', async (req, res) => {
            try {
                const { email,password } = req.body;
                // console.log(email,password);
                const existingUser = await User.findOne({ email });
                // console.log(existingUser);
                const existingPwd = await User.findOne({password});
                if (existingUser) {
                    return res.status(409).json({ field:"Email", message:"Email already registered" });
                }
                else if(existingPwd){
                    return res.status(409).json({ field:"Password", message:"Password already Taken" });
                }
                const newUser = new User(req.body);
                await newUser.save();
                res.status(201).json({ message: "User registered successfully" });
            } catch (err) {
                res.status(500).json({ error: "Signup failed" });
            }
        });
        app.post('/api/login', async (req, res) => {
            try {
                const { email, password } = req.body;
                console.log(email,password);
                const user = await User.findOne({ email });
                console.log(user);
                if (user) {
                    return res.status(200).json({ message: "Login successful" });
                } else {
                    res.status(401).json({ field: "Email/Password", message: "Invalid email or password" });
                }
            } catch (err) {
                res.status(500).json({ error: "Login failed" });
            }
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Could not connect to MongoDB:", err);
    });


const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
require("dotenv").config();
const bcrypt=require("bcrypt")
const generateToken=require("../middlewares/auth")

const registerUser = async (req, res) => {
    const { firstName, lastName, emailId, password } = req.body;

    //VALIDATION

    if (!firstName || !lastName || !emailId || !password) {
        return res.status(400).send({ message: "Please Add all mandatory fields" });
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({ emailId });
    if (userExists) {
        return res.status(400).json({ message: "Already Exist" });
    }

    try{
        //CREATE USER IN YOUR DATABASE
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstName,
            lastName,
            emailId,
            password: hashedPassword
        });

        await newUser.save();
        // const tokenGen = generateToken(newUser._id)

        return res.status(201).json({
            message: "USER CREATED",
            data: {
                firstName,
                emailId,
                hashedPassword
            }
        });
    }
    catch(err){
        return res.status(500).send({err:err.message});
    }
}

const loginUser = async(req,res) => {
    const {emailId,password}=req.body;
    if(!emailId || !password){
        return res.send(400).send("Please fill all the detail")
    }
    let userExist = await User.findOne({ emailId });
    if (!userExist) {
        return res.status(400).send('Invalid credentials');
    }
    try{
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).message("invalid credentials")
        }
        // const tokenGen = generateToken(userExist)
        return res.status(200).json({
            message: "user loged in successfully",
            First_Name: userExist.firstName,
            email: userExist.emailId
        })
    }
    catch(err){
        res.status(500).send({ err: err.message })
    }
}

module.exports = { registerUser,loginUser}
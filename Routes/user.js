const{Router}=require("express");
const { userModel, purchaseModel}=require("../db");
const jwt = require("jsonwebtoken");
const userRouter=Router();
const {JWT_USER_PASSWORD}=require("../config");
const { userMiddleware } = require("../middleware/user");


userRouter.post("/signup",async(req,res)=>{
    const { email , password , firstName , lastName} =req.body; // TODO include zod validation
    //TODO: Hash the password so plaintext pw is not stored in the db

    //TODO: put inside a try catch block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })


    res.json({
        message:"Sign up succesfull"
    })
})
userRouter.post("/login",async(req,res)=>{
    const{ email , password }=req.body;

    // TODO: hashed password logic
    const user=await userModel.findOne({ //either the user or undefined
        email,
        password
    })
    if(user){
        const token=jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);
         // DO cookie logic here

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credential"
        })
    }
   
    
})

userRouter.get("/purchases",userMiddleware,async(req,res)=>{
    const userId =req.userId;

    const purchases=await purchaseModel.find({
        userId,
    });
    
    res.json({
        purchases
    })
})

module.exports={
    userRouter:userRouter
}
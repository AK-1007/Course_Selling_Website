const{Router}=require("express");

const userRouter=Router();

    userRouter.post("/signup",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })
    userRouter.post("/login",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })
    
    userRouter.get("/purchases",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })

module.exports={
    userRouter:userRouter
}
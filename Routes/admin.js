const { Router }=require("express")

const adminRouter=Router();

const { adminModel } =require("../db");

adminRouter.post("/signup",(req,res)=>{
    res.json({
        message:"admin signup endpoint"
    })
})
adminRouter.post("/login",(req,res)=>{
    res.json({
        message:"admin login endpoint"
    })
})
adminRouter.post("/course/create",(req,res)=>{
    res.json({
        message:"admin create endpoint"
    })
})
adminRouter.put("/course/edit",(req,res)=>{
    res.json({
        message:"admin delete endpoint"
    })
})
adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        message:"admin:added a course "
    })
})

module.exports={
    adminRouter:adminRouter
}
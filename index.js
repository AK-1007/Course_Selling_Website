const express =require("express");
const app=express();

app.post("/user/signup",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
app.post("/user/login",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})

app.get("/user/purchases",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
app.post("/course/purchases",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
app.get("/courses",(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})

app.listen(3000)


const {courseRouter}=require("express")

    courseRouter.post("/course/purchases",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })
    courseRouter.get("/course/preview",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })

module.exports={
    courseRouter:courseRouter
}
const {courseRouter}=require("express")

    courseRouter.post("/purchases",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })
    courseRouter.get("/preview",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })

module.exports={
    courseRouter:courseRouter
}
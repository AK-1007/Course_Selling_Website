const {Router}=require("express")

const courseRouter=Router();

    courseRouter.post("/purchases",(req,res)=>{
        res.json({
            message:"signup endpoint"
        })
    })
    courseRouter.get("/preview",(req,res)=>{
        res.json({
            message:"Course Preview endpoint"
        })
    })

module.exports={
    courseRouter:courseRouter
}
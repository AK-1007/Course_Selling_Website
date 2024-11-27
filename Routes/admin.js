const { Router }=require("express")

const adminRouter=Router();

const { adminModel } =require("../db");
const jwt=require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD}=require("../config");

adminRouter.post("/signup",async (req,res)=>{
    const { email , password , firstName , lastName} =req.body; // TODO include zod validation
    //TODO: Hash the password so plaintext pw is not stored in the db

    //TODO: put inside a try catch block
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })


    res.json({
        message:"Sign up succesfull"
    })
})
adminRouter.post("/signin",async(req,res)=>{
    const{ email , password }=req.body;

    // TODO: hashed password logic
    const admin=await adminModel.findOne({ //either the user or undefined
        email,
        password
    })
    if(admin){
        const token=jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD);
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
adminRouter.post("/course/create",async(req,res)=>{
    const adminId=req.userId;
    const {title,desciption,price,imageUrl }=re.body;

    //TODO:creating a web3 saas in 6 hour which will show how to make user enter image instead of url
    const course =await courseModel.create({
        title,desciption,price,imageUrl,creatorId:adminId
    })
    res.json({
        message: "Course created",
        courseId: admin._id
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
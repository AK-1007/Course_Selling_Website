
const express =require("express");

const { connectDB } = require('./db');

connectDB();

const app=express();
const {courseRouter}=require("./Routes/course");
const {userRouter}=require("./Routes/user");
const{ adminRouter }=require("./Routes/admin");
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


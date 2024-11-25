require('dotenv').config();
const express =require("express");
const app=express();
const {courseRouter}=require("./Routes/course");
const {userRouter}=require("./Routes/user");
const{ adminRouter }=require("./Routes/admin");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);



app.listen(3000)


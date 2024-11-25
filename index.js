const express =require("express");
const app=express();
const {createCourseRoutes}=require("./Routes/course");
const {createUserRoutes}=require("./Routes/user");

app.use("/user", userRouter);
app.use("/course",courseRouter);



app.listen(3000)


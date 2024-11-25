require('dotenv').config();
const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const connectDB = async () => {
    try {
        const dbURI = process.env.DB_CONNECTION_STRING;  // Fetch DB connection string from .env
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

const userSchema =new Schema({
    email:{type:String , unique: true},
    password: String,
    firstName: String,
    lastName: String,

});

const adminSchema =new Schema({
    email:{type:String , unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema =new Schema({
    title: String,
    desciption: String,
    price: String,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema =new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModel=mongoose.model("user",userSchema)
const adminModel=mongoose.model("admin",adminSchema)
const courseModel=mongoose.model("course",courseSchema)
const purchaseModel=mongoose.model("purchase",purchaseSchema)

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel,
    connectDB
}
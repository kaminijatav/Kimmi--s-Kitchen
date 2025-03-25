import mongoose from "mongoose";
 export const connectDB=async ()=>{
 await mongoose.connect('mongodb+srv://jatavkamini125:XnBx7bfXYZuG6ogx@cluster0.smmpf.mongodb.net/KK').then(()=>{
    console.log("Connected to MongoDB")
})
}
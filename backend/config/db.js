import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Keshav_3003:videogame@cluster0.q9lwt3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("Database Connection Succesfull"));
   
}

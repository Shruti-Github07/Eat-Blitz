import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://foodDelivery:bZmYac6CtWs0I1zk@cluster0.rt5xw.mongodb.net/food-delivery').then(() => console.log("DB Connected"));

}

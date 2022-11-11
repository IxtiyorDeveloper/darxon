import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://user:123@cluster0.5wrygo3.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
  }
};


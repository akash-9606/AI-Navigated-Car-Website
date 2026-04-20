import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  seats: Number,
  image: String,
  isFlagship: Boolean,
});

export default mongoose.model("Car", carSchema);

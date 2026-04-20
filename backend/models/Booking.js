import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    model: String,
    city: String,
    date: String,
  },
  { timestamps: true },
);

export default mongoose.model("Booking", bookingSchema);

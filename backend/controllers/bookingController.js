import Booking from "../models/Booking.js";

// ✅ Create Booking
export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      success: true,
      message: `🎉 Thank you ${booking.name}! Your test drive for ${booking.model} is confirmed in ${booking.city} on ${booking.date}. Our team will contact you soon 🚗`,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
    });
  }
};

// ✅ Get All
export const getBookings = async (req, res) => {
  const data = await Booking.find().sort({ createdAt: -1 });
  res.json(data);
};

// ✅ Delete
export const deleteBooking = async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};

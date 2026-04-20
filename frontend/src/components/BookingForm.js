import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/booking.css";

export default function BookingForm({ prefill }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    city: "",
    date: "",
  });

  useEffect(() => {
    if (prefill) {
      setForm((prev) => ({
        ...prev,
        model: prefill.model || "",
        city: prefill.city || "",
        date: prefill.date || "",
      }));
    }
  }, [prefill]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/bookings", form);

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        model: "",
        city: "",
        date: "",
      });
    } catch (err) {
      alert("❌ Failed to book test drive. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="booking">
      <h2 className="section-title">Book a Test Drive</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Car Model</label>
          <input
            type="text"
            placeholder="Enter model"
            value={form.model}
            onChange={(e) => setForm({ ...form, model: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter city"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>

        <button type="submit" className="submit-btn">
          Book Now
        </button>
      </form>
    </section>
  );
}

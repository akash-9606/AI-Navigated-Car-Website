import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import BookingForm from "./components/BookingForm";
import Assistant from "./components/Assistant";

import carsData from "./data/carsData";

function App() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [bookingData, setBookingData] = useState({});

  useEffect(() => {
    setCars(carsData);
    setFiltered(carsData);
  }, []);

  const handleAIAction = (action) => {
    if (!action) return;

    switch (action.type) {
      case "SMART_FILTER":
        let result = cars.filter((c) => {
          return (
            (!action.payload.type ||
              c.type.toLowerCase() === action.payload.type) &&
            (!action.payload.brand ||
              c.name.toLowerCase().includes(action.payload.brand)) &&
            (!action.payload.maxPrice || c.price <= action.payload.maxPrice)
          );
        });

        if (action.payload.sort === "LOW_HIGH") {
          result.sort((a, b) => a.price - b.price);
        }

        if (action.payload.sort === "HIGH_LOW") {
          result.sort((a, b) => b.price - a.price);
        }

        setFiltered(result);
        scroll("models");
        break;

      case "COMPARE":
        scroll("comparison");
        break;

      case "BOOK":
        setBookingData(action.payload);
        scroll("booking");
        break;

      case "RECOMMEND":
        const best = cars.find((c) => c.seats >= 5);
        setFiltered(best ? [best] : []);
        scroll("models");
        break;

      case "RESET":
        setFiltered(cars);
        scroll("models");
        break;

      default:
        break;
    }
  };

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section id="models">
        <Models cars={filtered} />
      </section>

      <section id="comparison">
        <Comparison cars={cars} />
      </section>

      <section id="pricing">
        <Pricing cars={filtered} />
      </section>

      <section id="booking">
        <BookingForm prefill={bookingData} />
      </section>

      <Assistant onAction={handleAIAction} />
    </>
  );
}

export default App;

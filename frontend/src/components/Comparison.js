import React from "react";
import "../styles/comparison.css";

export default function Comparison({ cars }) {
  if (!cars || cars.length === 0) return null;

  const toUSD = (price) => "$" + (price / 83).toFixed(2);

  return (
    <section className="comparison">
      <h2 className="section-title">Compare Cars (USD $)</h2>

      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Type</th>
              <th>Price</th>
              <th>Seats</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((c) => (
              <tr key={c._id}>
                <td className="model-name">{c.name}</td>
                <td>{c.type}</td>
                <td className="price">{toUSD(c.price)}</td>
                <td>{c.seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

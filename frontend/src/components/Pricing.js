import "../styles/pricing.css";

export default function Pricing({ cars }) {
  const toUSD = (price) => "$" + (price / 83).toFixed(2);

  return (
    <section className="pricing">
      <h2 className="section-title">Pricing (USD $)</h2>

      <div className="pricing-grid">
        {cars.map((car) => (
          <div key={car._id} className="price-card">
            <h3>{car.name}</h3>
            <p className="price">{toUSD(car.price)}</p>
            <p className="type">{car.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

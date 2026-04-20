import "../styles/models.css";

export default function Models({ cars }) {
  const toUSD = (price) => "$" + (price / 83).toFixed(2);

  return (
    <section className="models">
      <h2 className="section-title">Our Models</h2>

      <div className="models-grid">
        {cars.map((car) => (
          <div key={car._id} className="car-card">
            <div className="image-container">
              <img src={car.image} alt={car.name} />
              {car.isFlagship && <span className="badge">Flagship</span>}
            </div>

            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="type">{car.type}</p>

              <div className="car-meta">
                <span>👥 {car.seats} Seats</span>
              </div>

              <p className="price">{toUSD(car.price)}</p>

              <button
                className="view-btn"
                onClick={() =>
                  document
                    .getElementById("comparison")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Compare
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

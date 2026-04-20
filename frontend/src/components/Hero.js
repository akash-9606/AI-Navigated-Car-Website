import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Drive the Future <span>🚀</span>
        </h1>

        <p>
          Discover premium cars built for performance, comfort, and innovation.
        </p>

        <div className="hero-buttons">
          <a href="#models" className="btn-primary">
            Explore Models
          </a>

          <a href="#booking" className="btn-secondary">
            Book Test Drive
          </a>
        </div>
      </div>
    </section>
  );
}

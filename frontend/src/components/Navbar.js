import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>NovaDrive</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#models">Models</a>
          </li>
          <li>
            <a href="#comparison">Compare</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#booking">Test Drive</a>
          </li>
        </ul>

        <button
          className="nav-btn"
          onClick={() =>
            document
              .getElementById("booking")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}

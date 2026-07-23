import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <Link to="/" className="logo">

          <div className="logo-mark">
            12
          </div>

          <div className="logo-text">

            <span>12 Stone</span>

            <small>CONSULTING</small>

          </div>

        </Link>

        <nav>

          <Link to="/">Home</Link>

          <Link to="/assessment">
            Assessment
          </Link>

          <Link to="/contractors">
            Industries
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </nav>

        <Link
          className="strategy-button"
          to="/assessment"
        >
          Schedule Strategy Session
        </Link>

      </div>

    </header>
  );
}

export default Header;
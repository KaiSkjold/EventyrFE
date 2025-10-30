import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="navbar">
      <div className="navHeader">
        <div className="left">

          {/* Logo */}
          <div className="logo">
            <p>Vælg Dit Eget Eventyr</p>
          </div>


          {/* Links for navigation desktop */}
          <div className={`links ${isMenuOpen ? "showMenu" : ""}`}>
            <Link to="/" className={`navLink ${location.pathname === "/" ? "isActive" : ""}`}>Læs et eventyr</Link>
            <Link to="/about" className={`navLink ${location.pathname === "/about" ? "isActive" : ""}`}>Om siden</Link>
          </div>
        </div>

        {/* Burger menu icon for mobile */}
        <div className="menuIcon" onClick={toggleMenu}>
          {/* Burgermenu */}
          <p>MenuIcon</p>
        </div>

      </div>
    </div>
  )
}

export default Navbar
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../svgComponents/Logo";
import { BurgerMenu } from "../svgComponents/BurgerMenu";
import "./Navbar.css";
import Button from "../ui/buttonComponent/Button";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="navbar">
      <div className="nav-header">
        <div className="left">

          {/* Logo */}
          <div className="logo">
            <Logo width={20} height={20} strokeColor="var(--text-color)" />
            <p>Vælg Dit Eget Eventyr</p>
          </div>


          {/* Links for navigation desktop */}
          <div className={`links ${isMenuOpen ? "show-menu" : ""}`}>
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "isActive" : ""}`}>Læs et eventyr</Link>
            <Link to="/indstillinger" className={`nav-link ${location.pathname === "/indstillinger" ? "isActive" : ""}`}>Indstillinger</Link>
          </div>
        </div>

        {/* Burger menu icon for mobile */}
        <Button className="menu-icon" onClick={toggleMenu} borderStyle="no-border">
            <BurgerMenu width={24} height={24} strokeColor="var(--text-color)" />
        </Button>

      </div>
    </div>
  )
}

export default Navbar
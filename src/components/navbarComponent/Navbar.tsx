import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Logo } from "../svgComponents/Logo";
import { BurgerMenu } from "../svgComponents/BurgerMenu";
import Button from "../ui/buttonComponent/Button";

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
            <Logo width={20} height={20} strokeColor="var(--text-color)" />
            <p>Vælg Dit Eget Eventyr</p>
          </div>


          {/* Links for navigation desktop */}
          <div className={`links ${isMenuOpen ? "showMenu" : ""}`}>
            <Link to="/" className={`navLink ${location.pathname === "/" ? "isActive" : ""}`}>Læs et eventyr</Link>
            <Link to="/about" className={`navLink ${location.pathname === "/about" ? "isActive" : ""}`}>Om siden</Link>
          </div>
        </div>

        {/* Burger menu icon for mobile */}
        <Button className="menuIcon" onClick={toggleMenu} color="var(--secondary-color)">
            <BurgerMenu width={24} height={24} strokeColor="var(--text-color)" />
        </Button>

      </div>
    </div>
  )
}

export default Navbar
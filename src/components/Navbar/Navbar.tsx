import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../Svg/Logo";
import { BurgerMenu } from "../Svg/BurgerMenu";
import Button from "../ui/Button/Button";
import "./Navbar.css";

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
            <p style={{ fontFamily: "var(--font-family-love-ya-like-a-sister)" }}>Vælg Dit Eget Eventyr</p>
          </div>


          {/* Links for navigation desktop */}
          <div className={`links ${isMenuOpen ? "show-menu" : ""}`}>
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "isActive" : ""}`}>Læs et eventyr</Link>
            <Link to="/indstillinger" className={`nav-link ${location.pathname === "/indstillinger" ? "isActive" : ""}`}>Indstillinger</Link>
          </div>
        </div>

        {/* Burger menu icon for mobile */}
        <div className="menu-icon">
          <Button onClick={toggleMenu} borderStyle="no-border" style={{ background: 'transparent' }}>
              <BurgerMenu width={24} height={24} strokeColor="var(--text-color)" />
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
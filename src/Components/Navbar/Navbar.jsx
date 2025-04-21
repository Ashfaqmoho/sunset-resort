import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`container ${sticky ? "dark-navbar" : ""}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={600}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            smooth={true}
            offset={-350}
            duration={600}
            onClick={toggleMenu}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-450}
            duration={600}
            onClick={toggleMenu}
          >
            AboutUs
          </Link>
        </li>
        <li>
          <Link
            to="offers"
            smooth={true}
            offset={-200}
            duration={600}
            onClick={toggleMenu}
          >
            Special Offers
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="footer"
            smooth={true}
            offset={-200}
            duration={600}
            onClick={toggleMenu}
          >
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

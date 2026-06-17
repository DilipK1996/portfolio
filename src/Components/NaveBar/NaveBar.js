import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./naveBar.css";
import CVDownloads from "../CVDownloads/CVDownloads";

const NaveBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav_link active" : "nav_link";
  };

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1>DILIP KUMAR</h1>
        </Link>
        <ul className={open ? "nav_menu active" : "nav_menu"}>
          <li>
            <Link className={getLinkClass("/")} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={getLinkClass("/education")} to="/education">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link className={getLinkClass("/project")} to="/project">
              PROJECT
            </Link>
          </li>
          <li>
            <Link className={getLinkClass("/skills")} to="/skills">
              SKILLS
            </Link>
          </li>
          <li>
            <Link className={getLinkClass("/about")} to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className={getLinkClass("/contact")} to="/contact">
              CONTACT
            </Link>
          </li>
          <CVDownloads />
        </ul>
        <div className="hamburger">
          {open ? (
            <FaTimes size={20} onClick={handleClick} />
          ) : (
            <FaBars size={20} onClick={handleClick} />
          )}
        </div>
      </div>
      {/* WhatsApp Floating Chat Button */}
      <a
        href="https://wa.me/918931053956?text=Hello, Dilip kumar how are you ...!"
        className="chatBoat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp size={30} />
      </a>
    </>
  );
};

export default NaveBar;

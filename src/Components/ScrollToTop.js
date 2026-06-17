import React, { useState, useEffect } from "react";
import { HiMiniArrowUp } from "react-icons/hi2";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        bottom: "11px",
        right: "5px",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        borderRadius: "50%",
        border: "none",
        background: hover ? "rgb(28, 118, 118)" : "rgb(27 60 60)",
        boxShadow: hover
          ? "0px 0px 15px 2px #fff"
          : "0px 4px 16px rgba(0, 0, 0, 0.25)",
        color: "rgb(255, 255, 255)",
        cursor: "pointer",
        zIndex: 9999,
        transition:
          "transform 0.7s ease, opacity 0.7s ease, background 0.3s ease",
        transform: visible ? "translateY(0)" : "translateY(100px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-label="Scroll to top"
    >
      <HiMiniArrowUp />
    </button>
  );
};

export default ScrollToTop;

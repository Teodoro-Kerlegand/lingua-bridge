import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-links">
        <a href="#features">Features</a>
        <a href="#how">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
    </header>
  );
}

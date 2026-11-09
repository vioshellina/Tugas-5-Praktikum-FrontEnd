"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg nav-shell">
        <a className="brand" href="#home">VANTA<span>.</span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
        <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={active === link.href.slice(1) ? "nav-item active" : "nav-item"} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </div>
        <a className="nav-button" href="#collection">EXPLORE DROP ↗</a>
      </nav>
    </header>
  );
}

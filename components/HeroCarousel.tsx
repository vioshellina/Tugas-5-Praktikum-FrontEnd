"use client";

import { useEffect, useState } from "react";

const slides = [
  { image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=2000&q=85", eyebrow: "INDEPENDENT STREETWEAR / EST. 2024", first: "MOVE", second: "DIFFERENT.", copy: "More than what you wear. A point of view, a state of mind, and the freedom to define your own direction." },
  { image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85", eyebrow: "THE NEW COLLECTION / 2026", first: "OWN", second: "YOUR WAY.", copy: "Built for everyday movement. Designed for people who make their own rules." },
  { image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=85", eyebrow: "NO RULES / JUST EXPRESSION", first: "STAY", second: "UNCOMMON.", copy: "Find your uniform. Keep your individuality. Wear what feels like you." }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  const changeSlide = (direction: number) => setIndex((current) => (current + direction + slides.length) % slides.length);

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div key={slide.first} className={`hero-slide ${index === i ? "active" : ""}`} style={{ backgroundImage: `url("${slide.image}")` }} aria-hidden={index !== i}>
          <div className="hero-content">
            <div className="eyebrow"><span>●</span> {slide.eyebrow}</div>
            <h1>{slide.first}<br/><em>{slide.second}</em></h1>
            <p>{slide.copy}</p>
            <a href="#collection" className="red-button">DISCOVER THE COLLECTION <span>↗</span></a>
          </div>
        </div>
      ))}
      <div className="carousel-controls">
        <button aria-label="Previous slide" onClick={() => changeSlide(-1)}>←</button>
        <button aria-label="Next slide" onClick={() => changeSlide(1)}>→</button>
        <span><b>{String(index + 1).padStart(2, "0")}</b> / 03</span>
      </div>
      <div className="scroll-label">SCROLL TO EXPLORE ↓</div>
    </div>
  );
}

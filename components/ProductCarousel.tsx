"use client";

import { useRef } from "react";

type Product = { name: string; detail: string; price: string; tag: string; image: string };

export default function ProductCarousel({ products }: { products: Product[] }) {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    if (track.current) track.current.scrollBy({ left: direction * 340, behavior: "smooth" });
  };
  return (
    <>
      <div className="product-controls">
        <span>SCROLL TO EXPLORE THE DROP</span>
        <div><button onClick={() => move(-1)} aria-label="Scroll products left">←</button><button onClick={() => move(1)} aria-label="Scroll products right">→</button></div>
      </div>
      <div className="product-track" ref={track}>
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image"><img src={product.image} alt={product.name}/><span className="product-tag">{product.tag}</span></div>
            <div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{product.price}</strong></div>
          </article>
        ))}
      </div>
    </>
  );
}

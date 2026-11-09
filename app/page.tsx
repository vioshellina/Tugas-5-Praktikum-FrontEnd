import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCarousel from "@/components/ProductCarousel";
import Footer from "@/components/Footer";

const products = [
  { name: "Essential Tee", detail: "Heavyweight cotton / White", price: "$38", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85" },
  { name: "Utility Jacket", detail: "Structured fit / Black", price: "$89", tag: "NEW ARRIVAL", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85" },
  { name: "Core Hoodie", detail: "Relaxed fit / Charcoal", price: "$72", tag: "LIMITED", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85" },
  { name: "Everyday Layer", detail: "Essential fit / Neutral", price: "$54", tag: "POPULAR", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85" }
];

export default function Home() {
  return (
    <>
      <div className="topline">NEW SEASON, NEW PERSPECTIVE — EXPLORE THE LATEST DROP</div>
      <Navbar />
      <main>
        <section id="home"><HeroCarousel /></section>
        <div className="ticker"><div className="ticker-track">NO RULES, JUST EXPRESSION ✳ BUILT TO STAND OUT ✳ MOVE DIFFERENT ✳ NO RULES, JUST EXPRESSION ✳ BUILT TO STAND OUT ✳ MOVE DIFFERENT ✳</div></div>
        <section id="collection" className="collection section-pad">
          <div className="container-fluid content-width">
            <div className="section-top">
              <div><div className="eyebrow red">01 / SELECTED PIECES</div><h2 className="section-title dark">THE LATEST<br/>DROP<span>.</span></h2></div>
              <p className="section-intro dark-copy">Everyday essentials, reimagined. Discover pieces made to move with you and made to be remembered.</p>
            </div>
            <ProductCarousel products={products} />
          </div>
        </section>
        <section id="about" className="about-section section-pad">
          <div className="container-fluid content-width">
            <div className="row align-items-center g-5">
              <div className="col-lg-6"><div className="about-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Streetwear fashion editorial"/></div></div>
              <div className="col-lg-6 about-copy">
                <div className="eyebrow red">02 / THE VANTA MINDSET</div>
                <h2 className="section-title">NOT MADE<br/>TO FIT IN<span>.</span></h2>
                <p>VANTA was created for people who see clothing as a form of self-expression. We believe personal style has no fixed rules. It is about confidence, individuality, and the courage to take your own path.</p>
                <a className="line-link" href="#contact">GET TO KNOW US <span>↗</span></a>
              </div>
            </div>
          </div>
        </section>
        <section className="statement"><div className="eyebrow">03 / OUR PHILOSOPHY</div><p>STYLE IS TEMPORARY.<br/><span>IDENTITY IS EVERYTHING.</span></p></section>
      </main>
      <Footer />
    </>
  );
}

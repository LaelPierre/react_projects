import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Enamel pin post-ironic paleo, fam jianbing ethical chia semiotics
            cornhole synth hoodie migas celiac whatever mixtape. Mukbang
            stumptown gentrify chillwave heirloom pour-over. Slow-carb bodega
            boys hella, banjo artisan single-origin coffee woke sustainable
            Brooklyn meh mlkshk same cronut.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="browser woman" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

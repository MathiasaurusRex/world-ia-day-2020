import React from "react";

function HeroProduct(props) {
  return (
    <section className="c-hero">
      <div className="c-hero-copy">
        <h1>{props.title}</h1>
        <h2>{props.excerpt}</h2>
      </div>

      <a href="/" className="btn btn-primary">
        BOOK A TRIP {props.index}
      </a>

      <div className="c-image-background-container">
        <img className="c-image-background" src={props.feature_image} alt="" />
      </div>
    </section>
  );
}

export default HeroProduct;

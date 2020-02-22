import React from "react";
import ProductCard from "./ProductCard";
function ProductGrid(props) {
  return (
    <section className="right-side">
      <div className="tagging">
        <div className="fas-group">
          {Object.keys(props.icons).map(key => (
            <div className="fas-outer">
              <i className={"fas fa-" + props.icons[key].meta_title}></i>
            </div>
          ))}
        </div>
      </div>

      <div className="c-readable-container">
        <h1 className="unica">
          {props.title} {props.key}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
      </div>
      <div className="c-related-vacations">
        <h2 className="unica">Visit these other locations</h2>
        <section className="c-grid">
          <ProductCard
            title={props.content[1].title}
            slug={props.content[1].slug}
          />
          <ProductCard
            title={props.content[2].title}
            slug={props.content[2].slug}
          />
          <ProductCard
            title={props.content[3].title}
            slug={props.content[3].slug}
          />
        </section>
      </div>
    </section>
  );
}

export default ProductGrid;

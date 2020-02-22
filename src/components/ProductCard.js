import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Link to={props.slug} className="c-card">
      <h3>{props.title}</h3>
    </Link>
  );
}

export default ProductCard;

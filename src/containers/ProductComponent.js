import React from "react";
import { useSelector } from "react-redux";
import Kristy from "../images/kristy.png";
import {Link} from "react-router-dom"
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.map((product) => {
    return (
        <div className="four wide column" key={product.id}>
            <Link to={`/product/${product.id}`}>
        <div class="ui link cards">
        <div class="card">
          <div class="image">
          <img src={product.image} alt={product.title} />
          </div>
          <div class="content">
          <div className="header">{product.title}</div>
          <div className="meta price">${product.price}</div>
          <div className="meta">{product.category}</div>
          </div>
        </div>
        </div>
        </Link>
        </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;


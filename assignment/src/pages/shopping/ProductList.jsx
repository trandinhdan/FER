/* eslint-disable no-unused-vars */
import React from "react";
import ProductItem from "./ProductItem.";
const ProductList = ({ products }) => {
  return (
    <React.Fragment>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </React.Fragment>
  );
};
export default ProductList;

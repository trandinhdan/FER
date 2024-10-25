import React from "react";
import ToolBar from "./ToolBar";
import Products from "./Products";
const ShopProduct = () => {
  return (
    <React.Fragment>
      <div className="col-lg-9 col-md-8">
        <div className="row pb-3">
          <ToolBar />
          {/* <Products /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopProduct;

import React from "react";
import Breadcrumb from "../../component/shopping/Breadcrumb";
import FilterPrice from "../../component/shopping/FilterPrice";
import FilterColor from "../../component/shopping/FilterColor";
import FilterSize from "../../component/shopping/FilterSize";
import ShopProduct from "./ShopProduct";
const Shopping = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <FilterPrice />
            <FilterColor />
            <FilterSize />
          </div>
          <ShopProduct />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shopping;

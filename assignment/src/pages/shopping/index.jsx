/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Breadcrumb from "../../component/shopping/Breadcrumb";
import FilterPrice from "../../component/shopping/FilterPrice";
import FilterColor from "../../component/shopping/FilterColor";
import FilterSize from "../../component/shopping/FilterSize";
import ShopProduct from "./ShopProduct";

const Shopping = () => {
  const [priceFilter, setPriceFilter] = useState([]);
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <FilterPrice onFilterChange={setPriceFilter} />
            <FilterColor />
            <FilterSize />
          </div>
          <ShopProduct priceFilter={priceFilter} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shopping;

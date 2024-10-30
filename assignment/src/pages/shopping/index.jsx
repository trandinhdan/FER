import React, { useState, useEffect } from "react";
import Breadcrumb from "../../component/shopping/Breadcrumb";
import FilterPrice from "../../component/shopping/FilterPrice";
import FilterColor from "../../component/shopping/FilterColor";
import FilterSize from "../../component/shopping/FilterSize";
import ShopProduct from "./ShopProduct";
import { updateProductImages } from "../../services/productService";

const Shopping = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([[0, Infinity]]); // Giá trị mặc định để lọc tất cả
  const [sizeFilter, setSizeFilter] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const updatedProducts = await updateProductImages();
        setAllProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
      } catch (error) {
        console.error("Error loading products", error);
      }
    };
    loadProducts();
  }, []);

  const handleColorFilterChange = (selectedColors) => {
    const cleanedColors = selectedColors.map(color => color.replace("color-", "").toLowerCase());
    setColorFilter(cleanedColors);
  };

  const handlePriceFilterChange = (selectedRanges) => {
    setPriceFilter(selectedRanges);
  };

  const handleSizeFilterChange = (selectedSizes) => {
    const cleanedSizes = selectedSizes.map(size => size.replace("size-", "").toLowerCase());
    setSizeFilter(cleanedSizes);
  };

  useEffect(() => {
    const applyFilters = () => {
      let filteredList = allProducts;

      // Lọc theo màu sắc
      if (colorFilter.length > 0 && !colorFilter.includes("all")) {
        filteredList = filteredList.filter(product => {
          const productColors = Array.isArray(product.color) ? product.color.map(c => c.toLowerCase()) : [product.color.toLowerCase()];
          return productColors.some(color => colorFilter.includes(color));
        });
      }

      // Lọc theo khoảng giá
      filteredList = filteredList.filter(product => 
        priceFilter.some(([min, max]) => product.price >= min && product.price <= max)
      );

      // Lọc theo kích thước
      if (sizeFilter.length > 0 && !sizeFilter.includes("all")) {
        filteredList = filteredList.filter(product => {
          const productSizes = Array.isArray(product.size) ? product.size.map(s => s.toLowerCase()) : [product.size.toLowerCase()];
          return productSizes.some(size => sizeFilter.includes(size));
        });
      }

      setFilteredProducts(filteredList);
    };

    applyFilters();
  }, [allProducts, colorFilter, priceFilter, sizeFilter]);

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4">
            <FilterPrice onPriceFilterChange={handlePriceFilterChange} />
            <FilterColor onColorFilterChange={handleColorFilterChange} />
            <FilterSize onSizeFilterChange={handleSizeFilterChange} />
          </div>
          <ShopProduct products={filteredProducts} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shopping;

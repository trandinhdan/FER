import React, { useState } from "react";

const FilterPrice = ({ onPriceFilterChange }) => {
  // Khởi tạo `selectedPriceRanges` với "All Price" được chọn sẵn
  const [selectedPriceRanges, setSelectedPriceRanges] = useState(["All Price"]);

  const priceRanges = {
    "all-price": "All Price",
    "price-1": [0, 100],
    "price-2": [100, 200],
    "price-3": [200, 300],
    "price-4": [300, 400],
    "price-5": [400, 500],
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const range = priceRanges[id];
    let updatedRanges;

    if (id === "all-price" && checked) {
      // Nếu chọn "All Price", bỏ chọn tất cả các mức giá khác
      updatedRanges = ["All Price"];
    } else if (id === "all-price" && !checked) {
      // Nếu bỏ chọn "All Price", để danh sách rỗng
      updatedRanges = [];
    } else {
      if (checked) {
        // Nếu chọn một mức giá cụ thể, bỏ "All Price"
        updatedRanges = [...selectedPriceRanges.filter((r) => r !== "All Price"), range];
      } else {
        updatedRanges = selectedPriceRanges.filter((r) => r !== range);
      }
    }

    // Nếu không có mục nào được chọn, tự động chọn lại "All Price"
    if (updatedRanges.length === 0) {
      updatedRanges = ["All Price"];
    }

    setSelectedPriceRanges(updatedRanges);
    onPriceFilterChange(updatedRanges); // Gửi giá trị mới lên component cha
  };

  return (
    <React.Fragment>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by price</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          {/* Option "All Price" */}
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="all-price"
              checked={selectedPriceRanges.includes("All Price")}
              onChange={handleCheckboxChange}
            />
            <label className="custom-control-label" htmlFor="all-price">
              All Price
            </label>
          </div>

          {/* Other price ranges */}
          {Object.keys(priceRanges).map((key) =>
            key !== "all-price" ? (
              <div
                key={key}
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
              >
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={key}
                  checked={selectedPriceRanges.includes(priceRanges[key])}
                  onChange={handleCheckboxChange}
                />
                <label className="custom-control-label" htmlFor={key}>
                  ${priceRanges[key][0]} - ${priceRanges[key][1]}
                </label>
              </div>
            ) : null
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default FilterPrice;

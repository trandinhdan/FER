import React, { useState } from "react";

const FilterSize = ({ onSizeFilterChange }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const sizes = [
    { id: "size-all", label: "All Size", count: 1000 },
    { id: "size-1", label: "XS", count: 150 },
    { id: "size-2", label: "S", count: 295 },
    { id: "size-3", label: "M", count: 246 },
    { id: "size-4", label: "L", count: 145 },
    { id: "size-5", label: "XL", count: 168 },
  ];

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    let updatedSizes;

    if (id === "size-all" && checked) {
      // Nếu chọn "All Size", bỏ chọn tất cả các kích cỡ khác
      updatedSizes = ["All Size"];
    } else if (id === "size-all" && !checked) {
      // Nếu bỏ chọn "All Size", đặt lại mảng trống để không lọc theo kích cỡ
      updatedSizes = [];
    } else {
      if (checked) {
        // Nếu chọn một kích cỡ cụ thể
        updatedSizes = [...selectedSizes.filter((size) => size !== "All Size"), id];
      } else {
        updatedSizes = selectedSizes.filter((size) => size !== id);
      }
    }

    setSelectedSizes(updatedSizes);
    onSizeFilterChange(updatedSizes); // Gửi giá trị mới lên component cha
  };

  return (
    <React.Fragment>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by size</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          {sizes.map((size) => (
            <div
              key={size.id}
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id={size.id}
                checked={selectedSizes.includes(size.id) || (size.id === "size-all" && selectedSizes.length === 0)}
                onChange={handleCheckboxChange}
              />
              <label className="custom-control-label" htmlFor={size.id}>
                {size.label}
              </label>
              <span className="badge border font-weight-normal">{size.count}</span>
            </div>
          ))}
        </form>
      </div>
    </React.Fragment>
  );
};

export default FilterSize;

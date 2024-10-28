import React, { useState } from "react";

const FilterColor = ({ onColorFilterChange }) => {
  // Khởi tạo `selectedColors` với "All Color" được chọn sẵn
  const [selectedColors, setSelectedColors] = useState(["All Color"]);

  const colors = ["All Color", "Black", "White", "Red", "Blue", "Green"];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedColors;

    if (value === "All Color" && checked) {
      // Nếu chọn "All Color", bỏ chọn tất cả các màu khác
      updatedColors = ["All Color"];
    } else if (value === "All Color" && !checked) {
      // Nếu bỏ chọn "All Color", để danh sách rỗng
      updatedColors = [];
    } else {
      if (checked) {
        // Nếu chọn một màu cụ thể, bỏ "All Color"
        updatedColors = [...selectedColors.filter((color) => color !== "All Color"), value];
      } else {
        updatedColors = selectedColors.filter((color) => color !== value);
      }
    }

    // Nếu không có màu nào được chọn, tự động chọn lại "All Color"
    if (updatedColors.length === 0) {
      updatedColors = ["All Color"];
    }

    setSelectedColors(updatedColors);
    onColorFilterChange(updatedColors); // Gửi giá trị mới lên component cha
  };

  return (
    <React.Fragment>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by color</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          {colors.map((color) => (
            <div
              key={color}
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id={color}
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleCheckboxChange}
              />
              <label className="custom-control-label" htmlFor={color}>
                {color}
              </label>
            </div>
          ))}
        </form>
      </div>
    </React.Fragment>
  );
};

export default FilterColor;

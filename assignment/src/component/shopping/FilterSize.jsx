import React, { useState } from "react";

const FilterSize = ({ onSizeFilterChange }) => {
  const [selectedSizes, setSelectedSizes] = useState(["size-all"]);

  const sizes = [
    { id: "size-all", label: "All Size" },
    { id: "size-xs", label: "XS" },
    { id: "size-s", label: "S" },
    { id: "size-m", label: "M" },
    { id: "size-l", label: "L" },
    { id: "size-xl", label: "XL" }
  ];

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    let updatedSizes;

    if (id === "size-all") {
      updatedSizes = ["size-all"];
    } else {
      updatedSizes = selectedSizes.includes(id)
        ? selectedSizes.filter((size) => size !== id)
        : [...selectedSizes.filter((size) => size !== "size-all"), id];
    }

    setSelectedSizes(updatedSizes);
    onSizeFilterChange(updatedSizes.includes("size-all") ? [] : updatedSizes);
  };

  return (
    <div>
      <h5>Filter by Size</h5>
      {sizes.map((size) => (
        <div key={size.id}>
          <input
            type="checkbox"
            id={size.id}
            checked={selectedSizes.includes(size.id)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={size.id}>{size.label}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterSize;

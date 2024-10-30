import React, { useState } from "react";

const FilterColor = ({ onColorFilterChange }) => {
  const [selectedColors, setSelectedColors] = useState(["color-all"]);

  const colors = [
    { id: "color-all", label: "All Color" },
    { id: "color-black", label: "Black" },
    { id: "color-white", label: "White" },
    { id: "color-red", label: "Red" },
    { id: "color-blue", label: "Blue" },
    { id: "color-green", label: "Green" }
  ];

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    let updatedColors;

    if (id === "color-all") {
      updatedColors = ["color-all"];
    } else {
      updatedColors = selectedColors.includes(id)
        ? selectedColors.filter((color) => color !== id)
        : [...selectedColors.filter((color) => color !== "color-all"), id];
    }

    setSelectedColors(updatedColors);
    onColorFilterChange(updatedColors.includes("color-all") ? [] : updatedColors);
  };

  return (
    <div>
      <h5>Filter by Color</h5>
      {colors.map((color) => (
        <div key={color.id}>
          <input
            type="checkbox"
            id={color.id}
            checked={selectedColors.includes(color.id)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={color.id}>{color.label}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterColor;

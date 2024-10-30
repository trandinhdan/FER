import React, { useState } from "react";

const FilterPrice = ({ onPriceFilterChange }) => {
  const [selectedRanges, setSelectedRanges] = useState(["all-price"]);

  const priceRanges = [
    { id: "all-price", label: "All Price", range: [0, Infinity] },
    { id: "0-100", label: "$0 - $100", range: [0, 100] },
    { id: "100-200", label: "$100 - $200", range: [100, 200] },
    { id: "200-300", label: "$200 - $300", range: [200, 300] },
    { id: "300-400", label: "$300 - $400", range: [300, 400] },
    { id: "400-500", label: "$400 - $500", range: [400, 500] }
  ];

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    let updatedRanges;

    if (id === "all-price") {
      updatedRanges = ["all-price"];
    } else {
      updatedRanges = selectedRanges.includes(id)
        ? selectedRanges.filter((range) => range !== id)
        : [...selectedRanges.filter((range) => range !== "all-price"), id];
    }

    setSelectedRanges(updatedRanges);

    // Tính toán các khoảng giá được chọn dựa trên `id`
    const selectedPriceRanges = updatedRanges.includes("all-price")
      ? [[0, Infinity]]
      : priceRanges
          .filter((price) => updatedRanges.includes(price.id))
          .map((price) => price.range);

    onPriceFilterChange(selectedPriceRanges);
  };

  return (
    <div>
      <h5>Filter by Price</h5>
      {priceRanges.map((price) => (
        <div key={price.id}>
          <input
            type="checkbox"
            id={price.id}
            checked={selectedRanges.includes(price.id)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={price.id}>{price.label}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterPrice;

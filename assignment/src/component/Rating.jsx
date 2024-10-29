import React from "react";
const Rating = ({ rating, maxRating = 5 }) => {
  const fullStarts = Math.floor(rating); // Số sao đầy đủ
  const halfStarts = rating % 1 !== 0; // Xác định nếu có nửa sao
  const emptyStarts = maxRating - fullStarts - (halfStarts ? 1 : 0); // Số sao trống

  return (
    <div className="rating">

      {/* Hiển thị các sao đầy đủ */}
      {[...Array(fullStarts)].map((_, index) => (
        <span key={`full-${index}`} className="star">
          ★
        </span>
      ))}

      {/* Hiển thị nửa sao nếu có */}
      {halfStarts && (
        <span key="half" className="star half">
          ☆
        </span>
      )}

      {/* Hiển thị các sao trống */}
      {[...Array(emptyStarts)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty">
          ☆
        </span>
      ))}
    </div>
  );
};
export default Rating;

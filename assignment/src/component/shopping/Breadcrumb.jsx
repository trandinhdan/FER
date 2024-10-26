import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  
  // Tách các path từ URL hiện tại
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30" aria-label="breadcrumb">
            {/* Breadcrumb item đầu tiên luôn là Home */}
            <Link className="breadcrumb-item text-dark" to="/">
              Home
            </Link>
            {/* Duyệt qua các pathnames để tạo breadcrumb động */}
            {pathnames.map((value, index) => {
              // Tạo URL cho mỗi breadcrumb dựa trên các phần của pathname
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              
              return isLast ? (
                // Nếu là phần cuối thì không tạo link
                <span className="breadcrumb-item active" key={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </span>
              ) : (
                // Nếu không phải phần cuối thì tạo link
                <Link className="breadcrumb-item text-dark" to={to} key={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

import React, { useEffect, useState } from "react";
import ToolBar from "./ToolBar";
import ProductList from "./ProductList";
import { paginate } from "../../services/paginate";
const ShopProduct = ({products}) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // Tính tổng các trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Lấy danh sách sản phẩm cho trang hiện tại
  const currentProducts = paginate(products, itemsPerPage, currentPage);

  // Chuyển trang
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };



  return (
    <React.Fragment>
      <div className="col-lg-9 col-md-8">
        <div className="row pb-3">
          <ToolBar />
          <ProductList products={currentProducts} />
          {/*Pagination control */}
          <div className="col-12">
            <nav>
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button className="page-link" onClick={goToPreviousPage}>
                    Previous
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button className="page-link" onClick={goToNextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopProduct;

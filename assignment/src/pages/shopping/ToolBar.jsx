/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ToolBar = () => {
  const [sortOption, setSortOption] = useState([
    "Latest",
    "Popularity",
    "Best Rating",
  ]);
  const [showOption, setShowOption] = useState(["10", "20", "30"]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isShowingOpen, setIsShowingOpen] = useState(false);

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const toggleShowingDropdown = () => {
    setIsShowingOpen(!isShowingOpen);
  };

  return (
    <React.Fragment>
      <div className="col-12 pb-1">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <button className="btn btn-sm btn-light">
              <i className="fa fa-th-large"></i>
            </button>
            <button className="btn btn-sm btn-light ml-2">
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="ml-2">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                onClick={toggleSortDropdown} 
              >
                Sorting
              </button>
              {isSortOpen && (
                <div className="dropdown-menu dropdown-menu-right show">
                  {sortOption.map((option, index) => (
                    <a key={index} className="dropdown-item" href="/#">
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="btn-group ml-2">
              <button
                type="button"
                className="btn btn-sm btn-light dropdown-toggle"
                onClick={toggleShowingDropdown} // Không cần data-toggle
              >
                Showing
              </button>
              {isShowingOpen && (
                <div className="dropdown-menu dropdown-menu-right show">
                  {" "}
                  {/* Thêm class show */}
                  {showOption.map((option, index) => (
                    <a key={index} className="dropdown-item" href="/#">
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToolBar;

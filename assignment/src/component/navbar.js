import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = ({ userData }) => {
  const [isDressesDropdownOpen, setIsDressesDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isPagesDropdownOpen2, setIsPagesDropdownOpen2] = useState(false);

  const [dynamicMenu, setDynamicMenu] = useState([]);
  const [dynamicMenu2, setDynamicMenu2] = useState([]);

  const [numOfCartItems, setNumOfCartItems] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8888/categories');
        setDynamicMenu(response.data);

        const response2 = await axios.get('http://localhost:8888/pages');
        setDynamicMenu2(response2.data);

        const response3 = await axios.get('http://localhost:8888/carts?username=' + userData.username);
        setNumOfCartItems(response3.data[0].products.length);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const categoryButtonStyle = {
    height: '65px',
    padding: '0 30px',
  };

  const navbarVerticalStyle = {
    width: 'calc(100% - 30px)',
    zIndex: 999,
  };

  const badgeStyle = {
    paddingBottom: '2px',
  };

  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <button
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            style={categoryButtonStyle}
            onClick={() => setIsDressesDropdownOpen(!isDressesDropdownOpen)}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2"></i>Categories
            </h6>
            <i className="fa fa-angle-down text-dark"></i>
          </button>
          <nav
            className={`collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light ${isDressesDropdownOpen ? 'show' : ''}`}
            style={navbarVerticalStyle}
          >
            <div className="navbar-nav w-100">
              {dynamicMenu.map((category, index) => (
                <div key={index} className="nav-item dropdown dropright">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    onClick={(e) => {
                      e.preventDefault();
                      if (category.subcategories.length !== 0) {
                        setIsPagesDropdownOpen(!isPagesDropdownOpen);
                      }
                    }}
                  >
                    {category.name}

                    {category.subcategories.length !== 0 ? <i className="fa fa-angle-right float-right mt-1"></i> : ''}
                  </a>

                  {category.subcategories.length !== 0 ? (
                    <div
                      className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${isPagesDropdownOpen ? 'show' : ''
                        }`}
                    >
                      {category.subcategories.map((subcategory, subIndex) => (
                        <a key={subIndex} href="#" className="dropdown-item">
                          {subcategory}
                        </a>
                      ))}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>

          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href="#" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/shop" className="nav-item nav-link">Shop</a>
                <a href="/shopdetail/1" className="nav-item nav-link">Shop Detail</a>
                <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setIsPagesDropdownOpen2(!isPagesDropdownOpen2);
                }}
              >
                Pages <i className="fa fa-angle-down mt-1"></i>
              </a>
              <div className={`dropdown-menu bg-primary rounded-0 border-0 m-0 ${isPagesDropdownOpen2 ? 'show' : ''}`}>
                {dynamicMenu2.map((page, index) => (
                  <a 
                    key={index} 
                    href={page.name === 'Shopping Cart' ? '/cart' : page.url} 
                    className="dropdown-item"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            </div>
                <a href="/contact" className="nav-item nav-link">Contact</a>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <a href="#" className="btn px-0">
                  <i className="fas fa-heart text-primary"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle" style={badgeStyle}>0</span>
                </a>
                <a href="#" className="btn px-0 ml-3">
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle" style={badgeStyle}>{numOfCartItems}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

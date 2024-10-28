import React from 'react';

const Navbar = () => {
    const categories = [
        { name: 'Category 1', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 2', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 3', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 4', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 5', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 6', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 7', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
        { name: 'Category 8', subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'] },
    ];
    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="btn d-flex align-items-center justify-content-between bg-primary w-100 collapsed" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }} aria-expanded="false">
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        <nav className="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light collapse" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: 999 }}>
                            <div className="navbar-nav w-100">
                                {categories.map((category, index) => (
                                    <div key={index} className={`nav-item ${category.subcategories ? 'dropdown dropright' : ''}`}>
                                        <a href="#" className={`nav-link ${category.subcategories ? 'dropdown-toggle' : ''}`} data-toggle="dropdown" aria-expanded="false">
                                            {category.name} {category.subcategories && <i className="fa fa-angle-right float-right mt-1"></i>}
                                        </a>
                                        {category.subcategories && (
                                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                                {category.subcategories.map((sub, subIndex) => (
                                                    <a key={subIndex} href="#" className="dropdown-item">{sub}</a>
                                                ))}
                                            </div>
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
                                    <a href="index.html" className="nav-item nav-link active">Home</a>
                                    <a href="shop.html" className="nav-item nav-link">Shop</a>
                                    <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages <i className="fa fa-angle-down mt-1"></i></a>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                            <a href="checkout.html" className="dropdown-item">Checkout</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <a href="#" className="btn px-0">
                                        <i className="fas fa-heart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                                    </a>
                                    <a href="#" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

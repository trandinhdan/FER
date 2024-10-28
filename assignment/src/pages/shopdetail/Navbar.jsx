import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <Link to="/" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            <Link to="/detail" className="nav-item nav-link active">Shop Detail</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Pages <i className="fa fa-angle-down mt-1"></i>
                                </a>
                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                    <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            {/* Heart and Cart icons */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
);

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => (
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link to="/" className="breadcrumb-item text-dark">Home</Link>
                    <Link to="/shop" className="breadcrumb-item text-dark">Shop</Link>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div>
);

export default Breadcrumb;

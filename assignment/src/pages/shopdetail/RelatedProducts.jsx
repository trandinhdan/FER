import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ relatedProducts }) => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        // Lấy 4 sản phẩm ngẫu nhiên từ relatedProducts
        const shuffled = relatedProducts.sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
    }, [relatedProducts]);

    return (
        <div className="container-fluid py-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">You May Also Like</span>
            </h2>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="owl-carousel related-carousel">
                        {randomProducts.map((product) => (
                            <div className="product-item bg-light" key={product.id}>
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={product.img} alt={product.name} />
                                    <div className="product-action">
                                        <Link to={`/shopdetail/${product.id}`} className="btn btn-outline-dark btn-square">
                                            <i className="fa fa-search"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <Link to={`/shopdetail/${product.id}`} className="h6 text-decoration-none text-truncate">
                                        {product.name}
                                    </Link>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>${product.price.toFixed(2)}</h5>
                                        {product.oldPrice && (
                                            <h6 className="text-muted ml-2">
                                                <del>${product.oldPrice.toFixed(2)}</del>
                                            </h6>
                                        )}
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        {[...Array(5)].map((_, index) => (
                                            <small
                                                key={index}
                                                className={`fa fa-star${index < Math.floor(product.rating) ? ' text-primary' : ''}`}
                                            ></small>
                                        ))}
                                        <small>({product.reviews})</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;

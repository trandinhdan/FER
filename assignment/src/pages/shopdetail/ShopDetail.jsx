import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsData from '../../models/products.json'; // Đảm bảo đường dẫn đúng

const ShopDetail = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Lấy dữ liệu sản phẩm từ JSON
        const productData = productsData.products.find((p) => p.id === "1"); // ID của sản phẩm bạn muốn
        setProduct(productData);
    }, []);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid pb-5">
            <div className="row px-xl-5">
                {/* Hiển thị ảnh sản phẩm */}
                <div className="col-lg-5 mb-30">
                    <img className="w-100 h-100" src={product.img} alt={product.name} />
                </div>

                {/* Chi tiết sản phẩm */}
                <div className="col-lg-7 h-auto mb-30">
                    <div className="h-100 bg-light p-30">
                        <h3>{product.name}</h3>
                        <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                {[...Array(Math.floor(product.rating))].map((_, i) => (
                                    <small key={i} className="fas fa-star"></small>
                                ))}
                                {product.rating % 1 !== 0 && <small className="fas fa-star-half-alt"></small>}
                            </div>
                            <small className="pt-1">({product.reviews} Reviews)</small>
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">${product.price}</h3>
                        <p className="mb-4">{product.description}</p>
                        <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Sizes:</strong>
                            <div>
                                {product.size.map((size, index) => (
                                    <div key={index} className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id={`size-${index}`} name="size" />
                                        <label className="custom-control-label" htmlFor={`size-${index}`}>{size}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <strong className="text-dark mr-3">Colors:</strong>
                            <div>
                                {product.color.map((color, index) => (
                                    <div key={index} className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id={`color-${index}`} name="color" />
                                        <label className="custom-control-label" htmlFor={`color-${index}`}>{color}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Số lượng và nút Add To Cart */}
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" onClick={handleDecrease}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary border-0 text-center" value={quantity} readOnly />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus" onClick={handleIncrease}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-primary px-3">
                                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateProductImages } from '../../services/productService';
import RelatedProducts from './RelatedProducts';

const ShopDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [activeTab, setActiveTab] = useState("description");

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const updatedProducts = await updateProductImages();
                const productData = updatedProducts.find((p) => p.id === id);
                setProduct(productData);
                setRelatedProducts(updatedProducts.filter(p => p.id !== id));
            } catch (error) {
                console.error("Error updating product images:", error);
            }
        };

        fetchProductData();
    }, [id]);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = cart.find(item => item.id === product.id);

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Product added to cart!");
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid pb-5">
            <div className="row px-xl-5">
                {/* Hiển thị ảnh sản phẩm */}
                <div className="col-lg-5 mb-30">
                    <img src={product.img} alt={product.name} className="w-100 h-100" />
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
                        </div>
                        <h3 className="font-weight-semi-bold mb-4">${product.price}</h3>
                        <p className="mb-4">{product.description}</p>

                        {/* Tùy chọn kích thước */}
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

                        {/* Tùy chọn màu sắc */}
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
                            <button className="btn btn-primary px-3" onClick={handleAddToCart}>
                                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab cho Description và Information */}
            <div className="row px-xl-5">
                <div className="col">
                    <div className="bg-light p-30">
                        <div className="nav nav-tabs mb-4">
                            <a
                                className={`nav-item nav-link text-dark ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => setActiveTab('description')}
                                href="#"
                            >
                                Description
                            </a>
                            <a
                                className={`nav-item nav-link text-dark ${activeTab === 'information' ? 'active' : ''}`}
                                onClick={() => setActiveTab('information')}
                                href="#"
                            >
                                Information
                            </a>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'description' && (
                                <div className="tab-pane fade show active">
                                    <h4 className="mb-3">Product Description</h4>
                                    <p>{product.productDescription}</p>
                                </div>
                            )}
                            {activeTab === 'information' && (
                                <div className="tab-pane fade show active">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <ul className="list-group list-group-flush">
                                        {Object.entries(product.additionalInformation).map(([key, value], index) => (
                                            <li key={index} className="list-group-item px-0">
                                                <strong>{key}:</strong> {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần sản phẩm liên quan */}
            <RelatedProducts relatedProducts={relatedProducts} />
        </div>
    );
};

export default ShopDetail;

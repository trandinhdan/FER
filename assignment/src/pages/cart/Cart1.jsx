import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart1 = () => {
    const [cartItems, setCartItems] = useState([]);
    const shippingCost = 10;
    const navigate = useNavigate();

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartData);
    }, []);

    const handleQuantityChange = (id, amount) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + amount) };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemove = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="align-middle">
                                        <img src={item.img} alt={item.name} style={{ width: "50px" }} /> {item.name}
                                    </td>
                                    <td className="align-middle">${item.price.toFixed(2)}</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-minus" onClick={() => handleQuantityChange(item.id, -1)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={item.quantity} readOnly />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-plus" onClick={() => handleQuantityChange(item.id, 1)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="align-middle">
                                        <button className="btn btn-sm btn-danger" onClick={() => handleRemove(item.id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>${getTotal().toFixed(2)}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">${shippingCost.toFixed(2)}</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>${(getTotal() + shippingCost).toFixed(2)}</h5>
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={handleProceedToCheckout}>
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart1;

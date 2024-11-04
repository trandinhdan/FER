import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checkout = () => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(token);
    const [products, setProducts] = useState([]);

    const [shipCost, setShipCost] = useState()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8888/carts?username=' + userData.username);
                console.log(response.data);
                setProducts(response.data[0].products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setShipCost(Math.floor(Math.random() * (30 - 15 + 1)) + 15);
        };
        fetchProducts();
    }, []);

    const Subtotal = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return total.toFixed(2);
    };

    const Total = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return (total + shipCost).toFixed(2);
    };





    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <h5 className="section-title position-relative text-uppercase mb-3">
                        <span className="bg-secondary pr-3">Billing Address</span>
                    </h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>First Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={userData.firstName}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Last Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={userData.lastName}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>E-mail</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={userData.email}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Mobile No</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={userData.mobile}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={userData.address}
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>City</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="New York"
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>State</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="New York"
                                />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Country</label>
                                <select className="custom-select">
                                    <option selected>-- Choose --</option>
                                    <option>United States</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                </select>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-lg-4">
                    <h5 className="section-title position-relative text-uppercase mb-3">
                        <span className="bg-secondary pr-3">Order Total</span>
                    </h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom">
                            <h6 className="mb-3">Products</h6>
                            {products.map((product, index) => (
                                <div className="d-flex justify-content-between" key={index}>
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-bottom pt-3 pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>${Subtotal()}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">$ {shipCost}</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>{Total()}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Payment</span>
                        </h5>
                        <div className="bg-light p-30">
                            <div className="form-group">
                                <p >Direct Check (we only accept cash)</p>
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

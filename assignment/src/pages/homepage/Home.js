import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import Carousel from './carousel';
import Categories from './categories';
import ProductList from "../shopping/ProductList";


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8888/categories');
            setCategories(response.data);

            const response2 = await axios.get('http://localhost:8888/products');
            setProducts(response2.data);

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
      }, []);

    return (
        <>
            <Carousel />

            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-check fa-3x text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-shipping-fast fa-3x text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fas fa-exchange-alt fa-3x text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-phone-volume fa-3x text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>

            <Categories  categories={categories}/>

            {/* <ProductList product={products}/> */}
        </>

    );
};

export default Home;

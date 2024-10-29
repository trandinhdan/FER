import React from 'react';

const Categories = ({ categories }) => {

    // const categories = [
    //     { name: 'Dresses', image: 'img/cat-1.jpg', link: '#', productCount: 100 },
    //     { name: 'Shirts', image: 'img/product-2.jpg', link: '#', productCount: 100 },
    //     { name: 'Jeans', image: 'img/jean.jpg', link: '#', productCount: 100 },
    //     { name: 'Swimwear', image: 'img/swimwear.jpg', link: '#', productCount: 100 },
    //     { name: 'Sleepwear', image: 'img/sleepwear.jpg', link: '#', productCount: 100 },
    //     { name: 'Sportswear', image: 'img/sportswear.jpg', link: '#', productCount: 100 },
    //     { name: 'Jumpsuits', image: 'img/jumpsuits.jpg', link: '#', productCount: 100 },
    //     { name: 'Blazers', image: 'img/blazers.jpg', link: '#', productCount: 100 },
    //     { name: 'Jackets', image: 'img/jackets.jpg', link: '#', productCount: 100 },
    //     { name: 'Shoes', image: 'img/cat-3.jpg', link: '#', productCount: 100 },
    // ];

    return (

        <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Categories</span>
            </h2>
            <div className="row px-xl-5 pb-3">
                {categories.map((category, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none">
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        overflow: 'hidden',
                                        borderRadius: '8px' // Optional for rounded corners
                                    }}
                                >
                                    <img
                                        className="img-fluid"
                                        src={category.image}
                                        alt={category.name}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectPosition: 'center',
                                            objectFit: 'contain' // Ensures image fits container neatly
                                        }}
                                    />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>{category.name}</h6>
                                    
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Categories;

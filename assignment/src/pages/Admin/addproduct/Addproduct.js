import React, { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../../../services/productService";
import { listAllCategories } from "../../../services/categoriesService";

const Addproduct = () => {
    const [categories, setCategories] = useState([]);

    const [options, setOptions] = useState({
        color: ["red", "blue", "green"],
        size: ["S", "M", "L", "XL"],
    });

    const [newProduct, setNewProduct] = useState({
        name: "",
        img: "",
        price: Number(0),
        description: "",
        category: "",
        productDescription: "",
        additionalInformation: {
            Material: "",
            "Care Instructions": "",
            Origin: ""
        },
        size: [],
        color: [],
        quantity: Number(0),
        rating: "",
        reviews: "",
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await listAllCategories();
                setCategories(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: name === "price" || name === "quantity" ? parseFloat(value) : value,

        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addProduct(newProduct);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        window.location.href = "/shop";
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit} className="p-4 border rounded">
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={newProduct.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={newProduct.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            value={newProduct.description}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Product Description</label>
                        <textarea
                            className="form-control"
                            name="productDescription"
                            value={newProduct.productDescription}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                            key={newProduct.category}
                            className="form-select"
                            name="category"
                            value={newProduct.category}
                            onChange={handleChange}
                        >
                            <option key="" value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Size</label>
                        <div className="form-check">
                            {options.size.map((size) => (
                                <div key={size}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="size"
                                        value={size}
                                        checked={newProduct.size.includes(size)}
                                        onChange={(e) => {
                                            const selectedSizes = newProduct.size.includes(size)
                                                ? newProduct.size.filter((s) => s !== size)
                                                : [...newProduct.size, size];
                                            handleChange({ target: { name: "size", value: selectedSizes } });
                                        }}
                                    />
                                    <label className="form-check-label">{size}</label>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <div className="form-check">
                            {options.color.map((color) => (
                                <div key={color}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="color"
                                        value={color}
                                        checked={newProduct.color.includes(color)}
                                        onChange={(e) => {
                                            const selectedSizes = newProduct.color.includes(color)
                                                ? newProduct.color.filter((s) => s !== color)
                                                : [...newProduct.color, color];
                                            handleChange({ target: { name: "color", value: selectedSizes } });
                                        }}
                                    />
                                    <label className="form-check-label">{color}</label>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            value={newProduct.quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="img"
                            value={newProduct.img}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Additional Information</label>
                        <div className="d-flex flex-wrap">
                            {Object.keys(newProduct.additionalInformation).map((infoKey) => (
                                <div key={infoKey} className="me-3 mb-3">
                                    <label className="form-label">{infoKey}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={`additionalInformation.${infoKey}`}
                                        value={newProduct.additionalInformation[infoKey]}
                                        onChange={(e) =>
                                            setNewProduct({
                                                ...newProduct,
                                                additionalInformation: {
                                                    ...newProduct.additionalInformation,
                                                    [infoKey]: e.target.value,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};


export default Addproduct;
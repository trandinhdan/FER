/* eslint-disable no-unused-vars */
import axios from "axios";
const PEXELS_API_KEY =
  "rsZEoWdFKRJqUrxJZCG3cfoKn8rcn14vzB0IcnhczyhTM7jw83ypmpbJ";
const API_URL = "http://localhost:8888/products";

export const listAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchImages = async () => {
  try {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query: "clothing",
        per_page: 18,
      },
    });

    const imageUrls = response.data.photos.map((photo) => photo.src.original);
    return imageUrls;
  } catch (error) {
    console.log("Error fetching images", error);
    throw error;
  }
};

export const updateProductImages = async () => {
  try {
    const products = await listAllProducts();
    const imageUrls = await fetchImages();

    // Cập nhật URL ảnh cho từng sản phẩm
    const updatedProducts = products.map((product, index) => {
      if (imageUrls[index]) {
        product.img = imageUrls[index];
      }
      return product;
    });

    // Trả về danh sách sản phẩm đã cập nhật
    return updatedProducts;
  } catch (error) {
    console.log("Error updating products", error);
    throw error;
  }
};

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

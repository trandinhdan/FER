import axios from "axios";

const API_URL = "http://localhost:8888/categories";

export const listAllCategories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
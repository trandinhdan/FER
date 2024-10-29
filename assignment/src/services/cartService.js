import axios from 'axios';

const jsonServerUrl = 'http://localhost:8888/carts';


const addToCart = async (username, productId) => {
    try {
        const { data: carts } = await axios.get(jsonServerUrl);
        let cart = carts.find(cart => cart.username === username);
        if (cart) {
            if (!cart.products.includes(productId)) {
                cart.products.push(productId);
                await axios.put(`${jsonServerUrl}/${cart.id}`, cart);
            }
        } else {
            cart = { id: Date.now().toString(), username, products: [productId] };
            await axios.post(jsonServerUrl, cart);
        }

        return cart;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
};

export { addToCart };
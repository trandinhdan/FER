import axios from 'axios';

const jsonServerUrl = 'http://localhost:9999';

const login = async (username, password) => {
    const response = await axios.get(`${jsonServerUrl}/users?username=${username}&password=${password}`);
    return response.data;
};

const regester = async (username, password) => {
    if (await checkIfUserExists(username)) {
        return null;
    }
    const response = await axios.post(`${jsonServerUrl}/users`, { username, password });
    return response.data;
};

const listAllUsers = async () => {
    const response = await axios.get(`${jsonServerUrl}/users`);
    return response.data;
};

const checkIfUserExists = async (username) => {
    const response = await axios.get(`${jsonServerUrl}/users?username=${username}`);
    return response.data;
};


export { login, regester, listAllUsers };
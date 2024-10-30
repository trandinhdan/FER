import axios from 'axios';

const jsonServerUrl = 'http://localhost:8888';

const login = async (username, password) => {
    const response = await axios.get(`${jsonServerUrl}/users?username=${username}&password=${password}`);
    return response.data;
};

const regester = async (user) => {
    console.log(user);
    // if (await checkIfUserExists(user.username)) {
    //     console.log('User already exists');
    //     return null;
    // }
    const response = await axios.post(`${jsonServerUrl}/users`, user);
    return response.data;
};

const listAllUsers = async () => {
    const response = await axios.get(`${jsonServerUrl}/users`);
    return response.data;
};

const checkIfUserExists = async (username) => {
    console.log(username);
    const response = await axios.get(`${jsonServerUrl}/users?username=${username}`);
    return response.data;
};

const updateUser = async (user) => {
    const response = await axios.put(`${jsonServerUrl}/users/${user.id}`, user);
    return response.data;
};

const takeUser = async (id) => {
    const response = await axios.get(`${jsonServerUrl}/users/${id}`);
    return response.data;
};

export { login, regester, listAllUsers, updateUser, takeUser };
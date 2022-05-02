const axios = require('axios');

const requestAxios = axios.create({
    baseURL: 'https://api.pagar.me/1/',
    params: {
        api_key: ''
    }
});

module.exports = requestAxios;
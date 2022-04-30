const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwt_secret');
const knex = require('../services/connection');

const verifyLogin = async (req, res, next) => {
    const token = req.header('authorization');
    if (!token) {
        return res.status(400).json();
    }
    const { id } = jwt.verify(token, jwtSecret); 
    try {
        const userExists = await knex('users').select('id').where({ id });
        if (userExists.length === 0) {
            return res.status(400).json();
        }
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    verifyLogin
}
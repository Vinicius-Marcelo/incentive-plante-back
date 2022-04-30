import jwt from 'jsonwebtoken';
import jwtSecret from '../jwt_secret';
import knex from '../services/knex';

const verifyLogin = async (req, res, next) => {
    const token = req.header('authorization');
    if (!token) {
        return res.status(400).json();
    }
    const { id } = jwt.verify(token, jwtSecret); 
    try {
        const userExists = await knex('user').select('id').where({ id });
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
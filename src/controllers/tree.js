const knex = require('../services/connection');
const axios = require('../services/gateway');

const error = require('../messages/error');
const success = require('../messages/success');

const listAllTrees = (req, res) => {
    try {
        const trees = knex('trees');
        return res.status(200).json(trees)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const paymentAdoptedTree = (req, res) => {
    const { body } = req;

    try {
        const request = await 
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listAllTrees,
    paymentAdoptedTree,
}
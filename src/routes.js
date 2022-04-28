const express = require(`express`);
const routes = express();
const user = require(`./controllers/user`);
const login = require(`./controllers/login`);
routes.post(`/login`, login.login);



module.exports = routes;
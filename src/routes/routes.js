const express = require(`express`);
const routes = express();

const user = require(`../controllers/user`);
const tree = require(`../controllers/tree`);
const { verifyLogin } = require('../middlewares/verifyLogin');

routes.post('/signup', user.registerUser)
routes.post(`/login`, user.login);

routes.use(verifyLogin);

routes.put('/user', user.updateUser);

routes.get('/trees', tree.listAllTrees);
routes.post('/tree/adopt', tree.paymentAdoptedTree);

module.exports = routes;
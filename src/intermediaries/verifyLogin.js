const knex = require(`../conect`);
const jwt = require(`jsonwebtoken`);
const passwordHash = require(`../passwordHash`);

const verifyLogin = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }
    try {
        const token = authorization.replace('Bearer', '').trim();
        const { id } = jwt.sign(token, passwordHash);
        const profile = await knex('users').where({ id });
        if (!profile[0]) {
            return res.status(404).json('Usuario não encontrado');
        };
        const { passwordHash, ...user } = profile[0];
        req.usuario = user;
        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
module.exports = { verifyLogin };
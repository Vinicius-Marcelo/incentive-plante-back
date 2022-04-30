const knex = require(`../conect`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const passwordHash = require(`../passwordHash`);

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(404).json(`E-mail ou senha invalidos`);
    };
    try {
        const profile = await knex(`users`).where({ email });
        if (!profile[0]) {
            return res.status(400).json(`O usuario não foi encontrado`);
        }
        const user = profile[0];
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) {
            return res.status(404).json(`E-mail ou senha invalidos`);
        }
        const token = jwt.sign({ id: user.id }, passwordHash, { expiresIn: '8h' });
        const { password: _, ...userData } = user;
        return res.status(200).json({
            user: userData,
            token
        })
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = { login };
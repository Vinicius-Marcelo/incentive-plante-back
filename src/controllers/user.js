const knex = require(`../conect`);
const bcrypt = require(`bcrypt`);

const registerUser = async (req, res) => {
    const { name, email, password, cep } = req.body;
    if (!name || !email || !password || !cep) {
        return res.status(404).json("Todos os campos são obrigatorios");
    }
    if (cep.length != 8) {
        return res.status(404).json("Valor do CEP invalido");
    }
    try {
        const userExists = await knex(`users`).where({ email });
        if (userExists.length) {
            return res.status(400).json("E-mail já existe");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            name, email, password: encryptedPassword, cep
        }
        const user = await knex(`users`).insert(newUser).debug();
        if (!user) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }
        return res.status(200).json("O usuario foi cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
const updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(404).json("Todos os campos são obrigatorios");
    }
    try {
        const userExists = await knex(`users`).where
    } catch (error) {

    }
}

module.exports = { registerUser, updateUser };
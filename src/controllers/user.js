const { fieldsToUser, fieldsToLogin } = require('../validations/requiredFields');

const registerUser = async (req, res) => {
    const { name, email, password, cep } = req.body;

    const validations = fieldsToUser({ name, email, password, cep });
    if (!validations.ok) {
        return res.status(400).json();
    }

    try {

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    
    const validations = fieldsToLogin({ email, password });
    if (!validations.ok) {
        return res.status(400).json();
    }

    try {

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const updateUser = async (req, res) => {
    const { name, email, password, cep } = req.body;
    
    const validations = fieldsToUser({ name, email, password, cep });
    if (!validations.ok) {
        return res.status(400).json();
    }

    try {

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = { registerUser, login, updateUser };
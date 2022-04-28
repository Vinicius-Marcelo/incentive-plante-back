const registerUser = async (req, res) => {
    const { name, email, password, cep } = req.body;
    if (!name || !email || !password || !cep) return
    try {

    } catch (error) {

    }
}
const updateUser = async (req, res) => {
    const { name, email, password, cep } = req.body;
    if (!name || !email || !password || !cep) return
    try {

    } catch (error) {

    }
}

module.exports = { registerUser, updateUser };
const fieldsToUser = ({ name, email, password, cep }) => {
    if (!name) {
        const response = {
            message: '',
            ok: false
        }
        return response;
    }

    if (!email) {
        const response = {
            message: '',
            ok: false
        }
        return response;
    }

    if (!password) {
        const response = {
            message: '',
            ok: false
        }
        return response;
    }

    if (!cep) {
        const response = {
            message: '',
            ok: false
        }
        return response;
    }

    return { ok: true }
}

const fieldsToLogin = ({ email, password }) => {
    if (!email) {
        const response = {
            message: '',
            ok: false
        }
        return response;
    }

    if (!password) {
        const response = {
            message: '',
            ok: false
        }
        return response;
    }

    return { ok: true }
}

module.exports = {
    fieldsToUser,
    fieldsToLogin
}
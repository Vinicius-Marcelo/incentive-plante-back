const message = require('../messages/error')

const fieldsToUser = ({ name, email, password, cep }) => {
    if (!name) {
        const response = {
            message: message.nameDontExists,
            ok: false
        }
        return response;
    }

    if (!email) {
        const response = {
            message: message.emailDontExists,
            ok: false
        }
        return response;
    }

    if (!password) {
        const response = {
            message: message.passwordDontExists,
            ok: false
        }
        return response;
    }

    if (!cep) {
        const response = {
            message: message.cepDontExists,
            ok: false
        }
        return response;
    }

    return { ok: true }
}

const fieldsToLogin = ({ email, password }) => {
    if (!email) {
        const response = {
            message: message.emailDontExists,
            ok: false
        }
        return response;
    }

    if (!password) {
        const response = {
            message: message.passwordDontExists,
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
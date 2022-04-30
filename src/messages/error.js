const message = {
    nameDontExists: 'O nome não foi informado',
    emailDontExists: 'É preciso informar um email',
    passwordDontExists: 'A senha é essencial para segurança da sua conta',
    cepDontExists: 'O cep é um campo obrigatório',
    emailAlreadyBeenUsed: 'O email indicado já está em uso',
    badRequest: 'O servidor não entendeu a requisição pois está com um formato inválido',
    unauthorized: 'O usuário não está autenticado (logado)',
    forbidden: 'O usuário não tem permissão de acessar o recurso solicitado',
    notFound: 'Não foi possível encontrar o que foi solicitado',
    fieldEmpty: 'Um dos campos obrigatório está vazio',
}

// 200 (OK) = requisição bem sucedida
// 201 (Created) = requisição bem sucedida e algo foi criado
// 204 (No Content) = requisição bem sucedida, sem conteúdo no corpo da resposta
// 400 (Bad Request) = o servidor não entendeu a requisição pois está com uma sintaxe/formato inválido
// 401 (Unauthorized) = o usuário não está autenticado (logado)
// 403 (Forbidden) = o usuário não tem permissão de acessar o recurso solicitado
// 404 (Not Found) = o servidor não pode encontrar o recurso solicitado

module.exports = message
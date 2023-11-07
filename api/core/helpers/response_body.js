const helper = {}

helper.responseBodySuccess = ({code = 200, message = 'Sucesso', data = []}) => {
        return {
            'code': code,
            'message': message,
            'data': data
        }
}

helper.responseBodyCreated = ({code = 201, message = 'Criado', data = []}) => {
    return {
        'code': code,
        'message': message,
        'data': data
    }
}

helper.responseBodyNoContent = ({code = 204, message = 'Remoção realizada', data = []}) => {
    return {
        'code': code,
        'message': message,
        'data': data
    }
}

helper.responseBodyErro = ({code = 400, message = 'Solicitação inválida', data = []}) => {
    return {
        'code': code,
        'message': message,
        'data': data
    }
}

helper.responseBodyNotFound = ({code = 404, message = 'Não encontrado', data = []}) => {
    return {
        'code': code,
        'message': message,
        'data': data
    }
}

helper.responseBodyInternalErro = ({code = 500, message = 'Erro interno', data = []}) => {
    return {
        'code': code,
        'message': message ?? "Erro interno",
        'data': data
    }
}

module.exports = helper
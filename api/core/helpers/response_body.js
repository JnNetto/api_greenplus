const helper = {}

helper.responseBodySuccess = ({code = 200, message = '', data = []}) => {
        return {
            'code': code,
            'message': message,
            'data': data
        }
}

helper.responseBodyErro = ({code = 400, message = '', data = []}) => {
    return {
        'code': code,
        'message': message,
        'data': data
    }
}

helper.responseBodyNotFound = ({message = "Não encontrado"}) => {
    return {
        'code': 404,
        'message': message,
        'data': []
    }
}

helper.responseBodyInternalErro= (message) => {
    return {
        'code': 500,
        'message': message ?? "Erro interno",
        'data': []
    }
}

module.exports = helper
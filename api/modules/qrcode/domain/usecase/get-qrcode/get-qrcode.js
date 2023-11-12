let qrcodeDb = require('../../../../../reposotiry/qrcode')

let usecaseGetQrcode = async () => {
    return qrcodeDb.listQrcode().then(qrcode => {
        return qrcode
    }).catch(err => {
        throw err
    })
}

let getIdQrcodeCurso = async (id) => {
    try{
        const qrCode = await qrcodeDb.findIdQrcode(id)

        return qrCode
    } catch (err) {
        throw err
    }
}

let getQrcodePorPeriodo = async(idCurso, idPeriodo) => {
    try {
    
        const qrCodePeriodo = await qrcodeDb.findQrcode(idCurso, idPeriodo)
        
        return qrCodePeriodo
    } catch (err) {
        throw err
    }
}

module.exports = {
    usecaseGetQrcode,
    getIdQrcodeCurso,
    getQrcodePorPeriodo
}
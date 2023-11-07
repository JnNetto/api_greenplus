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
        const qrCode = await qrcodeDb.findIdQrcodeCurso(id)
        
        return qrCode
    } catch (err) {
        throw err
    }
}

let getQrcodePorPeriodo = async(idCurso, idPeriodo) => {
    try {
        const qrCodeCurso = await qrcodeDb.findIdQrcodeCurso(idCurso)
        const qrCodePeriodo = await qrcodeDb.findQrcode(qrCodeCurso, idPeriodo)

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
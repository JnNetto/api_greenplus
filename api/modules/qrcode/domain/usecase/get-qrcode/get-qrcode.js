let qrcodeDb = require('../../../../../reposotiry/qrcode')
let cursosDb = require('../../../../../reposotiry/cursos')

//Use case get menu (list all qrcode)
let usecaseGetQrcode = async () => {
    return qrcodeDb.listQrcode().then(qrcode => {
        return qrcode
    }).catch(err => {
        throw err
    })
}

let getIdQrcodeCurso = async (id) => {
    try{
        const curso = await cursosDb.findIdCurso(id)
        const qrCode = await qrcodeDb.findIdQrcodeCurso(curso)
        
        return qrCode
    } catch (err) {
        throw err
    }
}

let getQrcodePorPeriodo = async(idCurso, idPeriodo) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const qrCodeCurso = await qrcodeDb.findIdQrcodeCurso(curso)
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
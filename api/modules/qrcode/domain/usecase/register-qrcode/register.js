let qrcodeDb = require('../../../../../reposotiry/qrcode')
let cursosDb = require('../../../../../reposotiry/cursos')

let registerQrCode = async (idCurso, idPeriodo, novoQrCode) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const qrCodeCurso = await qrcodeDb.findIdQrcodeCurso(curso)
        const qrCodePeriodo = await qrcodeDb.findQrcode(qrCodeCurso, idPeriodo)
        const id = await qrcodeDb.register(qrCodePeriodo, novoQrCode)

        return id
    } catch (err) {
        throw err
    }
}

module.exports = {
    registerQrCode
}
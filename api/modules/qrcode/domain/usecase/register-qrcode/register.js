let qrcodeDb = require('../../../../../reposotiry/qrcode')
let cursosDb = require('../../../../../reposotiry/cursos')

let registerQrCode = async (idCurso, idPeriodo, novoQrCode) => {
    try {
        // const qrCodeCurso = await qrcodeDb.findIdQrcode(idCurso)
        // const qrCodePeriodo = await qrcodeDb.findQrcode(qrCodeCurso, idPeriodo)
        const id = await qrcodeDb.register(idCurso, idPeriodo, novoQrCode)

        return id
    } catch (err) {
        throw err
    }
}

module.exports = {
    registerQrCode
}
const qrcodeDb = require('../../../../../reposotiry/qrcode');
const cursosDb = require('../../../../../reposotiry/cursos')

//retorna o id do evento registrado
let deleteQrCode = async (idCurso, idPeriodo) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const qrCodeCurso = await qrcodeDb.findIdQrcodeCurso(curso)
        const id = await qrcodeDb.deleteQrCode(qrCodeCurso, idPeriodo)
        console.log(id)

        return id
    } catch (err) {
        throw err
    }
}

module.exports = {
    deleteQrCode
}
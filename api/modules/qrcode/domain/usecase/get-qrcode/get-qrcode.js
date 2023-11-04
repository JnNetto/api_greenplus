let qrcodeDb = require('../../../../../reposotiry/qrcode')

//Use case get menu (list all qrcode)
let usecaseGetQrcode = async () => {
    return qrcodeDb.listQrcode().then(qrcode => {
        return qrcode
    }).catch(err => {
        throw err
    })
}

let getIdMenu = async (id) => {
    try {
        const menu = await qrcodeDb.findIdMenu(id)
        return menu
    } catch (err) {
        throw err;
    }
}

module.exports = {
    usecaseGetQrcode,
    getIdMenu
}
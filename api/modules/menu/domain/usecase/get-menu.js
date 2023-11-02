//Use case get menu (list all menu)
let menuDb = require('../../../../reposotiry/menu')

let usecaseGetMenu = async () => {
    return menuDb.listMenu().then(menu => {
        return menu
    }).catch(err => {
        throw err
    })
}

let getIdMenu = async (id) => {
    try {
        const menu = await menuDb.findIdMenu(id)
        return menu
    } catch (err) {
        throw err;
    }
}

module.exports = {
    usecaseGetMenu,
    getIdMenu
}
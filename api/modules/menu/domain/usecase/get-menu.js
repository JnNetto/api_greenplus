let menuDb = require('../../../../../reposotiry/menu')

module.exports = usecaseGetMenu = async () => {
    return menuDb.listMenu().then(menu => {
        return menu
    }).catch(err => {
        throw err
    })
}
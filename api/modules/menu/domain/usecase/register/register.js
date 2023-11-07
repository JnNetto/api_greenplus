let menuDb = require('../../../../../reposotiry/menu');
//let portersDb = require('../../../../../reposotiry/porters')

//retorna o id do menu registrado
let registerMenu = async (menu) => {
    try {
        const id = await menuDb.register(menu);
        return id;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    registerMenu
}

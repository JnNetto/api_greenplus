let menuDb = require('../../../../../reposotiry/menu');
//let portersDb = require('../../../../../reposotiry/porters')

//retorna o id do menu registrado
module.exports = registerMenu = async (menu) => {
    try {
        const id = await menuDb.register(menu);
        return id;
    } catch (err) {
        throw err;
    }
}

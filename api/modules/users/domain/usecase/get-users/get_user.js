//Use case get user
// let usersDb = require('../../../../../reposotiry/users')
// let portersDb = require('../../../../../reposotiry/porters')

// module.exports = usercaseGetUser = async (key, value) => {
//     return usersDb.findUser(key, value).then(async user => {
//         if(user && user.modality == 'PORTER'){
//             await portersDb.findPorter(user.condominiumCode, user.id).then(porters => {
//                 user.dadosPorteiro = porters
//             })
//         }
//         return user
//     }).catch(err => {
//         throw err
//     })
// }
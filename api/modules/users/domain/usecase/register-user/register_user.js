//Use case register user
let usersRepo = require('../../../../../reposotiry/users')
let authServices = require('../../../../../core/services/auth_services')
const { any } = require('joi')

// module.exports = usecaseRegisterUser = async (user) => {
//     console.log(user)
//     switch (user.modality) {
//         case 'PORTER': 
//             return portersDb.findByEmail(user.condominiumCode, user.email).then(async porter => {
//                 if (porter) {
//                     throw new Error('Porteiro já cadastrado')
//                 } else {
//                     var condominium = await condominiumsDb.findCondominium(user.condominiumCode).then(condominium => {
//                         return condominium
//                     }).catch(err => {
//                         throw new Error('Condomínio não encontrado: ' + err)
//                     })

//                     var responsibleForApproval = { name: condominium.name, email: condominium.email }
//                     var message = "Para continuar é necessária a aprovação da administradora do condomínio, você será notificado quando isso acontecer."
//                     user.avatar = "https://img.icons8.com/glyph-neue/512/user.png",
//                     user.password = await authServices.hashPassword(user.password)
//                     user.status = 'PENDING'
//                     user.isFirstAcess = true
//                     user.responsibleForApproval = responsibleForApproval
//                     user.apartmentNumber = "00"
//                     user.block = "00"
//                     return usersRepo.register(user).then(async user => {
//                         var token = authServices.generateToken({ user_id: user.id, username: user.username })
//                         var porter = {
//                             id: user.id,
//                             avatar: user.avatar,
//                             name: user.name,
//                             email: user.email,
//                             statusUser: user.status,
//                             condominiumCode: user.condominiumCode
//                         }
//                         await portersDb.register(porter)
//                         return { token: token, message: message }
//                     }).catch(err => {
//                         throw new Error("Erro ao cadastrar porteiro: " + err.message)
//                     })
//                 }
//             }).catch(err => {
//                 throw new Error("Erro ao cadastrar porteiro: " + err.message)
//             })
//         default: 
//             return apartamentsRepo.findApartament(user.condominiumCode, user.block, user.apartmentNumber).then(async apartament => {
//                 if (apartament) {
        
//                     //check if exist user with same modality
//                     apartament.residents.forEach(resident => {
//                         if ((resident.modality == 'PROPRIETARY' || resident.modality == 'RESIDENT_ADMIN') && resident.modality == user.modality) {
//                             throw new Error('Já existe um morador com essa modalidade')
//                         }
//                     })
        
//                     var responsibleForApproval
//                     var message
//                     //Melhorar: primeiro busco RESIDENT_ADMIN, caso nao tenha, eu busco o PROPRIETARY e por ultimo o condominium
//                     apartament.residents.map(resident => {
//                         if (resident.modality == 'PROPRIETARY' || resident.modality == 'RESIDENT_ADMIN') {
//                             responsibleForApproval = { name: resident.name, email: resident.email }
//                             message = "Para continuar é necessária a aprovação do morador principal do apartamento, você será notificado quando isso acontecer."
//                         }
//                     });
        
//                     if (!responsibleForApproval) {
//                         responsibleForApproval = { name: apartament.condominium.name, email: apartament.condominium.email }
//                         message = "Para continuar é necessária a aprovação da administradora do condomínio, você será notificado quando isso acontecer."
//                     }
//                     user.avatar = "https://img.icons8.com/glyph-neue/512/user.png",
//                     user.password = await authServices.hashPassword(user.password)
//                     user.status = 'PENDING'
//                     user.isFirstAcess = true
//                     user.responsibleForApproval = responsibleForApproval
//                     return usersRepo.register(user).then(async user => {
//                         var token = authServices.generateToken({ user_id: user.id, email: user.email })
//                         apartament.residents.push(
//                             {
//                                 name: user.name,
//                                 email: user.email,
//                                 modality: user.modality,
//                             }
//                         )
//                         await apartamentsRepo.update(apartament.condominiumCode, apartament.block, apartament)
//                         return { token: token, message: message}
//                     }).catch(err => {
//                         throw err
//                     })
//                 } else {
//                     throw new Error('Apartamento não encontrado')
//                 }
        
//             }).catch(err => {
//                 throw new Error("Erro ao cadastrar morador")
//             })
            
//     }


// }
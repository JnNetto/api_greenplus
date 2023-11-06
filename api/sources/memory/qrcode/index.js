let qrcodeDb = require('./qrcode')


let findAll = () => {
    return qrcodeDb
}

let findIdQrcodeCurso = (id) => {
    const qrCode = qrcodeDb[id]
    if (qrCode) {
        return qrCode
    } else {
        return null
    }
}

let findQrcode = (qrCodeCurso, idPeriodo) => {
    const qrCode = qrCodeCurso[idPeriodo]
    if (qrCode) {
        return qrCode
    } else {
        return null
    }
}

let register = (qrCodePeriodo, novoQrCode) => {
    var id = qrCodePeriodo.length+1;
    novoQrCode.id = id;
    qrCodePeriodo.push(novoQrCode)
    return novoQrCode.id
}

let deleteQrCode = (idCurso, idPeriodo, idQrCode) => {
    qrcodeDb[idCurso][idPeriodo].find(qr => qr.id === idQrCode)
    // const qrcode = qrCodeCurso.find(qr => qr.id === idPeriodo)
    // console.log(qrcode)
    // if (qrcode) {
    //     console.log(qrcode)
    //     const index = qrCodeCurso.findIndex(qr => qr.id === idPeriodo)
    //     qrCodeCurso.splice(index, 1)

    //     return qrcode.id
    // } else {
    //     return null
    // }
}
// let find = (prop, val) => {
//         var user = qrcodeDb.find(user => user.username == val)
//         if (user) {
//             return user
//         } else {
//             return new Error('User not found')
//         }
//     }

// let find = (prop, val) => {
//     var user = userDb.find(user => user[prop] === val)
//     if (user) {
//         return user
//     } else {
//         return new Error('User not found')
//     }
// }


// let findId = (id) => {
//     return qrcodeDb.filter(curso => curso.id == id)
// }

// let findIdCurso = (id) => {
//     const idCurso = qrcodeDb.find(curso => curso.id == id)
//     return idCurso ? idCurso.id : null
// }


// let dropAll = () => {
//     qrcodeDb = []
//     return {
//         message: 'All users deleted'
//     }
// }

// let update = (id, userInfo) => {
//     let user = find('id', id)
//     if (user) {
//         qrcodeDb = qrcodeDb.map(user => {
//             if (user.id == id) {
//                 return userInfo
//             } else {
//                 return user
//             }
//         }
//         )
//         return {
//             message: 'User updated'
//         }
//     } else {
//         return new Error('User not found')
//     }
// }

module.exports = {
    findAll,
    findQrcode,
    findIdQrcodeCurso,
    register,
    deleteQrCode,
    // find,
    // findId,
    // findIdCurso,
    // dropAll, 
    // update
}

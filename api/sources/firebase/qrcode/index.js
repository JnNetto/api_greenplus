let db = require('../../../core/infra/db/firebase/firebase_config');
let qrcodeRef = db.ref('qrcode')


let findAll = async () => {
    return await qrcodeRef.once('value').then(snapshot => {
    return snapshot.val()
    })
}

let findIdQrcode = async (id) => {
    const snapshot = await qrcodeRef.child(id).once('value')
    const qrcode = snapshot.val()
    return qrcode
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
    if (qrCodePeriodo && novoQrCode) {
        var id = qrCodePeriodo.length + 1
        novoQrCode.id = id
        qrCodePeriodo.push(novoQrCode)
        
        return novoQrCode.id
    } else {
        return null
    }
}

let deleteQrCode = (idCurso, idPeriodo, idQrCode) => {
    let qrCodeCursoPeriodo = qrcodeRef[idCurso][idPeriodo];
    let qrCodeIndex = qrCodeCursoPeriodo.findIndex(qr => qr.id === idQrCode);

    if (qrCodeIndex !== -1) {
        qrCodeCursoPeriodo.splice(qrCodeIndex, 1);
        return idQrCode;
    } else {
        return null;
    }
}

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
    findIdQrcode,
    register,
    deleteQrCode,
    // find,
    // findId,
    // findIdCurso,
    // dropAll, 
    // update
}

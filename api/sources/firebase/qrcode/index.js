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

let findQrcode = async (idCurso, idPeriodo) => {
    return await qrcodeRef.child(idCurso + "/" + idPeriodo).once('value').then(snapshot => {
        var qrcodes = [];
        snapshot.forEach(childSnapshot => {
            qr = childSnapshot.toJSON();
            qrcodes.push(qr)
        })
        return qrcodes;
    })
}

let register = async (idCurso, idPeriodo, novoQrCode) => {
    novoQrCode.id = qrcodeRef.push().key
    return await qrcodeRef.child(idCurso + "/" + idPeriodo + "/" + novoQrCode.id).update(novoQrCode).then(snapshot => {
        return novoQrCode
    })
}

let deleteQrCode = async (idCurso, idPeriodo, idQrCode) => {
    return await qrcodeRef.child(idCurso + "/" + idPeriodo + "/" + idQrCode).remove().then(snapshot => {
        return idQrCode
    })
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

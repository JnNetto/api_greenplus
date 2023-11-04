let qrcodeDb = require('./qrcode')
//let serialize = require('./serializer')

let find = (prop, val) => {
        var user = qrcodeDb.find(user => user.username == val)
        if (user) {
            return user
        } else {
            return new Error('User not found')
        }
    }

// let find = (prop, val) => {
//     var user = userDb.find(user => user[prop] === val)
//     if (user) {
//         return user
//     } else {
//         return new Error('User not found')
//     }
// }

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


let findId = (id) => {
    return qrcodeDb.filter(curso => curso.id == id)
}

let findIdCurso = (id) => {
    const idCurso = qrcodeDb.find(curso => curso.id == id)
    return idCurso ? idCurso.id : null
}

let register = (menu) => {
    qrcodeDb.push(menu)
    return menu.id;
}

let deleteUser = (id) => {
    let user = find('id', id)
    if (user) {
        qrcodeDb = qrcodeDb.filter(user => user.id != id)
        return {
            message: 'User deleted',
        }
    } else {
       return new Error('User not found')
    }
}

let dropAll = () => {
    qrcodeDb = []
    return {
        message: 'All users deleted'
    }
}

let update = (id, userInfo) => {
    let user = find('id', id)
    if (user) {
        qrcodeDb = qrcodeDb.map(user => {
            if (user.id == id) {
                return userInfo
            } else {
                return user
            }
        }
        )
        return {
            message: 'User updated'
        }
    } else {
        return new Error('User not found')
    }
}

module.exports = {
    find,
    findAll,
    findQrcode,
    findIdQrcodeCurso,
    findId,
    findIdCurso,
    register,
    deleteUser,
    dropAll, 
    update
}

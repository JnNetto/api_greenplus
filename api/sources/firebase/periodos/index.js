let db = require('../../../core/infra/db/firebase/firebase_config');
//let cursosDb = require('../../memory/cursos/cursos')
let periodosRef = db.ref('periodos')

let findAll = async () => {
    return await periodosRef.once('value').then(snapshot => {
    return snapshot.val()
    })
}

let findPeriodosDoCurso = (id) => {
    const periodo = periodosRef[id]
    if (periodo) {
        return periodo
    } else {
        return null
    }
}

let findPeriodo = (periodos, idPeriodo) => {
    if (periodos) {
        const periodo = periodos.filter(periodoid => periodoid.id == idPeriodo)
        if (periodo && periodo.length > 0) {
            return periodo
        } else {
            return null
        }
    } else {
        return null
    }
}

// let find = (prop, val) => {
//         var user = periodosDb.find(user => user.username == val)
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

// let register = (userInfo) => {
//     periodosDb.push(userInfo)
// }

// let deleteUser = (id) => {
//     let user = find('id', id)
//     if (user) {
//         periodosDb = periodosDb.filter(user => user.id != id)
//         return {
//             message: 'User deleted',
//         }
//     } else {
//        return new Error('User not found')
//     }
// }

// let dropAll = () => {
//     periodosDb = []
//     return {
//         message: 'All users deleted'
//     }
// }

// let update = (id, userInfo) => {
//     let user = find('id', id)
//     if (user) {
//         periodosDb = periodosDb.map(user => {
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
    findPeriodosDoCurso,
    findPeriodo,
    // find,
    // register,
    // deleteUser,
    // dropAll, 
    // update
}

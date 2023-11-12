let db = require('../../../core/infra/db/firebase/firebase_config');
let cursosRef = db.ref('cursos')


let findAll = async () => {
    return await cursosRef.once('value').then(snapshot => {
        return snapshot.val()
    })
}

let findId = async (id) => {
    const snapshot = await cursosRef.child(id).once('value')
    const curso = snapshot.val()
    return curso
}

let findIdCurso = (id) => {
    const idCurso = cursosDb.find(curso => curso.id == id)
    return idCurso ? idCurso.id : null
}

let register = (novoCurso) => {
    if (novoCurso) {
        var id = cursosDb.length + 1
        novoCurso.id = id
        cursosDb.push(novoCurso)

        return novoCurso.id
    } else {
        return null
    }
}

// let find = (prop, val) => {
//     var user = cursosDb.find(user => user.username == val)
//     if (user) {
//         return user
//     } else {
//         return new Error('User not found')
//     }
// }

// let find = (prop, val) => {
//     var user = userDb.find(user => user[prop] === val)
//     if (user) {
//         return user
//     } else {
//         return new Error('User not found')
//     }
// }


// let findId = (id) => {
//     return cursosDb.filter(curso => curso.id == id)
// }


// let deleteUser = (id) => {
//     let user = find('id', id)
//     if (user) {
//         cursosDb = cursosDb.filter(user => user.id != id)
//         return {
//             message: 'User deleted',
//         }
//     } else {
//         return new Error('User not found')
//     }
// }

// let dropAll = () => {
//     cursosDb = []
//     return {
//         message: 'All users deleted'
//     }
// }

// let update = (id, userInfo) => {
//     let user = find('id', id)
//     if (user) {
//         cursosDb = cursosDb.map(user => {
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
    findId,
    findIdCurso,
    register,
    // find,
    // deleteUser,
    // dropAll,
    // update
}

let db = require('../../../core/infra/db/firebase/firebase_config');
//let cursosDb = require('../../memory/cursos/cursos')
let menuRef = db.ref('menu')

let findAll = async () => {
    return await menuRef.once('value').then(snapshot => {
    return snapshot.val()
    })
}

let findIdMenu = (id) => {
    return menuRef.filter(menu => menu.id == id)
}

let register = (menu) => {
    if (menu) {
        var id = menuRef.length + 1
        menu.id = id
        menuRef.push(menu)

        return menu.id
    } else {
        return null
    }
}

// let find = (prop, val) => {
//     var user = menuDb.find(user => user.username == val)
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
//     return menuDb.filter(curso => curso.id == id)
// }

// let findIdCurso = (id) => {
//     const idCurso = menuDb.find(curso => curso.id == id)
//     return idCurso ? idCurso.id : null
// }

// let deleteUser = (id) => {
//     let user = find('id', id)
//     if (user) {
//         menuDb = menuDb.filter(user => user.id != id)
//         return {
//             message: 'User deleted',
//         }
//     } else {
//        return new Error('User not found')
//     }
// }

// let dropAll = () => {
//     menuDb = []
//     return {
//         message: 'All users deleted'
//     }
// }

// let update = (id, userInfo) => {
//     let user = find('id', id)
//     if (user) {
//         menuDb = menuDb.map(user => {
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
    findIdMenu,
    register,
    // find,
    // findId,
    // findIdCurso,
    // deleteUser,
    // dropAll, 
    // update
}

let menuDb = require('./menu')
//let serialize = require('./serializer')

let find = (prop, val) => {
        var user = menuDb.find(user => user.username == val)
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
    return menuDb
}

let findIdMenu = (id) => {
    return menuDb.filter(menu => menu.id == id)
}

let findId = (id) => {
    return menuDb.filter(curso => curso.id == id)
}

let findIdCurso = (id) => {
    const idCurso = menuDb.find(curso => curso.id == id)
    return idCurso ? idCurso.id : null
}

let register = (menu) => {
    menuDb.push(menu)
    return menu.id;
}

let deleteUser = (id) => {
    let user = find('id', id)
    if (user) {
        menuDb = menuDb.filter(user => user.id != id)
        return {
            message: 'User deleted',
        }
    } else {
       return new Error('User not found')
    }
}

let dropAll = () => {
    menuDb = []
    return {
        message: 'All users deleted'
    }
}

let update = (id, userInfo) => {
    let user = find('id', id)
    if (user) {
        menuDb = menuDb.map(user => {
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
    findIdMenu,
    findId,
    findIdCurso,
    register,
    deleteUser,
    dropAll, 
    update
}

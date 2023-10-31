let cursosDb = require('./cursos')
//let serialize = require('./serializer')

let find = (prop, val) => {
        var user = cursosDb.find(user => user.username == val)
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
    return cursosDb
}

let findId = (id) => {
    return cursosDb.filter(curso => curso.id == id)
}

let register = (userInfo) => {
    cursosDb.push(userInfo)
}

let deleteUser = (id) => {
    let user = find('id', id)
    if (user) {
        cursosDb = cursosDb.filter(user => user.id != id)
        return {
            message: 'User deleted',
        }
    } else {
       return new Error('User not found')
    }
}

let dropAll = () => {
    cursosDb = []
    return {
        message: 'All users deleted'
    }
}

let update = (id, userInfo) => {
    let user = find('id', id)
    if (user) {
        cursosDb = cursosDb.map(user => {
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
    findId,
    register,
    deleteUser,
    dropAll, 
    update
}

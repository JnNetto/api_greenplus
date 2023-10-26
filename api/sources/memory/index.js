let userDb = require('./user')
let serialize = require('./serializer')

let find = (prop, val) => {
        var user = userDb.find(user => user.username == val)
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
    return userDb
}

let register = (userInfo) => {
    userDb.push(userInfo)
}

let deleteUser = (id) => {
    let user = find('id', id)
    if (user) {
        userDb = userDb.filter(user => user.id != id)
        return {
            message: 'User deleted',
        }
    } else {
       return new Error('User not found')
    }
}

let dropAll = () => {
    userDb = []
    return {
        message: 'All users deleted'
    }
}

let update = (id, userInfo) => {
    let user = find('id', id)
    if (user) {
        userDb = userDb.map(user => {
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
    register,
    deleteUser,
    dropAll, 
    update
}

let periodosDb = require('./periodos')
//let serialize = require('./serializer')

let find = (prop, val) => {
        var user = periodosDb.find(user => user.username == val)
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
    return periodosDb
}

////////////////////////////////
let findPeriodoPorCurso = (id) => {
    const periodo = periodosDb[id]
    if (periodo) {
        // console.log(periodo)
        return periodo
    } else {
        // console.log(null)
        return null
    }
}

let findPeriodo = (periodos, idPeriodo) => {
    const index = idPeriodo - 1
    const periodo = periodos[index]
    console.log(periodo)
    if (periodo) {
        console.log(periodo)
        return [periodo]
    } else {
        console.log([])
        return []
    }
}
////////////////////////////////
let register = (userInfo) => {
    periodosDb.push(userInfo)
}

let deleteUser = (id) => {
    let user = find('id', id)
    if (user) {
        periodosDb = periodosDb.filter(user => user.id != id)
        return {
            message: 'User deleted',
        }
    } else {
       return new Error('User not found')
    }
}

let dropAll = () => {
    periodosDb = []
    return {
        message: 'All users deleted'
    }
}

let update = (id, userInfo) => {
    let user = find('id', id)
    if (user) {
        periodosDb = periodosDb.map(user => {
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
    findPeriodoPorCurso,
    findPeriodo,
    register,
    deleteUser,
    dropAll, 
    update
}

let eventosDb = require('./eventos')
//let serialize = require('./serializer')


let findAll = () => {
    return eventosDb
}

let findEventosPorCurso = (id) => {
    const eventos = eventosDb[id]
    if (eventos) {
        return eventos
    } else {
        return null
    }
}

let register = (eventosCurso, novoEvento) => {
    eventosCurso.push(novoEvento)
    return novoEvento.id
}

let deleteEvento = (eventosCurso, idEvento) => {
    const evento = eventosCurso.find(evento => evento.id === idEvento)
    if (evento) {
        const index = eventosCurso.findIndex(evento => evento.id === idEvento)
        eventosCurso.splice(index, 1)
        console.log(eventosCurso)

        return evento.id
    } else {
        return null
    }
}
// let find = (prop, val) => {
//     var user = eventosDb.find(user => user.username == val)
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

// let findPeriodo = (eventos, idPeriodo) => {
//     const periodo = eventos.filter(periodoid => periodoid.id == idPeriodo)
//     if (periodo) {
//         console.log(periodo)
//         return periodo
//     } else {
//         return null
//     }
// }

// let dropAll = () => {
//     eventosDb = []
//     return {
//         message: 'All users deleted'
//     }
// }

// let update = (id, userInfo) => {
//     let user = find('id', id)
//     if (user) {
//         eventosDb = eventosDb.map(user => {
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
    findEventosPorCurso,
    register,
    deleteEvento,
    // find,
    // findPeriodo,
    // dropAll,
    // update
}

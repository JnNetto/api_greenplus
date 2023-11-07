let eventosDb = require('./eventos')
//let serialize = require('./serializer')


let findAll = () => {
    let combinados = [];
    for (let chave in eventosDb) {
        combinados = combinados.concat(eventosDb[chave]);
    }
    return combinados;
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
    if (eventosCurso && novoEvento) {
        var id = eventosCurso.length + 1
        novoEvento.id = id
        eventosCurso.push(novoEvento)

        return novoEvento.id
    } else {
        return null
    }
}

let deleteQrCode = (idCurso, idPeriodo, idQrCode) => {
    let eventosCurso = qrcodeDb[idCurso][idPeriodo];
    let eventoIndex = eventosCurso.findIndex(qr => qr.id === idQrCode);

    if (eventoIndex !== -1) {
        eventosCurso.splice(eventoIndex, 1);
        return idQrCode;
    } else {
        return null;
    }
}

let deleteEvento = (idCurso, idEvento) => {
    let eventosCurso = eventosDb[idCurso];
    let eventoIndex = eventosCurso.findIndex(evento => evento.id === idEvento);

    if (eventoIndex !== -1) {
        eventosCurso.splice(eventoIndex, 1);
        return idEvento;
    } else {
        return null;
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

let db = require('../../../core/infra/db/firebase/firebase_config');
//let cursosDb = require('../../memory/cursos/cursos')
let horariosRef = db.ref('horarios')

let findHorariosPorCurso = (id) => {
    const horarios = horariosRef[id]
    if (horarios) {
        return horarios
    } else {
        return null
    }
}

let put_horario = (idCurso, novoHorario) => {
    try {
        horariosRef[idCurso] = novoHorario
        return novoHorario  
    } catch (error) {
        return null;
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
    let eventosCurso = horariosRef[idCurso];
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
    findHorariosPorCurso,
    put_horario,
    deleteEvento,
    // find,
    // findPeriodo,
    // dropAll,
    // update
}

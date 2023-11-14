let db = require("../../../core/infra/db/firebase/firebase_config");
let eventosRef = db.ref("eventos");

let findAll = async () => {
  return await eventosRef.once("value").then((snapshot) => {
    const data = snapshot.val()
    return (data !== null) ? data : []
  })
}

let findEventosPorCurso = async (idCurso) => {
  return await eventosRef.child(idCurso).once("value").then((snapshot) => {
    var evento = []
    snapshot.forEach((childSnapshot) => {
      eventoJSON = childSnapshot.toJSON()
      evento.push(eventoJSON)
    });
    return evento
  });
};

let register = async (idCurso, novoEvento) => {
  novoEvento.id = eventosRef.push().key
  return await eventosRef.child(idCurso + "/" + novoEvento.id).update(novoEvento).then((snapshot) => {
      return novoEvento;
    });
};

let deleteEvento = async (idCurso, idEvento) => {
  return await eventosRef
    .child(idCurso + "/" + idEvento).remove().then((snapshot) => {
      return idEvento;
    });
};

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
};

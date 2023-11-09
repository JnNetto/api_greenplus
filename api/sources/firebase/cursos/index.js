let db = require('../../../core/infra/db/firebase/firebase_config');
//let cursosDb = require('../../memory/cursos/cursos')
let cursosRef = db.ref('cursos')

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

let findAll = async () => {
    return await cursosRef.once('value').then(snapshot => {
        return snapshot.val()
    })
}

// let findId = (id) => {
//     return cursosDb.filter(curso => curso.id == id)
// }

let findId = (id) => {
    return cursosRef.child(id).once('value')
      .then(snapshot => {
        const curso = snapshot.val();
        return curso
      })
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
    findIdCurso,
    register,
    deleteUser,
    dropAll, 
    update
}

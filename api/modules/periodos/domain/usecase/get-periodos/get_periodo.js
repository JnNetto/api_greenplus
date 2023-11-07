//Use case get user
 let periodosDb = require('../../../../../reposotiry/periodos')

let getPeriodoById = async(idCurso, idPeriodo) => {
    try {
        const periodos = await periodosDb.findPeriodosDoCurso(idCurso)
        const periodo = await periodosDb.findPeriodo(periodos, idPeriodo)

        return periodo
    } catch (err) {
        throw err
    }
}

let usecaseGetPeriodos = async () => {
    return periodosDb.listPeriodos().then(cursos => {
        return cursos
    }).catch(err => {
        throw err
    })
}

let getPeriodos = async(idCurso) => {
    try{
        const periodos = await periodosDb.findPeriodosDoCurso(idCurso)
        
        return periodos
    } catch (err) {
        throw err
    }
}


module.exports = {
    getPeriodoById,
    usecaseGetPeriodos,
    getPeriodos
}
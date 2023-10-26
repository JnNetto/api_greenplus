let db = require('../../../core/infra/db/firebase/firebase_config');

let usersRef = db.ref('users')

let find = async (prop, val) => {
    return await usersRef.orderByChild(prop).equalTo(val).limitToFirst(1).once('value').then(snapshot => {
        var user;
        snapshot.forEach(childSnapshot => {
            user = childSnapshot.toJSON();
            return false;
        })
        return user;
    })
}

let findAll = async () => {
    return await usersRef.once('value').then(snapshot => {
        return snapshot.val()
    })
}

let register = async (userInfo) => {
        userInfo.id = usersRef.push().key;
     return await usersRef.child(userInfo.id).update(userInfo).then(snapshot => {
        return userInfo
    })   
}

let deleteUser = async (id) => {
    return await usersRef.child(id).remove().then(snapshot => {
        return {
            id: snapshot.key,
            status: 'success'
        }
    })
}

let dropAll = async () => {
    return await usersRef.remove();
}

let update = async (id, userInfo) => {
    return await usersRef.child(id).update(userInfo).then(snapshot => {
        return {
            id: id,
            status: 'success'
        }
    })
}

let updateUserValue = async (id, key, value) => {
    return await usersRef.child(id+"/"+key).set(value).then(snapshot => {
            return {
                id: id,
                status: 'success'
            }
        })
}

module.exports = {
    find,
    findAll,
    register,
    deleteUser,
    dropAll, 
    update,
    updateUserValue
}
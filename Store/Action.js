import firebase from '../Config/firebase/firebase'
let detabase = firebase.database().ref("/")
function detaGet() {
  return dispatch => {
    firebase.database().ref('/').child('Todo').on('child_added', (tau) => {
       let data = tau.val()
       console.log(data)
        dispatch({
            type : "todoData",
            payload : data
        })
    })

    dispatch({
        type: "GetData"
    })
}
}

function add(val) {
   let key = detabase.child("Todo").push().key
   val.id= key
     detabase.child('Todo/' + key).set(val)
    return {
        type: 'add',
        // data:val
    }
}
function deleteFunc(ind,id) {
 
console.log(ind,id)
detabase.child('Todo/' + id).remove()

    return {
        type: "delete",
        ind: ind
    }
}

function edit(ind) {


    return {
        type: "edit",
        ind: ind
    }
}
function save(ind, name) {
    return {
        type: 'save',
        data: name,
        ind: ind
    }
}

function cancel(ind) {
    return {
        type: 'cancel',
        ind: ind
    }
}

export {
    add, deleteFunc, edit, save, cancel,detaGet

} 
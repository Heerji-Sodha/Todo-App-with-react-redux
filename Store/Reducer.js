const INITAIL_STATE ={
data:[]


}




const reducer = (state=INITAIL_STATE,action)=>{
    console.log(action)
    switch(action.type){
case 'todoData' : 
console.log("todoData" ,action.payload)
state.data.push(action.payload)
return {
    data : state.data
} 
case 'add':
    // state.data.push(action.data)
return{
    data : state.data
}

case 'delete':
    state.data.splice(action.ind,1)
return{
    data : state.data
}
case 'edit':
    state.data[action.ind].edit = false
return{
    data : state.data
}

case 'save':
    state.data.splice(action.ind,1,action.data)
return{
    data : state.data
}

case 'cancel':
    state.data[action.ind].edit = true
return{
    data : state.data
}
default : return state

    }

}


export default reducer;
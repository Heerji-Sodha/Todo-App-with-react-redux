import React from 'react';
import {connect} from 'react-redux';
import {add,deleteFunc ,edit,save,cancel,detaGet}from './../../Store/Action'
class Home extends React.Component{
    constructor(){
super()

this.state={
data:'',
editValue : ''

}

    }
    componentDidMount(){
        this.props.detaGet()
    }
render(){
    console.log(this.props.adds.data)
return(
<div>
 <h1 style={{border:'1px solid',backgroundColor:'green',color:'white',fontWeight:'bold',padding:'10px',}}>ToDo App </h1>
<div style={{border:'1px solid',width:'380px',marginLeft:'500px',borderRadius:'10px',backgroundColor:'gray'}}>
<input type='text' placeholder='Enter Your Data' onChange={(e)=>this.setState({data:e.target.value})} style={{padding:'10px',width:'300px',borderRadius:'10px'}} />
<button style={{padding:'10px',borderRadius:'10px'}} onClick={()=>{
    let Obj = {
        data : this.state.data,
        edit : true
    }
    this.props.add(Obj)}}>Add</button>



{this.props.adds && this.props.adds.data.map((val,ind) =>
<div>
{val.edit ? 
<h3>{val.data}
<button  style={{backgroundColor:'green',padding:'10px',borderRadius:'10px',marginLeft:'10px'}} onClick = {()=> this.props.edit(ind)}>Edit</button>
<button style={{backgroundColor:'red',padding:'10px',borderRadius:'10px'}} onClick = {()=>{this.props.deleteFunc(ind,val.id)}}>Delete</button>
</h3> : 
<div>
<input type = "text" style={{padding:'10px',width:'200px',borderRadius:'10px'}} 
onChange = {(e) => this.setState({editValue : e.target.value})}

/>
<button style={{backgroundColor:'green',padding:'10px',borderRadius:'10px'}} onClick={()=>{
    let Obj = {
        data : this.state.editValue,
        edit : true
    }
    this.props.save(ind,Obj)}} 
    >Save</button>
<button style={{backgroundColor:'red',padding:'10px',borderRadius:'10px'}} onClick = {()=> this.props.cancel(ind)}>Cancel</button>

</div>}
</div>
)}
</div>
 </div>
)
}
}
const mapStateToProps = (state)=>{
return{
    adds:state
}
}
const mapDispatchToProps = dispatch =>{
    return{
       add: (name)=>dispatch(add(name)),
       deleteFunc: (name,id)=>dispatch(deleteFunc(name,id)),
       edit: (name)=>dispatch(edit(name)),
       save: (name,ind)=>dispatch(save(name,ind)),
       cancel: (ind)=>dispatch(cancel(ind)),
       detaGet : ()=> dispatch(detaGet())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
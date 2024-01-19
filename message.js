import React,{ Component } from 'react'
class Message extends Component{
constructor(){
    super()
    this.state={
        message:"I wish ur day is good"
    }
}
changeMessage=()=>{
    this.setState({
        message:"beautiful day"
    })
}
render(){
    return(
        <div>
            <h3>{this.state.message}</h3>
            <button onClick={()=>this.changeMessage()}>Click here</button>
        </div>
    )
}
}
export default Message


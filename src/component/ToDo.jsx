import React from "react"
import style from  './ToDo.module.css'

class ToDo extends React.Component {

    constructor(props){
        super()
        this.state = {
            title: ''
        }
    }
onHandler = (event) => {
    this.setState({title: event.target.value})
}

onClickHandler = ()=>{
 this.props.list(this.state.title)
}

    render() {
     return(
         <div className={style.div}>
         <label htmlFor=""><h2>User</h2></label>
         <input type="text" value={this.state.title} onChange={this.onHandler} />
         <button onClick={this.onClickHandler}>click me</button>
         </div>
         
     )
    }
}
export default ToDo 
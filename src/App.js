import './App.css';
import React from 'react';
import ToDo from './component/ToDo';
import Render from './component/Render';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: []
    }
  }

  onList =(e)=>{
    // console.log(e);
    this.setState((prev) => {
      return {
        text:[...prev.text, e]
      }
    })
   
  }
  


  render(){
    return(
      <>
      <ToDo list={this.onList}/>
      <Render render={this.state.text} />
      </>
    )
  }
}

export default App;

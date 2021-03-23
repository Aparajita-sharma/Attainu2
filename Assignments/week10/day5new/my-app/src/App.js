import './App.css';
import React, { Component } from 'react'
import Toggle from './Toggle'

class App extends Component {
  state ={
    Display : false,
  }
  
  handleButton(){
    this.setState((currentState)=>({
      Display: !currentState.Display,
    }));
  } 

  render() {
    return (
    <div>
         <Toggle currentSit={this.state.Display} />
         {this.state.Display ? this.state.Display(now =>(<Toggle currentSit={now} />)): null}
    </div>
    )
  }
}

export default App;

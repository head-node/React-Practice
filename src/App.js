import logo from './logo.svg';
import './App.css';
import CounterValue from "./Components/CounterValue"
import IncrementButton from "./Components/IncrementButton"

import React, { Component } from 'react';
import DecrementButton from './Components/DecrementButton';


class App extends Component {
  constructor(){ 
    super();
    this.state={
      counter:0
    }
  } 
  handleIncrementClick=()=>{
    this.setState({
      counter:this.state.counter+1,
    })
}
handleDecrementClick=()=>{ 
  if(this.state.counter>0)
  this.setState({ 
  counter:this.state.counter-1,
  })
}

  render() {
    return (
      <>
        <div className="counterVar">
          <CounterValue counter={this.state.counter}/>
          </div>
          <div className="Button">
          <IncrementButton handleIncrementClick={this.handleIncrementClick}/>
          <DecrementButton handleDecrementClick={this.handleDecrementClick}/>
          </div>
          </>
    );
  }
}

export default App;


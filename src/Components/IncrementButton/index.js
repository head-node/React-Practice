import React, { Component } from 'react';
import "./style.css"
class IncrementButton extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        return (
            <button className="button" onClick={()=>{this.props.handleIncrementClick()}}>
               Increment
            </button>
        );
    }
}

export default IncrementButton;
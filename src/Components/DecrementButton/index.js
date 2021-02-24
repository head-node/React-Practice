import React, { Component } from "react";

class DecrementButton extends Component {
    constructor(){
     super();
    }
  render() {
    return (
      <button
        onClick={() => {
          this.props.handleDecrementClick();
        }}>
        Decrement
      </button>
    );
  }
}

export default DecrementButton;

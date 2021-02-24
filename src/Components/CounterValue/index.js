import React, { Component } from 'react';
import "./style.css"
class CounterValue extends Component {
    render() {
        return (
            <div className="counter">
               {this.props.counter}
            </div>
        );
    }
}

export default CounterValue;
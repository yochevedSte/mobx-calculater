import React, { Component } from 'react';
import './App.css'

class Button extends Component{

    render(){
        let className =  this.props.className + " btn-container align-middle";
        return(
            <div className={className}>
            <span className="symbol">{this.props.symbol}</span>
            </div>
        );
    }
}

export default Button;
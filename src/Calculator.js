import React, { Component } from 'react';
import './App.css'
import Screen from './Screen';
import Buttons from './Buttons';


class Calculator extends Component{

    render(){
        return(
            <div className="calculater-container">
                <Screen/>
                <Buttons/>
            </div>
        );
    }
}

export default Calculator;
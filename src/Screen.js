import React, { Component } from 'react';
import './App.css'
import {observer, inject} from 'mobx-react';

@inject("store")
@observer
class Screen extends Component{

    render(){
        console.log(this);
        return(
            <div className="screen">
                <div className="result">{this.props.store.displayValue}</div>
            </div>
        );
    }
}

export default Screen;
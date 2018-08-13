import React, { Component } from 'react';
import Numbers from './Numbers';
import Actions from './Actions';
import './App.css';

class Buttons extends Component {

    render() {
        return (
            <div className="container buttons-container">
                <div className="row full-height">
                    <Numbers />
                    <Actions />
                </div>
            </div>
        );
    }
}

export default Buttons;
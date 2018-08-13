import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class Actions extends Component {

    render() {
        return (
            <div className="col-3 full-height">
                <div className="row full-height">
                    <Button symbol="/" className="orange col-12" />
                    <Button symbol="X" className="orange col-12" />
                    <Button symbol="-" className="orange col-12" />
                    <Button symbol="+" className="orange col-12" />
                    <Button symbol="=" className="orange col-12" />
                    
                </div>

            </div>
        );
    }
}

export default Actions;
import React, { Component } from 'react';
import Button from './Button'


class Numbers extends Component {

    render() {
        return (
            <div className="col-sm-9 full-height">
                <div className="row full-height">
                <Button symbol="C" className="grey col-4"/>
                <Button symbol="+/-" className="grey col-4"/>
                <Button symbol="%" className="grey col-4"/>
                <Button symbol="7" className="grey col-4"/>
                <Button symbol="8" className="grey col-4"/>
                <Button symbol="9"  className="grey col-4"/>
                <Button symbol="4" className="grey col-4"/>
                <Button symbol="5" className="grey col-4"/>
                <Button symbol="6" className="grey col-4"/>
                <Button symbol="1" className="grey col-4"/>
                <Button symbol="2" className="grey col-4"/>
                <Button symbol="3" className="grey col-4"/>
                <Button symbol="0" className="grey col-8"/>
                <Button symbol="." className="grey col-4"/>
                
            
                </div>
            </div>
        );
    }
}

export default Numbers;
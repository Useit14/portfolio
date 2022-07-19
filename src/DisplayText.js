import React, { Component } from 'react';
import './App.css';

class DisplayText extends Component {
    render() {
        return (
            <div className={this.props.background === 'dark' ? "text-div-background dark displayText" : "text-div-background displayText"}
            style={{backgroundColor: this.props.color}}>
            <div className="text-div padding display" style={{minHeight: this.props.height}}>
                <div style={{color: this.props.textColor}}>
                    <h1>{this.props.heading}</h1>
                    {this.props.children}
                </div>
            </div>
            </div>
        );
    }
}

export default DisplayText;

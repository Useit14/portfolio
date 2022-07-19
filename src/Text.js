import React, { Component } from 'react';
import './App.css';

class Text extends Component {
    render() {
        return (
            <div className={this.props.background === 'dark' ? "text-div-background dark" : "text-div-background"}
            style={{backgroundColor: this.props.color}}>
            <div className="text-div container padding">
            <div className="row">
                <div className="col-md-5">
                    <h4>{this.props.heading}</h4>
                </div>
                <div className="col-md-7">
                    {this.props.children}
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Text;

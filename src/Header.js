import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div>
            <div className="project-landing">
                <img src={this.props.image} alt="landing"/>
            </div>

            <div className="padding">
            <div className="project-header">
                <div className="project-header-text">
                <h1>{this.props.title}</h1>
                <h4>{this.props.tagline}</h4>
                {this.props.link != null &&
                    <a target="_blank"
                    rel="noopener noreferrer" href={this.props.url}>{this.props.link}</a>}
                </div>

                <div className='project-description'>
                    <div>
                        <h6>ROLE</h6>
                        <p>{this.props.role}</p>
                    </div>
                    {this.props.team != null && <div>
                        <h6>TEAM</h6>
                        <p>{this.props.team}</p>
                    </div>}
                    <div>
                        <h6>TIMELINE</h6>
                        <p>{this.props.timeline}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Header;

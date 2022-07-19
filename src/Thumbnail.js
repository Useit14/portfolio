import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = { image: this.props.image };
    }

    handleMouseEnter = () => {
        this.setState({ image: this.props.image2});
    }

    handleMouseOut = () => {
        this.setState({ image: this.props.image});
    }

    render() {
        if (this.props.size === 'large') {
        return (
            <Link to={this.props.link}>
            <div className={"thumbnail " + this.props.size}>
                <div
                onMouseEnter={this.handleMouseEnter}
                onMouseOut={this.handleMouseOut}
                className="project-image">
                    <img src={this.state.image} alt="project thumbnail"/>
                </div>

                <div className="thumbnail-title">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.description}
                    {this.props.icon !== "" ? <img id="icon" alt="" src={this.props.icon}/> : null}
                    </p>
                </div>
          </div>
          </Link>
        );
        }

        else if (this.props.size === 'small') {
            return (
                <div className={"thumbnail " + this.props.size}>
                <a target="_blank" rel="noopener noreferrer"
                href={this.props.link}>
                    <div
                    className="project-image">
                        <img src={this.state.image} alt="project thumbnail"/>
                    </div>

                    <div className="thumbnail-title">
                        <h5>{this.props.title}
                        {this.props.icon !== "" ? <img id="icon" alt="" src={this.props.icon}/> : null}
                        </h5>
                    </div>
                     </a>
              </div>
            );
        }
    }

}

export default Thumbnail;

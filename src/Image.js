import React, { Component } from 'react';
import './App.css';

class Image extends Component {
    render() {
        if (this.props.type === 'single') {
        return (
            <div className={this.props.padding + ' iterations'}
            style={{ backgroundColor: this.props.color || '#f6f6f6'}}>
            <div>
                {this.props.title && <h4>{this.props.title}</h4>}
                <div className='image-component'
                style={{maxWidth: this.props.width}}>
                <img src={this.props.src} alt={this.props.alt}/>
                <p className="caption">{this.props.caption}</p>
            </div>
            </div>
            </div>
        );
    };

    if (this.props.type === 'double') {
        return (
            <div className={this.props.padding + ' double container'}>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className={'mockup-container ' + this.props.imageType}>
                        <img className={this.props.mockup} src={this.props.src} alt={this.props.alt}/>
                        </div>
                    </div>

                    <div className='col-md-3 mockup-description'>
                        <h2>{this.props.title}</h2><br/>
                        <p>{this.props.children}</p>
                    </div>
                </div>
            </div>
        );
    };

    if (this.props.type === 'iterations') {
        return (
        <div className={this.props.padding + ' iterations'}
        style={{ backgroundColor: this.props.color || '#f5f5f5'}}>
        <div>
        <h4>{this.props.title}</h4>
            <img src={this.props.src} alt={this.props.alt}/>
            <p className="caption">{this.props.caption}</p>
        </div>
        </div>
        );
    };
}
}

export default Image;

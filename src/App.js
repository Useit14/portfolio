import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Emoji from 'react-emoji-render';
import './App.css';
//Pages
import Projects from './Projects.js';
import About from './About.js';
import Critterpedia from './Critterpedia.js';
import Bluenotes from './Bluenotes.js';
import Formally from './Formally.js';
import RaiseSocial from './RaiseSocial.js';
import Adora from './Adora.js';
//Components
import visualize from './Images/visualize-actualize.png';
import ScrollToTop from './ScrollToTop.js';

class App extends Component {
    render() {
        return (
        <div>
        <BrowserRouter>
        <ScrollToTop/>
          <Switch>
                <Route exact path="/" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/critterpedia" component={Critterpedia} />
                <Route path="/bluenotes" component={Bluenotes} />
                <Route path="/formally" component={Formally} />
                <Route path="/raisesocial" component={RaiseSocial} />
                <Route path="/adora" component={Adora} />
            </Switch>
        </BrowserRouter>

              <div className="footer">

              <div className="emoji">
                  <Emoji text="💭"/>
              </div>

              <div className="intro-icon">
                  <div className="img-div">
                      <img src={visualize} alt="visualize and actualize"/>
                  </div>
              </div>

              <div className="credit">
                  <div className="footer-links">
              <a target="_blank"
              rel="noopener noreferrer" href="https://github.com/christinexlin">GitHub</a>
              <a target="_blank"
              rel="noopener noreferrer" href="https://www.linkedin.com/in/christine-lin-01/">LinkedIn</a>
              <a target="_blank"
              rel="noopener noreferrer" href="https://twitter.com/christinexlin">Twitter</a>
              </div>
              <p>Made with <Emoji text="🖤"/>by Christine Lin</p>
              </div>
              </div>
          </div>
        );
    }
}

export default App;

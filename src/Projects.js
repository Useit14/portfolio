import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import p5 from 'p5';
import { AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn.js';

import formally from './Formally/formally-thumbnail.png';
import formally2 from './Formally/formally-thumbnail-2.png';
import raisesocial from './RaiseSocial/landing.png';
import raisesocial2 from './RaiseSocial/landing2.png';
import profile from './profile.png'
import adora from './adora.png'
import arrow from './arrow.svg'
import sign from './Experiments/sign.gif'
import slow from './Experiments/slowpulsesunday.gif'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.headerTag = React.createRef();
        this.thumbnail = React.createRef();
    }

    sketch = (s) => {
        let NUMSINES = 3;
        let sines = new Array(NUMSINES); // an array to hold all the current angles
        let rad; // an initial radius value for the central sine
        let fund = 0.005; // the speed of the central sine
        let ratio = 1.2; // multiplier for speed is each additional sine

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
        rad = s.height / 5;
        for (let i = 0; i<sines.length; i++) {
            sines[i] = s.PI; // start facing NORTH
        }
    }

      s.draw = () => {
        s.clear();
        s.resizeCanvas(s.windowWidth, s.windowHeight*0.9);
        s.background(23, 23, 23);
        s.stroke(250, 250, 250);
        s.noFill();

        s.push(); // start a transformation matrix
        s.translate(s.width / 2, (s.height / 2) - 55); // move to middle of screen

        for (let i = 0; i < sines.length; i++) {
            let radius = rad / (i + 1); // radius for circle itself
            s.rotate(sines[i]); // rotate circle
            s.ellipse(0, 0, radius * 1.8, radius * 1.8); // if we're simulating, draw the sine
            s.square(10, 10, radius, radius, 100, 100, 5);
            s.push(); // go up one level
            s.translate(0, radius); // move to sine edge
            s.triangle(30, 75, 58, 20, 86, 75);
            s.pop(); // go down one level
            s.translate(0, radius); // move into position for next sine
            sines[i] = (sines[i] + (fund + (fund * i * ratio))) % s.TWO_PI; // update angle based on fundamental
        }
        s.pop(); // pop down final transformation
      }
    }

    componentDidMount() {
        if (!isMobile) {
            this.myP5 = new p5(this.sketch, this.myRef.current);
        }
    }

  render() {
      const transition = {
          delay: 0.5,
          duration: 0.7,
          ease: [0.47,0,0.75,0.72],
      }
      const textTransition1 = {
          delay: 1.5,
          duration: 0.9,
          ease: [0.46,0.03,0.52,0.96],
      }
      const textTransition2 = {
          delay: 2.5,
          duration: 0.9,
          ease: [0.46,0.03,0.52,0.96],
      }
      const pageVariant = {
          initial: {
              opacity: 0,
          },
          animate: {
              opacity: 1,
          },
          exit: {
              opacity: 0,
          },
          startText: {
              opacity: 0,
              y: 60,
          },
          animateText: {
              opacity: 1,
              y: 0,
          }
      };

      return (
          <AnimatePresence exitBeforeEnter>
          <motion.div variants={pageVariant} initial='initial' animate='animate'
          exit='exit' transition={transition}>

          {isMobile ? null : <div className="p5" ref={this.myRef}> </div>}

          <div className="landing center">
          <div>
            <div className="landing-1 center">
                    <motion.div
                    variants={pageVariant} initial='startText' animate='animateText'>
                    <div>
                    <img src={profile} alt="profile" className="profile"/>
                    <p>Christine Lin</p>
                    </div>
                    </motion.div>
            </div>

            <div className="landing-text">
            <p>Hello! I'm a UX designer and senior at Brown University studying Computer Science.
            I'm interested in HCI, augmented reality, and using tech for social good.
            As a designer and engineer, I'm inspired by playful and delightful user experiences.
            </p>
            <br/>
            <p>I'm currently on leave, designing the virtual campus tour experience @
            <a href="https://www.adoraexperiences.com/index.html" target="_blank"
            rel="noopener noreferrer"> Adora Experiences</a>.
            View my resume <a target="_blank" rel="noopener noreferrer"
            href="https://read.cv/christinelin">
            here</a>.</p>
            </div>

            </div>
            </div>

            <div className="section projects">
            <div className="centered">

            <div className="projects-thumbnails">
            <br/>
            <h4>Projects</h4>
            <Thumbnail
                link="/adora"
                image={adora}
                image2={adora}
                title="Adora"
                category={['CASE STUDY', 'PRODUCT DESIGN']}
                size="large"
                description="Redefining the college visit during COVID-19"
            />

            <FadeIn>

            <Thumbnail
                link="/formally"
                image={formally}
                image2={formally2}
                title="Formally"
                category={['PRODUCT DESIGN']}
                size="large"
                description="Simplifying the U.S. asylum application process"
            />
            </FadeIn>

            <FadeIn>
            <Thumbnail
                link="/raisesocial"
                image={raisesocial2}
                image2={raisesocial}
                title="Raise Social"
                category={['PRODUCT DESIGN']}
                size="large"
                description="Fundraising through mentorship"
            />
            </FadeIn>
            </div>

            <div className="projects-thumbnails">
            <div className="hline"></div>

            <FadeIn>
            <h4>Experiments</h4>
            <br/>
            <p>When I'm not designing, I enjoy experimenting with new ideas and making things with code.
            I've worked on projects with Arduino, 3D printing, and front-end development.</p>
            <br/>
            </FadeIn>

            <FadeIn>
            <div className="row experiments-row">
            <div className="col-sm-6">
            <Thumbnail
                link="https://medium.com/@chin_hsuen_lin/sign-of-change-5bc2b3de45a7"
                image={sign}
                title="Sign of Change"
                category={['PRODUCT DESIGN']}
                size="small"
                description=""
                icon={arrow}
            />
            </div>

            <div className="col-sm-6">
            <Thumbnail
                link="https://slowpulsesunday.com/"
                image={slow}
                title="Slow Pulse Sunday"
                category={['PRODUCT DESIGN']}
                size="small"
                description=""
                icon={arrow}
            />
            </div>

            </div>
            </FadeIn>
            </div>

            </div>
            </div>

    </motion.div>
    </AnimatePresence>

);

  }
}

export default Projects;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import DisplayText from './DisplayText.js';
import Header from './Header.js';
import Image from './Image.js';
import landing from './RaiseSocial/landing.png';
import profile from './RaiseSocial/profilepage.png';
import interactionpage from './RaiseSocial/interactionpage.png';
import tweet from './RaiseSocial/tweet.png';
import profilemockup from './RaiseSocial/profilepagemockup.png';
import lowfidelity from './RaiseSocial/iterationsnew.png';
import booking from './RaiseSocial/booking.png';
import modal from './RaiseSocial/modalnew.png';

//user research images
import participants from './RaiseSocial/Participants.png';
import theme1 from './RaiseSocial/Theme1.png';
import insights from './RaiseSocial/Insights.png';
import question from './RaiseSocial/ResearchQuestions.png';

function RaiseSocial(props) {
  return (
          <div className="project-page">
              <div className="navigation white links">
                <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
              </div>

              <Header
              image={landing}
              title='Raise Social'
              tagline='Fundraising through mentorship'
              url=''
              role='Product Designer'
              team="Cara Vo (PM), Eashan Mathur (Engineer), Mia O'Brien (Engineer), Dennis Bae (Engineer), Sai Harika (Engineer), Joshua Kaplan (Engineer)"
              timeline='July-Sept 2020'
              />

              <DisplayText color='white' height=''
              heading="">
              <h2>Raise.social is a fundraising platform where you can offer mentorship services
              (e.g. resume reviews, coffee chats) in return for donations to a charity.
              </h2><br/>
              </DisplayText>

              <Text heading='Project Overview'>
              <h5>As the lead designer on this project, I conducted user research,
              created wireframes, iterated on my designs and created a high-fidelity,
              interactive mockup. I worked with a product
              manager and 5 engineers to develop the MVP.</h5><br/>
              </Text>

              <div className='video'>

              <iframe title='Raise Social demo' width="100%" height="500" src="https://www.youtube.com/embed/hWSHdJRA8Xg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              </div>

              <Text background='dark' color='#1E1E1E' height='tall'
              heading='Understanding the problem'>
              <h5>Every day, we see our friends advocate for social movements on social media.
              We also see mentors offering resume and portfolio reviews in exchange for non-profit donations.
              </h5>

              <div className='screenshot'>
                <img src={tweet} alt='tweet'/>
              </div>

              <h5>Our goal was to encourage impact-driven interaction and make it easy for
              young professionals to fundraise for causes they care about.</h5>
              </Text>
{/*
              <Text color='white' height='tall'
              heading='Talking to users'>
              <h5>We talked to college students and new graduates (25+ survey responses, 5 interviews)
              about their experiences with donating. Most people donated infrequently, typically
              once a month or a few times a year. Almost everyone expressed
              a desire to donate more consistently.</h5><br/>

              <h6>WHY DON'T PEOPLE DONATE AS OFTEN AS THEY WOULD LIKE?</h6>
              <ul>
                <li>Aren't financially able to give money regularly</li>
                <li>Feel like their donation is too small to make an impact</li>
                <li>Don’t know how the organization will use the donation</li>
              </ul>

              <h5 className='quote'>“A lot of volunteer opportunities I would have pursued would have been in person.
              I’m also waiting to reach more financial stability in order to donate more regularly to multiple causes.”</h5>
              </Text>*/}

              <Image type='single' color='#EFEFEF' width='1000px'
              padding='top'
              src={question} alt="user personas"/>

              <Image type='single' color='#EFEFEF' width='1000px' padding='none'
              src={participants} alt="user personas"/>

              <Image type='single' color='#EFEFEF' width='1000px' padding='none'
              src={theme1} alt="user personas"/>



              <Image type='single' color='#EFEFEF' width='1000px' padding='none'
              src={insights} alt="user personas"/>

              <Image type='single' color='#EFEFEF' padding='none' width='1200px'
              src={lowfidelity} alt="low-fidelity wireframes"/>

              <Image type='single' color='#EFEFEF' padding='bottom'
              src={modal} alt="final iteration" />

              <Image type='iterations' color='white'
              title='Final design' padding='top'
              src={profilemockup} alt="final iteration">
              </Image>

              <Image type='double' src={profile} padding='top' mockup='simple-mockup'
              title='View a fundraiser profile'>
              <p>Primary User Tasks</p>
              <ul>
                <li>View fundraiser's bio</li>
                <li>View interactions offered</li>
              </ul>
              <p>Secondary User Tasks</p>
              <ul>
              <li>Find out more information about the cause</li>
              <li>Share fundraiser profile</li>
              </ul>
              </Image>

              <Image type='double' src={interactionpage} mockup='simple-mockup'
              title='View an interaction'>
              <p>Primary User Tasks</p>
              <ul>
                <li>Book an interaction</li>
                <li>View interaction details</li>
              </ul>
              </Image>

              <Image type='double' src={booking} padding='bottom' mockup='simple-mockup'
              title='Book an interaction'>
              <p>Clicking on book leads to a Calendly pop-up that allows the
              user to schedule the interaction.</p><br/>
              <p>We chose to use
              Calendly here as it makes booking fast and easy.</p>
              </Image>

              <div className="project-page-text">
              <a className='prototype-link' target='_blank' rel='noopener noreferrer'
              href='https://www.figma.com/proto/Mf69tvtjDrHdt7qa0d0FiL/raise.social?node-id=421%3A2263&viewport=44%2C112%2C0.4913131296634674&scaling=scale-down-width'>
              VIEW FIGMA PROTOTYPE</a>
              <br/><br/><br/>
              </div>
        </div>
  );
}

export default RaiseSocial;

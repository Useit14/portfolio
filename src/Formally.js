import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import Header from './Header.js';
import landing from './Formally/resource-tiled.png';
import resource from './Formally/resource-full.png';
import iterations from './Formally/iterations.png';
import faq from './Formally/faq-recording.gif';

function Formally(props) {
  return (
          <div className="project-page">
              <div className="navigation black links">
                <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
              </div>

              <Header
              image={landing}
              title='UX Design Internship at Formally'
              tagline='Simplifying the asylum application process'
              link='VIEW SITE'
              url='https://formally.us/resources'
              role='UX Designer and front-end developer'
              team='Briana Das, Lauren McMillen'
              timeline='4 weeks'
              />

              <div className="mockup-container">
              <div className="scroll-explainer">
              <h6>SCROLL HERE</h6><span class="material-icons-outlined" id="scroll">unfold_more</span>
              </div>
                  <div className="mockup">
                      <div className="scrollable">
                          <img src={resource} alt="resource page screenshot"/>
                      </div>
                  </div>
              <p className="caption">Resource Page</p>
              </div>

              <Text color='white' height='tall'
              heading="About Formally">
              <p>Formally is an early-stage startup that breaks bureaucratic barriers for asylum seekers.
              We are building an intuitive form-filler for immigration papers and creating a simple solution for attorneys to manage immigration applications.
              </p>
              </Text>

              <Text background='dark' color='#1E1E1E' height='tall'
              heading='Defining the problem'>
              <h6>THE PROBLEM</h6>
              <h4>How might we create a resource page that simplifies
              the complex asylum application process?</h4><br/><br/>

              <h6>THE SOLUTION</h6>
              <h4>A public resource page that is easily navigable by
              asylum seekers in any stage of the application process.</h4><br/><br/>

              <h6>WHY ARE WE BUILDING A RESOURCE PAGE?</h6>
              <p>Based on feedback from attorneys that use Formally, one of the
              company's goals was to create a central resource that made the asylum application process
              easy to understand for applicants. Attorneys would be able to save time by directing
              applicants to this page to find answers to frequently asked questions.</p>
              </Text>

              <Text color='white' heading='Understanding the needs of asylum applicants'>
              <h6>WHAT ARE THE NEEDS AND PAIN POINTS OF ASYLUM APPLICANTS?</h6>
              <ul>
                  <li>Many asylum seekers have limited English language proficiency and are
                  unfamiliar with asylum policies in the United States</li>
                  <li>Existing sites and resources are
                  hard to navigate and filled with legal jargon</li>
                  <li>Applying for asylum can be an overwhelming, difficult, and scary process</li>
              </ul><br/>

              <h6>WHO WILL BE USING THE PAGE AND WHEN?</h6>
              <ol>
              <li>Potential asylum seekers who have no idea what asylum is</li>
              <li>Current asylum applicants who are currently applying and need answers to specific questions</li>
              <li>Current asylum applicants who have finished applying and want access to
              either more information while waiting for their application to be processed</li>
              </ol>
              </Text>

              <Text background='dark' color='#1E1E1E' height='tall'
              heading='Translating asylum applicant needs into design decisions'>
              <h6>Applicants often don't speak English as their native language and are unfamiliar with the process -></h6>
              <h4>Use clear, easy to understand language and convey information through commonly asked questions</h4><br/><br/>

              <h6>Existing sites are hard to navigate due to the overwhelming amount of information -></h6>
              <h4>Present content in small, easily digestable sections and highlight important information</h4><br/><br/>

              <h6>Applying for asylum can be an overwhelming, difficult, and scary process -></h6>
              <h4>Design a page that is visually calming and welcoming</h4>
              </Text>

              <div className="iterations">
              <div>
              <img src={iterations} alt="flowchart"/>
              <p className="caption">Flowchart option (left) vs. Ordered list option (right)</p>
              </div>
              </div>

              <Text color='white' heading='Deciding between design iterations'>
              <p>I came up with 2 versions of the main resource page: one that presented the 5 steps of the
              asylum process in a flowchart and one that presented the steps in an ordered list.</p>
              <br/>
              <p>Although the ordered list was more compact and presented the steps in a straightforward
              way, we went with the flowchart design because it was more visually engaging.</p>
              </Text>

              <div className="mockup-container">
              <img className="mockup" src={faq} alt="faq page screenshot"/>
              <p className="caption">Asylum Eligibility sub-page</p>
              </div>

              <Text color='white' heading='Making content easily digestable'>
              <p>For the 5 sub-pages corresponding to each step of the process, I displayed information
              in a collapsible accordion. This allowed applicants to scan the questions and only
              relevant reveal content when needed. This also ensured content was presented in small, easily digestable sections.</p>
              </Text>

              <Text color='white' heading='Reflection'>
              <p>Through my UX design internship at Formally, I learned about designing for the unique needs and experiences
              of asylum seekers. I gained experience working at an early-stage startup and utilizing my skills in both
              UX design and front-end web development.</p><br/><p> Working in the social impact and technology space was extremely meaningful to me
              as I was able to use my skills to support Formally's mission of breaking bureaucratic barriers and making our world more accessible.</p>
              </Text>
              </div>
  );
}

export default Formally;

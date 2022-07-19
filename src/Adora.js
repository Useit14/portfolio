import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from './Text.js';
import Header from './Header.js';
import Image from './Image.js';
import landing from './adora.png';
import schoolprofile from './Adora/schoolprofile.png';
import solution1 from './Adora/solution-1.png';
import solution2 from './Adora/solution-2.png';
import solution3 from './Adora/solution-3.png';
import process from './Adora/design.png';
import quotes from './Adora/quotes.png';

import challenge1 from './Adora/challenge1-1.png';
import challenge1_2 from './Adora/challenge1-2.png';

import challenge2 from './Adora/challenge2.png';
import challenge3 from './Adora/challenge3.png';

import tour from './Adora/tour.png';
import map from './Adora/map.gif';

function Adora(props) {
  return (
          <div className="project-page">
              <div className="navigation black links">
                <NavLink exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
              </div>

              <Header
              image={landing}
              title='Adora Experiences'
              tagline='Redefining the college visit for high school students during COVID-19'
              link='View Project'
              url='https://app.adoraexperiences.com/'
              role='Lead Designer'
              timeline='Sept 2020-Jan 2021'
              team="Raya Ward (Co-Founder and CPO), Cyrus Cowley (Engineer)"
              />

              <Text heading="Project Overview">
              <h6>ABOUT ADORA</h6>
              <p><a href="https://www.adoraexperiences.com/index.html" target="_blank"
              rel="noopener noreferrer"> Adora Experiences</a> is an early-stage startup redefining the college visit.
              We help universities engage prospective visitors through personalized,
              self-guided campus tours available on iOS, Android, and web.</p><br/>

              <h6>MY ROLE</h6>
              <p>I led the end-to-end design of Adora's campus
              tour web app, dealing with the full life-cycle of the app from idea to production.
              I conducted user + market research and worked on a cross-functional team,
              leading strategy discussions with input from multiple stakeholders.<br/><br/>

              Over the course of 3 months, I iterated on designs, conducted usability testing on a high-fidelity,
              interactive prototype, and worked closely with engineers during implementation.
              My final deliverable expanded Adora's product offerings, making the platform
              more accessible to students globally and making Adora more competitive in the
              virtual campus tour market.
              </p>
              </Text>

              <Text heading="How can we create a campus visit for the web?">
              <p>As a result of COVID-19, high school students are no longer able to go on
              in-person campus tours. The pandemic has halted campus visit programs globally,
              posing a challenge for prospective students who depend on tours to make more informed
              college decisions. We want to solve this problem at Adora through a web app
              for high school students to take virtual campus tours. We decided to build a web app
              because Adora already has an existing mobile app, but both universities and students
              have requested a web version due to ease of access.
              </p>
              </Text>

              <Text heading="The solution">
              </Text>

              <Image type='single' color='#F0F2FD' width='1100px'
              padding='top' src={schoolprofile} alt="user personas"/>

              <Image type='single' color='#ffffff' width='900px'
              padding='top' src={solution1} alt="user personas"/>

              <Text heading="Design Process">
              </Text>

              <Image type='single' color='#f9f9f9' width='600px'
              padding='top' src={process} alt="design process"/>

              <Text heading="How did we define succcess?">
              <ul>
                <li>Number of users who start a tour</li>
                <li>Number of users who finish a tour</li>
                <li>Number of users who complete our contact info form</li>
              </ul>
              </Text>

              <Text heading="What are the needs and pain points of our users?">
              I led a user research study where we interviewed 4 high school students,
              2 parents, and 3 university customers. From affinity mapping, I narrowed
              down my design focus to 3 major themes: campus vibe, authenticity, and
              human connection.
              </Text>

              <Image type='single' color='#f9f9f9' width='1100px'
              padding='none' src={quotes} alt="design process"/>

              <Text heading="Challenges">
              </Text>

              <Image type='single' color='#f9f9f9' width='1000px'
              padding='top' src={challenge1} alt="design process"/>

              <Text heading="Collecting student information">
              <p>When taking a campus tour or participating in a campus visit program,
              historically universities have collected a visitor's basic information such as
              their name, whether they are a student or a parent, and their email address.
              I weighed the pros and cons of 3 different user flows: showing the data collection screen
              upon landing on Adora's web app, before the start of
              a tour, and after completing a tour. I decided to show the data collection form right
              before starting a tour because this was when user data would be most relevant to a school
              and it was less obtrusive, allowing users to explore our site and view our content before
              asking for their information. This also ensured the form would be seen by all students
              taking a tour, as there is potential dropoff during a tour.
              </p></Text>

              <Image type='single' color='#ffffff' width='900px'
              padding='none' src={challenge1_2} alt="design process"/>

              <Text>
              <p>I iterated on multiple ways of collecting student information
              before a tour, ranging
              from most obtrusive (full page) to least obtrusive (modal). Although
              the full page was the most obtrusive, this was a tradeoff I decided to make
              because collecting this information is key for schools and small modals or popups
              are often skipped. Displaying the form side-by-side with other information such as
              the tour overview was also too distracting and competed for the user's attention.
              To alleviate the interruption of the user experience of
              taking a tour, I modified the copy of the form to be more friendly. To ensure
              this screen was not unexpected, I also changed previous screens to say "Take a tour"
              instead of "Start Tour".
              </p>
              </Text>

              <Image type='single' color='#f9f9f9' width='1000px'
              padding='top' src={challenge2} alt="design process"/>

              <Text heading="Designing the tour experience">
              <p>Since Adora's platform contains multiple universities, it was important
              to design a scalable system that would work for all schools. The content
              associated with stops can vary widely, from only a single image to many images,
              student testimonials, or videos. The text content associated with a stop
              can also vary greatly in length. To solve this problem, I designed the stop
              page to include separate content sections for a media gallery, student testimonials,
              and text content. These sections allowed a stop page to adapt to various types of content
              while still displaying the most important content and keeping the page easy to navigate.
              </p>
              </Text>

              <Image type='single' color='#ffffff' width='1000px'
              padding='none' src={challenge3} alt="design process"/>


              <Image type='double' color='#ffffff' width='800px'
              padding='none' src={solution2} alt="user personas">
              <h5>Imagine yourself on campus</h5><br/>
              <p>The stop page includes curated information about a universities' campus,
              history, traditions, and student life.
              The multimedia gallery and student testimonials help prospective students
              envision themselves living and studying on campus.
              </p>
              </Image>

              <Image type='double' color='#ffffff' width='300px'
              padding='none' src={tour} alt="user personas">
              <h5>Take a personalized or pre-made tour</h5><br/>
              <p>After taking a personalized tour questionnaire,
              Adora will generate a unique tour tailored to you and your interests.
              We also have official pre-made tours curated by the university's Admission office.
              </p>
              </Image>

              <Image type='double' color='#ffffff' width='300px'
              padding='none' src={map} alt="user personas" imageType='gif'>
              <h5>Explore stops on campus</h5><br/>
              <p>If you don't want to take a tour, you can freely explore all
              existing stops on the interactive campus map.
              </p>
              </Image>

              <Image type='double' color='#ffffff' width='800px'
              padding='none' src={solution3} alt="user personas">
              <h5>Browse multiple schools</h5><br/>
              <p>Prospective students can browse tours from 7 different
              universities in one convenient location.
              </p>
              </Image>

              <Text heading="Reflection">
              <p>Working as a designer an early-stage startup, I learned how to balance the needs of multiple
              stakeholders with user needs, lead conversations around business strategy, and design scalable
              solutions that covered multiple edge cases and would work with a variety of schools.
              As the designer for Adora's first web
              application, I also learned how to refine and expand an existing design system, explain
              my design decisions during regular critiques, and work with engineers during implementation.
              <br/><br/>
              </p>
              </Text>
              </div>
  );
}

export default Adora;

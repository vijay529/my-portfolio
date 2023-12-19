import React from 'react';
import p1img from '../assets/portfolio.png';
import booking from '../assets/bookingapp.png';
import linkedin from '../assets/linkedin.png';
import movie from '../assets/movie.png'
import Reveal from './Reveal';


const Work = () => {

  return (
    <>
    <div id="work"></div>
    <div className='work'>
      <div className="projects">
        <div className="w_head" >
          <h2>Projects.</h2>
          <div className="line"></div>
        </div>
        <div className="w_section">
          <Reveal>
          <div className="w_proj">
            <div className="w_pLeft">
              <div className="w_pImg">
                <img src={linkedin} alt="img" />
              </div>
            </div>
            <div className="w_pRight">
              <div className="w_pHead">
                <h2>LinkedIn clone</h2>
              </div>
              <div className="w_pDiscription">
                <p>
                  Personal LinkedIn clone project made with React and Firebase. You can log in using your Google account, share insightful posts with videos, photos, or YouTube links, and engage with a growing community through comments.
                </p>
                <p>
                  It is a responsive website coded with react styled components. Posted data load in realtime.
                </p>
                <p>React - firebase</p>
              </div>
              <div className="w_pLink">
                <div className="button">
                  <a href="https://github.com/vijay529/linkedin_clone.git" target={'_blank'}>git</a>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal>
          <div className="w_proj">
            <div className="w_pLeft">
              <div className="w_pImg">
                <img src={booking} alt="img" />
              </div>
            </div>
            <div className="w_pRight">
              <div className="w_pHead">
                <h2>Booking Website</h2>
              </div>
              <div className="w_pDiscription">
                <p>
                  It is a full stack room booking website, here you can find available hotel rooms in particular cities. I used a frontend web template and did the backend part.
                </p>
                <p>
                  You can Login and Singup, also there is featured section which will showcase featured hotels. In a hotel you can decide number of rooms and number of nights you stay.
                </p>
                <p>
                  It has admin dashboard also.
                </p>
                <p>MongoDB - Express - React - Node </p>
              </div>
              <div className="w_pLink">
                <div className="button">
                  <a href="https://github.com/vijay529/booking_app" target={'_blank'}>git</a>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal>
          <div className="w_proj">
            <div className="w_pLeft">
              <div className="w_pImg">
                <img src={p1img} alt="img" />
              </div>
            </div>
            <div className="w_pRight">
              <div className="w_pHead">
                <h2>Protfolio Website</h2>
              </div>
              <div className="w_pDiscription">
                <p>
                  This is my portfolio website based on React. It is a single page website which showcase about me, my main skill set and my projects.
                </p>
                <p>
                  It is a responsive website with various cool animations.
                </p>
                <p>HTML - CSS - JavaScript - React </p>
              </div>
              <div className="w_pLink">
                <div className="button">
                  <a href="https://vijay529.github.io/my-portfolio/" target={'_blank'}>preview</a>
                </div>
                <div className="button">
                  <a href="https://github.com/vijay529/my-portfolio.git" target={'_blank'}>git</a>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal>
          <div className="w_proj">
            <div className="w_pLeft">
              <div className="w_pImg">
                <img src={movie} alt="img" />
              </div>
            </div>
            <div className="w_pRight">
              <div className="w_pHead">
                <h2>Movie App</h2>
              </div>
              <div className="w_pDiscription">
                <p>
                  It is a simple responsive react based movie searching website. It has simple and beautiful UI design where you can search your favourite movie's information.
                </p>
                <p>
                  It uses omdb api, it has loading functionality and error handling page.
                </p>
                <p>HTML - CSS - Rest API - React </p>
              </div>
              <div className="w_pLink">
                <div className="button">
                  <a href="https://vijay529.github.io/movie-app/" target={'_blank'}>preview</a>
                </div>
                <div className="button">
                  <a href="https://github.com/vijay529/movie-app" target={'_blank'}>git</a>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
    </>
  )
}

export default Work
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Reveal from './components/Reveal';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 5000)
  // },[])
  return (
    <>
    {loading?<Loader />:
      <div className="main_container">
          <Navbar />
          <div className="container">

            <Header />
            <div id="spacing"></div>
            <About />
            <Reveal>
            <Skill />
            </Reveal>

            <hr />
            <Reveal>
            <Work />
            </Reveal>
          </div>
          <hr />
          <Reveal>
          <Contact />
          </Reveal>
      </div>
    }
    </>

  )
}

export default App
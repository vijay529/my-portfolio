import React from 'react'
import Reveal from './Reveal'

const Skill = () => {
  return (
    <div className='skill' id='skill'>
      <div className="s_wrap">
        <div className="s_head">
          <div className="line"></div>
          <h2>Skills.</h2>
        </div>
        <div style={{"display":"flex", justifyContent:'center', color:"var(--beige)"}}>
          <Reveal>
          <h3 style={{textAlign:'center'}}>Main skills</h3>
          </Reveal>
        </div>
        <hr />
        <div className="s_section">
          <div className="s_item">
            <Reveal>
            <div className="s_info">
              <p>HTML</p>
              <p>85%</p>
            </div>
            </Reveal>
            <Reveal>
            <div className="s_bar">
              <div className="s_html" style={{width:`85%`}}></div>
            </div>
            </Reveal>
          </div>
          <div className="s_item">
            <Reveal>
            <div className="s_info">
              <p>CSS</p>
              <p>80%</p>
            </div>
            </Reveal>
            <Reveal>
            <div className="s_bar">
              <div className="s_html" style={{width:`80%`}}></div>
            </div>
            </Reveal>
          </div>
          <div className="s_item">
            <Reveal>
            <div className="s_info">
              <p>JavaScript</p>
              <p>70%</p>
            </div>
            </Reveal>
            <Reveal>
            <div className="s_bar">
              <div className="s_html" style={{width:`70%`}}></div>
            </div>
            </Reveal>
          </div>
          <div className="s_item">
            <Reveal>
            <div className="s_info">
              <p>React</p>
              <p>70%</p>
            </div>
            </Reveal>
            <Reveal>
            <div className="s_bar">
              <div className="s_html" style={{width:`70%`}}></div>
            </div>
            </Reveal>
          </div>
          <div className="s_item">
            <Reveal>
            <div className="s_info">
              <p>Node js</p>
              <p>65%</p>
            </div>
            </Reveal>
            <Reveal>
            <div className="s_bar">
              <div className="s_html" style={{width:`65%`}}></div>
            </div>
            </Reveal>
          </div>
          <div className="s_item">
            <Reveal>
            <div className="s_info">
              <p>MongoDB</p>
              <p>60%</p>
            </div>
            </Reveal>
            <Reveal>
            <div className="s_bar">
              <div className="s_html" style={{width:`60%`}} ></div>
            </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
import React, { useState } from 'react'
import emailico from '../assets/envelope.svg';
import linkedico from '../assets/linkedico.svg';
import gitico from '../assets/gitico.svg';
import Reveal from './Reveal';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import loader from '../assets/Spinner-1s-200px.svg'

const Contact = () => {
  const form = useRef();
  const [loading, setloading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true)
    emailjs.sendForm('service_iby358a', 'template_mjzfosn', form.current, 'EpWQ1lGGXxO4pSPHj')
      .then((result) => {
          alert('message sent successfully')
          setloading(false)
      }, (error) => {
          alert('failed to send message error:', error)
          setloading(false)

      });
    }
  return (
    <>
      <div className="contact" id='contact'>
        <Reveal>
        <div className="c_head">
          <div className="line"></div>
          <h1>Contact.</h1>
          <div className="line"></div>
        </div>
        </Reveal>
        <div className="c_section">
          <div className="c_text">
            <Reveal>
            <p>Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your endeavors.</p>
            </Reveal>
          </div>
          <Reveal>
          <div className="c_connect">
            <div className="button">
            <a href="mailto:vijaychoudhary6017@gmail.com" target={'_blank'}><img src={emailico} alt="" /></a>
            </div>
            <div className="button">
            <a href="https://www.linkedin.com/in/vijay-choudhary-3a24a5221" target={'_blank'}><img src={linkedico} alt="" /></a>
            </div>
            <div className="button">
            <a href="https://github.com/vijay529" target={'_blank'}><img src={gitico} alt="" /></a>
            </div>
          </div>
          </Reveal>
          <div className="c_text">
            <Reveal>
            <p>If you prefer a more direct approach, you can use the contact form below to send me message.</p>
            </Reveal>
          </div>
          <div className="c_form">  
            <form autoComplete='off' ref={form} onSubmit={sendEmail}>
              <Reveal>
              <input type="text" name="from_name" id="name" placeholder='name' required='true'/>
              </Reveal>
              <Reveal>
              <input type="email" name="from_email" id="email" placeholder='email' required='true'/>
              </Reveal>
              <Reveal>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required='true'></textarea>
              </Reveal>
              <Reveal>
              {(loading)?(<div style={{display:"flex", justifyContent:"center", width:'100%', height:'60px'}}>
                <img src={loader} />
            </div>):
              (<div className="button" style={{width:"25%", margin:"0 auto"}}>
              <input type="submit" value={"Send"} placeholder='send'/>
            </div>)}

              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
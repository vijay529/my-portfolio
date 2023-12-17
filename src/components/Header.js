import React from 'react';
import anim from '../assets/Animation.json';
import Lottie from 'lottie-react';
import Reveal from './Reveal';


const Header = () => {
    const pdfDownload = ()=>{
        const url = 'vijay_resume_mern.pdf';
        const link = document.getElementById('pdfDown')
        link.download = "vijay_resume.pdf"
    }
  return (
    <>
        <div className="flex_center" id='home'>
            <div className="header">
                <div className="h_left">
                    <div className="h_text">
                        <Reveal>
                        <h1>Hi, my </h1>
                        </Reveal>
                        <Reveal>
                        <h1 >name is <b style={{"color":"var(--coral)"}}>Vijay.</b></h1>
                        </Reveal>
                        <Reveal>
                        <p>I am a passionate Full Stack Web Developer with a flair for creating seamless digital experiences.</p>
                        </Reveal>
                    </div>
                    <div style={{"display":"flex", "marginTop":"3rem", "gap":"2rem"}}>
                        <div>
                        <Reveal>
                        <div className="button" style={{"background":"var(--coral)", "width":"fit-content"}}>
                            <a style={{"color":"var(--blue)","font-size":"16px"}} href="#contact">Get in touch!</a>
                        </div>
                        </Reveal>
                        </div>
                        <div>
                        <Reveal>
                        <div className="button" style={{width:"fit-content"}} onClick={pdfDownload}>
                            <a style={{"font-size":"16px"}} href={"vijay_resume_mern.pdf"} id='pdfDown'>Resume</a>
                        </div>
                        </Reveal>
                        </div>
                    </div>
                </div>
                <div className="h_right">
                <Reveal>
                    <Lottie className='anim_vid' animationData={anim}/>
                </Reveal>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
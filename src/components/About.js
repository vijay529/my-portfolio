import React, { useState } from 'react'
import Reveal from './Reveal'

const About = () => {

  const [currIndex, setCurrIndex] = useState(0)
  const aboutSlides = [
                        {"head":"Background", "content":"I come from a background in Electrical Engineering. While studying electrical, I discovered my passion for coding and this led me to explore the world of web development. So, I decided to pivot into full-stack web development. I embarked on my coding journey through online resources, immersing myself in the world of programming languages and web development frameworks. This self-directed path allowed me to cultivate a deep understanding of the digital realm and develop the skills necessary to craft captivating web experiences."},
                        {"head":"Focus", "content":"I specialize in MERN stack development to prioritize two key aspects: exceptional user experiences (UI/UX) and lightning-fast web services. With MongoDB, Express.js, React, and Node.js, I create faster and visually appealing web applications. My focus is on intuitive design and optimized performance, ensuring users enjoy both a seamless interface and rapid service delivery."},
                        {"head":"Philosophy", "content":"As a web developer, my philosophy is centered on continuous growth and delivering quality work. While my project portfolio is still growing, I prioritize honing my skills and producing top-notch results. I believe in the value of craftsmanship, and every project is an opportunity to excel. I'm dedicated to learning, collaborating, and contributing my best to every endeavor."}                      
                      ]
  const leftSlide = ()=>{
    const isFirst = currIndex===0;
    const newIndex = isFirst?aboutSlides.length-1:currIndex-1;
    setCurrIndex(newIndex);
  }
  const rightSlide = ()=>{
    const isLast = currIndex===aboutSlides.length-1;
    const newIndex = isLast?0:currIndex+1;
    setCurrIndex(newIndex)
  }
  const goToSlide=slideIndex=>{
    setCurrIndex(slideIndex)
  }
  return (
    <>
    <div id="about"></div>
        <div className="flex_center">
            <div className="about" >
                <Reveal>
                <div className="a_text">
                  <div className='a_head'>
                    <h2>About Me.</h2>
                    <div className="line"></div>
                  </div>
                  <div className="a_section">
                    <div className="a_intro">
                      <p><span style={{"color":"var(--coral)"}}>Hello,</span> I'm Vijay Singh Choudhary. I let my work do most of the talking, but here's a glimpse into who I am.</p>
                    </div>
                    <Reveal>
                    <div className="a_info_section">
                      <div className="a_card">
                        <h2>{aboutSlides[currIndex].head}</h2>
                        <p>
                            {aboutSlides[currIndex].content}
                        </p>
                      </div>
                      <div className='a_btns'>
                        <div className="button"onClick={leftSlide}>
                          <div className="a_btn" onClick={leftSlide} style={{fontWeight:"900"}}>&larr;</div> 
                        </div>
                        <div className='a_dots'>
                          {aboutSlides.map((slide, slideIndex)=>{
                            return <div key={slideIndex} onClick={()=>{goToSlide(slideIndex)}}><div className={`${(currIndex===slideIndex)?'active':null}`}>•</div></div>
                          })}
                        </div>
                        <div className="button" onClick={rightSlide}>
                          <div className="a_btn" onClick={rightSlide} style={{fontWeight:"900"}}>&rarr;</div>
                        </div>
                      </div>
                    </div>
                    </Reveal>
                  </div>
                </div>
                </Reveal>
            </div>
        </div>
    </>
  )
}

export default About
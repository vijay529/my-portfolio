import React from 'react';
import { useState } from 'react';

function Navbar() {
  const [lastScroll, setLastScroll] = useState(0)
  const [navbar, setNavbar] = useState(true)
  const [shade, setShade] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  window.addEventListener('scroll', ()=>{
    const currentScroll = window.scrollY;

    if(currentScroll > 0 && lastScroll>currentScroll){
      setShade(true)
    }
    else{
      setShade(false)
    }

    if(((currentScroll>45) && (lastScroll<currentScroll))){
      setNavbar(false)
    }
    else{
      setNavbar(true)
    }

    setLastScroll(currentScroll);
  })

  return (
    <>
        <div className= {shade?'navbar nav_shade':'navbar'} id='navbar' style={{top : (navbar?'0':'-160px')}}>
          <div className="nav">
            <div className='nav_left'>
              <div className="">
              <a href="" style={{fontWeight:"bolder", color:"var(--coral)", fontSize:"40px"}}>V</a>
              </div>
            </div>
            <div className="nav_menu">
                <div onClick={()=>{
                  setShowMenu(!showMenu)
                  }}>Menu</div>
              </div>
            <div className={(showMenu&&navbar)?"mobile_menu":"nav_right"}>
              <ul className='flex-center' >
                <li className='flex_center'><a href="#home">Home</a></li>
                <li className='flex_center'><a href="#about">About</a></li>
                <li className='flex_center'><a href="#skill">Skill</a></li>
                <li className='flex_center'><a href="#work">Work</a></li>
                <li className='flex_center'><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
import React from 'react'
import loading from '../assets/Spinner-1s-200px.svg'

const Loader = () => {
  return (
    <>
        <div style={{"width":"100vw", height:"100vh", display:"flex", "align-items":"center", "justify-content":"center"}}>
            <img src={loading} />
        </div>
    </>
  )
}

export default Loader
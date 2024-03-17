import React from 'react'
import logo from '../../public/logo.png'
function Logo({width="100px"}) {
  return (
    <div className='p-2' style={{width:"100px",height:"70px"}}>
      <img src={logo} alt="" />
      
    </div>
  )
}

export default Logo

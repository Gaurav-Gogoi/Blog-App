import React from 'react'
import LogoImage from '../assets/logo.jpg'

function Logo({ width = '100px', height = 'auto' }) {
  return (
    <div>
      <img src={LogoImage} alt="Logo" style={{ width, height }} />
    </div>
  )
}

export default Logo

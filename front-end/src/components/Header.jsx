import React from 'react'
import logoSpotify from "../assets/logo/spotify-logo.png"
import logoMK from "../assets/logo/LogoMK.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <img className="logoMK" src={logoMK} alt="Logo do Spotify" />
        {/* <img src={logoSpotify} alt="Logo do Spotify" /> */}
      </Link>

      <Link to="/" className="header__link" >
        <h1>Mk</h1>
      </Link>
    </div>
  )
}

export default Header
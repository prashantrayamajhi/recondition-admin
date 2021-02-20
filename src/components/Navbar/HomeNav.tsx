import './HomeNav.scss'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Timer, Facebook, Instagram, Mail } from '@material-ui/icons'


export default function HomeNav() {

  // state for responsive navbar
  const [isResponsive, setIsResponsive] = useState<boolean>(false)

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive)
  }

  return (
    <>
      <div className='upper-nav-wrapper'>
        <div className='upper-nav'>
          <div className='nav-contact'>
            <div className='nav-contact-item'>
              <Smartphone className='icon' style={{ color: '#2196f3' }} /> <span>+977-9876543210</span>
            </div>
            <div className='nav-contact-item'>
              <Timer className='icon' style={{ color: '#2196f3' }} /> <span>Sun-Fri: 10:00-6:00</span>
            </div>
          </div>
          <div className='nav-social'>
            <Link className='link' to=''><Facebook style={{ color: 'white', fontSize: 22 }} /></Link>
            <Link className='link' to=''><Instagram style={{ color: 'white', fontSize: 22 }} /></Link>
            <Link className='link' to=''><Mail style={{ color: 'white', fontSize: 22 }} /></Link>
          </div>
        </div>
      </div>
      <nav className='navbar-wrapper'>
        <div className='navbar'>
          <div className='nav-brand'>
            <h2>Logo</h2>
          </div>
          <div className={`nav-list ${isResponsive ? 'responsive' : ''}`}>
            <Link to='/' className='nav-item' onClick={toggleResponsive}>Home</Link>
            <a href='/#about' className='nav-item' onClick={toggleResponsive}>About</a>
            <a href='/#services' className='nav-item' onClick={toggleResponsive}>Services</a>
            <Link to='/products' className='nav-item' onClick={toggleResponsive}>Products</Link>
            <a href='/#contact' className='nav-item' onClick={toggleResponsive}>Contact</a>
          </div>
          <div className={`hamburger ${isResponsive ? 'open' : ''}`} onClick={toggleResponsive}>
            <div className='div1'></div>
            <div className='div2'></div>
            <div className='div3'></div>
          </div>
        </div>
      </nav>
    </>
  )
}

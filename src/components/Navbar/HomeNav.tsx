import './HomeNav.scss'

import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Smartphone, Timer, Facebook, Instagram, Mail } from '@material-ui/icons'

export default function HomeNav() {

  const history = useHistory()

  // state for responsive navbar
  const [isResponsive, setIsResponsive] = useState(false)

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
          <div className='nav-list'>
            <Link to='/' className='nav-item'>Home</Link>
            <a href='/#about' className='nav-item'>About</a>
            <a href='/#services' className='nav-item'>Services</a>
            <Link to='/products' className='nav-item'>Products</Link>
            <a href='/#contact' className='nav-item'>Contact</a>
          </div>
        </div>
      </nav>
    </>
  )
}

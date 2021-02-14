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
          <Link className='link' to=''><Facebook style={{ color : 'white', fontSize: 22 }}  /></Link>
          <Link className='link' to=''><Instagram style={{ color : 'white', fontSize: 22 }}  /></Link>
          <Link className='link' to=''><Mail style={{ color : 'white', fontSize: 22 }}  /></Link>
        </div>
      </div>
      <nav className='navbar'>
        <div className='nav-brand'>
          <h2>Logo</h2>
        </div>
        <div className='nav-list'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/#about' className='nav-item'>About</Link>
          <Link to='/#services' className='nav-item'>Services</Link>
          <Link to='/products' className='nav-item'>Products</Link>
          <Link to='' className='nav-item'>Contact</Link>
        </div>
      </nav>
    </>
  )
}

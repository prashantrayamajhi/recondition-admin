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
          <div className='left'>
            <div className='left-item'><Smartphone className='icon'  /><span>+977-9876543211</span></div>
            <div className='left-item'><Timer className='icon' /><span>Sun-Fri: 10:00-6:00</span></div>
          </div>
          <div className='right'>
            <Link className='link' to=''><Facebook className='icon' /></Link>
            <Link className='link' to=''><Instagram className='icon' /></Link>
            <Link className='link' to=''><Mail className='icon' /></Link>
          </div>
        </div>
      </div>
      <nav className='navbar-wrapper'>
        <div className='navbar'>
          <div className='nav-brand'>
            {/* <img src={navBrand} alt={'trostrum'} /> */}
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
            <div className='div1' />
            <div className='div2' />
            <div className='div3' />
          </div>
        </div>
      </nav>
    </>
  )
}

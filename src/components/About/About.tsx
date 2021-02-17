import './index.scss'
import AboutImg from './../../images/about.webp'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'

export default function About() {
  return (
    <section className='about-wrapper' id="#about">
      <h2>What we do ?</h2>
      <p>We provide excellent car reconditiong service and sell used cars.</p>
      <div className='about-main'>
        <div className='about-img'>
          <img src={AboutImg} alt="Car engine" />
        </div>
        <div className='about'>
          <h2>We Have 5 Years Of Experience In Auto Cars</h2>
          <ul>
            <li><Check className='icon' color='primary' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li><Check className='icon' color='primary' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li><Check className='icon' color='primary' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li><Check className='icon' color='primary' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <Link to='/products' className='link' style={{ textDecoration: 'none' }}><Button className='btn' variant='contained' color='primary'>Our Products</Button></Link>
        </div>
      </div>
    </section>
  )
}

import './About.scss'
import AboutImg from './../../images/about.jpg'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'

export default function About() {
  return (
    <section className='about-wrapper' id="about">
      {/* <h2>What we do ?</h2>
      <p>We provide excellent car reconditiong service and sell used cars.</p> */}
      <div className='about-main'>
        <div className='about-img'>
          <img src={AboutImg} alt="Car engine" />
        </div>
        <div className='about'>
          <h3>We Have 5 Years Of Experience In Auto Cars</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam temporibus iste earum odit a fugit in omnis? Facilis, harum? Iusto aliquid obcaecati cum exercitationem dolorum quo quidem deleniti, velit error!</p>
          <Link to='/products' className='link' style={{ textDecoration: 'none' }}><Button className='btn' variant='contained' color='primary'>Our Products</Button></Link>
        </div>
      </div>
    </section>
  )
}

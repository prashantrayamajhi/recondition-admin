import './About.scss'
import AboutImg from '../../../images/about.jpg'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'

export default function About() {
  return (
    <section className='about-wrapper' id="about">
      <div className='about-main'>
        <div className='about-img'>
          <img src={AboutImg} alt="Car engine" />
        </div>
        <div className='about'>
          <h3>We Have 5 Years Of Experience In Auto Cars</h3>
          <p>We are expericenced and a well reputed organization. We are one of the best recondition house in Kathmandu. Our services include car wash, car recondition, selling and buying of used cars.</p>
          <Link to='/products' className='link' style={{ textDecoration: 'none' }}><Button className='btn' variant='contained' color='primary'>Our Products</Button></Link>
        </div>
      </div>
    </section>
  )
}

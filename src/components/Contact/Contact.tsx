import { Link } from 'react-router-dom'
import './index.scss'

export default function Contact() {
  return (
    <section className='contact-section' id='contact'>
      <h2>Contact Us</h2>
      <p>You can contact us in person at any working hour.</p>
      <div className='contact-wrapper'>
        <div className='map'>
          <iframe className='frame' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6227873215635!2d85.2952679145381!3d27.69805123250833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dd53a0664b%3A0x8d06e6d1666e9e5d!2sSawari%20Motors%20pvt.ltd.!5e0!3m2!1sen!2snp!4v1613715434203!5m2!1sen!2snp" style={{ border:0 }} aria-hidden="false"></iframe>
        </div>
        {/* <div className='contact-details'>
          <h3>Get in touch</h3>
          <div className='contact'>
            <div className=''>
              <Link to=''><p>Sawari Motors</p></Link>
            </div>
            <div className=''>
              <Link to=''><p>sawarmotors@gmail.com</p></Link>
            </div>
            <div className=''>
              <Link to='https://www.facebook.com/Sawari-Motors-pvtltd-112970613809540/'><p>Sawari Motors pvt.ltd.</p></Link>
            </div>
            <div className=''>
              <Link to=''><p></p></Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

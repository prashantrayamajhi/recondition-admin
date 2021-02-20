import './index.scss'
import { Map, Smartphone, Mail } from '@material-ui/icons'
export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="pre-footer">
        <div className="about-us">
          <p className='footer-heading'>Sawari Motors</p>
          <p>
            We are one of best service providers in Kathmandu. We are
            qualified, experienced and we always thrive to provide the best
            service to our customers.
          </p>
        </div>
        <div className="more-info">
          <p className='footer-heading'>Links</p>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Serivces</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="contact-details">
          <p className='footer-heading'>Have Questions ?</p>
          <div className="details">
            <Map color='inherit'/>
            <p>Kathmandu, Kalimati</p>
          </div>
          <div className="details">
            <Smartphone color='inherit' />
            <p>+9779876543211</p>
          </div>
          <div className="details">
            <Mail color='inherit' />
            <p>sawarmotors@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <h3>All Rights Reserved By Sawari Motors {date}</h3>
      </div>
    </footer>
  )
}

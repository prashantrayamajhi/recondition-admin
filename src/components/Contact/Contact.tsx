import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className='contact-section'>
      <h2>Contact Us</h2>
      <p>You can contact us through various ways.</p>
      <div className='contact-wrapper'>
        <div className='contact-wrapper'>
          <div className='map'></div>
          <div className='contact-details'>
            <h3>Get in touch</h3>
            <div className='contact'>
              <Link to=''><p>sawarmotors@gmail.com</p></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

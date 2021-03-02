import './Testimonials.scss'
import Carousel from 'react-multi-carousel'
import Avatar from '../../../images/avatar.jpg'
import 'react-multi-carousel/lib/styles.css'
import { Typography } from '@material-ui/core'

export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  }
  return (
    <div className='testimonials-wrapper' id="testimonials">
      <h2>Testimonials</h2>
      <p>What our clients have to say about us.</p>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        <div className='testimonial'>
          <img src={Avatar} alt='' />
          <div className='text-wrapper'>
            <h3>Great place to get your car repaired. They are honest, trusted, and have competitive pricing.</h3>
          </div>
        </div>
        <div className='testimonial'>
          <img src={Avatar} alt='' />
          <h3>They only fix what needs to be fixed and don’t try and up-sell you on unnecessary things.</h3>
        </div>
        <div className='testimonial'>
          <img src={Avatar} alt='' />
          <h3>The price was pretty much what you’d expect, but it is worth it for the peace of mind.</h3>
        </div>
      </Carousel>
    </div>
  )
}

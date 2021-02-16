import './index.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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
    <div className='testimonials-wrapper'>
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
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolor explicabo placeat commodi consequuntur dolores.</h3>
        </div>
        <div className='testimonial'>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolor explicabo placeat commodi consequuntur dolores.</h3>
        </div>
        <div className='testimonial'>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti dolor explicabo placeat commodi consequuntur dolores.</h3>
        </div>
      </Carousel>
    </div>
  )
}

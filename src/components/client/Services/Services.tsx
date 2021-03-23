import Service from './Service'
import './Service.scss'
import { Build, DriveEta, LocalCarWash } from '@material-ui/icons'
import { Button } from '@material-ui/core'

const services = [
  {
    id: 1,
    icon: <DriveEta className='icon' color='primary' />,
    title: 'Sell & Exchange Cars',
    description: 'Buying and selling of used cars could be a difficult task, but don\'t worry, we are here to help you shorten the hassle.'
  },
  {
    id: 2,
    icon: <Build className='icon' color='primary' />,
    title: 'Recondition Cars',
    description: 'Our expert and experienced staffs will recondition your car to make it look brand new!'
  },
  {
    id: 3,
    icon: <LocalCarWash className='icon' color='primary' />,
    title: 'Car Wash',
    description: 'We provide excellent car wash service at any hour for a very reasonable price. '
  }
]

const mappedData = services.map(service => {
  return <Service key={service.id} icon={service.icon} title={service.title} description={service.description} />
})

export default function Services() {
  return (
    <section id='services' className='services-wrapper'>
      <h2>Our Services</h2>
      <p>We sell variety of used cars and provide quality recondition services.</p>
      <div className='services'>
        {mappedData}
      </div>
      <a href='/#contact' className='link'><Button className='btn' variant='contained' color='primary'>Contact us</Button></a>
    </section>
  )
}

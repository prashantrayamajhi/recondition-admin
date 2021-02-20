import Service from './Service'
import './index.scss'
import { DriveEta, Build, LocalCarWash } from '@material-ui/icons'
const services = [
  {
    id : 1,
    icon : <DriveEta className='icon' color='primary'  />,
    title : 'Sell & Exchange Cars',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae minus at quasi, consequatur delectus.'
  },
  {
    id : 2,
    icon: <Build className='icon' color='primary'  />,
    title : 'Recondition Cars',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae minus at quasi, consequatur delectus.'
  },
  {
    id : 3,
    icon: <LocalCarWash className='icon' color='primary'  />,
    title : 'Car Wash',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae minus at quasi, consequatur delectus.'
  },
]

const mappedData = services.map(service => {
  return <Service key={service.id} icon={service.icon} title={service.title} description={service.description}/>
})

export default function Services() {
  return (
    <section id='services' className='services-wrapper'>
      <h2>Our Services</h2>
      <p>We sell variety of used cars and provide quality reconditiong services.</p>
      <div className='services'>
        {mappedData}
      </div>
    </section>
  )
}

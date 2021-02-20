import './Welcome.scss'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className='welcome-wrapper'>
      <div className='welcome-text-wrapper'>
        <p className='welcome'>Welcome to</p>
        <h1>Sawari Motors</h1>
        <p className='description'>We are a reputed automobile organization, we provide one of the best automobile services in Kathmandu. </p>
        <Link to='/#services' className='link' style={{ textDecoration:'none' }}><Button className='btn' variant='contained' color='primary'>Our Services</Button></Link>
      </div>
    </div>
  )
}

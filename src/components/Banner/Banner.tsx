import './Banner.scss'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <h1>We provide best automobile recondition service in kathmandu</h1>
        <a href='#services' className='link' style={{ textDecoration: 'none' }}><Button className='btn' variant='contained' color='primary'>Our Services</Button></a>
      </div>
    </div>
  )
}

import './index.scss'
import Card from './../Card/Card'
import { Link } from 'react-router-dom'
import { AddCircle } from '@material-ui/icons'
export default function Product() {
  const data = [
    {
      title : 'Hundai i 10',
      image : 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2020-Audi-Q3-Sportback-orange-1001x565p%281%29.jpg',
      price : '500000'
    },
    {
      title : 'Car 5',
      image : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-r8-mmp-1-1603746624.jpg?crop=0.651xw:0.652xh;0.271xw,0.205xh&resize=640:*',
      price : '700000'
    },
    {
      title : 'Car 6',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBPiUham67BeP_MvmvFxUBJDBHq1gLRV7QQ&usqp=CAU',
      price : '1000000'
    },
    {
      title : 'Car 1',
      image : 'https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg',
      price : '300000'
    },
    {
      title : 'Car 2',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSq4UseyC_QBUTR2cY55NIUzI6zso8xHf5A&usqp=CAU',
      price : '600000'
    },
    {
      title : 'Car 3',
      image : 'https://media.caradvice.com.au/image/private/q_auto/v1578625000/nccvjom7pgi5jolixcza.jpg',
      price : '500000'
    },
  ]

  const carData = data.map(car => {
    return <Card image={car.image} title={car.title} price={car.price} />
  })
  return (
    <>
      <div className='add-product'>
        <Link to='/addProduct' className='link'><AddCircle color='primary' style={{ fontSize: 45 }} /></Link>
      </div>
      <div className='products-wrapper'>
        { carData }
      </div>
    </>
  )
}

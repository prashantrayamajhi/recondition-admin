import './Card.scss'
import { Link } from 'react-router-dom'

interface CardInterface{
  thumbnail: string,
  title: string,
  price: string,
  id: string,
  color: string,
  model: string,
  km: string
}

function Card(props: CardInterface) {
  return (
    <div className={'card'}>
      <img src={`http://localhost:8080/images/${props.thumbnail}`} alt={''} />
      <div className={'card-title'}>
        <Link to={`/product/${props.id}`} className={'link'}><h3>{props.title}</h3></Link>
      </div>
      <p className='price'>Rs.{props.price}</p>
      <div className={'card-details'}>
        <p>{props.model} &bull; {props.color} &bull; {props.km} km</p>
      </div>
      <Link to={`/product/${props.id}`} className={'card-link'}><p>View Details</p></Link>
    </div>
  )
}

export default Card

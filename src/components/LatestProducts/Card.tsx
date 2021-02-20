import './Card.scss'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'


interface CardProps {
    thumbnail: string,
    title: string,
    price: string,
    id: number
}

export default function CardComponent(props: CardProps) {

  return (
    <Link to='' className='card-link'>
      <div>
        <Card className='card-wrapper'>
          <CardActionArea>
            <CardMedia
              className='img'
              image={`http://localhost:8080/images/${props.thumbnail}`}
            />
            <CardContent className='title-wrapper' >
              <Typography className='title' variant="h4" >
                {props.title}
              </Typography>
              <Typography className='price' variant="h4">
                Rs.{props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  )
}

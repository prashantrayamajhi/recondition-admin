import './index.scss'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'


interface card {
    thumbnail: string,
    title: string,
    price: string,
    id: number
}

export default function CardComponent(cardObj: card) {

  return (
    <Link to='' className='card-link'>
      <div>
        <Card className='card-wrapper'>
          <CardActionArea>
            <CardMedia
              className='img'
              image={`http://localhost:8080/images/${cardObj.thumbnail}`}
            />
            <CardContent className='title-wrapper' >
              <Typography className='title' variant="h4" >
                {cardObj.title}
              </Typography>
              <Typography className='price' variant="h4">
                Rs.{cardObj.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  )
}

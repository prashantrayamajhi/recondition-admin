import './index.scss'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Edit, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'


interface card {
    image : string,
    title : String,
    price : String,
    key: Number
}

export default function CardComponent(cardObj : card) {
  return (
    <Card className='card-wrapper' key={cardObj.image}>
      <CardActionArea>
        <CardMedia
          className='img'
          image = {cardObj.image}
        />
        <CardContent className='title-wrapper' >
          <Typography className='title' variant="h4" >
            {cardObj.title}
          </Typography>
          <Typography className='title' variant="h4">
            Rs {cardObj.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='action-wrapper'>
        {/* <Button className='action-btn' size="small"  color="primary">
          Share
        </Button> */}
        <Link className='link' to=''><Button className='action-btn' size="small" variant='contained' color="primary">
          More
        </Button></Link>
        <Link className='link' to=''><Button className='action-btn' size="small" variant='contained' style={{ backgroundColor: 'green', color:'white' }}>
          <Edit className='icon' /> Edit
        </Button></Link>
        <Link className='link' to=''><Button className='action-btn' size="small" variant='contained' color="secondary">
          <Delete className='icon' /> Delete
        </Button></Link>
      </CardActions>
    </Card>
  )
}

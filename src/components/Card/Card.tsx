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
import ModalComponent from './../modal/Modal'
import { useState } from 'react'


interface card {
    thumbnail : string,
    title : string,
    price : string,
    id: number
}

export default function CardComponent(cardObj : card) {
  const [modal, setModal] = useState<boolean>(false)

  const toggleModal = () => {
    setModal(prev => !prev)
  }
  return (
    <div>
      <ModalComponent title="Do you want to delete the product ?" isOpen={modal} setOpen={setModal} link={`/api/v1/admin/products/${cardObj.id}`} />
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
            <Typography className='title' variant="h4">
            Rs {cardObj.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className='action-wrapper'>
          <Link className='link' to={`/product/${cardObj.id}`}><Button className='action-btn' size="small" variant='contained' color="primary">
          More
          </Button></Link>
          <Link className='link' to={`/addProduct/${cardObj.id}?isEdit=true`}><Button className='action-btn' size="small" variant='contained' style={{ backgroundColor: 'green', color:'white' }}>
            <Edit className='icon' /> Edit
          </Button></Link>
          <Button className='action-btn' size="small" variant='contained' color="secondary" onClick={toggleModal}>
            <Delete className='icon' /> Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

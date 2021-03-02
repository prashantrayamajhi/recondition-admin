import '../../admin/Products/index.scss'
import HomeNav from '../navbar/HomeNav'
import { useEffect, useState } from 'react'
import Axios from '../../../api/server'
import '../../admin/Products/Product.scss'
import ProductEntity from '../../../entity/ProductEntity'
import ImageGallery from 'react-image-gallery'
import { Typography } from '@material-ui/core'
import Footer from '../Footer/Footer'

interface ProductProps {
    match: {
        params: {
            id: string
        }
    }
}

const images: Array<any> = []

export default function Product(props: ProductProps) {

  const [product, setProduct] = useState<ProductEntity | null>(null)
  const id = props.match.params.id

  useEffect(() => {
    Axios.get('/api/v1/admin/products/' + id).then(res => {
      setProduct(res.data.data)
    })
  }, [])

  useEffect(() => {
    product?.images.forEach(image => {
      images.push({
        original: 'http://localhost:8080/images/' + image,
        thumbnail: 'http://localhost:8080/images/' + image
      })
    })
  })

  return (
    <>
      <HomeNav />
      <div className='product-wrapper'>
        <div className='image-wrapper'>
          <ImageGallery items={images} autoPlay={false} />
        </div>
        <div className='details-wrapper'>
          <h2>{product?.name}</h2>
          <Typography variant='body1' color="primary">Rs.{product?.price}</Typography>
          <p className='description'>{product?.description}</p>
          <div className='info-wrapper'>
            <Typography className='detail' variant='body1'>Model : <span>{product?.model}</span></Typography>
            <Typography className='detail' variant='body1'>Color : <span>{product?.color}</span></Typography>
            <Typography className='detail' variant='body1'>K.M. : <span>{product?.km} km</span></Typography>
            <Typography className='detail' variant='body1'>Option : <span>{product?.option ? product?.option : 'N/A'}</span></Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )}

import './index.scss'
import HomeNav from './../Navbar/HomeNav'
import { useEffect, useState } from 'react'
import Axios from '../../api/server'
import './Product.scss'
import ProductEntity from '../../entity/ProductEntity'
import ImageGallery from 'react-image-gallery'
import { Typography } from '@material-ui/core'
import Footer from './../Footer/Footer'

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
          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Model</th>
                <th>Color</th>
                <th>Kilometers</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rs.{product?.price}</td>
                <td>{product?.model}</td>
                <td>{product?.color}</td>
                <td>{product?.km}</td>
                <td>{product?.option ? product?.option : 'N/A'}</td>
              </tr>
            </tbody>
          </table>

          {/* <div className='info-wrapper'>
            <p className='description'>{product?.description}</p>
            <Typography className='detail' variant='body1'>Price : <span>{product?.price}</span></Typography>
            <Typography className='detail' variant='body1'>Model : <span>{product?.model}</span></Typography>
            <Typography className='detail' variant='body1'>Color : <span>{product?.color}</span></Typography>
            <Typography className='detail' variant='body1'>K.M's : <span>{product?.km} km</span></Typography>
            <Typography className='detail' variant='body1'>Option : <span>{product?.option ? product?.option : 'N/A'}</span></Typography>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

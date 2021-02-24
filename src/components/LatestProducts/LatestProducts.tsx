import { useEffect, useState } from 'react'
import Axios from '../../api/server'
import Card from './Card'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ProductEntity from '../../entity/ProductEntity'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function LatestProducts() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    }
  }
  const [products, setProducts] = useState<ProductEntity[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/products/limit/' + 6)
        setProducts(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const mappedData = products.slice(0).reverse().map((product: ProductEntity, index: number) => {
    return <div key={index} style={{ width: '90%', margin: 'auto' }}><Card id={product._id} title={product.name} thumbnail={product.images[0]} price={product.price} /></div>
  })
  return (
    <>
      <section className='products-section'>
        <h2>Our products</h2>
        <p>Here are some of our latest products</p>
        <div className='latest-products-wrapper'>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            removeArrowOnDeviceType={['tablet', 'desktop']}
            autoPlay={true}
            autoPlaySpeed={4000}
          >
            {mappedData}
          </Carousel>
        </div>
        <Link className='link' to='/products'><Button className='btn' variant='contained' color='primary'>See More</Button></Link>
      </section>
    </>
  )
}

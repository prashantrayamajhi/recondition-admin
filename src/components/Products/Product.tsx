import './index.scss'
import Navbar from './../Navbar/Navbar'
import { useEffect, useState } from 'react'
import Axios from '../../api/server'
import './Product.scss'
import ProductEntity from '../../entity/ProductEntity'

interface ProductProps {
  match: {
    params: {
      id: string
    }
  }
}

export default function Product(props: ProductProps) {

  const [product, setProduct] = useState<ProductEntity | null>(null)
  const id = props.match.params.id

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/product/' + id, config)
        setProduct(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBlog().then(() => {
    })
  }, [])

  return (
    <>
      <Navbar />
      <div className='product-wrapper'>
        <div className='image-wrapper'>
          {/* <img src={`http://localhost:8080/images/${product!.thumbnail}`} alt={product!.name} /> */}
        </div>
        <div className='details-wrapper'>
          <h2>{product!.name}</h2>
          <div className='info-wrapper'>
            <p>Model : {product!.model}</p>
            <p>Price : {product!.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

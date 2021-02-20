import './index.scss'
import Navbar from './../Navbar/Navbar'
import { useEffect, useState } from 'react'
import Axios from '../../api/server'
import './Product.scss'

export default function Product(props : any) {

  const [product, setProduct] = useState<any>([])
  const id = props.match.params.id

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try{
        const res = await Axios.get('/api/v1/admin/products/'+id, config)
        setProduct(res.data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchBlog()
  },[])

  return (
    <>
      <Navbar />
      <div className='product-wrapper'>
        <div className='image-wrapper'>
          <img src={`http://localhost:8080/images/${product.thumbnail}`} alt={product.name}/>
        </div>
        <div className='details-wrapper'>
          <h2>{product.name}</h2>
          <div className='info-wrapper'>
            <p>Model : {product.model}</p>
            <p>Price : {product.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

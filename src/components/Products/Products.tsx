import './index.scss'
import { useState, useEffect } from 'react'
import Card from './../Card/Card'
import { Link } from 'react-router-dom'
import { AddCircle } from '@material-ui/icons'
import Navbar from './../Navbar/Navbar'
import Axios from './../api/server'

interface ProductsInterface {
  name : string,
  model : string,
  price : number,
  description : string,
  thumbnail : string
}

export default function Product() {

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  const [products, setProducts] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await Axios.get('/api/v1/admin/products', config)
        setProducts(res.data.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const mappedData = products.slice(0).reverse().map((product:any, index:number) => {
    return <Card key={index} id={product._id} title={product.name} thumbnail={product.thumbnail} price={product.price}/>
  })

  return (
    <>
      <Navbar />
      <div className='add-product'>
        <Link to='/addProduct' className='link'><AddCircle color='primary' style={{ fontSize: 45 }} /></Link>
      </div>
      <div className='products-wrapper'>
        { mappedData }
      </div>
    </>
  )
}

import './../index.scss'
import './index.scss'
import { useState, useEffect } from 'react'
import Card from './../../LatestProducts/Card'
import Navbar from './../../Navbar/HomeNav'
import Axios from './../../api/server'
import Footer from './../../Footer/Footer'

export default function Product() {
  const [products, setProducts] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/products')
        setProducts(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const mappedData = products.slice(0).reverse().map((product: any, index: number) => {
    return <Card key={index} id={product._id} title={product.name} thumbnail={product.thumbnail} price={product.price} />
  })

  return (
    <>
      <Navbar />
      <div className='products-wrapper buyers' style={{ margin: 0, paddingTop: 70, paddingBottom: 150 }}>
        {mappedData}
      </div>
      <Footer />
    </>
  )
}

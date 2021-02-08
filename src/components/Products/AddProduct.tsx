import './index.scss'
import { useState, useEffect } from 'react'
import Container from './../Container/Container'
import { Select, MenuItem, Typography, Button, TextField, InputLabel, TextareaAutosize } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'
import Axios from './../api/server'
import { useHistory } from 'react-router-dom'

export default function AddProduct() {

  const history = useHistory()

  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [thumbnail,setThumbnail] = useState('')
  const [model,setModel] = useState('')
  const [modelList, setModelList] = useState<any>([])
  const [description, setDescription] = useState('')

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  useEffect(() => {
    const getModel = async () => {
      try{
        const res = await Axios.get('/api/v1/admin/models', config)
        setModelList(res.data.data)
      }catch(err){
        console.log(err)
      }
    }
    getModel()
  }, [])

  const mapModels = modelList.map((model: any) => {
    return <MenuItem key={model._id} value={model.name} selected>{model.name}</MenuItem>
  })

  const onFormSubmit = async (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { name, price, thumbnail, model, description }
    const config = {
      headers : {
        Authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }
    }
    try{
      const res = await Axios.post('/api/v1/admin/products', data, config)
      if(res.status === 201){
        history.push('/')
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <form autoComplete='off' onSubmit={onFormSubmit}>
          <Typography className='heading' color='primary' variant='h2'>Add Product</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" value={name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Price' id="outlined-basic" variant="outlined" value={price} onChange={(e) => { handleInputChange(setPrice, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Thumbnail' id="outlined-basic" variant="outlined" value={thumbnail} onChange={(e) => { handleInputChange(setThumbnail, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <InputLabel id='model-label'>Model</InputLabel>
            <Select value={model} labelId='model-label' className='input'  onChange={(e) => { handleInputChange(setModel, e.target.value as string) }} >
              {mapModels}
            </Select>
          </div>
          <div className='input-wrapper'>
            <TextareaAutosize className='input description' placeholder='Description' rowsMax={10} rowsMin={8} value={description} onChange={(e) => { handleInputChange(setDescription, e.target.value as string) }} />
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>Submit</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

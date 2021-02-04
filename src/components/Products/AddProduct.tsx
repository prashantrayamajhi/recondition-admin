import './index.scss'
import { useState } from 'react'
import Container from './../Container/Container'
import { Select, MenuItem, Typography, Button, TextField, InputLabel, TextareaAutosize } from '@material-ui/core'

export default function AddProduct() {
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [thumbnail,setThumbnail] = useState('')
  const [model,setModel] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const onFormSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { name, price, thumbnail, model, type, description }
    console.log(data)
  }

  return (
    <Container>
      <form autoComplete='off' onSubmit={onFormSubmit}>
        <Typography color='primary'>
          <h2>Add Product</h2>
        </Typography>
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
            <MenuItem value='honda' selected>Honda</MenuItem>
            <MenuItem value='bajaj'>Bajaj</MenuItem>
            <MenuItem value='pulsar'>Pulsar</MenuItem>
          </Select>
        </div>
        <div className='input-wrapper'>
          <InputLabel id='type-label'>Type</InputLabel>
          <Select value={type} labelId='type-label' className='input'  onChange={(e) => { handleInputChange(setType, e.target.value as string) }}>
            <MenuItem value='car'>Car</MenuItem>
            <MenuItem value='bike'>Bike</MenuItem>
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
  )
}

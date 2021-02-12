import './index.scss'
import { useState, useEffect } from 'react'
import Container from './../Container/Container'
import { Select, MenuItem, Typography, Button, TextField, InputLabel, TextareaAutosize, Input } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'
import Axios from './../api/server'
import { useHistory } from 'react-router-dom'

export default function AddProduct(props:any) {

  const history = useHistory()

  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [thumbnail,setThumbnail] = useState<File>()
  const [model,setModel] = useState('')
  const [modelList, setModelList] = useState<any>([])
  const [description, setDescription] = useState('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const handleFileChange = (e: any) => {
    setThumbnail(e.target.files[0])
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'content-type' : 'multipart/form-data'
    }
  }

  useEffect(() => {
    const id = props.match.params.id
    const fetchData = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/products/' + id, config)
        console.log(res)
        setName(res.data.data.name)
        setPrice(res.data.data.price)
        setModel(res.data.data.model)
        setDescription(res.data.data.description)
        setThumbnail(res.data.data.thumbnail)
      } catch (err) {
        console.log(err)
      }
    }
    if (id) {
      setIsEdit(true)
      fetchData()
    }

  }, [])

  useEffect(() => {
    const getUpdateData = async () => {
      try {
        const id = props.match.params.id
        const res = await Axios.get('/api/v1/admin/products/'+id, config)
        console.log(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }

    if (props.location.search){
      setIsEdit(true)
      getUpdateData()
    }
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
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    if(thumbnail){
      formData.append('thumbnail', thumbnail)
    }
    formData.append('model', model)
    formData.append('description', description)
    try{
      if(isEdit){
        const res = await Axios.patch('/api/v1/admin/products/' + props.match.params.id, formData, config)
        if (res.status === 200) {
          history.push('/')
        }
      }else{
        const res = await Axios.post('/api/v1/admin/products', formData, config)
        if(res.status === 201){
          history.push('/')
        }
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
          <Typography className='heading' color='primary' variant='h2'>{isEdit ? 'Update Product' : 'Add Product'}</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" value = {name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Price' id="outlined-basic" variant="outlined" value={price} onChange={(e) => { handleInputChange(setPrice, e.target.value as string) }}/>
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
          <div className='input-wrapper'>
            <input
              type="file"
              className='input'
              onChange={(e) => { handleFileChange(e) }}
            />
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>{isEdit ? 'Update' : 'Submit'}</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

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
  const [updateData, setUpdateData] = useState<any>([])

  const handleInputChange = (setFunction : Function , value : string) => {
    console.log(value)
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
    const getUpdateData = async () => {
      try {
        const id = props.match.params.id
        const res = await Axios.get('/api/v1/admin/products/'+id, config)
        console.log(res.data.data)
        setUpdateData(res.data.data)
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
      const res = await Axios.post('/api/v1/admin/products', formData, config)
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
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" value = {isEdit ? updateData.name : name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
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
            {/* <Input type='file' className='input' value={thumbnail} onChange={(e) => { handleFileChange(e) }}/> */}
            <Button
              variant="contained"
              component="label"
            >
              {isEdit ? 'Update File' : 'Upload File'}
              <input
                type="file"
                onChange={(e) => { handleFileChange(e) }}
                hidden
              />
            </Button>
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>Submit</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

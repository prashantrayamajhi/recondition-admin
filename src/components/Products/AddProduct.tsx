import './index.scss'
import React, { useEffect, useState } from 'react'
import Container from './../Container/Container'
import Navbar from './../Navbar/Navbar'
import Axios from '../../api/server'
import Alert from './../Alert/Alert'
import { useHistory } from 'react-router-dom'
import ModelEntity from '../../entity/ModelEntity'
import ProductEntity from '../../entity/ProductEntity'
import MatchParamId from '../../entity/MatchParamId'
import LocationSearch from '../../entity/LocationSearch'
import { Color } from '../../entity/Color'
import { Button, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'

export default function AddProduct(props: ProductEntity & MatchParamId & LocationSearch) {

  const history = useHistory()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState<any>([])
  const [model, setModel] = useState('')
  const [option, setOption] = useState('')
  const [color, setColor] = useState('')
  const [km, setKm] = useState('')
  const [modelList, setModelList] = useState<ModelEntity[]>([])
  const [description, setDescription] = useState('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<Color>('success')
  const [btnState, setBtnState] = useState<boolean>(false)

  // handle input change
  const handleInputChange = (setFunction: Function, value: string) => {
    setFunction(value)
  }

  // handle file change
  const handleFileChange = (e: any) => {
    let files = e.target.files
    const fileArr = Array.prototype.slice.call(files)
    setImage(fileArr)
  }

  // authentication header
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'content-type': 'multipart/form-data'
    }
  }

  // set the image state if we are updating a product
  useEffect(() => {
    const id = props.match.params.id
    // store image objects
    const imgArr: Array<object> = []
    const fetchData = async () => {
      try {
        // request for the product with the 'id'
        const res = await Axios.get('/api/v1/admin/products/' + id, config)
        // set the state with the returned data
        setName(res.data.data.name)
        setPrice(res.data.data.price)
        setModel(res.data.data.model)
        setOption(res.data.data.option)
        setColor(res.data.data.color)
        setKm(res.data.data.km)
        setDescription(res.data.data.description)
        res.data.data.images.forEach((img: any) => {
          imgArr.push({ name: img })
        })
        setImage(imgArr)
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
        await Axios.get('/api/v1/admin/products/' + id, config)
      } catch (err) {
        console.log(err)
      }
    }

    if (props.location.search) {
      setIsEdit(true)
      getUpdateData().then()
    }
    const getModel = async () => {
      try {
        const res = await Axios.get('/api/v1/admin/models', config)
        setModelList(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getModel()
  }, [])

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setBtnState(true)
    let formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    if (image) {
      for (let i = 0; i < image.length; i++) {
        console.log(image[i])
        formData.append('image', image[i])
      }
    }
    formData.append('model', model)
    formData.append('option', option)
    formData.append('color', color)
    formData.append('km', km)
    formData.append('description', description)
    try {
      if (isEdit) {
        const res = await Axios.patch(`/api/v1/admin/products/${props.match.params.id}`, formData, config)
        if (res.status === 200) {
          history.push('/admin/')
        }
      } else {
        const res = await Axios.post('/api/v1/admin/products', formData, config)
        if (res.status === 201) {
          setName('')
          setPrice('')
          setImage('')
          setModel('')
          setOption('')
          setColor('')
          setKm('')
          setDescription('')
          setBtnState(false)
          setOpenAlert(true)
          setSeverity('success')
          setMessage('Product added successfully')
        }
      }
    } catch (err) {
      console.log(err)
      setBtnState(false)
      setOpenAlert(true)
      setMessage('Cannot Perform Action')
      setSeverity('error')
    }
  }
  const removeImage = (img: string) => {
    setImage(image.filter((x: any) => x !== img))
  }

  return (
    <>
      <Navbar />
      <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} message={message} severity={severity} />
      <Container>
        <form autoComplete='off' onSubmit={onFormSubmit}>
          <Typography className='heading' color='primary'
            variant='h2'>{isEdit ? 'Update Product' : 'Add Product'}</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id='outlined-basic' variant='outlined' value={name} required
              onChange={(e) => {
                handleInputChange(setName, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Price' id='outlined-basic' variant='outlined' value={price} required
              onChange={(e) => {
                handleInputChange(setPrice, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Model' id='outlined-basic' variant='outlined' value={model} required
              onChange={(e) => {
                handleInputChange(setModel, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Option' id='outlined-basic' variant='outlined' value={option}
              onChange={(e) => {
                handleInputChange(setOption, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Color' id='outlined-basic' variant='outlined' value={color} required
              onChange={(e) => {
                handleInputChange(setColor, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Kilometers' id='outlined-basic' variant='outlined' value={km} required
              onChange={(e) => {
                handleInputChange(setKm, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <TextareaAutosize className='input description' placeholder='Description' rowsMax={10} rowsMin={8}
              value={description} required onChange={(e) => {
                handleInputChange(setDescription, e.target.value as string)
              }} />
          </div>
          <div className='input-wrapper'>
            <label className='upload'>
              <input
                type='file'
                className='input'
                name={image}
                onChange={(e) => {
                  handleFileChange(e)
                }}
                multiple
                hidden
              />
              <CloudUpload style={{ marginRight: '0.5rem' }} /> Upload
            </label>
            <div className='loaded-images'>
              {
                image ? image.map((img: any, index: number) => {
                  return <p onClick={() => {
                    removeImage(img)
                  }} key={index}>{img.name}</p>
                }) : ''
              }
            </div>

            <div className='loaded-images' style={{ display: 'flex', flexWrap: 'wrap' }}>
              {
                image ? image.map((img: any, index: number) => {
                  return <img
                    style={{ width: '20rem', height: 'auto' }}
                    onClick={() => {
                      removeImage(img)
                    }} key={index} src={`http://localhost:8080/images/${img.name}`} alt={'product'} />
                }) : ''
              }
            </div>

          </div>
          <div className='btn-wrapper'>
            <Button disabled={btnState} type='submit' className='btn' variant='contained' size='large'
              color='primary'>{isEdit ? 'Update' : 'Submit'}</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

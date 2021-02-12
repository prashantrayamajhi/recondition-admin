import { useState, useEffect } from 'react'
import Container from './../Container/Container'
import { Typography, Button, TextField } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'
import Axios from './../api/server'
import { useHistory } from 'react-router-dom'

export default function AddModel(props:any) {

  const history = useHistory()

  const [name,setName] = useState('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }


  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  useEffect(() => {
    const id = props.match.params.id
    const fetchData = async () => {
      try{
        const res = await Axios.get('/api/v1/admin/models/'+id, config)
        setName(res.data.data.name)
      }catch(err){
        console.log(err)
      }
    }
    if(id){
      setIsEdit(true)
      fetchData()
    }

  },[])

  const onFormSubmit = async (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { name }
    try{
      if(isEdit){
        const res = await Axios.patch('/api/v1/admin/models/'+ props.match.params.id, data, config)
        if (res.status === 200) {
          history.push('/model')
        }
      }else{
        const res = await Axios.post('/api/v1/admin/models',data, config)
        if(res.status === 201){
          history.push('/model')
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
        <form autoComplete='false' onSubmit={onFormSubmit}>
          <Typography className='heading' color='primary' variant='h2'>{isEdit ? 'Update Model' : 'Add Model'}</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" value={name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>{isEdit ? 'Update' : 'Submit'}</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

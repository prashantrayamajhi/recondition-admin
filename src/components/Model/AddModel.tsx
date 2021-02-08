import { useState } from 'react'
import Container from './../Container/Container'
import { Typography, Button, TextField } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'
import Axios from './../api/server'
import { useHistory } from 'react-router-dom'

export default function AddModel() {

  const history = useHistory()

  const [name,setName] = useState('')

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  const onFormSubmit = async (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { name }
    try{
      const res = await Axios.post('/api/v1/admin/models',data, config)
      if(res.status === 201){
        history.push('/model')
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
          <Typography className='heading' color='primary' variant='h2'>Add Model</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" value={name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>Submit</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

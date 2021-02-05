import { useState } from 'react'
import Container from './../Container/Container'
import { Typography, Button, TextField } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'

export default function AddCategory() {

  const [name,setName] = useState('')

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const onFormSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { name }
    console.log(data)
  }
  return (
    <>
      <Navbar />
      <Container>
        <form autoComplete='false' onSubmit={onFormSubmit}>
          <Typography className='heading' color='primary' variant='h2'>Add Category</Typography>
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

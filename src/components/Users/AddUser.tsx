import './index.scss'
import { useState } from 'react'
import Container from './../Container/Container'
import { Select, MenuItem, Typography, Button, TextField, InputLabel } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'

export default function AddUser() {

  const [name,setName] = useState('')
  const [email, setEmail  ] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')
  const [address, setAddress] = useState('')

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const onFormSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { name, email, phone, role, address }
    console.log(data)
  }
  return (
    <>
      <Navbar />
      <Container>
        <form autoComplete='false' onSubmit={onFormSubmit}>
          <Typography className='heading' color='primary' variant='h2'>Add User</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" value={name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Email' id="outlined-basic" variant="outlined" value={email} onChange={(e) => { handleInputChange(setEmail, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Phone' id="outlined-basic" variant="outlined" value={phone} onChange={(e) => { handleInputChange(setPhone, e.target.value as string) }}/>
          </div>
          <div className='input-wrapper'>
            <InputLabel id='type-label'>Role</InputLabel>
            <Select value={role} labelId='type-label' className='input' onChange={(e) => { handleInputChange(setRole, e.target.value as string) }}>
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='staff'>Staff</MenuItem>
            </Select>
          </div>
          <div className='input-wrapper'>
            <TextField className='input' label='Address' id="outlined-basic" variant="outlined" value={address} onChange={(e) => { handleInputChange(setAddress, e.target.value as string) }}/>
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>Submit</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

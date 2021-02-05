import './index.scss'
import { useState } from 'react'
import Container from './../Container/Container'
import { TextField, Typography, Button } from '@material-ui/core'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputChange = (setFunction : Function , value : string) => {
    setFunction(value)
  }

  const onFormSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault()
    const data = { email, password }
    console.log(data)
  }
  return (
    <Container>
      <form autoComplete='off' onSubmit={onFormSubmit} className='login-wrapper'>
        <Typography className='heading' color='primary' variant='h2'>Admin Login</Typography>
        <div className='input-wrapper'>
          <TextField type='email' className='input' label='Email' variant="outlined" value={email} onChange={(e) => { handleInputChange(setEmail, e.target.value as string) }}/>
        </div>
        <div className='input-wrapper'>
          <TextField type='password' className='input' label='Password' variant="outlined" value={password} onChange={(e) => { handleInputChange(setPassword, e.target.value as string) }}/>
        </div>
        <div className='btn-wrapper'>
          <Button type='submit' className='btn' variant='contained' size='large' color='primary'>Login</Button>
        </div>
      </form>
    </Container>
  )
}

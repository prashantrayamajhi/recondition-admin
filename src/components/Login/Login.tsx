import './Login.scss'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Container from './../Container/Container'
import { TextField, Typography, Button } from '@material-ui/core'
import Axios from '../../api/server'
import Alert from './../Alert/Alert'
import { Color } from '../../entity/Color'

export default function Login() {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<Color>('success')

  useEffect(() => {
    if (localStorage.getItem('userId') && localStorage.getItem('accessToken') && localStorage.getItem('isAuthenticated')) {
      history.push('/admin/')
    }
  }, [])

  const handleInputChange = (setFunction: Function, value: string) => {
    setFunction(value)
  }

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setOpenAlert(false)
    const data = { email, password }
    try {
      const res = await Axios.post('/api/v1/admin/auth/login', data)
      if (res.status === 200) {
        if (res.data.accessToken && res.data.userId) {
          localStorage.setItem('userId', res.data.userId)
          localStorage.setItem('accessToken', res.data.accessToken)
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('role', res.data.role)
        }
        history.push('/admin/')
      }
    } catch (err) {
      setMessage('Invalid Credentials')
      setOpenAlert(true)
      setSeverity('error')
    }
  }
  return (
    <>
      <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} message={message} severity={severity} />
      <Container>
        <form autoComplete='off' onSubmit={onFormSubmit} className='login-wrapper'>
          <Typography className='heading' color='primary' variant='h2'>Admin Login</Typography>
          <div className='input-wrapper'>
            <TextField type='email' className='input' label='Email' variant='outlined' value={email} onChange={(e) => {
              handleInputChange(setEmail, e.target.value as string)
            }} />
          </div>
          <div className='input-wrapper'>
            <TextField type='password' className='input' label='Password' variant='outlined' value={password}
              onChange={(e) => {
                handleInputChange(setPassword, e.target.value as string)
              }} />
          </div>
          <div className='btn-wrapper'>
            <Button type='submit' className='btn' variant='contained' size='large' color='primary'>Login</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

import { Button, TextareaAutosize, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './Contact.scss'
import Axios from './../../api/server'
import Alert from './../Alert/Alert'
import { Color } from '../../entity/Color'

export default function Contact() {

  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [btnState, setBtnState] = useState<boolean>(false)
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [severity, setSeverity] = useState<Color>('success')

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setBtnState(true)
    const data = { subject, email, message }
    try {
      const res = await Axios.post('/api/v1/client/mail', data)
      if (res.status === 200) {
        setEmail('')
        setSubject('')
        setMessage('')
        setOpenAlert(true)
        setAlertMessage('Message sent successfully')
        setSeverity('success')
        setBtnState(false)
      }
    } catch (err) {
      console.log(err)
      setOpenAlert(true)
      setAlertMessage('Failed to send message')
      setSeverity('error')
      setBtnState(false)
    }
  }

  const handleInputChange = (setFunction: Function, value: string) => {
    setFunction(value)
  }
  return (
    <>
      <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} message={alertMessage} severity={severity} />
      <section className='contact-section' id='contact'>
        <div className='contact-wrapper'>
          <div className='map'>
            <iframe className='frame' title='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6227873215635!2d85.2952679145381!3d27.69805123250833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dd53a0664b%3A0x8d06e6d1666e9e5d!2sSawari%20Motors%20pvt.ltd.!5e0!3m2!1sen!2snp!4v1613715434203!5m2!1sen!2snp' style={{ border: 0 }} aria-hidden='false' />
          </div>
          <div className='contact-form' onSubmit={onFormSubmit}>
            <h2>Contact Us</h2>
            <p>Feel free to leave us a message</p>
            <form className='contact'>
              <div className='input-wrapper'>
                <TextField className='input' label='Email' id="outlined-basic" variant="outlined" value={email} required onChange={(e) => { handleInputChange(setEmail, e.target.value as string) }} />
              </div>
              <div className='input-wrapper'>
                <TextField className='input' label='Subject' id="outlined-basic" variant="outlined" value={subject} required onChange={(e) => { handleInputChange(setSubject, e.target.value as string) }} />
              </div>
              <div className='input-wrapper'>
                <TextareaAutosize className='input description' style={{ background: 'transparent' }} placeholder='Description' rowsMax={10} rowsMin={8} value={message} required onChange={(e) => { handleInputChange(setMessage, e.target.value as string) }} />
              </div>
              <div className='btn-wrapper'>
                <Button disabled={btnState} type='submit' className='btn' variant='contained' size='large' color='primary'>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

import { Select, MenuItem, Typography, Button, TextField, InputLabel, TextareaAutosize, Input } from '@material-ui/core'
import { useState } from 'react'
import './index.scss'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [btnState, setBtnState] = useState<boolean>(false)

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleInputChange = (setFunction: Function, value: string) => {
    setFunction(value)
  }
  return (
    <section className='contact-section' id='contact'>
      <h2>Contact Us</h2>
      <p>You can contact us in person at any working hour.</p>
      <div className='contact-wrapper'>
        <div className='map'>
          <iframe className='frame' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6227873215635!2d85.2952679145381!3d27.69805123250833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dd53a0664b%3A0x8d06e6d1666e9e5d!2sSawari%20Motors%20pvt.ltd.!5e0!3m2!1sen!2snp!4v1613715434203!5m2!1sen!2snp" style={{ border:0 }} aria-hidden="false"></iframe>
        </div>
        <div className='contact-form' onSubmit={onFormSubmit}>
          <form className='contact'>
            <div className='input-wrapper'>
              <TextField className='input' label='Full Name' id="outlined-basic" variant="outlined" value={name} required onChange={(e) => { handleInputChange(setName, e.target.value as string) }} />
            </div>
            <div className='input-wrapper'>
              <TextField className='input' label='Email' id="outlined-basic" variant="outlined" value={email} required onChange={(e) => { handleInputChange(setEmail, e.target.value as string) }} />
            </div>
            <div className='input-wrapper'>
              <TextareaAutosize className='input description' style={{ background: 'transparent' }} placeholder='Description' rowsMax={10} rowsMin={8} value={message} required onChange={(e) => { handleInputChange(setMessage, e.target.value as string) }} />
            </div>
            <div className='btn-wrapper'>
              <Button disabled={btnState} type='submit' className='btn' variant='contained' size='large' color='primary'>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

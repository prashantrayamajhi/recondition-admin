import { useState, useEffect } from 'react'
import Container from './../Container/Container'
import { Typography, Button, TextField } from '@material-ui/core'
import Navbar from './../Navbar/Navbar'
import Axios from './../api/server'
import Alert from './../Alert/Alert'
import { useHistory } from 'react-router-dom'

export default function AddModel(props:any) {

  const history = useHistory()

  const [name,setName] = useState('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<string>('')
  const [btnState, setBtnState] = useState<boolean>(false)

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
    setBtnState(true)
    const data = { name }
    try{
      if(isEdit){
        const res = await Axios.patch('/api/v1/admin/models/'+ props.match.params.id, data, config)
        if (res.status === 200) {
          setOpenAlert(false)
          history.push('/model')
        }
      }else{
        const res = await Axios.post('/api/v1/admin/models',data, config)
        if(res.status === 201){
          setOpenAlert(false)
          history.push('/model')
        }
      }
    }catch(err){
      setBtnState(false)
      setOpenAlert(true)
      setMessage('Cannot Perform Action')
      setSeverity('error')
    }
  }
  return (
    <>
      <Navbar />
      <Alert openAlert={openAlert} setOpenAlert={setOpenAlert} message={message} severity={severity} />
      <Container>
        <form autoComplete='false' onSubmit={onFormSubmit}>
          <Typography className='heading' color='primary' variant='h2'>{isEdit ? 'Update Model' : 'Add Model'}</Typography>
          <div className='input-wrapper'>
            <TextField className='input' label='Name' id="outlined-basic" variant="outlined" required value={name} onChange={(e) => { handleInputChange(setName, e.target.value as string) }}/>
          </div>
          <div className='btn-wrapper'>
            <Button disabled={btnState} type='submit' className='btn' variant='contained' size='large' color='primary'>{isEdit ? 'Update' : 'Submit'}</Button>
          </div>
        </form>
      </Container>
    </>
  )
}

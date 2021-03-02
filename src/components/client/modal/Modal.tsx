import { Button, Typography } from '@material-ui/core'
import ReactDOM from 'react-dom'
import Axios from '../../../api/server'
import './Modal.scss'

interface ModalProps {
    isOpen : boolean,
    setOpen : (status: boolean) => void,
    title: string,
    link : string
}

export default function ModalComponent(modalObj : ModalProps) {

  const handleClose = () => {
    modalObj.setOpen(!modalObj.isOpen)
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }

  const handleDelete = async () => {
    modalObj.setOpen(false)
    try{
      await Axios.delete(modalObj.link, config)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  if(modalObj.isOpen){
    return (
      ReactDOM.createPortal(
        <>
          <div className='overlay'>
            <div className='modal'>
              <Typography variant='h3'>{modalObj.title}</Typography>
              <div className='btn-wrapper'>
                <Button className='btn' size='medium' variant='contained' color='secondary' onClick={handleClose}>Cancel</Button>
                <Button className='btn' size='medium' variant='contained' color='primary' onClick={handleDelete}>Delete</Button>
              </div>
            </div>
          </div>
        </>, document.getElementById('portal')!
      )
    )
  }
  else{
    return (
      <></>
    )
  }
}

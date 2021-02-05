import { Button, Typography } from '@material-ui/core'
import ReactDOM from 'react-dom'
import './index.scss'

interface modal {
    isOpen : boolean,
    setOpen : any,
    title: string
}

export default function ModalComponent(modalObj : modal) {

  const handleClose = () => {
    modalObj.setOpen(!modalObj.isOpen)
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
                <Button className='btn' size='medium' variant='contained' color='primary'>Delete</Button>
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
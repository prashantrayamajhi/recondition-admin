import { Modal } from '@material-ui/core'

interface modal {
    isOpen : boolean,
}

export default function ModalComponent(modalObj : modal) {

  if(modalObj.isOpen){
    return (
      <Modal
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div>
          <h2>Hello Boi</h2>
        </div>
      </Modal>
    )
  }
  else{
    return (
      <></>
    )
  }
}
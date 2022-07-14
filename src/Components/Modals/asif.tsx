import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ModalComponent from './ModalComponent'
const Asif = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () =>setOpen(true );

  return (
  <div >
     
      <button onClick={handleOpen}>Click me</button>
<ModalComponent    handleOpen={handleOpen}>
     <Typography id="modal-modal-title" variant="h6" component="h2">
          Komanda üzvünü silmək istədiyinizə sfsdfsdfsdf mi ?                  </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
</ModalComponent>
  </div>
  )
}

export default Asif
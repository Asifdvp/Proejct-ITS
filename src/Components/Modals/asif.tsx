import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import RemoveMemmberAlert from './ModalComponent'
const Asif = () => {
  return (
  <div >
<RemoveMemmberAlert >

     <Typography id="modal-modal-title" variant="h6" component="h2">
          Komanda üzvünü silmək istədiyinizə sfsdfsdfsdf mi ?                  </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
</RemoveMemmberAlert>
  </div>
  )
}

export default Asif
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import RemoveMemmberAlert from './ModalComponent'
const Res = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
<RemoveMemmberAlert  >
    f
<button onClick={handleOpen}>Open modal</button>
<div className='removeMember' >
     <Typography id="modal-modal-title" variant="h6" component="h2">
          Komanda üzvünü silmək istədiyinizə əminsiniz mi ?                  </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
          </div>
</RemoveMemmberAlert>

  )
}

export default Res
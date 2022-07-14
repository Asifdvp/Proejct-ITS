import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ModalComponent from './ModalComponent'
const Res = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true) ;  
React.useEffect(()=>{
  console.log(open)
},[open])

  return (
    <div>
      <button onClick={handleOpen}>Click me</button>
<ModalComponent   
      open={open}
      onClose={handleClose} >
    <div className='removeMember' >
     <Typography id="modal-modal-title" variant="h6" component="h2">
          Komanda üzvünü silmək istədiyinizə əminsiniz mi ?                  </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
          </div>
</ModalComponent>
</div>
  )
}

export default Res
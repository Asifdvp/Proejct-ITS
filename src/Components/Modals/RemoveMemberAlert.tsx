import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalComponent from './ModalComponent';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RemoveMemberAlert() {
  const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    
    <div>
      <Button onClick={(handleOpen)}>Open modal</Button>
   <ModalComponent open={open} handleClose={handleClose} clear={true}>
           <Typography>dsfsfsd</Typography>
   </ModalComponent>
    </div>
  );
}

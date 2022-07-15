import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './style.css'
import { Grid } from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 510,
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
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="removeMember"
      >
        <Box sx={style} >
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Grid container  columns={12}>
          <Grid item xs={1}>
            </Grid>
          <Grid item xs={10}>
          <Typography id="modal-modal-description" >
          Komanda üzvünü silmək istədiyinizə
           əminsiniz mi ?          </Typography>
            </Grid>
          <Grid item xs={1}>
          </Grid> </Grid>
          <Grid container  sx={{marginTop:"32px"}} columns={12}>
          <Grid item xs={3}>
              </Grid>
            <Grid item xs={3} sx={{marginRight:"16px"}}>
             
              </Grid>
            <Grid item xs={3}>
            
              </Grid>
            <Grid item xs={3}>
             
              </Grid>
            </Grid>
         
         
         
        </Box>
      </Modal>
    </div>
  );
}

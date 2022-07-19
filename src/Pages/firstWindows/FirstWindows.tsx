import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../../Components/Navbar';
const FirstWindow = () => {
  return (
 <>
      <Container sx={{width:"1280px"}}>
    <ResponsiveAppBar/>
     
        <Box sx={{ bgcolor: '#F4FAFF', height: '100vh' }} />
      </Container>
 </>
  )
}

export default FirstWindow
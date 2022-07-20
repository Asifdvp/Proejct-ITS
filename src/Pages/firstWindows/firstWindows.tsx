import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../../Components/Navbar';
import './style.css'
import Header from '../../Components/Header/Header';
import { Grid, Typography } from '@mui/material';
import Ilkinlayihemelumatlari from '../../Components/Card/ilkinlayihemelumatlari';
import KomandaniYaratCard from '../../Components/Card/komandaniyarat';
import Emptykomandayarat from '../../Components/Card/emptykomandayarat';
import Fealiyyatplaniyarat from '../../Components/Card/fealiyyatplaniyarat';
import ContainedButton from '../../Components/Buttons/ContainedButton';
const FirstWindow = () => {
  return (
 <div className='first-body'>
 <Header/>
 <Container className='main-container'>
<Grid container className='main-container-grid'>
<Grid item xs={12}>
  <Typography variant="h3" component="div" className='new-prohect-header'> Yeni layihə</Typography>
</Grid>
<Grid item xs={12}>
  <Ilkinlayihemelumatlari title={'İlkin layihə məlumatları'} buttonexist={undefined}/>
</Grid>
<Grid container spacing={2}  justifyContent="flex-end">
<Grid item xs={12} mt={"24px"}  justifyContent="flex-end" sx={{display:"flex",justifyContent:"flex-end"}}>
 <ContainedButton text="Yeni layihə" variantName="contained" paddingSize="16px 32px" disabled={false}/>

</Grid>
</Grid>
<Grid item xs={12} mt={"56px"} >
 {/* <Emptykomandayarat/> */} 
<KomandaniYaratCard title="Komandanı yarat" buttonexist={false}/>
</Grid>
<Grid item xs={12} mt={"32px"} >
 
 <Fealiyyatplaniyarat/>
</Grid>


  </Grid>



 </Container>
 </div>
  )
}

export default FirstWindow
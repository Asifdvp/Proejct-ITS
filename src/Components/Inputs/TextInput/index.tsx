import * as React from 'react';
import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './style.css'
const CssTextField = styled(TextField)({
  //focus olanda label rengi
  '& label.Mui-focused': {
    color: '#292D32',
    opacity:"1"
  },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  '& .MuiOutlinedInput-root': {
   
    '& fieldset': {
      borderColor: '#0F3673',
    },
    '&:hover fieldset': {
      borderColor: '#0F3673',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0F3673',
    },
    
  },
});


export default function TextInput() {
  return (
      <CssTextField 
      sx={{margin:"50px 0","label":{color:"#292D32",opacity:"0.4"}}}
      className='text'  
    label="Custom CSS"  />
     
   
  );
}

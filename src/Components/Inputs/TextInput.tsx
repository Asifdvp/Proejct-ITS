import * as React from 'react';
import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './style.css';
const CssTextField = styled(TextField)({

  //focus olanda label rengi
  '& label.Mui-focused': {
    color: '#292D32',
    opacity:"1"
  },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  ' & .MuiOutlinedInput-input, .MuiInputBase-input':{
    borderWidth:"0.4px",
    height:"auto",
  padding:"16px"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {

      borderColor: '#0F3673',
    },
    // '&:hover fieldset': {
    //   borderColor: '#0F3673',
    // },
    '&.Mui-focused fieldset': {
    
      borderColor: '#0F3673',
    },
    
  },
});


 const TextInput:React.FC<{placeholder:any,label:any}> = ({placeholder,label}) =>{
  return (
  
      <CssTextField 
  
      sx={{
        padding:"0px",
        height:"48px",
        "label":{color:"#292D32",opacity:"0.4"},
     
      }}
      className='text'  
      fullWidth
      placeholder={placeholder}
    label={label} />
     
  
  );
}
export default TextInput
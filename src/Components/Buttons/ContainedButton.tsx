import * as React from 'react';
import Button from '@mui/material/Button';
import './style.css'

 function ContainedButton({paddingSize, text,variantName,disabled}:any) {
  return (

      <Button variant={variantName} className={`containBtn ${text === "Sil" ? "sil" :""}`}   disabled={disabled} sx={{padding: `${paddingSize}`}}>{text}</Button>
  
   
 
  );
}
export default ContainedButton
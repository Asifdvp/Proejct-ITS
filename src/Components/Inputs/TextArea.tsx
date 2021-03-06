import React from 'react'
import { TextField } from '@mui/material';
import "./style.css";
import {  ITextArea } from "../../Interfaces/interface";


const TextArea : React.FC<ITextArea> = ({
    placeholder,
    label,
    limit,

  }) => {
    const [values, setValues] = React.useState({
      value: ""
    });
    const handleChange = (value:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [value]: event.target.value });
      }; 
  return (
    <div>
    <TextField
    className='textAreaPadding'
    rows={4}
    id="outlined-multiline-static"  
    multiline={true}
    sx={{width:"100%"}}
      label={label}
      placeholder={placeholder}
      inputProps={{
        maxLength: {limit}
    
      }
      }
      value={values.value}
      helperText= {  limit !==Infinity ? `${values.value.length} / ${limit}`: null}
      onChange={handleChange("value")}
    
    />
  </div>
  )
}

export default TextArea
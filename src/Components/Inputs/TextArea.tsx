import React from 'react'
import { TextField } from '@mui/material';
import "./style.css";


const TextArea : React.FC<{ placeholder: string; label: string,limit:number }> = ({
    placeholder,
    label,
    limit
  }) => {
    const [values, setValues] = React.useState({
      value: ""
    });
    const handleChange = (value:any) => (event:any) => {
        setValues({ ...values, [value]: event.target.value });
      }; 
  return (
    <div>
    <TextField
    rows={3}
    multiline={true}
    sx={{width:"100%"}}
      label={label}
      placeholder={placeholder}
      inputProps={{
        maxlength: {limit}
      }}
      value={values.value}
      helperText= {  limit !==Infinity ? `${values.value.length} / ${limit}`: null}
      onChange={handleChange("value")}
    
    />
  </div>
  )
}

export default TextArea
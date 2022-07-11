import React from 'react'
import { TextField } from '@mui/material';
import { styled } from "@mui/material/styles";

import "./style.css";
const CssTextField = styled(TextField)({
  width:"100%",
boxSizing:"border-box",

    //focus olanda label rengi
    "& label.Mui-focused": {
      color: "#292D32",
      opacity: "1",
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    " & .MuiOutlinedInput-input, .MuiInputBase-input": {
      borderWidth: "0.4px",
      height: "auto",
      padding: "16px",
    },
    "& .MuiOutlinedInput-root": {
        // height:"200px",
      "& fieldset": {
        borderColor: "#0F3673",
      },
      // '&:hover fieldset': {
      //   borderColor: '#0F3673',
      // },
      "&.Mui-focused fieldset": {
        borderColor: "#0F3673",
      },
    },
  });
const TextArea : React.FC<{ placeholder: any; label: any }> = ({
    placeholder,
    label,
  }) => {
    const CHARACTER_LIMIT = 4;
    const [values, setValues] = React.useState({
      name: ""
    });
    const handleChange = (name:any) => (event:any) => {
        setValues({ ...values, [name]: event.target.value });
      };
      
    
  return (

    <div>
    <CssTextField
    rows={1}
    multiline={true}

    sx={{width:"100%"}}
      label={label}
      placeholder={placeholder}
      inputProps={{
        maxlength: CHARACTER_LIMIT
      }}
      value={values.name}
      helperText= {  CHARACTER_LIMIT ?  CHARACTER_LIMIT : false }
      onChange={handleChange("name")}
    
    />
  </div>
  )
}

export default TextArea
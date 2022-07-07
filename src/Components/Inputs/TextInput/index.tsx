import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
//mui/styles error verirdi npm i @mui/styles --force bu kodu yazdiqdan sonra duzeldi

const useStyles :any= makeStyles({
  textField:{
    borderColor:"red",
    color:"red"

  }
})
 const TextInput:React.FC = () =>{
  const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined"  className={classes.textField} />
    
    </Box>
  );
}
export default TextInput

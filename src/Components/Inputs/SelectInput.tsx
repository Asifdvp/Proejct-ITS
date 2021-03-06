import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Arrow from '../../Assets/images/Arrow';
import './style.css'
export default function SelectInput() {
//  const [state,setData] = React.useState([])
//  React.useEffect(()=>{
// setData(data)
//  },[]);
  return (
    <>
 <Autocomplete
      className='select-input'
      disablePortal
      disableClearable
      fullWidth
      id="combo-box-demo"
      options={top100Films}
     popupIcon={<Arrow/>}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    /> 
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [

 
  { label: 'Monty Python and the Holy Grail', year: 1975 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
  { label: 'Monty Python and the Holy Grail', year: 1975 }
];

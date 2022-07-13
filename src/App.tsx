import React from 'react';
import TextInput from './Components/Inputs/TextInput';
import './App.css';
import Grid from '@mui/material/Grid';
import TextArea from './Components/Inputs/TextArea';
import DateInput from './Components/Inputs/DateInput';
import SelectInput from './Components/Inputs/SelectInput';
import CheckSelect from './Components/Inputs/CheckSelect';
import StatusInput from './Components/Inputs/StatusInput';
function App() {
  return (
    <div className="App">
<Grid container spacing={1.5} columns={12}>

 <Grid item xs={3}>
   <TextArea   placeholder="Layihənin adı" label="Layihənin adı" limit={5000}/>
  </Grid> 
 <Grid item xs={3}>
   <DateInput />
  </Grid> 
 <Grid item xs={3}>
   <TextInput  disAble={false}  placeholder="Layihənin adı" label="Layihənin adı"   />
  </Grid> 
 <Grid item xs={3}>
   <TextArea  limit={1200} placeholder="Layihənin adı" label="Layihənin adı"   />
  </Grid> 
 <Grid item xs={3}>
   <TextInput  disAble={true}  placeholder="Layihənin adı" label="Layihənin adı" />
  </Grid>  


  <Grid item xs={3}>
 <SelectInput/>
  </Grid>
  <Grid item xs={3}>
 <CheckSelect/>
  </Grid>
  <Grid item xs={3}>
 <StatusInput/>
  </Grid>


</Grid>
   
    </div>
  );
}

export default App;

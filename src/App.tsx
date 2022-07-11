import React from 'react';
import TextInput from './Components/Inputs/TextInput';
import './App.css';
import Grid from '@mui/material/Grid';
import TextArea from './Components/Inputs/TextArea';
import DateInput from './Components/Inputs/DateInput';
function App() {
  return (
    <div className="App">
<Grid container spacing={2}>
  <Grid item xs={4}>
    <TextInput disAble={false}  placeholder="Layihənin adı" label="Layihənin adı"/>
  </Grid>
  <Grid item xs={4}>
    <TextInput disAble={true}  placeholder="Layihənin kodu" label="Layihənin kodu"/>
  </Grid>
  <Grid item xs={4}>
    <TextInput disAble={false} placeholder="Layihənin adı" label="Layihənin adı" />
  </Grid>
  <Grid item xs={6}>
   <TextArea   placeholder="Layihənin adı" label="Layihənin adı" limit={Infinity}/>
  </Grid>
  <Grid item xs={6}>
   <TextArea   placeholder="Layihənin adı" label="Layihənin adı" limit={Infinity}/>
  </Grid>
  <Grid item xs={2}>
 <DateInput/>
  </Grid>
</Grid>
   
    </div>
  );
}

export default App;

import React from 'react';
import TextInput from './Components/Inputs/TextInput';
import './App.css';
import Grid from '@mui/material/Grid';
import TextArea from './Components/Inputs/TextArea';

function App() {
  return (
    <div className="App">
<Grid container spacing={2}>
  <Grid item xs={4}>
    <TextInput  placeholder="Layihənin adı" label="Layihənin adı"/>
  </Grid>
  <Grid item xs={4}>
    <TextInput   placeholder="Layihənin kodu" label="Layihənin kodu"/>
  </Grid>
  <Grid item xs={4}>
    <TextInput  placeholder="Layihənin adı" label="Layihənin adı" />
  </Grid>
  <Grid item xs={12}>
   <TextArea  placeholder="Layihənin adı" label="Layihənin adı"/>
  </Grid>
</Grid>
   
    </div>
  );
}

export default App;

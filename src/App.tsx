import React from 'react';
import './App.css';
import CheckSelect from './Components/Inputs/CheckSelect';
import SelectInput from './Components/Inputs/SelectInput';
import DateInput from './Components/Inputs/DateInput';
import TextInput from './Components/Inputs/TextInput';
import TextArea from './Components/Inputs/TextArea';
import StatusInput from './Components/Inputs/StatusInput';
import Grid from '@mui/material/Grid';
import RemoveMemberAlert from './Components/Modals/ModalComponent';
import Res from './Components/Modals/Res';
import Asif from './Components/Modals/asif';

function App() {
  return (
    <div className="App">
        <Grid container spacing={2}>
        <Grid item xs={2}>
        <CheckSelect/>
        </Grid>
        <Grid item xs={2}>
        <SelectInput />
        </Grid>
        <Grid item xs={2}>
        <DateInput/>
        </Grid>
        <Grid item xs={4}>
        <TextInput placeholder={'r'} label={'r'} disAble={false}/>
        </Grid>
        <Grid item xs={4}>
        <TextArea placeholder={'r'} label={'e'} limit={100}/>
        </Grid>
        <Grid item xs={4}>
        <StatusInput/>
        </Grid>
      </Grid>
      
      {/* <Res/> */}
     
    </div>
)};
export default App;

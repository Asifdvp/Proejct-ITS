import React from 'react';
import './App.css';
import CheckSelect from './Components/Inputs/CheckSelect';
import SelectInput from './Components/Inputs/SelectInput';
import DateInput from './Components/Inputs/DateInput';
import TextInput from './Components/Inputs/TextInput';
import TextArea from './Components/Inputs/TextArea';
import StatusInput from './Components/Inputs/StatusInput';
<<<<<<< HEAD
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
     
=======
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert';
function App() {
  return (
    <div className="App">
{/* <Grid container spacing={1.5} columns={12}>

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


</Grid> */}
    <RemoveMemberAlert/>
>>>>>>> 37d1b09c4605aee0e4997ba03ff9424b47f56074
    </div>
)};
export default App;

import React from 'react';
import './App.css';
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert/RemoveMemberAlert';
import AddTeamMemberModal from './Components/Modals/AddTeamMemberModal/AddTeamMemberModal';
import CreatePlan from './Components/Modals/CreatePlan/CreatePlan';
import EditPlanModal from './Components/Modals/EditPlan/EditPlanModal';
import TextInput from './Components/Inputs/TextInput';
import SelectInput from './Components/Inputs/SelectInput';
import DateInput from './Components/Inputs/DateInput';
import StatusInput from './Components/Inputs/StatusInput';
import CheckSelect from './Components/Inputs/CheckSelect';
import TextArea from './Components/Inputs/TextArea';
import { Grid } from '@mui/material';
import AddButton from './Components/Buttons/AddButton';
import AddTextBtnIcon from './Assets/Svg/AddTextBtnIcon';
import ClearButton from './Components/Buttons/ClearButton';
import ContainedButton from './Components/Buttons/ContainedButton';
import AddTextButton from './Components/Buttons/AddTextButton';
function App() {
  return (
    <div className="App">
      <AddButton/>
      <ContainedButton paddingSize={"16px 32px"} text="Yadda Saxla" variantName="outlined" disAble="false"/>
      <ClearButton/>
      <AddTextButton/>

      {/* <Grid container spacing={2}>
        <Grid item xs={3}>
        <TextInput placeholder={'1.2'} label={'Task Nömrəsi'} disAble={false} />
        </Grid>
        <Grid item xs={3}>
        <TextInput placeholder={'dfgdfgdfg'} label={'Task Nömrəsi'} disAble={true} />
        </Grid>
        <Grid item xs={3}>
        <SelectInput/>
        </Grid>
        <Grid item xs={3}>
        <DateInput/>
        </Grid>
        <Grid item xs={3}>
        <StatusInput/>
        </Grid>
        <Grid item xs={3}>
        <CheckSelect />
        </Grid>
        <Grid item xs={3}>
        <TextArea placeholder={'Task Nömrəsi'} label={'Task Nömrəsi'} limit={3000}/>
        </Grid>
        <Grid item xs={3}>
        <TextArea placeholder={'Task Nömrəsi'} label={'Task Nömrəsi'} limit={Infinity}/>
        </Grid>

      </Grid>   */}
      {/* <div className="container">
     
      </div> */}
 {/* <RemoveMemberAlert title="Komanda üzvünü silmək istədiyinizə əminsiniz mi ?" /> 
<CreatePlan/>
<AddTeamMemberModal/>
<EditPlanModal/>  */}
</div>
  )};
export default App;

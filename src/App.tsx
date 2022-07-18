import React from 'react';
<<<<<<< HEAD

import CreateTeamTable from './components/Table/CreateTeam';
import LayiheDetallari from './components/Table/layiheDetallari';
import ModalCreatTeamTable from './components/Table/ModalCreatTeamTable';
import Card from './components/Card';
import ResponsiveAppBar from './components/Navbar';
import Ilkinlayihemelumatlari from './components/Card/ilkinlayihemelumatlari';
import KomandaniYaratCard from './components/Card/komandaniyarat';
import Emptykomandayarat from './components/Card/emptykomandayarat';
import Fealiyyatplaniyarat from './components/Card/fealiyyatplaniyarat';

function App() {
  return (
    <div className="App">
      {/* <CreateTeamTable /> */}
      {/* <LayiheDetallari /> */}
      {/* <ModalCreatTeamTable /> */}
      {/* <Card basliq='Komandani yarat' buttonExist='false'/> */}
      {/* <Card basliq='Layihə detalları' buttonExist='true' /> */}
      {/* <Ilkinlayihemelumatlari title={'İlkin layihə məlumatları'} buttonexist={'false'} /> */}
      {/* <KomandaniYaratCard title={'Komandanı yarat'} buttonexist={'true'} /> */}
      {/* <ResponsiveAppBar /> */}
      {/* <Emptykomandayarat /> */}
      <Fealiyyatplaniyarat />
    </div>
  );
}
=======
import './App.css';
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert/RemoveMemberAlert';
import CreatePlan from './Components/Modals/CreatePlan/CreatePlan';
import EditPlanModal from './Components/Modals/EditPlan/EditPlanModal';
import TextInput from './Components/Inputs/TextInput';
import SelectInput from './Components/Inputs/SelectInput';
import DateInput from './Components/Inputs/DateInput';
import StatusInput from './Components/Inputs/StatusInput';
import CheckSelect from './Components/Inputs/CheckSelect';
import TextArea from './Components/Inputs/TextArea';
import { Grid } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
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

      </Grid>








      
      {/* <div className="container">
     
      </div> */}
 {/* <RemoveMemberAlert title="Komanda üzvünü silmək istədiyinizə əminsiniz mi ?" /> */}
{/* <CreateTeamTable/>
<LayiheDetallariTable/> */}
{/* <ModalCreatTeamTable/> */}
 {/* <CreatePlan/>
<AddTeamMemberModal/>
<EditPlanModal/>  */}
</div>

)};
>>>>>>> fa49d8ef88576cfbc373eb82f5bee257830d674a
export default App;

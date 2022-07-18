import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD

import CreateTeamTable from './components/Table/CreateTeam';
import LayiheDetallari from './components/Table/layiheDetallari';
import ModalCreatTeamTable from './components/Table/ModalCreatTeamTable';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {/* <CreateTeamTable /> */}
      {/* <LayiheDetallari /> */}
      {/* <ModalCreatTeamTable /> */}
      <Card basliq='Komandani yarat' buttonExist='true'/>
      
    </div>
  );
}
=======
>>>>>>> Ramil
import './App.css';
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert/RemoveMemberAlert';
import CreateTeamTable from './Components/Table/CreateTeam';
import LayiheDetallariTable from './Components/Table/layiheDetallari';
import ModalCreatTeamTable from './Components/Table/ModalCreatTeamTable'
import AddTeamMemberModal from './Components/Modals/AddTeamMemberModal/AddTeamMemberModal';
import CreatePlan from './Components/Modals/CreatePlan/CreatePlan';
import EditPlanModal from './Components/Modals/EditPlan/EditPlanModal';
function App() {
  return (
    <div className="App">
      {/* <div className="container">
     
      </div> */}
 <RemoveMemberAlert title="Komanda üzvünü silmək istədiyinizə əminsiniz mi ?" />
{/* <CreateTeamTable/>
<LayiheDetallariTable/> */}
{/* <ModalCreatTeamTable/> */}
<CreatePlan/>
<AddTeamMemberModal/>
<EditPlanModal/>
</div>

)};
<<<<<<< HEAD
=======
>>>>>>> f157d6fbdef7c1306e047526c52f92309b027ef0
>>>>>>> Ramil
export default App;

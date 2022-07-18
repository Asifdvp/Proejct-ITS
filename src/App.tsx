import React from 'react';
<<<<<<< HEAD
import './App.css';
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert/RemoveMemberAlert';
import CreateTeamTable from './Components/Table/CreateTeam';
import LayiheDetallariTable from './Components/Table/layiheDetallari';
import ModalCreatTeamTable from './Components/Table/ModalCreatTeamTable'
import AddTeamMemberModal from './Components/Modals/AddTeamMemberModal/AddTeamMemberModal';
import CreatePlan from './Components/Modals/CreatePlan/CreatePlan';
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
</div>

)};
=======

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
      <Card basliq='salam' buttonExist='true'/>
    </div>
  );
}
>>>>>>> Ramil
export default App;

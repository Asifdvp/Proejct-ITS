import React from 'react';
import './App.css';
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert';
import CreateTeamTable from './Components/Table/CreateTeam';
import LayiheDetallariTable from './Components/Table/layiheDetallari';
import ModalCreatTeamTable from './Components/Table/ModalCreatTeamTable'
import AddTeamMemberModal from './Components/Modals/AddTeamMemberModal';
function App() {
  return (
    <div className="App">
      {/* <div className="container">
      <RemoveMemberAlert title="Adfdf" />
      </div> */}

{/* <CreateTeamTable/>
<LayiheDetallariTable/> */}
{/* <ModalCreatTeamTable/> */}
<AddTeamMemberModal/>
</div>

)};
export default App;

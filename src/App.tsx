import React from 'react';


import CreateTeamTable from './Components/Table/CreateTeam';
import LayiheDetallari from './Components/Table/layiheDetallari';
import ModalCreatTeamTable from './Components/Table/ModalCreatTeamTable';
import Card from './Components/Card';
import ResponsiveAppBar from './Components/Navbar';
import Ilkinlayihemelumatlari from './Components/Card/ilkinlayihemelumatlari';
import KomandaniYaratCard from './Components/Card/komandaniyarat';
import Emptykomandayarat from './Components/Card/emptykomandayarat';
import Fealiyyatplaniyarat from './Components/Card/fealiyyatplaniyarat';
import EditPlanModal from './Components/Modals/EditPlan/EditPlanModal';
import './App.scss';
import Header from './Components/Header/Header';
import FirstWindow from './Pages/firstWindows/firstWindows';
// import FirstWindow from './Pages/firstWindows/FirstWindows';
function App() {
  return (
    <div className="App">
      {/* <CreateTeamTable /> */}
      {/* <LayiheDetallari /> */}
      {/* <ModalCreatTeamTable /> */}
      {/* <Card basliq='Komandani yarat' buttonExist='false'/>
      <Card basliq='Layihə detalları' buttonExist='true' /> */}
      {/* <Ilkinlayihemelumatlari title={'İlkin layihə məlumatları'} buttonexist={'false'} /> 
    <KomandaniYaratCard title={'Komandanı yarat'} buttonexist={'true'} /> */}
      {/* <ResponsiveAppBar />   */}
      {/* <EditPlanModal/> */}
       {/* <Emptykomandayarat /> 
       
      <Fealiyyatplaniyarat /> */}
      <FirstWindow/>
      {/* <Header/> */}
    </div>
  );
}
export default App;

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
import './App.scss';
function App() {
  return (
    <div className="App">
      {/* <CreateTeamTable /> */}
      {/* <LayiheDetallari /> */}
      {/* <ModalCreatTeamTable /> */}
      {/* <Card basliq='Komandani yarat' buttonExist='false'/> */}
      {/* <Card basliq='Layihə detalları' buttonExist='true' /> */}
      {/* <KomandaniYaratCard title={'Komandanı yarat'} buttonexist={'true'} /> */}
      <ResponsiveAppBar />
      <Ilkinlayihemelumatlari title={'İlkin layihə məlumatları'} buttonexist={'false'} />
      {/* <Emptykomandayarat /> */}
      {/* <Fealiyyatplaniyarat /> */}
    </div>
  );
}
export default App;

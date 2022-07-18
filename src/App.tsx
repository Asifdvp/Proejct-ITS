import React from 'react';

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
export default App;

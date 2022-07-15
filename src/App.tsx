import React from 'react';
import './App.css';
import CheckSelect from './Components/Inputs/CheckSelect';
import SelectInput from './Components/Inputs/SelectInput';
import DateInput from './Components/Inputs/DateInput';
import TextInput from './Components/Inputs/TextInput';
import TextArea from './Components/Inputs/TextArea';
import StatusInput from './Components/Inputs/StatusInput';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Fab, Grid } from '@mui/material';
import RemoveMemberAlert from './Components/Modals/RemoveMemberAlert';
import ContainedButton from './Components/Buttons/ContainedButton';
import AddIcon from '@mui/icons-material/Add';

import ClearButton from './Components/Buttons/ClearButton';
import AddButton from './Components/Buttons/AddButton';
import Elave from './Components/Buttons/AddTextButton';
import AddTextButton from './Components/Buttons/AddTextButton';
function App() {
  return (
    <div className="App">
{/* <RemoveMemberAlert/> */}

{/* <Elave/>

<OutlinedButtons/>
 */}
<AddButton/>
<ClearButton/>
<ContainedButton
         text={"Ləğv Et"}     
        paddingSize={"16px 55px"}
        variantName={"outlined"}
        disabled={false}
      />

<ContainedButton
         text={"Yadda Saxla"}
        paddingSize={"16px 24px"}
        variantName={"contain"}
        disabled={false}
      />

<ContainedButton
         text={"Yeni layihe yarat"}
        paddingSize={"16px 32px"}
        variantName={"contain"}
        disabled={false}
      />
<ContainedButton
         text={"Yadda Saxla"}
        paddingSize={"16px 24px"}
        variantName={"contain"}
        disabled={true}
      />
<ContainedButton
         text={"Sil"}
        paddingSize={"16px 73px"}
        variantName={"outlined"}
        disabled={false}
      />
<AddTextButton/>
</div>

)};
export default App;

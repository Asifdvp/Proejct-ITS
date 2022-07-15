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
import OutlinedButtons from './Components/Buttons/OutlinedButton';
import ContainedButton from './Components/Buttons/ContainedButton';
import AddIcon from '@mui/icons-material/Add';

import ClearButton from './Components/Buttons/ClearButton';
import AddButton from './Components/Buttons/AddButton';
import Elave from './Components/Buttons/Elave';
function App() {
  return (
    <div className="App">
{/* <RemoveMemberAlert/> */}

{/* <Elave/>

<OutlinedButtons/>
<ContainedButton/> */}
<AddButton/>
<ClearButton/>
</div>

)};
export default App;

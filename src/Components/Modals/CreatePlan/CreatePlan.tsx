import React from 'react'
import ModalComponent from '../ModalComponent';
import { Grid } from '@mui/material';
import TextInput from '../../Inputs/TextInput';
import TextArea from '../../Inputs/TextArea';
import StatusInput from '../../Inputs/StatusInput';
import CheckSelect from '../../Inputs/CheckSelect';
import DateInput from '../../Inputs/DateInput';
import SelectInput from '../../Inputs/SelectInput';
import ContainedButton from '../../Buttons/ContainedButton';
import '../style.css';
import './index.css';

const CreatePlan = () => {
    const [openC,setOpen] = React.useState(false);
    const handleOpenC = () =>setOpen(true);
    const handleCloseC = () => setOpen(false)
  return (
    <div>
        <button onClick={handleOpenC}>sdfsdfsd</button>
<ModalComponent open={openC} handleClose={handleCloseC} clear={true} >
<div className='create-plan'>
<Grid container spacing={1.5}>
<Grid item xs={2.4}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={2.4}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={2.4}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={2.4}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={2.4}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>



</Grid>
<Grid container spacing={1.5} mt={4}>
<Grid item xs={3}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={3}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={3}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>
<Grid item xs={3}>
<TextInput placeholder={'1,2'} label={'Task Nomresi'} disAble={false}/>
</Grid>




</Grid>
<Grid container spacing={1.5} mt={4}>
<Grid item xs={6}>
<TextArea placeholder={'1,2'} label={'Task Nomresi'} limit={4000}/>
</Grid>
<Grid item xs={6}>
<TextArea placeholder={'1,2'} label={'Task Nomresi'} limit={4000}/>
</Grid>


<Grid item xs={12} sx={{display:"flex"}} justifyContent="flex-end">
<ContainedButton  paddingSize={"16px 32px"} text={"Yadda Saxla"} variantName={"contain"}  disable={"false"}onClick={()=>console.log("Asif")}/>
</Grid>
</Grid>



</div>
</ModalComponent>



    </div>
  )
}

export default CreatePlan
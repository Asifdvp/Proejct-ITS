import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalComponent from "./ModalComponent";
import Grid from '@mui/material/Grid';
import SelectInput from "../Inputs/SelectInput";
import CheckSelect from "../Inputs/CheckSelect";
import AddButton from "../Buttons/AddButton";
import ModalCreatTeamTable from "../Table/ModalCreatTeamTable";
import { FC } from "react";
import "./style.css";
import ContainedButton from "../Buttons/ContainedButton";
const AddTeamMmeberModal:FC= () =>{
  const [openT, setOpen] = React.useState(false);
  const handleOpenT = () => setOpen(true);
  const handleCloseT = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpenT}>Open modal</Button>
      <ModalComponent open={openT} handleClose={handleCloseT} clear={true}>
        <div className="add-team-member-modal">
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h2" gutterBottom component="div" >
        Komanda üzvü əlavə et</Typography>
        </Grid>
        <Grid item xs={5.2}>
       <SelectInput/>
        </Grid>
        <Grid item xs={5.2}>
         <CheckSelect/>
        </Grid>
        <Grid item xs={1.6}>
       <AddButton/>
        </Grid>
        <Grid item xs={12}>
       <ModalCreatTeamTable/>
        </Grid>
        <Grid item xs={12}   sx={{display:"flex"}}   justifyContent="flex-end"

>
<ContainedButton  text={"Yadda Saxla"} variantName={"contain"} disabled={false} paddingSize={"16px 24px"} />
        </Grid>
      </Grid>
        </div>
      </ModalComponent>
    </div>
  );
}
export default  AddTeamMmeberModal
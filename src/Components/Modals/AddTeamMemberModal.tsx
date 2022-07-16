import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalComponent from "./ModalComponent";
import { FC } from "react";
import "./style.css";
import ContainedButton from "../Buttons/ContainedButton";
const RemoveMemberAlert:FC<{title:any}> = ({title}) =>{
  const [openT, setOpen] = React.useState(false);
  const handleOpenT = () => setOpen(true);
  const handleCloseT = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpenT}>Open modal</Button>

      <ModalComponent open={openT} handleClose={handleCloseT} clear={true}>
        <div className="add-team-member-modal">
        <Typography variant="h2" gutterBottom component="div" >
       {title}</Typography>
<ContainedButton  text={"sil"} variantName={"contain"} disabled={false} paddingSize={"16px 50.5px"} />
        </div>
      </ModalComponent>
    </div>
  );
}
export default  RemoveMemberAlert
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalComponent from "../ModalComponent";
import { FC } from "react";
import "./index.css";
import '../style.css'
import ContainedButton from "../../Buttons/ContainedButton";
const RemoveMemberAlert:FC<{title:any}> = ({title}) =>{
  const [openR, setOpen] = React.useState(false);
  const handleOpenR = () => setOpen(true);
  const handleCloseR = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpenR}>Open modal</Button>
      <ModalComponent open={openR} handleClose={handleCloseR} clear={true}>
        <div className="remove-member-alert">
        <Typography variant="h2" gutterBottom component="div" >
       {title}</Typography>
<ContainedButton  text={"sil"} variantName={"contain"} disabled={false} paddingSize={"16px 50.5px"} />
        </div>
      </ModalComponent>
    </div>
  );
}
export default  RemoveMemberAlert
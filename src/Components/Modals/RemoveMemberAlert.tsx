import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModalComponent from "./ModalComponent";
import "./style.css";
import ContainedButton from "../Buttons/ContainedButton";
export default function RemoveMemberAlert() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

      <ModalComponent open={open} handleClose={handleClose} clear={true}>
        <div className="remove-member-alert">
        <Typography variant="h2" gutterBottom component="div" >
        Komanda üzvünü silmək istədiyinizə əminsiniz mi ? </Typography>
<ContainedButton  text={"sil"} variantName={"contain"} disabled={false} paddingSize={"16px 50.5px"} />
        </div>
      </ModalComponent>
    </div>
  );
}

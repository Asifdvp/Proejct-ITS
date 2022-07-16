import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ClearButton from "../Buttons/ClearButton";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
};
//Her istifade etdiyimiz modal zamani bu formada state daxil edir amma her componentde ferqli ad olmaq serti ile 
// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);
export default function ModalComponent(props: any) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.clear ? <ClearButton handleClose={props.handleClose} /> : null}
          {props.children}
        </Box>
      </Modal>
    </div>
  );
}

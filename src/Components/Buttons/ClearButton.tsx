import * as React from "react";
import Fab from "@mui/material/Fab";
import "./style.css";
import ClearBtnIcon from "../../Assets/Svg/ClearBtnIcon";

export default function ClearButton(handleClose:any) {
  return (
    <Fab className="clearBtn" onClick={handleClose.handleClose} size="small" aria-label="remove">
      <ClearBtnIcon />
    </Fab>
  );
}

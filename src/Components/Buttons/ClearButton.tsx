import * as React from "react";
import Fab from "@mui/material/Fab";
import "./style.css";
import ClearBtnIcon from "../../Assets/Svg/ClearBtnIcon";

export default function ClearButton() {
  return (
    <Fab className="clearBtn" size="small" aria-label="remove">
      <ClearBtnIcon />
    </Fab>
  );
}

import * as React from "react";
import TextField from "@mui/material/TextField";
import "./style.css";
import {  ITextInput } from "../../Interfaces/interface";
const TextInput: React.FC<ITextInput> = ({
  placeholder,
  label,
  disAble
}) => {
  return (
    <TextField
      fullWidth
      defaultValue= {disAble ? "Hello World" : null }
      placeholder={placeholder}
      label={label}
      disabled={disAble}
      className={ disAble ? `disAbled` : ""}
    />
  );
};
export default TextInput;

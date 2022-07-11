import * as React from "react";
import TextField from "@mui/material/TextField";
import "./style.css";
const TextInput: React.FC<{ placeholder: any; label: any }> = ({
  placeholder,
  label,
}) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      label={label}
    />
  );
};
export default TextInput;

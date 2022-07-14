import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Arrow from "../../Assets/images/Arrow";
import { useRef } from "react";
export default function StatusInput() {
  const inputRef: any = useRef();
  const [labels, setLabels] = React.useState([
    { label: "Açıq" },
    { label: "İcradadır" },
    { label: "Gecikir" },
    { label: "Dayandırılıb" },
    { label: "Bağlı" },
  ]);
  const changeColor = (event:any,value: any) => {
if(value !== null){
  switch (value.label) {
    case "Açıq":
      inputRef.current.style.backgroundColor = "#068FDB";
      break;
    case "İcradadır":
      inputRef.current.style.backgroundColor = "yellow";
      break;
    case "Gecikir":
      inputRef.current.style.backgroundColor = "teal";
      break;
    case "Dayandırılıb":
      inputRef.current.style.backgroundColor = "red";
      break;
    case "Bağlı":
      inputRef.current.style.backgroundColor = "#6FC03D";
      break;
      default :  inputRef.current.style.backgroundColor = "white";
  }
}
else{
  inputRef.current.style.backgroundColor = "white";
}
  };
  return (
    <Autocomplete
    disableClearable
      disablePortal
      fullWidth
      id="combo-box-demo"
      options={labels}
      onChange={(event, value: any) => changeColor(event,value)}
      popupIcon={<Arrow />}
      renderInput={(params) => (
        <TextField
          {...params}
          ref={inputRef}
          label="Status"
          placeholder="Status"
          className="statusInput"
        />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

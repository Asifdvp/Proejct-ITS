import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Arrow from "../../Assets/images/Arrow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CheckSelect() {
  const check: any = React.useRef();
  return (
    <Autocomplete
      fullWidth
      multiple
      sx={{ width: "100%", margin: "0px" }}
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      onChange={() => {
        console.log(check.current);
      }}
      popupIcon={<Arrow />}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props} ref={check}>
          <Checkbox
            className="checkIcon"
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption" },
  { title: "The Godfather" },
  { title: "The Godfather: Part II" },
  { title: "The Dark Knight" },
  { title: "12 Angry Men" },
  { title: "Schindler's List" },
  { title: "Pulp Fiction" },
];

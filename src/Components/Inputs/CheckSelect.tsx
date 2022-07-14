import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Arrow from "../../Assets/images/Arrow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";






import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function CheckSelect() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    // <Autocomplete
    //   fullWidth
    //   multiple
    //   sx={{ width: "100%", margin: "0px" }}
    //   id="checkboxes-tags-demo"
    //   options={top100Films}
    //   disableCloseOnSelect
    //   onChange={() => {
    //     console.log(check.current);
    //   }}
    //   popupIcon={<Arrow />}
    //   getOptionLabel={(option) => option.title}
    //   renderOption={(props, option, { selected }) => (
    //     <li {...props} ref={check}>
    //       <Checkbox
    //         className="checkIcon"
    //         checkedIcon={<CheckBoxIcon fontSize="small" />}
    //         style={{ marginRight: 8 }}
    //         checked={selected}
    //       />
    //       {option.title}
    //     </li>
    //   )}
    //   renderInput={(params) => (
    //     <TextField {...params} label="Checkboxes" placeholder="Favorites" />
    //   )}
    // />
    <FormControl>
    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
    <Select
    className='selectInput'
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label="Tag" />}
      renderValue={(selected) => selected.join(', ')}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name}>
          <Checkbox checked={personName.indexOf(name) > -1} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
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

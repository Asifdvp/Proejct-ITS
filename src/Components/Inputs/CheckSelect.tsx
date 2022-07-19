import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Arrow from "../../Assets/images/Arrow";
import CheckIcon from "../../Assets/Svg/CheckIcon";
import CheckedIcon from "../../Assets/Svg/CheckedIcon";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';

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
    <FormControl>
    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
    <Select
      IconComponent={Arrow}
      className='check-select'
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label="Tag" />}
      renderValue={(selected) => selected.join(', ')}
    >
      {names.map((name) => (
        <MenuItem className="check" key={name} value={name}>
          <Checkbox checkedIcon={<CheckedIcon/>} icon={<CheckIcon/>}  checked={personName.indexOf(name) > -1} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  );
}



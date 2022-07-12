import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import * as startOfDay from "date-fns";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
export default function DateInput() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack component="form" noValidate spacing={3}>
  <DesktopDatePicker
          label="Başlama Tarixi"
          inputFormat="dd.MM.yy"
          value={value}
          minDate={new Date('2017-01-01')}
          components={{
            OpenPickerIcon: CalendarTodayIcon 
          }}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
  
    </Stack>
    </LocalizationProvider>
  );
}

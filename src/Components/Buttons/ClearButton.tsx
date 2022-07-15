import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './style.css';
import ClearIcon from '@mui/icons-material/Clear';
import ClearBtnIcon from '../../Assets/Svg/ClearBtnIcon';

export default function   ClearButton() {
  return (
    <Fab className="clearBtn" size="small" aria-label="remove" >
       
        <ClearBtnIcon/>
      </Fab>
  );
}

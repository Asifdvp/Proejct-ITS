import { Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './style.css';
import AddBtnIcon from '../../Assets/Svg/AddBtnIcon';
const AddButton = () => {
  return (
    <Fab className="addBtn"  aria-label="add"  >
   <AddBtnIcon/>
  </Fab>
  )
}

export default AddButton
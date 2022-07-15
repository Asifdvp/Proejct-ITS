import { Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './style.css';
const AddButton = () => {
  return (
    <Fab className="addBtn"  aria-label="add" size="medium" >
    <AddIcon   />
  </Fab>
  )
}

export default AddButton
import { Button, Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './style.css';
import AddButton from './AddButton';
import AddTextButtonIcon from './AddTextButtonIcon';
const AddTextButton = () => {
  return (
    <Button
    className="addBtnText"
    variant="text"
    color="secondary"
    startIcon={<AddTextButtonIcon/>}
>
Əlavə Et
</Button>
  )
}

export default AddTextButton
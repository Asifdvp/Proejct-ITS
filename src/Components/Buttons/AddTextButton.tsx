import { Button } from '@mui/material'
import React from 'react'
import './style.css';
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
import { Button, Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './style.css';
const Elave = () => {
  return (
    <Button
    variant="text"
    color="secondary"
    startIcon={<AddIcon/>}
>
Əlavə Et
</Button>
  )
}

export default Elave
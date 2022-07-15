import { Fab } from '@mui/material'
import React from 'react'
import AddTextBtnIcon from '../../Assets/Svg/AddTextBtnIcon'

const AddTextButtonIcon = () => {
  return (
    <Fab className="addBtn addTextBtn"  aria-label="add"  >
    <AddTextBtnIcon/>
   </Fab>
  )
}

export default AddTextButtonIcon
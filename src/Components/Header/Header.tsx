import React from 'react'
import Grid from '@mui/material/Grid';
import './style.css';
import HeaderLogo from '../../Assets/Svg/HeaderLogo';
import Avatar from '../../Assets/Svg/Avatar';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '../../Assets/Svg/MenuIcon';
import { Container } from '@mui/material';
import ContainedButton from '../Buttons/ContainedButton';






const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


return (



    <div className="header-root">

        <Grid container className='header-main'  >
        <Grid item >
        <HeaderLogo/>
        </Grid>
     
        <Grid item >
      <Grid container className='user-menu'>
<Grid item>
    <Avatar/>
</Grid>
<Grid item >
<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<MenuIcon/>}
        className="avatar-name"
      >
       Ağarəhim Quluzadə
      </Button>
      <Menu
        id="basic-menu"
        className='header-avatar-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className="head-menu-item" onClick={handleClose}>Profildən Çıx</MenuItem>
      
      </Menu>
</Grid>
      </Grid>
        </Grid>
     
      </Grid>
       
    
  
    </div>
  )
}

export default Header
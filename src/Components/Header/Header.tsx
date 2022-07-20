<<<<<<< HEAD
import React from "react";
import Grid from "@mui/material/Grid";
import "./style.css";
import HeaderLogo from "../../Assets/Svg/HeaderLogo";
import Avatar from "../../Assets/Svg/Avatar";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "../../Assets/Svg/MenuIcon";
import { Container } from "@mui/material";
import ContainedButton from "../Buttons/ContainedButton";
import LogoutIcon from "../../Assets/Svg/LogoutIcon";

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
=======
import React from 'react'
import Grid from '@mui/material/Grid';
import './style.css';
import HeaderLogo from '../../Assets/Svg/HeaderLogo';
import Avatar from '../../Assets/Svg/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '../../Assets/Svg/MenuIcon';
import LogoutIcon from '../../Assets/Svg/LogoutIcon';
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
>>>>>>> 9ec0cdf77d233f5cf7e003937715a10288cd59fe
    <div className="header-root">
      <Grid container className="header-main">
        <Grid item>
          <HeaderLogo />
        </Grid>
<<<<<<< HEAD
=======
     
        <Grid item >
      <Grid container className='user-menu'>
{/* <Grid item>
  
</Grid> */}
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
        <Grid container className='avatarIcon-and-name' columnSpacing={{ xs: 2, sm: 2, md: 2 }} >
          <Grid item sx={{height:"40px"}} >  <Avatar/></Grid>
          <Grid item >AgaRehim Quluzade</Grid>
        </Grid>
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
        <MenuItem    
        className="head-menu-item" onClick={handleClose}>
          <Grid container spacing={1} >
<Grid item>  <LogoutIcon/> </Grid>
<Grid item>Profildən Çıx</Grid>
          </Grid>
         </MenuItem>
      
      </Menu>
</Grid>
      </Grid>
        </Grid>
     
      </Grid>
       
    
  
    </div>
  )
}
>>>>>>> 9ec0cdf77d233f5cf7e003937715a10288cd59fe

        <Grid item>
          <Grid container className="user-menu">
            <Grid item>
              <Avatar />
            </Grid>
            <Grid item>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<MenuIcon />}
                className="avatar-name"
              >
                Ağarəhim Quluzadə
              </Button>
              <Menu
                id="basic-menu"
                className="header-avatar-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem className="head-menu-item" onClick={handleClose}>
                  <Grid container spacing={1}>
                    <Grid item>
                      {" "}
                      <LogoutIcon />{" "}
                    </Grid>
                    <Grid item>Profildən Çıx</Grid>
                  </Grid>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

import React, {useState} from "react";
import {Menu } from '@mui/icons-material';
import './Header.css'
// import RestaurantIcon from '@mui/icons-material/Restaurant';
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import logo from '../../images/logo.svg'
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileOpen ,setMobileOpen] = useState(false);

  // handle menu click 
  const handleDrawer = ()=>{
    setMobileOpen(!mobileOpen);
  }
  // menu Drawer 
  const drawer = (
    <Box onClick={handleDrawer} sx={{textAlign:'center'}} >
           <Typography
          color={"goldenrod"}
          component='div'
          sx={{flexGrow:1}}
          >
          <img src={logo} width='220' height='70' alt="" />
          </Typography>
          <Divider/>
            <ul className="mobile-navigation">
              <li>
                <NavLink activeclassname='active' to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
    </Box>
  )
  return (<>
    <Box sx={{"@media (max-width:600px)":{mb:2}}}>
      <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{
            mr:2,
            display:{sm:'none'}
            }}
            onClick={handleDrawer}
          >
            <Menu/>
          </IconButton>

          <Typography
          color={"goldenrod"}
          component='div'
          sx={{flexGrow:1}}
          >
            <img src={logo}width='250' height='70' alt="" />
          </Typography>
          <Box sx={{display:{xs:'none',sm:'block'}}}>
            <ul className="navigation-menu">
              <li>
                <NavLink activeclassname='active' to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box  component={'nav'}>
        <Drawer variant="temporary"  open={mobileOpen}
        onClose={handleDrawer}
         sx={{display:{xs:'block', sm:'none'},
         "& .MuiDrawer-paper":
         {boxSizing:"border-box",
         width:"240px"}
         }}
         >
          {drawer}
        </Drawer>
        <Box>
         <Toolbar/>
        </Box>
      </Box>
    </Box>
  </>
  );
};

export default Header;

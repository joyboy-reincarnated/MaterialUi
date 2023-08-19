import { GitHub, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return(<>
    <Box sx={{textAlign:"center",bgcolor:'#1A1A19', color:'white',p:3 }}>
        <Box sx={{ my:3,"& svg":{
            fontSize:'60px',
            cursor:'pointer',
            mr:2,
            '@media (max-width:600px)':{
                    fontSize:"3rem",
                },
            },"& svg:hover":{
                transition:'all 0.4s,',
                transform: 'translateY(-5px)',
                color:'goldenrod'

            }
            
        }} >
            <Instagram/>
            <Twitter/>
            <GitHub/>
            <YouTube/>
        </Box>
        <Typography variant="h5"
        sx={{"& svg:hover":{
            transition:'all 0.4s,',
            transform: 'translateY(-5px)',
            color:'goldenrod'

        },
            '@media (max-width:600px)':{
                fontSize:"1rem",
            },
        }}>
            All Rights Reserved &copy; VijayCodes
        </Typography>
    </Box>
  
  </>

  );
};

export default Footer;

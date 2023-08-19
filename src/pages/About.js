import { Box } from "@mui/system";
import React from "react";
import Layout from "../components/Layout/Layout";
import Typography from '@mui/material/Typography'

const About = () => {
  return( 
  <Layout>
      <Box
      sx={{
        m:10,
        textAlign:"center",
        "& p":{
          textAlign:'justify',
        },
        "& h4":{
          my:2,
          fontSize:'2rem',
        },
        "@media (max-width:600px)":{
          mt:5,
          mx:5,
          "& h4":{
            fontSize:'1.5rem'
          }
        }
      }}
      >
        <Typography  variant="h4"> Welcome To My Restaurant</Typography>
        <p>At My Restaurant, we are passionate about delivering a remarkable dining experience that tantalizes your taste buds and creates unforgettable memories. Our culinary journey is a fusion of flavors, creativity, and dedication to excellence, all carefully curated to bring you a truly extraordinary dining adventure.</p>
        <br /> 
        <Typography variant="h5"></Typography>
        <p> Discover a World of Flavor: Step into a world where each dish tells a story, and every bite is an exploration of taste. Our diverse menu draws inspiration from global cuisines, using only the finest, freshest ingredients to craft dishes that are both innovative and comforting. From savory starters to indulgent desserts, we offer a range of options that cater to every palate</p>
        <p>
        Our commitment to providing exceptional service goes beyond the plate. Our friendly and attentive staff is here to make your dining experience seamless and enjoyable. Whether you're celebrating a special occasion or simply looking for a delightful meal, our team is dedicated to ensuring your visit is nothing short of extraordinary.
        </p>
      </Box>
  </Layout>
  );
};

export default About;

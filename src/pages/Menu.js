import { MenuList } from "../data/data";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../components/Layout/Layout";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Menu = () => {
    return (
    <Layout>
       <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',pt:2}}>
        {
            MenuList.map(item=>(
                <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
                    <CardActionArea>
                        <CardMedia
                        sx={{minHeight:'400px'}}
                        component={'img'}
                        src={item.image}
                        alt={item.name}
                        />
                        <CardContent>
                            <Typography
                            variant="h5"
                            gutterBottom  component={'div'}
                            >
                                {item.name}
                            </Typography>
                            <Typography variant="body2">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))
        }
       </Box>
    </Layout>
    );
};

export default Menu;

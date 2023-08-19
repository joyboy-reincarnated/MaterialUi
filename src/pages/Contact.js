import { Call, Mail, SupportAgent } from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10,
          mx: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
          "@media (max-width:600px) ": { m: 5 },
        }}
      >
        <Typography variant="h4">Contact My Restaurant</Typography>
        <Typography sx={{mb:'1px'}}>
          We're thrilled to connect with you and assist in any way we can. Feel
          free to reach out to us with your questions, feedback, or reservation
          requests. Your satisfaction and experience at  My Restaurant 
          are of utmost importance to us.
        </Typography>

        <Typography sx={{py:1}}>
          To make a reservation, kindly give us a call during our operating
          hours or use our convenient online reservation system . Whether it's
          an intimate dinner for two or a gathering of friends, we'll ensure
          your dining experience at My Restaurant is exceptional.
        </Typography>

        <Typography sx={{py:1}}>
          We value your thoughts and suggestions. If you have any feedback about
          your recent visit or any inquiries regarding our menu, services, or
          events, please don't hesitate to get in touch. We're here to make your
          experience memorable and delightful.
        </Typography>
        <Typography
          sx={{ pt: 1}}>
          Looking to host a special event at [Your Restaurant Name]? Our team is
          ready to help you create a memorable occasion. Whether it's a birthday
          celebration, corporate gathering, or any other special event, we can
          customize our offerings to meet your needs. Contact us to discuss your
          requirements and let us bring our culinary expertise to your event.
        </Typography>
      </Box>
      <Box
        sx={{
          m: 10,
          width: "600px",
          "@media (max-width:600px) ": { m: 5, width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white", textAlign: "center" }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{ color: "red", pt: 1 }} /> 9811767538 (Toll
                  Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Mail sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Call sx={{ color: "green", pt: 1 }} /> 9811767538
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;

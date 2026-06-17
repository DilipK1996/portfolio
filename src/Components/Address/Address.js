import React from "react";
import "../Address/Address.css";
import { Grid, Typography } from "@mui/material";
const Address = () => {
  return (
    <Grid container spacing={2} className="address">
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Grid className="add-head-main">
          <Typography variant="h6" className="head">
            Address
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Grid className="permanent">
          <Typography variant="h6" className="add-head">
          Permanent  Address
          </Typography>
          <Grid className="temp_main">
            <Grid>Village</Grid>-<Grid className="temp_main_item">Hajouli</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>Post</Grid>-<Grid className="temp_main_item">Hajouli</Grid>
          </Grid>
        
          <Grid className="temp_main">
            <Grid>District</Grid>-<Grid className="temp_main_item">Ballia</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>State</Grid>-
            <Grid className="temp_main_item">Uttar Pradesh</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>Nationality</Grid>-
            <Grid className="temp_main_item">Indian</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>Pin Code</Grid>-<Grid className="temp_main_item">221701</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Grid className="temperary">
          <Typography variant="h6" className="add-head">
          Temporary  Address
          </Typography>
         
          <Grid className="temp_main">
            <Grid>House No</Grid>-<Grid className="temp_main_item">A-82</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>Street No</Grid>-<Grid className="temp_main_item">7</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>City Name</Grid>-<Grid className="temp_main_item">New Ashok Nagar</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>State</Grid>-<Grid className="temp_main_item">New Delhi</Grid>
          </Grid>
          <Grid className="temp_main">
            <Grid>Nationality</Grid>-
            <Grid className="temp_main_item">Indian</Grid>
          </Grid>
          <Grid className="temp_main">
          <Grid>Pin Code</Grid>-<Grid className="temp_main_item">110096</Grid>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Address;

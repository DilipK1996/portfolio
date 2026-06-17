import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { skillsData } from "./SkillsData";
import "../SkillsCoontaint/SkillsContainer.css";
const SkillsContainer = () => {
  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {skillsData.map((item, index) => (
        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              p: 2,
              borderRadius: 2,
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: 110,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#222",
                borderRadius: 1,
                mb: 2,
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                image={item.logo}
                alt={`${item.skillsName} logo`}
                sx={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#fff", fontWeight: 700 }}
              >
                {item.skillsName}
              </Typography>
              <Typography variant="body2" color="#ccc">
                {item.skillsDesc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsContainer;

// <Grid container spacing={2} }} >
// {skillsData.map((data, index) => (
//   <Grid item lg={3} md={6} sx={6} xs={12} key={index} className="card_main books">
//    <Grid className="card_items" >
//    <Typography variant="h5" className="text">{data.skillsName}</Typography>
//    <Grid className="images">
//    <img src={data.logo}/>
//  </Grid>

//  <Grid className="text_desc">{data.skillsDesc}</Grid>
//    </Grid>
//   </Grid>
// ))}
// </Grid>

// <CardMedia
//   component="img"
//   sx={{
//     width: "100%",
//     height: 140,
//     objectFit: "cover",
//     backgroundColor: "#2e2a2a",
//   }}
//   image={item.logo}
//   title={item.skillsName}
//   alt={`${item.skillsName} logo`}
// />

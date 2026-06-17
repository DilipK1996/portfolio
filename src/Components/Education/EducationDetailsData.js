// import { Grid, Typography } from "@mui/material";
// import React from "react";
// import "../Education/Education.css";

// const EducationDetailsData = () => {
//   return (
//     <div className="education">
//       <Grid className="edu_main">
//         <Typography className="main_head">High School</Typography>
//         <Grid container className="edu_sub_main">
//           <Grid item lg={1.5} md={2} sm={2.5} xs={2.6} className="edu_details_head">
//             <Grid className="edu_Name">School Name </Grid>
//             <Grid className="edu_Name">Board </Grid>
//             <Grid className="edu_Name">Passing Year </Grid>
//             <Grid className="edu_Name">Location </Grid>
//           </Grid>
//           <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.4} className="edu_details_sep">
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//           </Grid>
//           <Grid item lg={10} md={9.5} sm={8.5} xs={9}className="edu_details_data">
//             <Grid className="edu_Name">
//               St. Xavier's Convent School Dharahara, Ballia (UP)
//             </Grid>
//             <Grid className="edu_Name">CBSE</Grid>
//             <Grid className="edu_Name">2011</Grid>
//             <Grid className="edu_Name">Dharahara, Ballia (UP)</Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid className="edu_main">
//         <Typography className="main_head">Intermediate</Typography>
//         <Grid container className="edu_sub_main">
//           <Grid item lg={1.5} md={2} sm={2.5} xs={2.6} className="edu_details_head">
//             <Grid className="edu_Name">School Name </Grid>
//             <Grid className="edu_Name">Board </Grid>
//             <Grid className="edu_Name">Passing Year </Grid>
//             <Grid className="edu_Name">Location </Grid>
//           </Grid>
//           <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.4} className="edu_details_sep">
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//           </Grid>
//           <Grid item lg={10} md={9.5} sm={8.5} xs={9}className="edu_details_data">
//             <Grid className="edu_Name">
//               Pt Shri Niwas Inter College Pandeypur Nagra, Ballia (UP)
//             </Grid>
//             <Grid className="edu_Name">Uttar Pradesh Board</Grid>
//             <Grid className="edu_Name">2014</Grid>
//             <Grid className="edu_Name">Nagara Ballia (UP)</Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid className="edu_main">
//         <Typography className="main_head">Graduation</Typography>
//         <Grid container className="edu_sub_main">
//           <Grid item lg={1.5} md={2} sm={2.5} xs={2.6} className="edu_details_head">
//             <Grid className="edu_Name">University Name</Grid>
//             <Grid className="edu_Name">Degree </Grid>
//             <Grid className="edu_Name">Stream </Grid>
//             <Grid className="edu_Name">Passing Year </Grid>
//             <Grid className="edu_Name">Location </Grid>
//           </Grid>
//           <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.4} className="edu_details_sep">
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//             <Grid className="edu_Name"> :-</Grid>
//           </Grid>
//           <Grid item lg={10} md={9.5} sm={8.5} xs={9}className="edu_details_data">
//             <Grid className="edu_Name">
//               Umma Nath Singh Institute Of Engineering and Technology, Jaunpur
//               (UP)
//             </Grid>
//             <Grid className="edu_Name">B.Tech</Grid>
//             <Grid className="edu_Name">Information Technology</Grid>
//             <Grid className="edu_Name">2019</Grid>
//             <Grid className="edu_Name">Jaunpur</Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default EducationDetailsData;

import { Grid, Typography } from "@mui/material";
import React from "react";
import "../Education/Education.css";

const EducationDetailsData = () => {
  return (
    <div className="education">
      <Grid className="edu_main">
        <Typography className="main_head">High School</Typography>
        <Grid className="edu_item">
          <Grid className="edu_Name">School Name :-</Grid>
          <Grid className="edu_value">
            St. Xavier's Convent School Dharahara, Ballia (UP)
          </Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Board :-</Grid>
          <Grid className="edu_value">CBSE</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Passing Year :-</Grid>
          <Grid className="edu_value">2011</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Location :-</Grid>
          <Grid className="edu_value">Dharahara, Ballia (UP)</Grid>
        </Grid>
      </Grid>
      <Grid className="edu_main">
        <Typography className="main_head">Intermediate</Typography>
        <Grid className="edu_item">
          <Grid className="edu_Name">School Name :-</Grid>
          <Grid className="edu_value">
          Pt Shri Niwas Inter College Pandeypur Nagra, Ballia (UP)
          </Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Board :-</Grid>
          <Grid className="edu_value">Uttar Pradesh Board</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Passing Year :-</Grid>
          <Grid className="edu_value">2014</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Location :-</Grid>
          <Grid className="edu_value">Nagara Ballia (UP)</Grid>
        </Grid>
      </Grid>
      <Grid className="edu_main">
        <Typography className="main_head">Graduation</Typography>
        <Grid className="edu_item">
          <Grid className="edu_Name">University Name :-</Grid>
          <Grid className="edu_value">
          Umma Nath Singh Institute Of Engineering and Technology, Jaunpur
          </Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Degree :-</Grid>
          <Grid className="edu_value">B.tech</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Stream :-</Grid>
          <Grid className="edu_value">Information Technology</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Passing Year :-</Grid>
          <Grid className="edu_value">2019</Grid>
        </Grid>
        <Grid className="edu_item">
          <Grid className="edu_Name">Location :-</Grid>
          <Grid className="edu_value">Jaunpur (UP)</Grid>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default EducationDetailsData;

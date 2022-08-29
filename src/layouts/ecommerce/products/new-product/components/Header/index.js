/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState, useEffect } from "react";

// @mui material components
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import { Grid } from "@mui/material";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard PRO React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Table } from 'react-bootstrap';

// Soft UI Dashboard PRO React icons
// import Cube from "examples/Icons/Cube";
// import Document from "examples/Icons/Document";
// import Settings from "examples/Icons/Settings";

// Soft UI Dashboard PRO React base styles
// import breakpoints from "assets/theme/base/breakpoints";

// Custom styles for Header
// import styles from "layouts/pages/profile/components/Header/styles";

// Images
// import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  // const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  // const [tabValue, setTabValue] = useState(0);
  // const classes = styles();

  // useEffect(() => {
  //   // A function that sets the orientation state of the tabs.
  //   function handleTabsOrientation() {
  //     return window.innerWidth < breakpoints.values.sm
  //       ? setTabsOrientation("vertical")
  //       : setTabsOrientation("horizontal");
  //   }

  /** 
   The event listener that's calling the handleTabsOrientation function when resizing the window.
  */
  // window.addEventListener("resize", handleTabsOrientation);

  // Call the handleTabsOrientation function to set the state with the initial value.
  // handleTabsOrientation();

  // Remove event listener on cleanup
  //   return () => window.removeEventListener("resize", handleTabsOrientation);
  // }, [tabsOrientation]);

  // const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SuiBox position="relative">
      <DashboardNavbar />
      <Grid py={5}>
        <SuiTypography variant="h2" fontWeight="medium" style={{ color: 'green', textAlign: "center" }}>
          Running STPs at BSE
        </SuiTypography>
      </Grid>

      <Grid container spacing={1} py={1}>
        {/* <Grid item xs={12} lg={4}>
            <ProductImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid> */}
        <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}> Name</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Total STP Amount</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>STP Count</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ Color: "#038d8a", padding: "10px" }}>PARDEEP</td>
              <td>7,00000,00</td>
              <td>9</td>
              <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
            </tr>
            <tr>
              <td style={{ Color: "#038d8a", padding: "10px" }}>Anukriti Bhattad</td>
              <td>7,00000,00</td>
              <td>9</td>
              <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
            </tr>
            <tr>
              <td style={{ Color: "#038d8a", padding: "10px" }}>ATUL GARG</td>
              <td>7,00</td>
              <td>9</td>
              <td style={{ Color: "#038d8a" }}>
                <a href="/user/addfamily/120">View</a>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", fontWeight:"bold" }}>Total</td>
              <td style={{fontWeight:"bold"}}>7,00</td>
              <td style={{fontWeight:"bold"}}>9</td>
              <td>Nill</td>
            </tr>
          </tbody>
        </Table>
      </Grid>
      {/* <SuiBox customClass={classes.profileHeader_background} /> */}
      {/* <Card className={classes.profileHeader_profile}> */}
      {/* <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              customClass="shadow-sm"
            />
          </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5}>
              <SuiTypography variant="h5" fontWeight="medium">
                Alex Thompson
              </SuiTypography>
              <SuiTypography variant="button" textColor="text" fontWeight="medium">
                CEO / Co-Founder
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="ml-auto">
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                className="bg-transparent"
              >
                <Tab label="App" icon={<Cube />} />
                <Tab label="Message" icon={<Document />} />
                <Tab label="Settings" icon={<Settings />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid> */}
      {/* </Card> */}
    </SuiBox>
  );
}

export default Header;

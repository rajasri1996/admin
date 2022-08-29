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

import { useState, useEffect } from "react";

// @mui material components

import Grid from "@mui/material/Grid";


// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard PRO React example components
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";



// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";


import { Table } from 'react-bootstrap';

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  // const [tabValue, setTabValue] = useState(0);
  // const classes = styles();
  const { values } = breakpoints;

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }
    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  // const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SuiBox position="relative">
      {/* <DashboardNavbar absolute light /> */}
      {/* <SuiBox customClass={classes.profileHeader_background} /> */}
    
      <Grid container>
        <Grid item xs={12} lg={12}>
          <SuiBox mb={3} p={1}>
            <SuiTypography
              variant={window.innerWidth < values.sm ? "h3" : "h2"}
              textTransform="capitalize"
              fontWeight="bold"
              textAlign="center"
            >
              <h1 style={{ color: "#229954" }}> SIP Reports</h1>
            </SuiTypography>
          </SuiBox>
         
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <SuiBox mb={3}>
                <MiniStatisticsCard
                  title={{ text: "AMC Wise SIP"}}
                  // count="Rs.53,000"
                  percentage={{ color: "success", text: "" }}
                  icon={{ color: "", component: "" }}
                  // backgroundColor="#F9DDAB;"

                />
              </SuiBox>
              <MiniStatisticsCard
                title={{ text: "Scheme Wise SIP" }}
                // count="Rs. 2,300"
                percentage={{ color: "success", text: "" }}
                icon={{ color: "", component: "" }}
                // backgroundColor="#F9DDAB;"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <SuiBox mb={3}>
                <MiniStatisticsCard
                  title={{ text: "Client Wise SIP" }}
                  // count="Rs.53,000"
                  percentage={{ color: "success", text: "" }}
                  icon={{ color: "", component: "" }}
                // backgroundColor="#F9DDAB;"
                />
              </SuiBox>
         
            </Grid>
            <Grid item xs={12} sm={3}>
              <SuiBox mb={3}>
                <MiniStatisticsCard
                  title={{ text: "SIP Maturing in 1 Month" }}
                  // count="Rs.3,462"
                  percentage={{ color: "error", text: "" }}
                  icon={{ color: "", component: "" }}
                  // backgroundColor="#F9DDAB;"
                />
              </SuiBox>
             
            </Grid>
            <Grid item xs={12} sm={3}>
              <SuiBox mb={3}>
                <MiniStatisticsCard
                  title={{ text: "SIP Started in last 1 Month" }}
                  // count="3,462"
                  percentage={{ color: "error", text: "" }}
                  icon={{ color: "", component: "" }}
                  // backgroundColor="#F9DDAB;"
                />
              </SuiBox>
            
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} lg={12} py={3}>
          <Grid item xs={15} lg={12}>
            <SuiBox mb={3}>
              {/* <SalesTable title="portfolio " rows={salesTableData} /> */}
              <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
                  <thead>
                  <tr>
                  <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Scheme Name</th>
                  <th style={{  backgroundColor: "rgb(249, 221, 171)", padding: "15px"}}>No Of SIPS</th>
                  <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>SIP Input</th>
                </tr>
                  </thead>
                  <tbody>
                <tr>
                  <td style={{ Color: "#038d8a", padding: "10px" }}>Balanced Advantage Fund Growth</td>
                  <td>1</td>
                  <td>30,000</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "900", backgroundColor: "#ddd" ,padding:"10px"}}>Total</td>
                  <td style={{ fontWeight: "900", backgroundColor: "#ddd" }}>1</td>
                  <td style={{ fontWeight: "900", backgroundColor: "#ddd" }}>30,000</td>
                </tr>
                  </tbody>
                </Table>
            </SuiBox>
          </Grid>
         
        </Grid>
      </Grid>
    </SuiBox>

  );
}

export default Header;

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
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard PRO React example components
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard PRO React icons
// import Cube from "examples/Icons/Cube";
// import Document from "examples/Icons/Document";
// import Settings from "examples/Icons/Settings";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";



function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  useEffect(() => {

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

       <br />
      <h2 style={{ color: 'green', textAlign: 'center' }}>SIP Reports</h2>

      <br />

      <hr style={{ color: 'red' }} />

      <Grid py={10}>
        <Grid item xs={12} md={10} lg={12} py={3}>
          <Grid item xs={15} lg={12}>
            <SuiBox mb={3}>

              <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
                
                <thead>

                  <tr>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}> <Link to="/dashboards/pages/users/reports" >AMC Wise SIP</Link></th>

                    <th style={{ padding: "15px", borderColor: 'white', width: '200px' }}>Scheme Wise SIP</th>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}><Link to="/pages/projects/new-project" >Client Wise SIP</Link></th>


                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}><Link to="/pages/projects/general" >SIP Maturing in 1 Month</Link></th>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}><Link to="/pages/projects/timeline" >SIP Maturing in 1 Month</Link></th>

                  </tr>

                </thead>

              </Table>

              <br />

              <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
                <thead>

                  <tr>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Scheme Name</th>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>No Of SIPS</th>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>SIP Input</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td style={{ Color: "#038d8a", padding: "15px" }}> <Link to="/pages/projects/timeline" >Axis Small Cap Fund Growth</Link></td>
                    <td>1</td>
                    <td>2,500</td>
                  </tr>

                  <tr>
                    <td style={{ padding: "15px" }}> <Link to="/pages/projects/timeline" >Balanced Advantage Fund Growth</Link></td>
                    <td style={{ padding: "15px" }}>1</td>

                    <td style={{ padding: "15px" }}>30,000</td>

                  </tr>

                  <tr>
                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: "15px" }}>Total</td>

                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: "15px" }}>1</td>

                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: "15px" }}>30,000</td>

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

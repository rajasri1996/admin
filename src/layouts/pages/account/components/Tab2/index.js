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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import { Link } from "react-router-dom";

function BaseLayout({ stickyNavbar, children }) {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);

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

    const handleSetTabValue = (event, newValue) => setTabValue(newValue);

    return (

        <DashboardLayout>
            <DashboardNavbar absolute={!stickyNavbar} isMini />
            <SuiBox>
                <SuiBox mt={stickyNavbar ? 3 : 10}>
                    <Grid container p={3}>
                        <Grid item xs={10} sm={12} lg={12}>
                            <AppBar position="static">
                                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue} style={{ height: '90px' }}>
                                    <Tab label="  AUM (User Wise)" style={{ fontWeight: "bold" }}/>

                                    <Tab label="AUM (AMC Wise)" style={{ fontWeight: "bold" }}/>

                                    <Tab label="AUM (Scheme Wise) " style={{ fontWeight: "bold" }}/>
                                    
                                    <Tab label="AUM (RTA wise)" style={{ fontWeight: "bold" }}/>
                                </Tabs>
                            </AppBar>
                        </Grid>
                    </Grid>
                    {children}
                </SuiBox>
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

// Setting default values for the props of BaseLayout
BaseLayout.defaultProps = {
    stickyNavbar: false,
};

// Typechecking props for BaseLayout
BaseLayout.propTypes = {
    stickyNavbar: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default BaseLayout;

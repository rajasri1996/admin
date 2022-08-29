import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import breakpoints from "assets/theme/base/breakpoints";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function BaseLayout({ stickyNavbar }) {

    const { values } = breakpoints;

    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
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

    }, [tabsOrientation]);

    return (

        <DashboardLayout>
            <DashboardNavbar />

            <SuiBox>


                <SuiBox mb={3} p={3}>
                    <SuiTypography
                        variant={window.innerWidth < values.sm ? "h3" : "h2"}
                        textTransform="capitalize"
                        fontWeight="bold"
                    >
                        Download SOA (0)
                    </SuiTypography>
                </SuiBox>
                <SuiBox mt={stickyNavbar ? 3 : 10} >
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={12}>
                            <AppBar position="static">
                                <Tabs orientation={tabsOrientation} >
                                    <Tab label="User Id" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="User" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Holding Id" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Submitted On" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Link" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />
                                </Tabs>
                            </AppBar>
                        </Grid>
                    </Grid>
                </SuiBox>

            </SuiBox>
        </DashboardLayout>
    );
}

// Typechecking props for BaseLayout
BaseLayout.propTypes = {
    stickyNavbar: PropTypes.bool,

};
BaseLayout.defaultProps = {
    stickyNavbar: false,
};

export default BaseLayout;

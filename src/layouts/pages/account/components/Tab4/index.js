import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SuiBox from "components/SuiBox";
import breakpoints from "assets/theme/base/breakpoints";


function BaseLayout({ stickyNavbar }) {
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

        <SuiBox>
            <SuiBox mt={stickyNavbar ? 3 : 10}>
                <Grid container p={1}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <AppBar position="static">
                            <Tabs orientation={tabsOrientation} >
                                <Tab label=" AMC" style={{ fontWeight: "bold", fontSize: "18px" , margin: '10px'}}  />

                                <Tab label="Invested Amount"  style={{ fontWeight: "bold", fontSize: "18px" , margin: '10px'}} />

                                <Tab label="AUM" style={{ fontWeight: "bold", fontSize: "18px" , margin: '10px' }} />

                            </Tabs>
                        </AppBar>
                    </Grid>
                </Grid>
            </SuiBox>
        </SuiBox>

    );
}

// Setting default values for the props of BaseLayout
BaseLayout.defaultProps = {
    stickyNavbar: false,
};

// Typechecking props for BaseLayout
BaseLayout.propTypes = {
    stickyNavbar: PropTypes.bool,

};

export default BaseLayout;

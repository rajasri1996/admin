import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import SuiSelect from "components/SuiSelect";
import SuiButton from "components/SuiButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import breakpoints from "assets/theme/base/breakpoints";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function BaseLayout({ stickyNavbar }) {

    const { values } = breakpoints;


    const passwordRequirements = [

    ];

    const renderPasswordRequirements = passwordRequirements.map((item, key) => {
        const itemKey = `element-${key}`;

        return (

            <SuiBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
                <SuiTypography
                    variant="button"
                    textColor="text"
                    fontWeight="regular"
                    verticalAlign="middle"
                >
                    {item}
                </SuiTypography>
            </SuiBox>
        );
    });

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

            <SuiBox my={3}>
                <Card id="change-password">

                    <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
                        <SuiTypography
                            variant={window.innerWidth < values.sm ? "h3" : "h2"}
                            textTransform="capitalize"
                            fontWeight="bold"
                        >
                            Transfer
                        </SuiTypography>
                    </SuiBox>

                    <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                        <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                            {renderPasswordRequirements}
                        </SuiBox>

                    </SuiBox>

                    <SuiBox component="form" pb={3} px={3} p={3} mb={15}>

                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={12}>
                                        <Grid container spacing={3}>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                                                        <SuiTypography
                                                            component="label"
                                                            variant="caption"
                                                            fontWeight="bold"
                                                            textTransform="capitalize"

                                                        >
                                                            Trasfer Type
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[
                                                            { value: "Transfer User From One Advisor To Another Advisor", label: "Transfer User From One Advisor To Another Advisor" },

                                                            { value: "Transfer User From One Branch To Another Branch", label: "Transfer User From One Branch To Another Branch" },

                                                            { value: "Transfer Advisor From One Branch To Another Branch", label: "Transfer Advisor From One Branch To Another Branch" },

                                                            { value: "Transfer Advisor To Branch", label: "Transfer Advisor To Branch" },

                                                            { value: "", label: "", isDisabled: true },
                                                        ]}

                                                    />
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                                                        <SuiTypography
                                                            component="label"
                                                            variant="caption"
                                                            fontWeight="bold"
                                                            textTransform="capitalize"

                                                        >
                                                            From
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[
                                                            { value: "Select Advisor", label: "Select Advisor" },

                                                            { value: "Anuraag Advisor", label: "Anuraag Advisor" },

                                                            { value: "Testing - Adetee", label: "2020" },

                                                            { value: "Advisor Under Branch", label: "Advisor Under Branch" },

                                                            { value: "", label: "", isDisabled: true },
                                                        ]}

                                                    />
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4} >
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                                                        <SuiTypography
                                                            component="label"
                                                            variant="caption"
                                                            fontWeight="bold"
                                                            textTransform="capitalize"

                                                        >
                                                            To
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[

                                                            { value: "Select Advisor", label: "Select Advisor" },

                                                            { value: "Anuraag Advisor", label: "Anuraag Advisor" },

                                                            { value: "Testing - Adetee", label: "2020" },

                                                            { value: "Advisor Under Branch", label: "Advisor Under Branch" },

                                                            { value: "", label: "", isDisabled: true },
                                                        ]}
                                                    />
                                                </SuiBox>
                                            </Grid>  <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiButton variant="gradient" buttonColor="dark">
                                                        Submit
                                                    </SuiButton>
                                                </SuiBox>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </Card>

                <SuiBox mt={stickyNavbar ? 3 : 10}>
                    <Grid container p={1}>
                        <Grid item xs={12} sm={12} lg={12}>
                            <AppBar position="static">
                                <Tabs orientation={tabsOrientation} >
                                    <Tab label="Client Id" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Name" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Mobile" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Select" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />
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

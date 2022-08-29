import { useState, useEffect } from "react";
// import DataTable from "examples/Tables/DataTable";
// @mui material components
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Soft UI Dashboard PRO React example components

// import Tab4 from "layouts/pages/account/components/Tab4";
// Images
import Account from "layouts/applications/wizard/components/Account";
import About from "layouts/applications/wizard/components/About";


function Cameras() {

    const { values } = breakpoints;
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");

    const [camera, setCamera] = useState(0);

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.md
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

    const handleSetCamera = (event, newCamera) => setCamera(newCamera);
    // const columns =
    // {
    //     columns: [
    //         { Header: "Advisor Name", accessor: "value" },
    //         { Header: "AUM", accessor: "profit", align: "center" },
    //     ],

    //     rows: [
    //         {
    //             value: <h9 style={{ color: 'black' }}>Anuraag Advisor</h9>,
    //             profit: <h9 style={{ color: 'black' }}>0</h9>,
    //         },

    //         {
    //             value: <h9 style={{ color: 'black' }}>Testing-Adetee</h9>,
    //             profit: <h9 style={{ color: 'black' }}>0</h9>,
    //         },

    //         {
    //             value: <h9 style={{ color: 'black' }}>Advisor Under Branch</h9>,
    //             profit: <h9 style={{ color: 'black' }}>0</h9>,
    //         },

    //         {
    //             value: <h6 style={{ color: 'black' }}>Total</h6>,
    //             profit: <h6 style={{ color: 'black' }}>0</h6>
    //         },

    //     ],

    // }

    return (

        <DashboardLayout>
            <DashboardNavbar />
            <Card style={{ backgroundColor: "#f8f9fa" }}>

                <SuiBox mb={3} p={1}>
                    <SuiTypography
                        variant={window.innerWidth < values.sm ? "h3" : "h2"}
                        textTransform="capitalize"
                        fontWeight="bold"
                    >
                        Advisor Dashboard (4)
                    </SuiTypography>
                </SuiBox>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>

                    <SuiBox display="flex" justifyContent="space-between" alignItems="center" width="100%">
                        <SuiBox width="100%">
                            <AppBar position="static">
                                <Tabs orientation={tabsOrientation} value={camera} onChange={handleSetCamera}>
                                    <Tab label="AUM As On Current Date" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="Month Wise Report" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />
                                </Tabs>
                            </AppBar>
                        </SuiBox>

                    </SuiBox>
                </SuiBox>

                <SuiBox p={2} mt={1} width="100%" height="25rem">
                    <About/>
                    <Account />
                </SuiBox>
                
            </Card>

            {/* <SuiBox>
                <Card id="change-password" style={{ marginTop: "20px", backgroundColor: "#f8f9fa" }}>

                    <SuiBox mb={1}>
                        <SuiTypography variant="h5" fontWeight="medium">

                            AUM As On Current Date
                        </SuiTypography>
                    </SuiBox>
                    <SuiBox  >
                        <DataTable table={columns} entriesPerPage={false} />
                    </SuiBox>
                </Card>
            </SuiBox> */}

        </DashboardLayout>
    );
}

export default Cameras;

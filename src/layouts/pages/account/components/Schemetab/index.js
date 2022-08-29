import { useState, useEffect } from "react";
import DataTable from "examples/Tables/DataTable";
// @mui material components
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SuiBox from "components/SuiBox";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Soft UI Dashboard PRO React example components
import CameraView from "layouts/dashboards/smart-home/components/CameraView";

// Images
import camera1 from "assets/images/annie-spratt.jpg";
// import camera2 from "assets/images/bg-smart-home-2.jpg";
import camera3 from "assets/images/home-decor-3.jpg";
import General from "layouts/pages/projects/general";
import schemedatatable from "layouts/authentication/error/schemedatatable";

function Cameras() {
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

    return (

        <DashboardLayout>
            <DashboardNavbar />
            <Card>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>

                    <SuiBox display="flex" justifyContent="space-between" alignItems="center" width="100%">
                        <SuiBox width="100%">
                            <AppBar position="static">
                                <Tabs orientation={tabsOrientation} value={camera} onChange={handleSetCamera}>
                                    <Tab label="AUM (Scheme Wise)" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label=" AUM (User Wise) " style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="AUM (AMC Wise)" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="AUM (SchemeType) " style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                                    <Tab label="AUM (RTA Wise)" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />
                                </Tabs>
                            </AppBar>
                        </SuiBox>

                    </SuiBox>
                </SuiBox>

                <SuiBox p={2} mt={1} width="100%" height="24rem">
                    <CameraView image={camera1} date="17.05.2021" time="4:34PM" value={camera} index={0} />
                    <General />
                    <CameraView image={camera3} date="17.05.2021" time="4:57PM" value={camera} index={2} />
                </SuiBox>
            </Card>

            <SuiBox style={{ marginTop: '20px' }}>
                <Card id="change-password">
                    <SuiBox p={1}>
                        <DataTable table={schemedatatable} entriesPerPage={false} />
                    </SuiBox>
                </Card>
            </SuiBox>

        </DashboardLayout>
    );
}

export default Cameras;

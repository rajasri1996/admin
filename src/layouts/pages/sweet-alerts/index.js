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
import SuiTypography from "components/SuiTypography";

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

  const Columns =
  {

    columns: [
      { Header: "AMC Name", accessor: "InvestorName" },

      { Header: "No. Of STPS", accessor: "Location" },

      { Header: "STP Input", accessor: "Investments" },

      { Header: "Average STP Size", accessor: "Invest" },

      { Header: "Contribution", accessor: "Invests" },
    ],

    rows: [
      {
        InvestorName: <h8 style={{ color: "black" }}>Aditya Birla Sun Life Mutual Fund</h8>,

        Location: <h8 style={{ color: "black" }}>4</h8>,

        Investments: <h8 style={{ color: "black" }}>1,05,000</h8>,

        Invest: <h8 style={{ color: "black" }}>26250</h8>,

        Invests: <h8 style={{ color: "black" }}>47.09%</h8>,
      },

      {
        InvestorName: <h8 style={{ color: "black" }}>ICICI Prudential Mutual Fund</h8>,

        Location: <h8 style={{ color: "black" }}>4</h8>,

        Investments: <h8 style={{ color: "black" }}>1,08,000</h8>,

        Invest: <h8 style={{ color: "black" }}>27000</h8>,

        Invests: <h8 style={{ color: "black" }}>48.43%</h8>,
      },
    ],

  };



  return (

    <DashboardLayout>
      <DashboardNavbar />

      <SuiBox py={3} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
        <SuiBox>
          <SuiBox mb={3} p={1}>
            <SuiTypography
              variant={window.innerWidth < values.sm ? "h3" : "h2"}
              textTransform="capitalize"
              fontWeight="bold"
            >
              STP Reports
            </SuiTypography>
          </SuiBox>
        </SuiBox>

        <Card style={{ marginTop: "10px" }} >

          <SuiBox height="100%" mt={0.5} lineHeight={2}>
            <SuiTypography variant="h4" fontWeight="bold" style={{ color: "black", textAlign: 'center' }}>
              AMC Wise STP
            </SuiTypography>
          </SuiBox>

          <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>

            <SuiBox display="flex" justifyContent="space-between" alignItems="center" width="100%">
              <SuiBox width="100%">
                <AppBar position="static">
                  <Tabs orientation={tabsOrientation} value={camera} onChange={handleSetCamera}>

                    <Tab label="Scheme Wise STP" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                    <Tab label="Client Wise STP" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                    <Tab label="STP Maturing in 1 Month" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />

                    <Tab label="STP Maturing in Last 1 Month" style={{ fontWeight: "bold", fontSize: "18px", margin: '10px' }} />
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

        <SuiBox p={1} style={{ borderRadius: '15px', marginTop: "10px" }}>
          <Card id="change-password">
            <SuiBox  >
              <DataTable table={Columns} entriesPerPage={false} />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Cameras;

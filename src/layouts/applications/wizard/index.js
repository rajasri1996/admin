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

// import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Wizard page components
// import About from "layouts/applications/wizard/components/About";
// import Account from "layouts/applications/wizard/components/Account";
// import Address from "layouts/applications/wizard/components/Address";
import { Table } from 'react-bootstrap';

// function getSteps() {
//   return ["About", "Account", "Address"];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return <About />;
//     case 1:
//       return <Account />;
//     case 2:
//       return <Address />;
//     default:
//       return null;
//   }
// }

function Wizard() {
  // const [activeStep, setActiveStep] = useState(0);
  // const steps = getSteps();
  // const isLastStep = activeStep === steps.length - 1;

  // const handleNext = () => setActiveStep(activeStep + 1);
  // const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid py={5}>
        <SuiTypography variant="h2" fontWeight="medium" style={{ color: 'green', textAlign: "center" }}>
          STPs Registered at BSE
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
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Created On</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Start Date</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Order Id</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Active</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>User</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Mutual Fund</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>	Amount</th>
              <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ Color: "#038d8a", padding: "10px" }}>Jul 15, 2021, 2:29 PM</td>
              <td>Jul 16, 2021</td>
              <td>73029</td>
              <td >Yes</td>
              <td>Anil Kumar Rathi</td>
              <td>	ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH</td>
              <td>5000</td>
              <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
            </tr>
            <tr>
              <td style={{ Color: "#038d8a", padding: "10px" }}>Jul 15, 2021, 2:29 PM</td>
              <td>Jul 16, 2021</td>
              <td>73029</td>
              <td >Yes</td>
              <td>Anil Kumar Rathi</td>
              <td>	ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH</td>
              <td>5000</td>
              <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
            </tr>
            <tr>
              <td style={{ Color: "#038d8a", padding: "10px" }}>Jul 15, 2021, 2:29 PM</td>
              <td>Jul 16, 2021</td>
              <td>73029</td>
              <td >Yes</td>
              <td>Anil Kumar Rathi</td>
              <td>	ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH</td>
              <td>5000</td>
              <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
            </tr>
          </tbody>
        </Table>
      </Grid>
      {/* <SuiBox pt={3} pb={8}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <SuiBox mt={6} mb={1} textAlign="center">
              <SuiBox mb={1}>
                <SuiTypography variant="h3" fontWeight="bold">
                  Build Your Profile
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="regular" textColor="secondary">
                This information will let us know more about you.
              </SuiTypography>
            </SuiBox>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card>
              <SuiBox p={2}>
                <SuiBox>
                  {getStepContent(activeStep)}
                  <SuiBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <SuiBox />
                    ) : (
                      <SuiButton variant="gradient" buttonColor="light" onClick={handleBack}>
                        back
                      </SuiButton>
                    )}
                    <SuiButton
                      variant="gradient"
                      buttonColor="dark"
                      onClick={!isLastStep && handleNext}
                    >
                      {isLastStep ? "send" : "next"}
                    </SuiButton>
                  </SuiBox>
                </SuiBox>
              </SuiBox>
            </Card>
          </Grid>
        </Grid>
      </SuiBox> */}
      <Footer />
    </DashboardLayout>
  );
}

export default Wizard;

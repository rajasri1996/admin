// @mui material components
import Grid from "@mui/material/Grid";
import breakpoints from "assets/theme/base/breakpoints";
// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import Card from "@mui/material/Card";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import datatable4 from "layouts/authentication/error/datatable4";

function EditProduct() {

  const { values } = breakpoints;
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={1} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>

        <SuiBox p={2} >
          <SuiTypography
            variant={window.innerWidth < values.sm ? "h3" : "h3"}
            textTransform="capitalize"
            fontWeight="bold"
          >
            Email Login Details to Clients
          </SuiTypography>
        </SuiBox>

        <SuiBox >

          <Grid item xs={12} lg={6}>
            <SuiBox justifyContent="flex-end">
              <SuiButton variant="gradient" buttonColor="info" style={{ margin: "30px" }}>
                Apply
              </SuiButton>
            </SuiBox>
          </Grid>

          <Card id="change-password">
            <SuiBox p={3}>
              <DataTable table={datatable4} entriesPerPage={false} />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

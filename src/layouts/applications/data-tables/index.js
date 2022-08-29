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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
// import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
// import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
// import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import { Table } from 'react-bootstrap';

/* note- for add more pages /> */
// import DataTable from "examples/Tables/DataTable";
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <br />
      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Scheduler Logs
      </SuiTypography>


      <SuiBox my={3}>
        <hr style={{ color: 'red' }} />
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

            <thead>

              <tr>

                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Customer Name</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Intimation Type</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Capital Gains</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td style={{ padding: "10px" }}>ANURAAG SABOO</td>
                <td>	 Portfolio Valuation Report</td>
                <td>02-06-2022</td>
                <td>	Email sent successfully</td>
              </tr>

              <tr>
                <td style={{ padding: "10px" }}>ANURAAG SABOO</td>
                <td>	 Portfolio Valuation Report</td>
                <td>02-06-2022</td>
                <td>	Email sent successfully</td>
              </tr>

              <tr>
                <td style={{ padding: "10px" }}>ANURAAG SABOO</td>
                <td>	 Portfolio Valuation Report</td>
                <td>02-06-2022</td>
                <td>	Email sent successfully</td>
              </tr>

            </tbody>
          </Table>
        </Grid>
      </SuiBox>
      {/* <DataTable table={dataTableData} canSearch /> */}
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

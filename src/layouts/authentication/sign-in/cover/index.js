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

// import DataTable from "examples/Tables/DataTable";
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Table } from 'react-bootstrap';

function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h3" fontWeight="medium" style={{ textAlign: 'center' }}>
        Mandate Approved Users (10)
      </SuiTypography>

      <SuiBox my={3}>
        <hr />
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Name</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Type</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Id</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Amount</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Status</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Updated On</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Bank</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Bank Account Number</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Registration Date</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Approved Date</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate Rejection / Mandate Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fundexpert</td>
                <td> e-nach</td>
                <td>1053036</td>
                <td>100000</td>
                <td style={{ color: 'green', fontWeight: "bold" }}>APPROVED</td>
                <td>11/3/21, 5:09 PM</td>
                <td>ICICI BANK LIMITED</td>
                <td>005301025887</td>
                <td>Feb 7 2018 11:18AM</td>
                <td>09/02/2018</td>
                <td style={{ color: 'green', fontWeight: "bold" }}>APPROVED BY BSE /</td>
              </tr>
              <tr>
                <td>Fundexpert</td>
                <td> e-nach</td>
                <td>1053036</td>
                <td>100000</td>
                <td style={{ color: 'green', fontWeight: "bold" }}>APPROVED</td>
                <td>11/3/21, 5:09 PM</td>
                <td>ICICI BANK LIMITED</td>
                <td>005301025887</td>
                <td>Feb 7 2018 11:18AM</td>
                <td>09/02/2018</td>
                <td style={{ color: 'green', fontWeight: "bold" }}>APPROVED BY BSE /</td>
              </tr>
            </tbody>
          </Table>
          <ButtonToolbar aria-label="Toolbar with button groups" >
            <ButtonGroup className="me-2" aria-label="First group" >
              <Button>1 of 1</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Grid>
      </SuiBox>


      {/* <DataTable table={dataTableData} canSearch /> */}
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

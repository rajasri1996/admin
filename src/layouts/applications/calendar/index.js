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

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import dataTableData from "layouts/ecommerce/products/products-list/data/dataTableData";
import Grid from "@mui/material/Grid";
import { Table } from 'react-bootstrap';
// import { textAlign } from "@mui/system";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ProductsList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: "center" }}>
        Mandate Registered Users within last 1 month ( 1 )
      </SuiTypography>
      <br />

      <SuiBox my={3}>
        <hr />
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr >
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
                <td style={{ Color: "#038d8a", padding: "10px" }}>KAUSTUBH BHATTAD</td>
                <td>e-nach</td>
                <td>8829529</td>
                <td>100000</td>
                <td style={{ color: 'green', fontWeight: "bold" }}>APPROVED</td>
                <td>5/14/22, 10:37 AM</td>
                <td>HDFC BANK</td>
                <td>50100487221090</td>
                <td>May 11 2022 12:24PM</td>
                <td>14/05/2022</td>
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
      <Footer />
    </DashboardLayout>
  );
}

export default ProductsList;

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
import Card from "@mui/material/Card";
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

function ProductsList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h2" fontWeight="medium" style={{ color: 'green', textAlign: "center" }}>
        Running SIPs at BSE
      </SuiTypography>
      <SuiBox my={3}>
        <Card>
          <SuiBox p={3}>
            <SuiBox lineHeight={2}>
              {/* <SuiTypography variant="button" fontWeight="regular" textColor="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SuiTypography> */}
            </SuiBox>

          </SuiBox>
          {/* <DataTable
            table={dataTableData}
            entriesPerPage={{
              defaultValue: 7,
              entries: [5, 7, 10, 15, 20, 25],
            }}
            canSearch
          /> */}

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
                  <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}> Name</th>
                  <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Total SIP Amount</th>
                  <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>SIP Count</th>
                  <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ Color: "#038d8a", padding: "10px" }}>Fundexpert </td>
                  <td>7,00000,00</td>
                  <td>9</td>
                  <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
                </tr>
                <tr>
                  <td style={{ Color: "#038d8a", padding: "10px" }}>Anukriti Bhattad</td>
                  <td>7,00000,00</td>
                  <td>9</td>
                  <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
                </tr>
                <tr>
                  <td style={{ Color: "#038d8a", padding: "10px" }}>ATUL GARG</td>
                  <td>7,00</td>
                  <td>9</td>
                  <td style={{ Color: "#038d8a" }}>
                    <a href="/user/addfamily/120">View</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductsList;

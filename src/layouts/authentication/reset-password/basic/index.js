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
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
// import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
// import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
// import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import { Table, Nav, Container, Navbar, Form, Row, Col } from 'react-bootstrap';
// import DataTable from "examples/Tables/DataTable";
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function EditProduct() {

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}

      <Navbar bg="primary" variant="dark">
        <Container>
        <Nav className="me-auto">
            <Navbar.Brand href="#home">Admin Name</Navbar.Brand>
          </Nav>
          <Nav className="me-auto">
            <Navbar.Brand href="#home">Schedule Reports Management</Navbar.Brand>
          </Nav>
          <Nav className="me-auto" >
            <Navbar.Brand href="#features">Schedule Automated Services</Navbar.Brand>
          </Nav>
          <Nav className="me-auto" >
            <Navbar.Brand href="#pricing">Scheduler Logs</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Scheduled Reports Management
      </SuiTypography>


      <SuiBox my={3}>
        <hr />
        <br />
        <Row className="mb-3" style={{ fontWeight: 'bold' }}>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Choose...">
              <option>Select Condition</option>
              <option>All Customers</option>
              <option>Customers without any Schedule </option>
              {/* <option>Redemption</option>
    <option>Switch Out</option> */}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" >
            <Form.Control type="email" placeholder="Suspend Schedule" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="email" placeholder="Unsuspend Schedule" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control type="email" placeholder="Delete Schedule" />
          </Form.Group>

        </Row>
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>
                  <input type="checkbox" className="from-check-input" />
                </th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Name Of the User</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Portfolio Valuation Report</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Capital Gains</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px" }}><input type="checkbox" className="from-check-input" /></td>
                <td>ANURAAG SABOO(4608)</td>
                <td>	 Next Email On (02-07-2022)</td>
                <td>Please Set The Date</td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}><input type="checkbox" className="from-check-input" /></td>
                <td>ANURAAG SABOO(4608)</td>
                <td>	 Next Email On (02-07-2022)</td>
                <td>Please Set The Date</td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}><input type="checkbox" className="from-check-input" /></td>
                <td>ANURAAG SABOO(4608)</td>
                <td>	 Next Email On (02-07-2022)</td>
                <td>Please Set The Date</td>
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

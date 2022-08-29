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
// import Grid from "@mui/material/Grid";
import { Form, Col, Row, Button, Table } from 'react-bootstrap';

function ProductsList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h1" fontWeight="medium" style={{ color: 'green', textAlign: "center" }}>
        SIPs Registered at BSE (81)
      </SuiTypography>
      <br />

      <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>Start Date</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>2022</option>
            <option>2021</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Select defaultValue="Choose..." style={{ width: '250px', margin: '30px' }}>
            <option>June</option>
            <option>May</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Select defaultValue="Choose..." style={{ width: '250px', margin: '35px' }}>
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>End Date</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>2022</option>
            <option>2021</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Select defaultValue="Choose..." style={{ width: '250px', margin: '30px' }}>
            <option>June</option>
            <option>May</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Select defaultValue="Choose..." style={{ width: '250px', margin: '35px' }}>
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>This Month</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>All</option>
            <option>FUNDEXPERT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>SIPs</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>All</option>
            <option>FUNDEXPERT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Button variant="primary" type="submit" style={{ margin: '30px', width: '250px' }}>
            Submit
          </Button>
        </Form.Group>
      </Row>

      <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Created On</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Start Date</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Order Id</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Active</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>User</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Mutual Fund</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Amount</th>
            <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ Color: "#038d8a", padding: "10px" }}>Jul 3, 2018, 4:18 PM</td>
            <td>Jul 25, 2018</td>
            <td>5762</td>
            <td>Yes</td>
            <td>AHWPN6672L</td>
            <td>AXIS FOCUSED 25 FUND REGULAR GROWTH</td>
            <td>1,000</td>
            <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
          </tr>
          <tr>
            <td style={{ Color: "#038d8a", padding: "10px" }}>Jul 3, 2018, 4:18 PM</td>
            <td>Jul 25, 2018</td>
            <td>5762</td>
            <td>Yes</td>
            <td>AHWPN6672L</td>
            <td>AXIS FOCUSED 25 FUND REGULAR GROWTH</td>
            <td>1,000</td>
            <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
          </tr>
          <tr>
            <td style={{ Color: "#038d8a", padding: "10px" }}>Jul 3, 2018, 4:18 PM</td>
            <td>Jul 25, 2018</td>
            <td>5762</td>
            <td>Yes</td>
            <td>AHWPN6672L</td>
            <td>AXIS FOCUSED 25 FUND REGULAR GROWTH</td>
            <td>1,000</td>
            <td style={{ Color: "#038d8a" }}> <a href="/user/addfamily/120">View</a></td>
          </tr>
        </tbody>
      </Table>
      <SuiBox my={3}>
        <Card>
          <SuiBox p={1}>
            {/* <SuiBox lineHeight={2}>
              <SuiTypography variant="button" fontWeight="regular" textColor="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SuiTypography>
            </SuiBox> */}
          </SuiBox>
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductsList;

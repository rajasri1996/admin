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
import { Table, Form, Col, Button, Row } from 'react-bootstrap';


function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Running SIPs in RTA ( Total SIPs : 1, Total SIP Amount : 30000)
      </SuiTypography>
      <br />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState" style={{ fontWeight: 'bold', width:'50%' }}>
          <Form.Label>Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Terminated</option>
            <option>Active</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" style={{ fontWeight: 'bold', width:'500px' }}>
          <Form.Label>User Name</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Button variant="primary" type="submit" style={{ margin: '30px', width: '250px' }}>
            Submit
          </Button>
        </Form.Group>
      </Row>
      <SuiBox my={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              {/* <SuiButton variant="gradient" buttonColor="info">
                  Apply
                </SuiButton> */}
              {/* <SuiBox mt={1} mb={2}>
                <SuiTypography variant="body2" textColor="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </SuiTypography>
              </SuiBox> */}
            </Grid>

            <Grid item xs={12} lg={6}>
              <SuiBox display="flex" justifyContent="flex-end" style={{ float: "left", }}>
                {/* <SuiButton variant="gradient" buttonColor="info">
                  Apply
                </SuiButton> */}
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
        <hr />
        <Grid container spacing={1} py={5}>
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
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Folio Number</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>User Name</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Mutualfund Name</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Amount</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>From Date</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>End Date</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>16106032/29</td>
                <td>KHUSHBOO TAPARIA BEDI</td>
                <td>BALANCED ADVANTAGE FUND GROWTH</td>
                <td>30000</td>
                <td>26 February, 2021</td>
                <td>25 January, 2026</td>
                <td>
                  <Form.Check type="checkbox" label="Mark Sip Terminated" />
                </td>
              </tr>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>16106032/29</td>
                <td>KHUSHBOO TAPARIA BEDI</td>
                <td>BALANCED ADVANTAGE FUND GROWTH</td>
                <td>30000</td>
                <td>26 February, 2021</td>
                <td>25 January, 2026</td>
                <td>
                  <Form.Check type="checkbox" label="Mark Sip Terminated" />
                </td>
              </tr>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>16106032/29</td>
                <td>KHUSHBOO TAPARIA BEDI</td>
                <td>BALANCED ADVANTAGE FUND GROWTH</td>
                <td>30000</td>
                <td>26 February, 2021</td>
                <td>25 January, 2026</td>
                <td>
                  <Form.Check type="checkbox" label="Mark Sip Terminated" />
                </td>
              </tr>
            </tbody>
          </Table>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

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
import { Form, Col, Row } from 'react-bootstrap';

function ProductsList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h1" fontWeight="medium" style={{ color: 'green', textAlign: "center" }}>
        Portfoliorequest
      </SuiTypography>
      <br />
      <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>Name</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>Select User</option>
            <option>FUNDEXPERT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>Portfolio Type</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>User Wise</option>
            <option>FUNDEXPERT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
          <Form.Check type="checkbox" label="Portfolio Summary" />
        </Form.Group>
      </Row>

      <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>End Date</Form.Label>
          <Form.Select defaultValue="Choose..." style={{ width: '350px' }}>
            <option>Select User</option>
            <option>FUNDEXPERT</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Select defaultValue="Choose..." style={{ width: '150px', margin: '30px' }}>
            <option>2022</option>
            <option>2021</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Select defaultValue="Choose..." style={{ width: '150px', margin: '35px' }}>
            <option>1</option>
            <option>2</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <SuiBox my={3}>
        <Card>
          <SuiBox p={1}>
            {/* <SuiBox lineHeight={2}>
              <SuiTypography variant="button" fontWeight="regular" textColor="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SuiTypography>
            </SuiBox> */}
            <SuiTypography variant="h3" fontWeight="medium" style={{ color: 'brown', textAlign:'center' }}>
              Report Option
            </SuiTypography>
          </SuiBox>

          <hr style={{ color: 'red' }} />

          <Grid container spacing={1}>
            <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Portfolio Summary" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Folio Ledger" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Portfolio Holding Pattern" />
              </Form.Group>
            </Row>
          </Grid>

          <hr style={{ color: 'red' }} />

          <Grid>
            <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Fund Performance" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Active Sips" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Fund Category wise Summary" />
              </Form.Group>
            </Row>
          </Grid>

          <hr style={{ color: 'red' }} />

          <Grid>
            <Row className="mb-3" style={{ fontWeight: 'bold', width: '100%' }}>
              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Elss/LT Redemption Available" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Portfolio Asset Allocation" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Scheme wise Summary" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox" as={Col} style={{ margin: '40px' }}>
                <Form.Check type="checkbox" label="Graphs" />
              </Form.Group>
            </Row>
          </Grid>
          <hr style={{ color: 'red' }} />
          <SuiBox p={3}>
            <SuiTypography variant="h4" fontWeight="medium" style={{ color: 'brown', textAlign: 'center' }}>
              Gumption Labs Finserv
            </SuiTypography>
          </SuiBox>
          <SuiTypography variant="h5" fontWeight="medium" style={{ textAlign: 'center' }}>
            Number : 42124493 | Email : anuraag@fundexpert.in | BANGALORE
          </SuiTypography>

          <SuiBox p={3}>
            <SuiTypography variant="h4" fontWeight="medium" style={{ color: 'brown', textAlign: 'center' }}>
              Portfolio Valuation Report
            </SuiTypography>
          </SuiBox>
          <br/>
          <SuiTypography variant="h5" fontWeight="medium">
          <p>Investments include Purchases, Switch Ins, Dividend Reinvestments and Sweeps. Withdrawals include Redemptions and Switch Outs.
            Note : Mutual Fund Investments are subject to market risks. If you find any difference between this report and your AMC statement, please contact us.</p>
          </SuiTypography>
        
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductsList;

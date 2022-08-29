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
import { Form, Col, Button, Row } from 'react-bootstrap';

function karvy() {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <SuiTypography variant="h2" fontWeight="medium" style={{ color: '#229954', textAlign: "center" }}>
                Upload Mfsd211 DBF File
            </SuiTypography>
            <SuiBox my={3}>
                <Card>
                    {/* <Stack spacing={1} direction="row">
                        <SuiTypography variant="h5" fontWeight="medium">
                            ACTIONS
                        </SuiTypography>
                        <Link to="/user" className="decoration-none">
                            <SuiButton variant="gradient" size="small" >
                                Upload Karvy SIPs
                            </SuiButton>
                        </Link>
                    </Stack> */}
                    <br />
                    <Row className="mb-3" style={{ fontWeight: 'bold' }}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Upload[]</Form.Label>
                            <Form.Control type="file" name="Upload" id="upload" />
                        </Form.Group>

                        {/* <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Reset and Upload the file" style={{ margin: "30px" }} />
                        </Form.Group> */}

                        <Form.Group as={Col} controlId="formGridZip">
                            <Button variant="primary" type="submit" style={{ margin: '30px', width: '250px' }}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Row>
                    <hr style={{ color: 'brown' }} />
                    <ul style={{ color: 'red'}}>
                        <li>
                            Only .dbf files are allowed.
                        </li>
                        <li>
                            After uploading, data will automatically sync within next 12 hours.
                        </li>

                    </ul>
                </Card>
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default karvy;

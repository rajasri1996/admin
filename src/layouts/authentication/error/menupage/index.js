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
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import {Link} from 'react-router-dom';
// Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Form, Button } from 'react-bootstrap';


function Sidemenu() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: 'center', color: 'brown' }}>
                KAUSTUBH BHATTAD(432847)
            </SuiTypography>
            <br />
            <h4><a href="/authentication/error/Sidemenu">Edit User Profile</a></h4>

            <hr style={{ color: '#1798A5' }} />

            <h3 style={{ color: '#1798A5' }} >Update User Settings</h3>
            <br />
            <Form style={{ fontWeight: 'bold' }}>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Clientid</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="K432847" />
                    </Form.Group>

                </fieldset>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Allow Redeem on App" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mark in-active on platform" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Edit KYC Status</Form.Label>
                    <Form.Select id="disabledSelect">
                        <option>KYC Not Done</option>
                        <option>eKYC Verified</option>
                        <option>eKYC Verified</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Email Verified" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mobile Verified" />
                </Form.Group>

                <h3>KYC check done from PAN ✔</h3>

                <br />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="FATCA Submitted to BSE" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="AOF Submitted Online by User" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="AOF Status Pending/Verified at BSE" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: '300px' }}>
                    Submit
                </Button>
            </Form>

            <Footer />
        </DashboardLayout>
    );
}

export default Sidemenu;

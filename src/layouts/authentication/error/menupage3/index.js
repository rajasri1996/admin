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
            Ideal Asset Allocation
            </SuiTypography>
            <br />
            
            <hr style={{ color: '#1798A5' }} />

            <Form style={{ fontWeight: 'bold' }}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Equity</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Debt</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Gold</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Cash</Form.Label>
                    <Form.Control type="password" placeholder="" />
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

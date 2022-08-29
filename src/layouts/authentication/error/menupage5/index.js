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

import { Form, Col, Button, Row } from 'react-bootstrap';


function Sidemenu() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <br />

            <h4>* For adding any family member, PAN must be updated in his/her profile. Please check before searching here</h4>
            <br />
            <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: 'center', color: 'brown' }}>
                Add KAUSTUBH BHATTAD Family Members
            </SuiTypography>
            <br />

            <hr style={{ color: '#1798A5' }} />

            <Form style={{ fontWeight: 'bold' }}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name Search</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">User Accounts</Form.Label>
                    <Form.Select id="disabledSelect">
                        <option>Select User</option>
                        <option>Aecpr4585f (AECPR4585F-6145)</option>
                        <option>147223 (ABPIL4219P-6305)</option>
                    </Form.Select>
                </Form.Group>

                <br />

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Button variant="primary" type="submit" style={{ width: '200px', marginRight: '10px' }}>
                            Add Account
                        </Button>

                        <Button variant="primary" type="submit" style={{ width: '200px' }}>
                            Submit
                        </Button>
                    </Form.Group>

                </Row>
            </Form>

            <h5>* Select user, click Add Account. You can add multiple users by selecting and clicking add account. Once you are sure all the members are added, click submit. All the selected users will form a family.</h5>

            <Footer />
        </DashboardLayout>
    );
}

export default Sidemenu;

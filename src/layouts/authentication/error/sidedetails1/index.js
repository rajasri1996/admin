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

import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Sidemenu() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: 'center', color: 'brown' }}>

                <Link to="/authentication/error/anuragdetails">ANURAAG SABOO</Link>

            </SuiTypography>

            <br />
            <h3 style={{ color: '#1798A5' }} >Edit User Profile (User Id - 4590)</h3>
            <hr style={{ color: '#1798A5' }} />

            <h4>
                <Link to="/authentication/error/sidedetails2">Update User Settings</Link></h4>
            <br />
            <Form style={{ fontWeight: 'bold' }}>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">BSE Client Id</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="A4590" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label htmlFor="disabledSelect">Date Of Birth / Incorporation</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>1973</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" style={{ margin: '30px' }}>
                            {/* <Form.Label>State</Form.Label> */}
                            <Form.Select id="disabledSelect">
                                <option>August</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" style={{ margin: '30px' }}>
                            {/* <Form.Label>State</Form.Label> */}
                            <Form.Select id="disabledSelect">
                                <option>04</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>


                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">PAN</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="GHHPB2700Q" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect">Tax Status</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>Individual</option>
                        </Form.Select>
                    </Form.Group>

                </fieldset>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="anurag12@sheltron.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="password" placeholder="97899xxxx" />
                </Form.Group>

                <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                <Form.Select id="disabledSelect">
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>

                <Form.Label htmlFor="disabledSelect">Marital Status</Form.Label>
                <Form.Select id="disabledSelect">
                    <option>Marital </option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Single with Children</option>
                    <option>Married with Children</option>
                </Form.Select>

                <Form.Label htmlFor="disabledSelect">Occupation</Form.Label>
                <Form.Select id="disabledSelect">
                    <option>Service</option>
                    <option>Business</option>
                    <option>Student</option>
                    <option>Housewife</option>
                    <option>Others</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address Line1</Form.Label>
                    <Form.Control type="password" placeholder="Address Line2" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address Line2</Form.Label>
                    <Form.Control type="password" placeholder="3rd Cross, Halls Road," />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control type="password" placeholder="600010" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="password" placeholder="Chennai" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>State</Form.Label>
                    <Form.Select id="disabledSelect">
                        <option>Tamil Naadu</option>
                        <option>Uttar Pradesh</option>
                        <option>Punjab</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Advisor</Form.Label>
                    <Form.Select id="disabledSelect">
                        <option>Select</option>
                        <option>Advisor under Branch</option>
                    </Form.Select>
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

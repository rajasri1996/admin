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
                KAUSTUBH BHATTAD
            </SuiTypography>
            <br />
            <h3 style={{ color: '#1798A5' }} >Edit User Profile (User Id - 432847)</h3>
            <hr style={{ color: '#1798A5' }} />

            <h4><a href="/authentication/error/Menupage">Update User Settings</a></h4>
            <br />
            <Form style={{ fontWeight: 'bold' }}>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">BSE Client Id</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="K432847" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect">Date Of Birth / Incorporation</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>2004</option>
                        </Form.Select>
                        <br />
                        <Form.Select id="disabledSelect">
                            <option>2March</option>
                        </Form.Select>
                        <br />
                        <Form.Select id="disabledSelect">
                            <option>01</option>
                        </Form.Select>
                    </Form.Group>

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
                    <Form.Control type="email" placeholder="kaustubhbhatted@gmail.com" />
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


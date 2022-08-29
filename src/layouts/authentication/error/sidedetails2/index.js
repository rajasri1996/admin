import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Sidemenu() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: 'center', color: 'brown' }}>
            <Link to="/authentication/error/anuragdetails">ANURAAG SABOO</Link>

            </SuiTypography>
            <br />
            <h3>Edit User Profile</h3>

            <hr style={{ color: '#1798A5' }} />
            <h4>
                <Link to="/authentication/error/sidedetails1">Update User Settings</Link></h4>
            <br />
            <Form style={{ fontWeight: 'bold' }}>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Clientid</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="A4590" />
                    </Form.Group>

                </fieldset>

                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Allow Redeem on App" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mark in-active on platform" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Edit KYC Status</Form.Label>
                    <Form.Select id="disabledSelect" style={{ borderColor: 'black' }}>
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

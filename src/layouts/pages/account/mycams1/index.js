// @mui material components

import SuiTypography from "components/SuiTypography";
// import { Link } from 'react-router-dom';
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Button, Form } from 'react-bootstrap';



function Cams() {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <br />

            <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: 'center', color: 'green' }}>
                EDIT CAMS FUNDSNET CREDS
            </SuiTypography>

            <br />
            <hr style={{ color: 'red' }} />

            <Form style={{ fontWeight: 'bold' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CAMS Fundsnet Id</Form.Label>
                    <Form.Control type="email" placeholder="" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>CAMS Fundsnet Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>CAMS Fundsnet Password</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ fontWeight: 'bold', padding: '15px', width: '300px' }}>
                    Submit
                </Button>
            </Form>
            <Footer />
        </DashboardLayout>
    );
}

export default Cams;

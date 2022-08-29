// @mui material components

import SuiTypography from "components/SuiTypography";
// import { Link } from 'react-router-dom';
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Table, Dropdown, Col } from 'react-bootstrap';


function Sidemenu() {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <br />

            <SuiTypography variant="h2" fontWeight="medium" style={{ textAlign: 'center', color: 'green' }}>
                My App Details

            </SuiTypography>

            <hr style={{ color: 'red' }} />
            <br />

            <br />
            <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>

                <tbody>
                    <tr>

                        <td style={{ padding: '15px' }}>My APP Title</td>

                        <td>Gumption Labs Finserv</td>

                    </tr>

                    <tr>
                        <th style={{ padding: '15px' }}>My APP Tagline</th>

                        <td>INVESTING MADE SIMPLE</td>
                    </tr>
                </tbody>
            </Table>

            <br />
            <hr style={{ color: 'red' }} />
            <br />

            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ width: '100%', padding: "15px" }}>
                    MY BANK DETAILS FOR MY MONTHLY PAYOUTS
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">

                        <Table as={Col} striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Details</th>
                                    <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Bank</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td style={{ padding: "10px" }}>My Name As Per Bank</td>
                                    <td>Anuraag Saboo</td>

                                </tr>

                                <tr>

                                    <td style={{ padding: "10px" }}>Account Number</td>
                                    <td>005301025887</td>

                                </tr>


                                <tr>

                                    <td style={{ padding: "10px" }}>Bank Account Type</td>
                                    <td>SB</td>

                                </tr>

                                <tr>

                                    <td style={{ padding: "10px" }}>Bank Branch</td>
                                    <td>BANGALORE JAYANAGAR¿</td>

                                </tr>


                                <tr>

                                    <td style={{ padding: "10px" }}>Bank City</td>
                                    <td>-</td>

                                </tr>


                                <tr>

                                    <td style={{ padding: "10px" }}>IFSC Code</td>
                                    <td>-</td>

                                </tr>


                                <tr>

                                    <td style={{ padding: "10px" }}>Pan Number</td>
                                    <td>ICIC0000053</td>

                                </tr>


                            </tbody>
                        </Table>


                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Footer />
        </DashboardLayout>
    );
}

export default Sidemenu;

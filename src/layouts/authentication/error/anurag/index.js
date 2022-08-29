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
// import SuiTypography from "components/SuiTypography";
import { Link } from "react-router-dom";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Table } from 'react-bootstrap';


function External() {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <br />

            <Table striped bordered hover>
                <thead style={{ textAlign: 'center', borderColor: 'black' }}>
                    <tr>
                        <th style={{ padding: '18px', backgroundColor: "Tomato", }}>Name</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>Mobile</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>PAN</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>Tax Status</th>
                        <th style={{ padding: '18px', backgroundColor: "Tomato", }}>Email</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>Created On</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>FE User Id</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>BSE Client ID</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>KYC</th>
                        <th style={{ padding: '18px', backgroundColor: "Tomato", }}>Bank</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>AOF</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>FATCA</th>
                        <th style={{ padding: '15px', backgroundColor: "Tomato" }}>Mandate</th>
                    </tr>
                </thead>
                <tbody style={{ borderColor: 'black' }}>
                    <tr >

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>  <Link to="/authentication/error/anuragdetails">ANURAAG SABOO</Link></td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>9880272472</td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>ABKPS0801L</td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>Individual</td>
                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}> anurag12@sheltron.com</td>

                        <td style={{
                            padding: '15px', fontWeight: 'bold', textAlign: 'center'
                        }}>May 21, 2018, 2:16 PM</td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>4590</td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>A4590</td>
                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>kyc</td>

                        <td style={{
                            padding: '15px', fontWeight: 'bold', textAlign: 'center'
                        }}>	Yes</td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>Yes</td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>Yes</td>
                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>No</td>

                    </tr>

                </tbody>
            </Table>

            <Footer />
        </DashboardLayout>
    );
}

export default External;

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

            <SuiTypography variant="h4" fontWeight="medium" style={{ textAlign: 'center', color: 'green' }}>

                AUM (User Wise from PDF) (5)
                <a href="/pages/account/externaluser" style={{ margin: "25px" }}>AUM (AMC Wise from PDF)</a>

            </SuiTypography>
            <br />

            <hr style={{ color: 'red' }} />

            <br />

            <Table striped bordered hover>
                <thead style={{ textAlign: 'center', borderColor: 'black' }}>
                    <tr>

                        <th style={{ padding: '18px', backgroundColor: "#e6f3ff", }}>AMC</th>
                        <th style={{ padding: '15px', backgroundColor: "#e6f3ff" }}>AUM</th>

                    </tr>
                </thead>

                <tbody style={{ borderColor: 'black' }}>
                    <tr >

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>  <Link to="/authentication/error/anurag">ICICI Prudential Mutual Fund</Link></td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>44,74,680</td>

                    </tr>

                    <tr >

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>  <Link to="/authentication/error/anurag">Aditya Birla Sun Life Mutual Fund</Link></td>

                        <td style={{ padding: '15px', fontWeight: 'bold', textAlign: 'center' }}>1,58,66,130</td>

                    </tr>

                    <tr style={{ padding: '15px' }}>

                        <td  style={{ padding: '15px', fontWeight:'bold', textAlign:'center' }}> Total</td>

                        <td  style={{ padding: '15px', fontWeight:'bold', textAlign:'center' }}>3,01,29,221</td>

                    </tr>
                </tbody>
            </Table>

            <Footer />
        </DashboardLayout>
    );
}

export default External;

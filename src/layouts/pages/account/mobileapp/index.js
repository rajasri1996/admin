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
import { Link } from 'react-router-dom';
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Table } from 'react-bootstrap';


function Sidemenu() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <br />

            <SuiTypography variant="h1" fontWeight="medium" style={{ textAlign: 'center' }}>
                My Mobile App Users (31)

            </SuiTypography>

            <hr style={{ color: 'red' }} />
            <br />
            <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Name</th>
                        <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Contact	</th>
                        <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Email Id</th>
                        <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Pan Number</th>
                        <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Last Active</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: "10px" }}><a href="/authentication/error/user" target="_blank">KAUSTUBH BHATTAD</a></td>
                        <td>9789916097</td>
                        <td>kaustubhbhatted@gmail.com</td>
                        <td><Link to='/authentication/error/Pandetails'>GHHPB2700Q</Link></td>
                        <td>29 Jun 2022</td>

                    </tr>
                </tbody>
            </Table>
            <Footer />
        </DashboardLayout>
    );
}

export default Sidemenu;

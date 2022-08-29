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
// import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Link } from "react-router-dom";

function Pan() {


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox my={3}>

                <DataTable
                        table={{
                            columns: [
                                { Header: "name", accessor: "name", width: "30%" },
                                { Header: "mobile", accessor: "mobile", width: "30%" },
                                { Header: "pan", accessor: "pan" , width: "30%"},
                                { Header: "taxstatus", accessor: "taxstatus", width: "30%" },
                                { Header: "email", accessor: "email", width: "30%" },
                                { Header: "createdon", accessor: "createdon" , width: "30%"},
                                { Header: "feuserid", accessor: "feuserid", width: "30%" },
                                { Header: "bseclientID", accessor: "bseclientID", width: "30%" },
                                { Header: "KYC", accessor: "KYC", width: "30%" },
                                { Header: "Bank", accessor: "Bank" },
                                { Header: "AOF", accessor: "AOF", width: "30%"},
                                { Header: "FATCA", accessor: "FATCA", width: "30%" },
                                { Header: "Mandate", accessor: "Mandate", width: "30%" },
                            
                            
                            ],
                            rows: [
                                {
                                    name:  <Link to="/authentication/error/user">KAUSTUBH BHATTAD</Link>,
                                    mobile: "9789916097",
                                    pan: "GHHPB2700Q",
                                    taxstatus: 	"Individual",
                                    email: "kaustubhbhatted@gmail.com",
                                    createdon: "May 10, 2022, 1:08 PM",
                                    feuserid: "432847",
                                    bseclientID: "K432847",
                                    KYC: "kyc",
                                    Bank: "Yes",
                                    AOF: "Yes",
                                    FATCA: "Yes",
                                    Mandate: "Yes",
                                 
                                },
                              
                            ]
                        }}
                    />

            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Pan;

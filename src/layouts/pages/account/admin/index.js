import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import DataTable from "examples/Tables/DataTable";

// Images
import team4 from "assets/images/team-4.jpg";
import { Link } from "react-router-dom";
import tableData1 from "layouts/pages/users/reports/data/tableData1";


function Overview() {

    const columns =
    {
        columns: [
            { Header: "Name", accessor: "product" },
            { Header: "email", accessor: "a1" },
            { Header: "role", accessor: "bse" },
            { Header: "created On", accessor: "pan" },
            { Header: "Actions", accessor: "a2" },
        ],

        rows: [
            {
                product: <Link to="/authentication/error/user"> <ProductCell image={team4} name="A Saboo" /></Link>,

                a1: <h9 style={{ color: "black" }}>anuraag@sheltron.com</h9>,

                bse: <h9 style={{ color: "black" }}>SIFA</h9>,

                pan: <h9 style={{ color: "black" }}>Sep 26, 2019, 3:37 PM</h9>,

                a2: <Link to="/authentication/error/sidedetails1">Edit</Link>,
            },
        ],

    }

    return (

        <DashboardLayout>
            <DashboardNavbar />

            <SuiBox my={3}>
                <Card id="change-password">

                    <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
                        <Grid item xs={12} lg={6}>
                            <SuiTypography variant="h4" fontWeight="medium">
                                Administrators(10)
                            </SuiTypography>
                            <SuiBox mt={1} mb={2}>
                                <SuiTypography variant="body2" textColor="text">
                                    IFA Name - Anuraag Saboo<br />
                                    App Name - Gumption Labs Finserv
                                </SuiTypography>
                            </SuiBox>
                        </Grid>
                    </SuiBox>

                    <SuiBox mt={8} mb={2}>
                        <DataTable
                            table={columns}
                            entriesPerPage={false}
                            showTotalEntries={false}
                            isSorted={false}
                        />
                    </SuiBox>
                </Card>

                <SuiBox component="form" my={3}>
                    <Card id="change-password" style={{ backgroundColor: "#f8f9fa" }}>
                        <SuiBox mt={8} mb={2}>
                            <SuiBox mb={1} ml={2}>
                                <SuiTypography variant="h5" fontWeight="medium">
                                    Branch(es)
                                </SuiTypography>
                            </SuiBox>
                            <DataTable
                                table={tableData1}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                isSorted={false}
                            />
                        </SuiBox>
                    </Card>
                </SuiBox>

                <SuiBox component="form" my={3}>
                    <Card id="change-password" style={{ backgroundColor: "#f8f9fa" }}>
                        <SuiBox mt={8} mb={2}>
                            <SuiBox mb={1} ml={2}>
                                <SuiTypography variant="h5" fontWeight="medium">
                                    Advisor(s)
                                </SuiTypography>
                            </SuiBox>
                            <DataTable
                                table={tableData1}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                isSorted={false}
                            />
                        </SuiBox>
                    </Card>
                </SuiBox>
            </SuiBox>
        </DashboardLayout>
    );
}

export default Overview;

import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import SuiButton from "components/SuiButton";
import FormField from "layouts/pages/account/components/FormField";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import DataTable from "examples/Tables/DataTable";
import breakpoints from "assets/theme/base/breakpoints";
// Images
import team4 from "assets/images/team-4.jpg";
import { Link } from "react-router-dom";


function Overview() {

    const { values } = breakpoints;
    const columns =
    {
        columns: [
            { Header: "User Name", accessor: "product" },
            { Header: "User Id", accessor: "a1" },
            { Header: " KYC Id", accessor: "bse" },
            { Header: "PAN Number", accessor: "pan" },
            { Header: "POA Name", accessor: "a2" },
            { Header: "Video URL", accessor: "a3" },
            { Header: "Final Verification", accessor: "a4" },
            { Header: "Created On", accessor: "a5" },
            { Header: "	AMC Remarks", accessor: "a6" },
            { Header: "KRA Name", accessor: "a7" },
            { Header: "KRA Status", accessor: "a8" },
            { Header: "Status Date", accessor: "a9" },
            { Header: "Merchant Id", accessor: "a10" },
        ],

        rows: [
            {
                product: <Link to="/authentication/error/user"> <ProductCell image={team4} name="Nupur Agarwal" /></Link>,
                a1: "76",
                bse: <Link to="/authentication/error/user"> 83022	</Link>,             
                pan: "BAPPA4528P",
                a2: "Nupur Ashok Agarwa",
                a3: "Missing",
                a4: "NO",
                a5: "Jul 22, 2021",
                a6: "CVLKRA",
                a7: "KYC Registered - New KYC",
                a8: "Aug 14, 2020",
                a9: "--",               
                a10: "60f86b3754c1de4854867e27",
            },
        ],

    }

    const passwordRequirements = [

    ];

    const renderPasswordRequirements = passwordRequirements.map((item, key) => {
        const itemKey = `element-${key}`;

        return (

            <SuiBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
                <SuiTypography
                    variant="button"
                    textColor="text"
                    fontWeight="regular"
                    verticalAlign="middle"
                >
                    {item}
                </SuiTypography>
            </SuiBox>
        );
    });


    return (

        <DashboardLayout>
            <DashboardNavbar />

            <SuiBox my={3}>
                <Card id="change-password">

                    <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
                        <SuiTypography
                            variant={window.innerWidth < values.sm ? "h3" : "h2"}
                            textTransform="capitalize"
                            fontWeight="bold"
                        >
                            KYC User Details
                        </SuiTypography>
                    </SuiBox>

                    <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                        <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                            {renderPasswordRequirements}
                        </SuiBox>

                    </SuiBox>

                    <SuiBox component="form" pb={3} px={3} p={3} mb={10}>

                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={12}>
                                        <Grid container spacing={3}>

                                            <Grid item xs={12} sm={6}>
                                                <FormField type="text" label="Name/Email/Phone" defaultValue="Name/Email/Phone" />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiButton variant="gradient" buttonColor="dark">
                                                        Submit
                                                    </SuiButton>
                                                </SuiBox>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </Card>

                <SuiBox component="form" my={3}>
                    <Card id="change-password" style={{ backgroundColor: "#f8f9fa" }}>
                        <SuiBox mt={8} mb={2}>
                            <DataTable
                                table={columns}
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

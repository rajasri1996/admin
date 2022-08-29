// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
// Images
const blackChair =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg";



function Opportunity() {
    const columns =
    {
        columns: [
            { Header: "Investor Name", accessor: "product" },
            { Header: "PAN No", accessor: "bse" },
            { Header: "Scheme", accessor: "pan", align: "center" },
            { Header: "Folio No.", accessor: "amount", align: "center" },
            { Header: "Free Units", accessor: "a1" },
            { Header: "Current Amount", accessor: "a2", align: "center" },
            { Header: "Invested Amount", accessor: "a3", align: "center" },
        ],

        rows: [
            {
                product: <ProductCell image={blackChair} name="ABHA AGARWAL" />,
                bse: "AEGPA6692G",
                pan: "L&T TAX ADVANTAGE FUND - GROWTH",
                amount: "4224834/03",
                a1: "1362.249",
                a2: "1,06,228",
                a3: "75,000",
            },
        ],


    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox py={3} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
                <SuiBox my={3}>

                    <SuiBox mb={3}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} lg={12}>

                                <SuiBox
                                    backgroundColor="dark"
                                    borderRadius="lg"
                                    boxShadow="lg"
                                    p={2}
                                    backgroundGradient
                                    lineHeight={1}
                                >
                                    <SuiTypography variant="h6" fontWeight="medium" textColor="white">
                                        ELSS Lock-in free Report
                                    </SuiTypography>
                                    <br />
                                    <SuiBox mb={3}>
                                        <SuiTypography variant="button" fontWeight="regular" textColor="white">
                                            This report shows the units invested in ELSS funds which are free from Lock-in period of 3 years, for each user and can now be switched into other suitable fund choices.
                                        </SuiTypography>
                                    </SuiBox>
                                </SuiBox>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </SuiBox>

                <SuiBox>
                    <Card id="change-password">
                        <SuiBox mb={1} ml={2}>
                            <SuiTypography variant="h5" fontWeight="medium">
                                Internal Holdings
                            </SuiTypography>
                        </SuiBox>
                        <DataTable
                            table={columns}
                            entriesPerPage={false}
                            showTotalEntries={false}
                            isSorted={false}
                        />
                    </Card>
                </SuiBox>

                <SuiBox mt={8} mb={2}>
                    <SuiBox mb={1} ml={2}>
                        <SuiTypography variant="h5" fontWeight="medium">
                            External Holdings
                        </SuiTypography>
                    </SuiBox>
                    <DataTable
                        table={columns}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        isSorted={false}
                    />
                </SuiBox>

            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Opportunity;

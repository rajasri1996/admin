import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
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
            { Header: "BSE UCC", accessor: "bse" },
            { Header: "PAN No", accessor: "pan", align: "center" },
            { Header: "Total Amount", accessor: "amount", align: "center" },
        ],

        rows: [
            {
                product: <ProductCell image={blackChair} name="AGARWAL BUILDCON" />,
                bse: "A3832",
                pan: "ABGFA5273N",
                amount: "12,499",
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
                                        ELSS Opportunity Report
                                    </SuiTypography>
                                    <br />
                                    <SuiBox mb={3}>
                                        <SuiTypography variant="button" fontWeight="regular" textColor="white">
                                            This report shows ELSS investment Opportunity available with all the KYC verified users who have invested less than 80C limit in current year till date.
                                        </SuiTypography>
                                    </SuiBox>

                                </SuiBox>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </SuiBox>

                <SuiBox>
                    <Card id="change-password">
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
                            Clients who have not invested in ELSS
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

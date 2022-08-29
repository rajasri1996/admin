import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import SuiTypography from "components/SuiTypography";
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
        ],

        rows: [
            {
                product: <ProductCell image={blackChair} name="Vipin Raj M" />,
                bse: "V56",
                pan: "AKSPM1698L",
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
                                        SIP Opportunity Report (339)
                                    </SuiTypography>
                                    <br />
                                    <SuiBox mb={3}>
                                        <SuiTypography variant="button" fontWeight="regular" textColor="white">
                                            This report shows the clients who have BSE ids but do not have any running SIP.<br />
                                            For generating a list of clients who do not have mandates or BSE ids, please apply the filter in the User page
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
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Opportunity;

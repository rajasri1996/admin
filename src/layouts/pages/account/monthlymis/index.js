import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import SuiSelect from "components/SuiSelect";
import Checkbox from "@mui/material/Checkbox";
import SuiButton from "components/SuiButton";
import FormField from "layouts/pages/account/components/FormField";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import DataTable from "examples/Tables/DataTable";
import breakpoints from "assets/theme/base/breakpoints";
// Images
import team4 from "assets/images/team-4.jpg";
import tableDatas from "layouts/pages/users/reports/data/tableDatas";
import { Link } from "react-router-dom";


function Overview({ id, checked }) {

    const { values } = breakpoints;
    const columns =
    {
        columns: [
            { Header: "Investor Name", accessor: "product" },
            { Header: "User Id", accessor: "a1" },
            { Header: "Transaction Date", accessor: "bse" },
            { Header: "Trxn Mode", accessor: "pan" },
            { Header: "Transaction Type", accessor: "a2" },
            { Header: "Folio No", accessor: "a3" },
            { Header: "NAV", accessor: "a6" },
            { Header: "	Units", accessor: "a7" },
            { Header: "	Transaction Amount", accessor: "a8" },
            { Header: "AMC", accessor: "a4" },
            { Header: "Scheme Name", accessor: "a5" },
        ],

        rows: [
            {
                product: <Link to="/authentication/error/user"> <ProductCell image={team4} name="Anil Kumar Rathi" /></Link>,
                bse: "Aug 19, 2022",
                pan: "RTA",
                a1: "A182040",
                a2: "Switch In",
                a3: "1041041263",
                a4: "Aditya Birla Sun Life Mutual Fund",
                a5: "ADITYA BIRLA SUN LIFE REGULAR SAVINGS FUND-GROWTH",
                a6: "51.94",
                a7: "962.529",
                a8: "49,998",
            },
        ],

    }

    Overview.defaultProps = {
        checked: false,
    };

    // Typechecking props for the IdCell
    Overview.propTypes = {
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool,
    };

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
                            Monthly MIS (Aug 2022)
                        </SuiTypography>
                    </SuiBox>

                    <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                        <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                            {renderPasswordRequirements}
                        </SuiBox>

                    </SuiBox>

                    <SuiBox component="form" pb={3} px={3} p={3} mb={15}>

                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={12}>
                                        <Grid container spacing={3}>

                                            <Grid item xs={12} sm={4}>
                                                <FormField type="text" label="Name/Email/Number/User Id" defaultValue="Name/Email" />
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                                                        <SuiTypography
                                                            component="label"
                                                            variant="caption"
                                                            fontWeight="bold"
                                                            textTransform="capitalize"

                                                        >
                                                            Year
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[
                                                            { value: "2022", label: "2022" },
                                                            { value: "2021", label: "2021" },
                                                            { value: "2020", label: "2020" },
                                                            { value: "", label: "", isDisabled: true },
                                                        ]}

                                                    />
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4} >
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                                                        <SuiTypography
                                                            component="label"
                                                            variant="caption"
                                                            fontWeight="bold"
                                                            textTransform="capitalize"

                                                        >
                                                            Month
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[

                                                            { value: "January", label: "January" },
                                                            { value: "February", label: "February" },
                                                            { value: "March", label: "March" },
                                                            { value: "April", label: "April" },
                                                            { value: "", label: "", isDisabled: true },
                                                        ]}
                                                    />
                                                </SuiBox>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <Grid container spacing={3}>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                                                        <SuiTypography
                                                            component="label"
                                                            variant="caption"
                                                            fontWeight="bold"
                                                            textTransform="capitalize"

                                                        >
                                                            Transaction Type
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[
                                                            { value: "All", label: "All" },
                                                            { value: "Purchase", label: "Purchase" },
                                                            { value: "Switch In", label: "Switch In" },
                                                            { value: "", label: "", isDisabled: true },
                                                        ]}
                                                    />
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox display="flex" alignItems="center" style={{ marginTop: "30px" }}>

                                                    <Checkbox defaultChecked={checked} />
                                                    <SuiBox ml={1}>
                                                        <SuiTypography variant="caption" fontWeight="medium" textColor="text">
                                                            {id}
                                                        </SuiTypography>
                                                    </SuiBox>

                                                    <SuiTypography component="label" variant="h7" fontWeight="bold">
                                                        Download
                                                    </SuiTypography>
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
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
                            <SuiBox mb={1} ml={2}>
                                <SuiTypography variant="h5" fontWeight="medium">
                                    Monthly MIS Summary for Aug 2022
                                </SuiTypography>
                            </SuiBox>
                            <DataTable
                                table={tableDatas}
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
                                    Monthly Inflow (Aug 2022)
                                </SuiTypography>
                            </SuiBox>
                            <DataTable
                                table={columns}
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
                                    Monthly Outflow (Aug 2022)
                                </SuiTypography>
                            </SuiBox>
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

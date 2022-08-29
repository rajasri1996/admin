import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import SuiButton from "components/SuiButton";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "examples/Tables/DataTable";
import breakpoints from "assets/theme/base/breakpoints";
import SuiEditor from "components/SuiEditor";
import { useState } from "react";
import sendappTable from "layouts/authentication/error/sendappTable";

function Overview({ id, checked }) {

    const [editorValue, setEditorValue] = useState(
        "<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><br><br>"
    );

    const { values } = breakpoints

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
                            Send App Notification
                        </SuiTypography>
                    </SuiBox>

                    <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                        <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                            {renderPasswordRequirements}
                        </SuiBox>

                    </SuiBox>

                    <SuiBox component="form" pb={3} px={3} p={3} mb={10}>

                        <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                        >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                                <SuiTypography component="label" variant="h5" fontWeight="bold">
                                    Text to send in Notification
                                </SuiTypography>
                            </SuiBox>
                            <SuiEditor value={editorValue} onChange={setEditorValue} />
                        </SuiBox>

                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={12}>
                                        <Grid container spacing={3}>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox display="flex" alignItems="center" style={{ marginTop: "30px" }}>

                                                    <Checkbox defaultChecked={checked} />
                                                    <SuiBox ml={1}>
                                                        <SuiTypography variant="caption" fontWeight="medium" textColor="text">
                                                            {id}
                                                        </SuiTypography>
                                                    </SuiBox>

                                                    <SuiTypography component="label" variant="h7" fontWeight="bold">
                                                        Send App Notification
                                                    </SuiTypography>
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
                                                        Download CSV
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
                                    Monthly Outflow (Aug 2022)
                                </SuiTypography>
                            </SuiBox>
                            <DataTable
                                table={sendappTable}
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

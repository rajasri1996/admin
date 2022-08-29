import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuiButton from "components/SuiButton";
// import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import SuiSelect from "components/SuiSelect";

// import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";

function IdCell({ id, checked }) {

    IdCell.defaultProps = {
        checked: false,
    };

    // Typechecking props for the IdCell
    IdCell.propTypes = {
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool,
    };
    const passwordRequirements = [
        "   You do not have any realized capital gains because there are no redemptions in the financial year 2021 - 2022",

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
                <SuiBox p={1} >
                    <Card id="profile">
                        <SuiBox p={3}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item>
                                    <SuiBox height="100%" mt={0.5} lineHeight={1}>
                                        <SuiTypography variant="h3" fontWeight="medium" >
                                            User
                                        </SuiTypography>
                                    </SuiBox>
                                </Grid>
                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>

                <SuiBox p={1}>
                    <Card id="change-password">

                        <SuiBox component="form" pb={3} px={3} pt={3}>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
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
                                                    Financial Year
                                                </SuiTypography>
                                            </SuiBox>
                                            <SuiSelect
                                                placeholder="Select"
                                                options={[

                                                    { value: "2021 - 2022", label: "Select User" },
                                                    { value: "2020 - 2021", label: "Purchase" },
                                                    { value: "2019 - 2020", label: "Switch In" },
                                                    { value: "2018 - 2019", label: "", isDisabled: true },
                                                ]}


                                            />
                                        </SuiBox>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={5}>
                                                <SuiBox display="flex" alignItems="center" style={{ marginTop: "30px", marginLeft: "50px" }}>

                                                    <Checkbox defaultChecked={checked} />
                                                    <SuiBox ml={1}>
                                                        <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                            {id}
                                                        </SuiTypography>
                                                    </SuiBox>

                                                    <SuiTypography component="label" variant="h10" fontWeight="bold">
                                                        Excel
                                                    </SuiTypography>
                                                </SuiBox>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <SuiBox display="flex" alignItems="center" style={{ marginTop: "30px" }}>

                                                    <Checkbox defaultChecked={checked} />
                                                    <SuiBox ml={1}>
                                                        <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                            {id}
                                                        </SuiTypography>
                                                    </SuiBox>

                                                    <SuiTypography component="label" variant="h10" fontWeight="bold">
                                                        Pdf
                                                    </SuiTypography>
                                                </SuiBox>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
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
                        </SuiBox>
                    </Card>

                </SuiBox>

                <SuiBox pt={2} px={3}>
                    <SuiTypography variant="h4" fontWeight="medium" style={{ marginTop: "30px" }}>
                        <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                            {renderPasswordRequirements}
                        </SuiBox>
                    </SuiTypography>
                </SuiBox>



            </SuiBox>
        </DashboardLayout>
    );
}

export default IdCell;

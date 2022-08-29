import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuiButton from "components/SuiButton";
// import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import SuiDatePicker from "components/SuiDatePicker";
import PropTypes from "prop-types";
import SuiSelect from "components/SuiSelect";

function IdCell({ id, checked }) {

    IdCell.defaultProps = {
        checked: false,
    };

    // Typechecking props for the IdCell
    IdCell.propTypes = {
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool,
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const handleSetStartDate = (newDate) => setStartDate(newDate);
    const handleSetEndDate = (newDate) => setEndDate(newDate);

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
            <SuiBox p={2} >
                <Card id="profile">
                    <SuiBox p={3}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>
                                <SuiBox height="100%" mt={0.5} lineHeight={1}>
                                    <SuiTypography variant="h4" fontWeight="medium" >

                                        For Transaction Statement, Choose Between
                                    </SuiTypography>
                                </SuiBox>
                            </Grid>
                        </Grid>
                    </SuiBox>
                </Card>
            </SuiBox>

            <SuiBox p={2}>
                <Card id="change-password">

                    <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                        <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                            {renderPasswordRequirements}
                        </SuiBox>

                    </SuiBox>

                    <SuiBox component="form" pb={3} px={3} p={3} >

                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={15}>
                                        <Grid container spacing={3}>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                                                        <SuiTypography component="label" variant="caption" fontWeight="bold" >
                                                            Start Date
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiDatePicker value={startDate} onChange={handleSetStartDate} />
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="flex-end"
                                                    height="100%"
                                                >
                                                    <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                                                        <SuiTypography component="label" variant="caption" fontWeight="bold">
                                                            End Date
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiDatePicker value={endDate} onChange={handleSetEndDate} />
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
                                                            Financial Year
                                                        </SuiTypography>
                                                    </SuiBox>
                                                    <SuiSelect
                                                        placeholder="Select"
                                                        options={[

                                                            { value: "-", label: "All" },
                                                            { value: "2021 - 2022", label: "2021 - 2022" },
                                                            { value: "2020 - 2021", label: "2020 - 2021" },
                                                            { value: "2018 - 2019", label: "2018 - 2019" },
                                                            { value: "2018 - 2019", label: "", isDisabled: true },
                                                        ]}


                                                    />
                                                </SuiBox>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sm={15}>
                                        <Grid container spacing={3} >
                                            <Grid item xs={12} sm={4}>
                                                <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                                                    <Checkbox defaultChecked={checked} />
                                                    <SuiBox ml={1}>
                                                        <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                            {id}
                                                        </SuiTypography>
                                                    </SuiBox>

                                                    <SuiTypography component="label" variant="h10" fontWeight="bold" >
                                                        Excel
                                                    </SuiTypography>
                                                </SuiBox>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                                                    <Checkbox defaultChecked={checked} />
                                                    <SuiBox ml={1}>
                                                        <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                            {id}
                                                        </SuiTypography>
                                                    </SuiBox>

                                                    <SuiTypography component="label" variant="h10" fontWeight="bold" >
                                                        Pdf
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
                                                    <SuiButton variant="gradient" buttonColor="dark" >
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

            </SuiBox>

        </DashboardLayout>
    );
}

export default IdCell;

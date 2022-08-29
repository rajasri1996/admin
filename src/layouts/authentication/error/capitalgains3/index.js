import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import SuiSelect from "components/SuiSelect";
import SuiDatePicker from "components/SuiDatePicker";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

function IdCell({ id, checked }) {

    IdCell.defaultProps = {
        checked: false,
    };

    // Typechecking props for the IdCell
    IdCell.propTypes = {
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool,
    };

    const [endDate, setEndDate] = useState(new Date());


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
            <SuiBox my={2}>

                <SuiBox p={1}>
                    <Card id="profile">
                        <SuiBox p={3}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item>
                                    <SuiBox height="100%" mt={0.5} lineHeight={1}>
                                        <SuiTypography variant="h4" fontWeight="medium">
                                            Portfolio Request
                                        </SuiTypography>
                                    </SuiBox>
                                </Grid>
                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>

                <SuiBox p={1}>
                    <Card id="change-password">

                        <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                            <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                                {renderPasswordRequirements}
                            </SuiBox>

                        </SuiBox>

                        <SuiBox component="form" pb={3} px={3} p={3} >

                            <Grid container spacing={3}>

                                <Grid item xs={12}>
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
                                                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                                                            <SuiTypography
                                                                component="label"
                                                                variant="caption"
                                                                fontWeight="bold"
                                                                textTransform="capitalize"

                                                            >
                                                                Name
                                                            </SuiTypography>
                                                        </SuiBox>
                                                        <SuiSelect
                                                            placeholder="Select"
                                                            options={[
                                                                { value: "All", label: "Select User" },
                                                                { value: "Done", label: "A HIMA BINDU (AJJPA5258Q) (258734)" },
                                                                { value: "Not Done", label: "A SIVAKUMAR CHETTIAR (AFTPC9040G) (5309)" },
                                                                { value: "your question", label: "", isDisabled: true },
                                                            ]}

                                                        />
                                                    </SuiBox>
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

                                                                Portfolio Type
                                                            </SuiTypography>
                                                        </SuiBox>
                                                        <SuiSelect
                                                            placeholder="Select"
                                                            options={[
                                                                { value: "All", label: "User Wise" },
                                                                { value: "Adding-Branch", label: "Family Wise" },
                                                                { value: "your question", label: "", isDisabled: true },
                                                            ]}
                                                        />
                                                    </SuiBox>
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
                                                                Holding Type
                                                            </SuiTypography>
                                                        </SuiBox>
                                                        <SuiSelect
                                                            placeholder="Select"
                                                            options={[
                                                                { value: "All", label: "All" },
                                                                { value: "Internal Holding", label: "Internal Holding" },
                                                                { value: "External Holding", label: "External Holding " },
                                                                { value: "your question", label: "", isDisabled: true },
                                                            ]}
                                                        />
                                                    </SuiBox>
                                                </Grid>

                                            </Grid>

                                        </Grid>

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
                                                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                                                                End Date
                                                            </SuiTypography>
                                                        </SuiBox>
                                                        <SuiDatePicker value={endDate} onChange={handleSetEndDate} />
                                                    </SuiBox>
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                    <SuiBox display="flex" alignItems="center" style={{ marginTop: "60px", marginLeft: '20px' }}>

                                                        <Checkbox defaultChecked={checked} />
                                                        <SuiBox ml={1}>
                                                            <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                                {id}
                                                            </SuiTypography>
                                                        </SuiBox>

                                                        <SuiTypography component="label" variant="h10" fontWeight="bold">
                                                            Portfolio Summary
                                                        </SuiTypography>
                                                    </SuiBox>
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                    <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px", marginLeft: '20px' }}>

                                                        <Checkbox defaultChecked={checked} />
                                                        <SuiBox ml={1}>
                                                            <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                                {id}
                                                            </SuiTypography>
                                                        </SuiBox>

                                                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                                                            Include Zero/Redeemed Holdings
                                                        </SuiTypography>
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

                <SuiBox p={1} >
                    <Card id="profile">
                        <SuiBox p={3}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item>
                                    <SuiBox height="100%" mt={0.5} lineHeight={1}>
                                        <SuiTypography variant="h4" fontWeight="medium" >
                                            Report Option
                                        </SuiTypography>
                                    </SuiBox>
                                </Grid>
                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>

                <SuiBox p={1}>

                    <Card id="change-password">
                        <SuiBox p={3}>
                            <Grid item xs={12} sm={15}>
                                <Grid container spacing={3}>

                                    <Grid item xs={12} sm={4}>
                                        <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                                            <Checkbox defaultChecked={checked} />
                                            <SuiBox ml={1}>
                                                <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                                    {id}
                                                </SuiTypography>
                                            </SuiBox>

                                            <SuiTypography component="label" variant="h10" fontWeight="bold">
                                                Address
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
                                                Mobile
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
                                                Email Id
                                            </SuiTypography>
                                        </SuiBox>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>

                <SuiBox p={1}>
                    <Card id="profile">
                        <SuiBox p={2}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item>
                                    <SuiBox height="100%" mt={0.5} lineHeight={1}>
                                        <SuiTypography variant="h4" fontWeight="medium" >
                                            <SuiBox width="80%" textAlign="center" mx="auto" mb={4} style={{ marginLeft: "170px" }}>
                                                <SuiBox mb={1}>
                                                    <SuiTypography variant="h4" fontWeight="bold" style={{ color: "brown" }}>
                                                        Gumption Labs Finserv
                                                    </SuiTypography>
                                                </SuiBox>

                                                <SuiTypography variant="h5" fontWeight="bold" textColor="dark" >
                                                    Number : 42124493 | Email : anuraag@fundexpert.in | BANGALORE
                                                </SuiTypography>
                                                <br />
                                                <SuiBox mb={1}>
                                                    <SuiTypography variant="h4" fontWeight="bold" style={{ color: "brown" }}>
                                                        Portfolio Valuation Report
                                                    </SuiTypography>
                                                </SuiBox>

                                                <SuiTypography variant="h6" fontWeight="bold" textColor="dark">
                                                    Investments include Purchases, Switch Ins, Dividend Reinvestments and Sweeps. Withdrawals include Redemptions and Switch Outs. <br />
                                                    Note : Mutual Fund Investments are subject to market risks. If you find any difference between this report and your AMC statement, please contact us.
                                                </SuiTypography>

                                            </SuiBox>
                                        </SuiTypography>
                                    </SuiBox>
                                </Grid>
                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>


            </SuiBox>
        </DashboardLayout>
    );
}

export default IdCell;

import Grid from "@mui/material/Grid";

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import FormField from "layouts/pages/account/components/FormField";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

import SuiButton from "components/SuiButton";

// import { Link } from "react-router-dom";
import { useState } from "react";
import DataTable from "examples/Tables/DataTable";
import SuiSelect from "components/SuiSelect";
import dataTableData from "layouts/ecommerce/orders/order-list/data/dataTableData";
// import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

function ChangePasswor() {

    const [menu, setMenu] = useState(null);

    // const openMenu = (event) => setMenu(event.currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = (
        <Menu
            anchorEl={menu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(menu)}
            onClose={closeMenu}
            keepMounted
        >
            <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
            <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
            <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
            <Divider sx={{ margin: "0.5rem 0" }} />
            <MenuItem onClick={closeMenu}>
                <SuiTypography variant="button" textColor="error" fontWeight="regular">
                    Remove Filter
                </SuiTypography>
            </MenuItem>
        </Menu>
    );

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
            <Card id="change-password">
                <SuiBox p={3}>
                    <SuiTypography variant="h5">User(960)</SuiTypography>
                </SuiBox>

                <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                    <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                        {renderPasswordRequirements}
                    </SuiBox>

                </SuiBox>

                {/* </SuiBox> */}
                <SuiBox component="form" pb={3} px={3}>

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
                                                <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                                                    <SuiTypography
                                                        component="label"
                                                        variant="caption"
                                                        fontWeight="bold"
                                                        textTransform="capitalize"

                                                    >
                                                        Name/Email/Number/ClientID/FE UserId/PAN No
                                                    </SuiTypography>
                                                </SuiBox>
                                                <FormField

                                                    placeholder="Name or Number"
                                                    inputProps={{ type: "password", autoComplete: "" }}

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
                                                        Download Excel
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "Select ", label: "Select" },
                                                        { value: "Download User", label: "Download User" },
                                                        { value: "Download User Address", label: "Download User Address" },
                                                        { value: "your question", label: "", isDisabled: true },
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
                                                        Banks
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "SBI", label: "SBI" },
                                                        { value: "HDFC", label: "HDFC" },
                                                        { value: "", label: "", isDisabled: true },
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
                                                <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                                                    <SuiTypography
                                                        component="label"
                                                        variant="caption"
                                                        fontWeight="bold"
                                                        textTransform="capitalize"

                                                    >
                                                        Advisor
                                                    </SuiTypography>
                                                </SuiBox>
                                                <FormField

                                                    placeholder="Name or Number"
                                                    inputProps={{ type: "password", autoComplete: "" }}

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
                                                        Branch
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Adding-Branch", label: "Adding-Branch" },
                                                        { value: "Anuraag Branch", label: "Anuraag Branch" },
                                                        { value: "Branch Under Region", label: "Branch Under Region" },
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
                                                        Pan
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Provided", label: "Provided" },
                                                        { value: "Not Provided", label: "Not Provided" },
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
                                                <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                                                    <SuiTypography
                                                        component="label"
                                                        variant="caption"
                                                        fontWeight="bold"
                                                        textTransform="capitalize"

                                                    >
                                                        KYC
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Approved", label: "Approved" },
                                                        { value: "Not Approved", label: "Not Approved" },
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
                                                        BSE ID
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Registered", label: "Registered" },
                                                        { value: "Not Registered", label: "Not Registered" },
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
                                                        Docs
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Cheque Upload", label: "Cheque Upload" },
                                                        { value: "Cheque not Upload", label: "Cheque not Upload" },
                                                        { value: "Signature Upload", label: "Signature Upload" },
                                                        { value: "Signature not Upload", label: "Signature not Upload" },
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
                                                <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                                                    <SuiTypography
                                                        component="label"
                                                        variant="caption"
                                                        fontWeight="bold"
                                                        textTransform="capitalize"

                                                    >
                                                        AOF
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Done", label: "Done" },
                                                        { value: "Not Done", label: "Not Done" },
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
                                                        FATCA
                                                    </SuiTypography>
                                                </SuiBox>
                                                <SuiSelect
                                                    placeholder="Select"
                                                    options={[
                                                        { value: "All", label: "All" },
                                                        { value: "Done", label: "Done" },
                                                        { value: "Not Done", label: "Not Done" },
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


                    <SuiBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2} >
                        {/* <SuiButton variant="gradient" buttonColor="info">
                            new order
                        </SuiButton> */}
                        <SuiBox display="flex">
                            {/* <SuiButton
                                variant={menu ? "contained" : "outlined"}
                                buttonColor="dark"
                                onClick={openMenu}
                            >
                                filters&nbsp;
                                <Icon className="">keyboard_arrow_down</Icon>
                            </SuiButton> */}
                            {renderMenu}
                            <SuiBox ml={1}>
                                {/* <SuiButton variant="outlined" buttonColor="dark">
                                    <Icon className="">description</Icon>
                                    &nbsp;export csv
                                </SuiButton> */}
                            </SuiBox>
                        </SuiBox>
                    </SuiBox>
                    <Card style={{ fontWeight: "bold" }}>
                        <DataTable table={dataTableData} entriesPerPage={false} canSearch />
                    </Card>

                </SuiBox>

            </Card>

        </DashboardLayout>
    );
}

export default ChangePasswor;

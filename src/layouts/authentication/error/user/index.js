/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
// import SuiBadgeDot from "components/SuiBadgeDot";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


// Analytics application components

import Dropdownbutton from "layouts/applications/analytics/components/dropdownbutton";
import Dropdownbtn from "layouts/applications/analytics/components/dropdownbtn";
import Dropdownbtn1 from "layouts/applications/analytics/components/dropdownbtn1";
import Dropdownbtn2 from "layouts/applications/analytics/components/dropdownbtn2";
import Dropdownbtn3 from "layouts/applications/analytics/components/dropdownbtn3";
// import Dropdownbtn4 from "layouts/applications/analytics/components/dropdownbtn4";

import SuiTypography from "components/SuiTypography";
import userprofiletable from "layouts/ecommerce/overview/data/userprofiletable";
import DataTable from "examples/Tables/DataTable";
import Actionbtn from "layouts/authentication/error/Actionbtn";
import Card from "@mui/material/Card";

function Analytics() {
    const [menu, setMenu] = useState(null);

    const openMenu = (event) => setMenu(event.currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = (
        <Menu
            anchorEl={menu}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(menu)}
            onClose={closeMenu}
            keepMounted
        >
            <MenuItem onClick={closeMenu}> <Link to="/authentication/error/Userreports" >Capital Gains</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/capitalgains" >Unrealized Capital Gains</Link></MenuItem>

            <MenuItem onClick={closeMenu}>   <Link to="/authentication/error/capitalgains2" >Transaction Statement</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/capitalgains1" >ELSS Transaction Statement</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/capitalgains3" >Portfolio Valuation</Link></MenuItem>

        </Menu>
    );


    return (
        <DashboardLayout>
            <DashboardNavbar />

            <SuiBox p={1}>
                <Card id="profile">
                    <SuiBox p={1}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>
                                <SuiBox height="100%" mt={0.5} lineHeight={1}>
                                    <SuiTypography variant="h4" fontWeight="medium">
                                        KAUSTUBH BHATTAD
                                    </SuiTypography>
                                </SuiBox>
                            </Grid>
                        </Grid>

                        <SuiBox display="flex" justifyContent="flex-end" mb={3} ml={2}>

                            <SuiButton variant="gradient" buttonColor="error" onClick={openMenu}>
                                Reports&nbsp;
                                <Icon className="">expand_more</Icon>
                            </SuiButton>
                            {renderMenu}
                        </SuiBox>

                    </SuiBox>
                </Card>
            </SuiBox>

            <SuiBox py={3} mb={3}>

                <SuiBox mb={1} variant="gradient">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                            <Actionbtn />
                        </Grid>
                    </Grid>
                </SuiBox>

                <SuiBox p={1}>
                    <Card id="change-password">
                        <SuiBox p={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={12}>
                                    <SuiBox py={1} >
                                        <DataTable
                                            table={userprofiletable}
                                            entriesPerPage={false}
                                            showTotalEntries={false}
                                            isSorted={false}
                                            noEndBorder
                                            style={{ backgroundColor: "info" }}
                                        />
                                    </SuiBox>
                                </Grid>
                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>

                <SuiBox p={1}>
                    <Card id="change-password">
                        <SuiBox p={3}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12}>
                                    <Dropdownbutton style={{ width: "100%" }} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12}>
                                    <Dropdownbtn style={{ width: "100%" }} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12}>
                                    <Dropdownbtn1 style={{ width: "100%" }} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12}>
                                    <Dropdownbtn2 style={{ width: "100%" }} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={12}>
                                    <Dropdownbtn3 style={{ width: "100%" }} />
                                </Grid>
                            </Grid>
                        </SuiBox>
                    </Card>
                </SuiBox>

            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Analytics;

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

// @mui material components
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import SalesTable from "examples/Tables/SalesTable";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import Globe from "examples/Globe";

// Soft UI Dashboard PRO React base styles
// import typography from "assets/theme/base/typography";
// import breakpoints from "assets/theme/base/breakpoints";
// import { color } from "@mui/system";
// import { width } from "@mui/system";

// Data
// import salesTableData from "layouts/dashboards/default/data/salesTableData";
// import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
// import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";
// import { Table } from 'react-bootstrap';

function  Start() {
    // const { values } = breakpoints;
    // const { size } = typography;
    // const { chart, items } = reportsBarChartData;


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox py={1}>
                {/* <Grid container>
                    <Grid item xs={12} lg={12}>
                        <SuiBox mb={3} p={1}>
                            <SuiTypography
                                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                                textTransform="capitalize"
                                fontWeight="bold"
                                textAlign="center"
                            >
                                <h2>AOF Uploaded From This Software Users - 102</h2>
                            </SuiTypography>
                        </SuiBox>
                    </Grid>
                    <Grid item xs={12} md={10} lg={12} py={3}>
                        <Grid item xs={15} lg={12}>
                            <SuiBox mb={3}>
                            
                                <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
                                    <thead>
                                        <tr>
                                            <th width="8%" style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/user/signatureuploaded?sort=clientId&amp;direction=asc">ClientId</a></th>
                                            <th width="25%" style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/user/signatureuploaded?sort=name&amp;direction=asc">Name</a></th>
                                            <th width="10%&quot;" style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/user/signatureuploaded?sort=PAN&amp;direction=asc">PAN</a></th>
                                            <th width="8%" style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/user/signatureuploaded?sort=AOF+Uploaded+Status&amp;direction=asc">AOF Uploaded Status</a></th>
                                            <th width="10%" style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/user/signatureuploaded?sort=AOF+Uploaded+Date&amp;direction=asc">AOF Uploaded Date</a></th>
                                            <th width="8%" style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/user/signatureuploaded?sort=AOF+Verified+Status&amp;direction=asc">AOF Verified Status</a></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ Color: "#038d8a", padding: "10px" }}>K432847</td>
                                            <td><a href="/user/view/432847">KAUSTUBH BHATTAD</a></td>
                                            <td>GHHPB2700Q</td>

                                            <td>Yes</td>
                                            <td>May 10, 2022, 1:47 PM</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td style={{ Color: "#038d8a", padding: "10px" }}>R147767</td>
                                            <td><a href="/user/view/147767">Rahul Bedi</a></td>
                                            <td>ANMPB1128M</td>
                                            <td>Yes</td>
                                            <td>Apr 22, 2022, 6:33 PM</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td style={{ Color: "#038d8a", padding: "10px" }}>S36644</td>
                                            <td><a href="/user/view/36644">SUBHASH PODDAR</a></td>
                                            <td>ADBPP8768N</td>

                                            <td>Yes</td>
                                            <td>Apr 18, 2022, 12:39 PM</td>
                                            <td>Yes</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SuiBox>
                            <div className="x" style={{ textAlign: 'center' }}>
                                <ul>
                                    <li style={{ listStyle: 'none' }}>&lt; previous</li>
                                    <li style={{ listStyle: 'none' }}>1</li>
                                    <li style={{ listStyle: 'none' }}>2</li>
                                    <li style={{ listStyle: 'none' }}>3</li>
                                    <li style={{ listStyle: 'none' }}>next &gt;</li>
                                </ul>
                                <p>1 of 6</p>
                            </div>

                        </Grid>
                    </Grid>
                </Grid> */}
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Start;

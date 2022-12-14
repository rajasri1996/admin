// /**
// =========================================================
// * Soft UI Dashboard PRO React - v2.0.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// import { useState } from "react";

// // @mui material components
// import Grid from "@mui/material/Grid";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";
// import Card from "@mui/material/Card";

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiBadgeDot from "components/SuiBadgeDot";
// import SuiButton from "components/SuiButton";
// import SuiTypography from "components/SuiTypography";

// // Soft UI Dashboard PRO React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
// import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
// import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
// import SalesTable from "examples/Tables/SalesTable";
// import DataTable from "examples/Tables/DataTable";

// // Overview page components
// import ChannelsChart from "layouts/ecommerce/overview/components/ChannelsChart";

// // Data
// import defaultLineChartData from "layouts/ecommerce/overview/data/defaultLineChartData";
// import horizontalBarChartData from "layouts/ecommerce/overview/data/horizontalBarChartData";
// import salesTableData from "layouts/ecommerce/overview/data/salesTableData";
// import dataTableData from "layouts/ecommerce/overview/data/dataTableData";

// function Overview() {
//   // DefaultStatisticsCard state for the dropdown value
//   const [salesDropdownValue, setSalesDropdownValue] = useState("6 May - 7 May");
//   const [customersDropdownValue, setCustomersDropdownValue] = useState("6 May - 7 May");
//   const [revenueDropdownValue, setRevenueDropdownValue] = useState("6 May - 7 May");

//   // DefaultStatisticsCard state for the dropdown action
//   const [salesDropdown, setSalesDropdown] = useState(null);
//   const [customersDropdown, setCustomersDropdown] = useState(null);
//   const [revenueDropdown, setRevenueDropdown] = useState(null);

//   // DefaultStatisticsCard handler for the dropdown action
//   const openSalesDropdown = ({ currentTarget }) => setSalesDropdown(currentTarget);
//   const closeSalesDropdown = ({ currentTarget }) => {
//     setSalesDropdown(null);
//     setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
//   };
//   const openCustomersDropdown = ({ currentTarget }) => setCustomersDropdown(currentTarget);
//   const closeCustomersDropdown = ({ currentTarget }) => {
//     setCustomersDropdown(null);
//     setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
//   };
//   const openRevenueDropdown = ({ currentTarget }) => setRevenueDropdown(currentTarget);
//   const closeRevenueDropdown = ({ currentTarget }) => {
//     setRevenueDropdown(null);
//     setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
//   };

//   // Dropdown menu template for the DefaultStatisticsCard
//   const renderMenu = (state, close) => (
//     <Menu
//       anchorEl={state}
//       transformOrigin={{ vertical: "top", horizontal: "center" }}
//       open={Boolean(state)}
//       onClose={close}
//       keepMounted
//       disableAutoFocusItem
//     >
//       <MenuItem onClick={close}>Last 7 days</MenuItem>
//       <MenuItem onClick={close}>Last week</MenuItem>
//       <MenuItem onClick={close}>Last 30 days</MenuItem>
//     </Menu>
//   );

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <SuiBox py={3}>
//         <SuiBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4}>
//               <DefaultStatisticsCard
//                 title="sales"
//                 count="$230,220"
//                 percentage={{
//                   color: "success",
//                   value: "+55%",
//                   label: "since last month",
//                 }}
//                 dropdown={{
//                   action: openSalesDropdown,
//                   menu: renderMenu(salesDropdown, closeSalesDropdown),
//                   value: salesDropdownValue,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <DefaultStatisticsCard
//                 title="customers"
//                 count="3.200"
//                 percentage={{
//                   color: "success",
//                   value: "+12%",
//                   label: "since last month",
//                 }}
//                 dropdown={{
//                   action: openCustomersDropdown,
//                   menu: renderMenu(customersDropdown, closeCustomersDropdown),
//                   value: customersDropdownValue,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <DefaultStatisticsCard
//                 title="avg. revenue"
//                 count="$1.200"
//                 percentage={{
//                   color: "secondary",
//                   value: "+$213",
//                   label: "since last month",
//                 }}
//                 dropdown={{
//                   action: openRevenueDropdown,
//                   menu: renderMenu(revenueDropdown, closeRevenueDropdown),
//                   value: revenueDropdownValue,
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </SuiBox>
//         <SuiBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6} lg={4}>
//               <ChannelsChart />
//             </Grid>
//             <Grid item xs={12} sm={6} lg={8}>
//               <DefaultLineChart
//                 title="Revenue"
//                 description={
//                   <SuiBox display="flex" justifyContent="space-between">
//                     <SuiBox display="flex" ml={-1}>
//                       <SuiBadgeDot color="info" badgeContent="Facebook Ads" />
//                       <SuiBadgeDot color="dark" badgeContent="Google Ads" />
//                     </SuiBox>
//                     <SuiBox mt={-5.25} mr={-1}>
//                       <Tooltip title="See which ads perform better" placement="left" arrow>
//                         <SuiButton
//                           variant="outlined"
//                           buttonColor="secondary"
//                           size="small"
//                           circular
//                           iconOnly
//                         >
//                           <Icon className="">priority_high</Icon>
//                         </SuiButton>
//                       </Tooltip>
//                     </SuiBox>
//                   </SuiBox>
//                 }
//                 chart={defaultLineChartData}
//               />
//             </Grid>
//           </Grid>
//         </SuiBox>
//         <SuiBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} lg={8}>
//               <HorizontalBarChart title="Sales by age" chart={horizontalBarChartData} />
//             </Grid>
//             <Grid item xs={12} lg={4}>
//               <SalesTable title="Sales by Country" rows={salesTableData} />
//             </Grid>
//           </Grid>
//         </SuiBox>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Card>
//               <SuiBox pt={3} px={3}>
//                 <SuiTypography variant="h6" fontWeight="medium">
//                   Top Selling Products
//                 </SuiTypography>
//               </SuiBox>
//               <SuiBox py={1}>
//                 <DataTable
//                   table={dataTableData}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   isSorted={false}
//                   noEndBorder
//                 />
//               </SuiBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </SuiBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Overview;

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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
// import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
// import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
// import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import { Table, Form, Col, Button, Row } from 'react-bootstrap';


function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      <SuiTypography variant="h2" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Upcoming Birthdays
      </SuiTypography>
      <br />
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState" style={{ fontWeight: 'bold', width: '50px' }}>
          <Form.Label>Upcoming Birthday</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Week</option>
            <option>Month</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Button variant="primary" type="submit" style={{ margin: '30px', width: '250px' }}>
            Submit
          </Button>
        </Form.Group>
      </Row>
      <SuiBox my={3}>
        <SuiBox mb={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              {/* <SuiButton variant="gradient" buttonColor="info">
                  Apply
                </SuiButton> */}
              {/* <SuiBox mt={1} mb={2}>
                <SuiTypography variant="body2" textColor="text">
                  We???re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </SuiTypography>
              </SuiBox> */}
            </Grid>

            {/* <Grid item xs={12} lg={6}>
              <SuiBox display="flex" justifyContent="flex-end" style={{ float: "left", }}>
                <SuiButton variant="gradient" buttonColor="info">
                  Apply
                </SuiButton>
              </SuiBox>
            </Grid> */}
          </Grid>
        </SuiBox>
        <hr />
        <Grid container spacing={1} py={5}>
          {/* <Grid item xs={12} lg={4}>
            <ProductImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid> */}
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Date</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Customer Name</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Contact Number</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mail Id</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Address</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>09-06-2022</td>
                <td>DAWA DOMA KHYMSAR</td>
                <td>9842001000</td>
                <td>bjciwm@gmail.com</td>
                <td>BangaloreKasturba Rd</td>
              </tr>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>14-06-2022</td>
                <td>DAWA DOMA KHYMSAR</td>
                <td>9842001000</td>
                <td>bjciwm@gmail.com</td>
                <td>BangaloreKasturba Rd</td>
              </tr>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>20-06-2022</td>
                <td>DAWA DOMA KHYMSAR</td>
                <td>9842001000</td>
                <td>bjciwm@gmail.com</td>
                <td>BangaloreKasturba Rd</td>
              </tr>
            </tbody>
          </Table>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

// import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
// import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import MasterCard from "examples/Cards/MasterCard";
// import MiniInfoCard from "examples/Cards/InfoCards/MiniInfoCard";
// import ControllerCard from "examples/Cards/ControllerCard";
// import Calendar from "examples/Calendar";
// import CategoriesList from "examples/Lists/CategoriesList";

// Widgets page components
// import Steps from "layouts/pages/rtl/components/Steps";
// import FullBody from "layouts/pages/rtl/components/FullBody";
// import MediaPlayer from "layouts/pages/rtl/components/MediaPlayer";
// import OrdersOverview from "layouts/pages/rtl/components/OrdersOverview";
// import UpcomingEvents from "layouts/pages/rtl/components/UpcomingEvents";
// import Chart from "layouts/pages/rtl/components/Chart";

// Data
// import progressLineChartData from "layouts/pages/rtl/data/progressLineChartData";
// import calendarEventsData from "layouts/pages/rtl/data/calendarEventsData";
// import categoriesListData from "layouts/pages/rtl/data/categoriesListData";
// import incomeChartData from "layouts/pages/rtl/data/incomeChartData";
// import caloriesChartData from "layouts/pages/rtl/data/caloriesChartData";

// Soft UI Dashboard PRO React contexts
// import { useSoftUIController } from "context";
import { Table } from 'react-bootstrap';

function RTL() {

  return (

    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={1}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <SuiBox mb={3} p={1}>
              <SuiTypography variant="h4" fontWeight="large" fontSize="1.6rem" >
                Rejected Transactions Report - User wise
                <a href="/holding/ schemewise" style={{ float: 'right' }}>  Rejected Transactions Report - Date wise </a>
              </SuiTypography>
            </SuiBox>
          </Grid>

          <Grid item xs={15} lg={12} py={.05}>
            <SuiBox mb={3}>
              <br />
              <h3 style={{ color: 'brown' }}>1679 Transactions</h3>
              <hr style={{ color: 'brown' }} />
              <br />
              <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th style={{ width: '20%',padding:'15px' }}><a href="/transaction/rejectedtransactions?sort=User+ID&amp;direction=asc">User Id</a></th>
                    <th style={{ width: '20%',padding:'15px' }}><a href="/transaction/rejectedtransactions?sort=User+Name&amp;direction=asc">User Name</a></th>
                    <th style={{ width: '22%',padding:'15px' }}><a href="/transaction/rejectedtransactions?sort=Holding+ID&amp;direction=asc">Holding Id</a></th>
                    <th style={{ width: '30%' ,padding:'15px'}}><a href="/transaction/rejectedtransactions?sort=Scheme&amp;direction=asc">Scheme</a></th>
                    <th style={{ width: '8%' ,padding:'15px'}} >-</th>
                    <th style={{ width: '8%',padding:'15px' }} >-</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={{ padding: "10px" }}>121</td>
                    <td> <a href="/user/view/121">Anuradha Saboo</a></td>
                    <td> <a href="/holding/view/1166970">1166970</a></td>
                    <td>	HDFC LARGE AND MID CAP FUND - REGULAR PLAN - GROWTH</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <th style={{ width: '30%', padding: "10px" }}> <a href="/transaction/rejectedtransactions?sort=Unique+No+&amp;direction=asc">Unique No </a></th>
                    <th style={{ width: '15%', padding: "10px" }}><a href="/transaction/rejectedtransactions?sort=Execution+Date&amp;direction=asc">Execution Date</a></th>
                    <th style={{ width: '10%', padding: "10px" }}><a href="/transaction/rejectedtransactions?sort=Buy%2FSell&amp;direction=asc">Buy/Sell</a></th>
                    <th style={{ width: '10%' , padding: "10px"}}><a href="/transaction/rejectedtransactions?sort=Amount&amp;direction=asc">Amount</a></th>
                    <th style={{ width: '10%', padding: "10px" }} ><a href="/transaction/rejectedtransactions?sort=Units&amp;direction=asc">Units</a></th>
                    <th style={{ width: '10%' , padding: "10px"}} ><a href="/transaction/rejectedtransactions?sort=NAV&amp;direction=asc">NAV</a></th>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px"}}>HTPGSOMAO27753374584</td>
                    <td>Jan 14, 2022</td>
                    <td>Switchout</td>
                    <td>180828.11</td>
                    <td>929.588</td>
                    <td>194.5249</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px"}}>HGFGPGSIMAO27760962176</td>
                    <td>Jan 14, 2022</td>
                    <td>Switch-In</td>
                    <td>180828.11</td>
                    <td>929.588</td>
                    <td>194.525</td>
                  </tr>
                </tbody>
              </Table>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default RTL;

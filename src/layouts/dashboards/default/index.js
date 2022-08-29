// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Globe from "examples/Globe";

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
import breakpoints from "assets/theme/base/breakpoints";

// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import salesTableDatas from "layouts/dashboards/default/data/salesTableDatas";
// import salesTableDatas1 from "layouts/dashboards/default/data/salesTableDatas1";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";

function Default() {
  const { values } = breakpoints;
  const { size } = typography;


  return (
    <DashboardLayout >
      <DashboardNavbar />
      <SuiBox py={3} style={{ backgroundColor: "#f8f9fa" , borderRadius:"15px"}}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SuiBox mb={3} p={1}>
              <SuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                Overall Dashboard
              </SuiTypography>
            </SuiBox>

            <Grid container>
              <Grid item xs={12}>
                <Globe
                  display={{ xs: "none", md: "block" }}
                  position="absolute"
                  top="10%"
                  right={0}
                  mt={{ xs: -12, lg: 1 }}
                  mr={{ xs: 0, lg: 10 }}
                  canvasStyle={{ marginTop: "3rem" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <SuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "total AUM" }}
                    count="Rs.53,000"
                    percentage={{ color: "success", text: "" }}
                    icon={{ color: "info", component: "paid" }}
                  />
                </SuiBox>
                <MiniStatisticsCard
                  title={{ text: "total clients" }}
                  count="2,300"
                  percentage={{ color: "success", text: "" }}
                  icon={{ color: "info", component: "public" }}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <SuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "running sips" }}
                    count="3,462"
                    percentage={{ color: "error", text: "" }}
                    icon={{ color: "info", component: "emoji_events" }}
                  />
                </SuiBox>
                <SuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "Total Purchase" }}
                    count="Rs. 25.65 Cr"
                    percentage={{ color: "success", text: "" }}
                    icon={{
                      color: "info",
                      component: "shopping_cart",
                    }}
                  />
                </SuiBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={7}>
            <Grid item xs={12} lg={10}>
              <SuiBox mb={3} position="relative">
                <SalesTable title="TOP AMC AUM" rows={salesTableDatas} />
              </SuiBox>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <SuiBox mb={3} position="relative">
                <SalesTable title="TOP INVESTORS AUM" rows={salesTableData} />
              </SuiBox>
            </Grid>
            {/* <Grid item xs={12} lg={5}>
              <SuiBox mb={3} position="relative">
                <SalesTable title="CURRENT MONTH SNAPSHOT" rows={salesTableDatas1} />
              </SuiBox>
            </Grid> */}

            <Grid item xs={12} lg={12}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className=" font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" textColor="text" fontWeight="medium">
                      4% more{" "}
                      <SuiTypography variant="button" textColor="text" fontWeight="regular">
                        in 2021
                      </SuiTypography>
                    </SuiTypography>
                  </SuiBox>
                }
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;


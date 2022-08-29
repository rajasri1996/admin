import Card from "@mui/material/Card";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import breakpoints from "assets/theme/base/breakpoints";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

function DataTables() {
  const { values } = breakpoints;

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiBox py={3} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>

        <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
          <SuiTypography
            variant={window.innerWidth < values.sm ? "h3" : "h3"}
            textTransform="capitalize"
            fontWeight="bold"
          >
            DAILY DASHBOARD
          </SuiTypography>
        </SuiBox>
        <SuiBox my={3}>
          <SuiBox mb={3}>
            <Card>
              <SuiBox p={2}>
                <SuiBox mb={1}>
                  <SuiTypography variant="h5" fontWeight="bold">
                    August
                  </SuiTypography>
                </SuiBox>

              </SuiBox>
              <SuiBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Users Invested" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Net Monthly Inflow" }}
                        count="Rs.53,000"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Mandates Added At BSE" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "public" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Actual SIPs Done At BSE" }}
                        count="0/Rs. 0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4} >
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Mandates Added At BSE" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>

                  <Grid item xs={6} lg={4} >
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Actual STPs Done At BSE" }}
                        count="0/Rs. 0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "emoji_events" }}
                      />
                    </SuiBox>
                  </Grid>

                </Grid>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>


        <SuiBox my={3}>
          <SuiBox mb={3}>
            <Card>
              <SuiBox p={2}>
                <SuiBox mb={1}>
                  <SuiTypography variant="h5" fontWeight="bold">
                    July
                  </SuiTypography>
                </SuiBox>

              </SuiBox>

              <SuiBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Users Invested" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Net Monthly Inflow" }}
                        count="Rs.53,000"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Mandates Added At BSE" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "public" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Actual SIPs Done At BSE" }}
                        count="0/Rs. 0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4} >
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Mandates Added At BSE" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>

                  <Grid item xs={6} lg={4} >
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Actual STPs Done At BSE" }}
                        count="0/Rs. 0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "emoji_events" }}
                      />
                    </SuiBox>
                  </Grid>

                </Grid>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>


        <SuiBox my={3}>
          <SuiBox mb={3}>
            <Card>
              <SuiBox p={2}>
                <SuiBox mb={1}>
                  <SuiTypography variant="h5" fontWeight="bold">
                    June
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
              <SuiBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Users Invested" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Net Monthly Inflow" }}
                        count="Rs.53,000"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Mandates Added At BSE" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "public" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Actual SIPs Done At BSE" }}
                        count="0/Rs. 0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={6} lg={4} >
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Mandates Added At BSE" }}
                        count="0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "paid" }}
                      />
                    </SuiBox>
                  </Grid>

                  <Grid item xs={6} lg={4} >
                    <SuiBox mb={1}>
                      <MiniStatisticsCard
                        title={{ text: "Actual STPs Done At BSE" }}
                        count="0/Rs. 0"
                        percentage={{ color: "success", text: "" }}
                        icon={{ color: "info", component: "emoji_events" }}
                      />
                    </SuiBox>
                  </Grid>

                </Grid>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>

      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;

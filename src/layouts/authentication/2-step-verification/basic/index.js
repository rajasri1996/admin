import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "examples/Footer";
// import { Link } from "react-router-dom";
import DataTable from "examples/Tables/DataTable";
import userswisetable from "layouts/authentication/error/userswisetable";

import SuiBadgeDot from "components/SuiBadgeDot";
import PieChart from "examples/Charts/PieChart"
// Data
import channelChartData from "layouts/ecommerce/overview/components/ChannelsChart/data";
import Tabs from "layouts/pages/account/components/Tabs";

function Charts() {

  return (

    <Tabs stickyNavbar>
      {/* <DashboardNavbar /> */}
      <SuiBox p={2} >
        <Card id="change-password">
          <SuiBox p={1} >
            <DataTable table={userswisetable} entriesPerPage={false} />
          </SuiBox>
        </Card>
      </SuiBox>

      <SuiBox p={1} pb={2} px={1}>
        <Card id="change-password">
          <SuiBox p={3}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={15}>
                <Grid item xs={7} style={{ marginLeft: "200px", width: "100%" }}>
                  <PieChart chart={channelChartData} height="100%" />
                </Grid>
                <Grid item xs={5} style={{ float: "right", marginRight: "200px" }}>
                  <SuiBox px={1}>
                    <SuiBox mb={0.5} >
                      <SuiBadgeDot color="info" badgeContent="Facebook" />
                    </SuiBox>
                    <SuiBox mb={0.5}>
                      <SuiBadgeDot color="primary" badgeContent="Direct" />
                    </SuiBox>
                    <SuiBox mb={0.5}>
                      <SuiBadgeDot color="dark" badgeContent="Organic" />
                    </SuiBox>
                    <SuiBox mb={0.5}>
                      <SuiBadgeDot color="secondary" badgeContent="Referral" />
                    </SuiBox>
                  </SuiBox>
                </Grid>

              </Grid>
            </Grid>
          </SuiBox>
        </Card>
      </SuiBox>
      <Footer />
    </Tabs>
  );
}

export default Charts;
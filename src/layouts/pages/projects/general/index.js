// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

import { Link } from "react-router-dom";

import { Table } from 'react-bootstrap';

function General() {



  return (
    // <DashboardLayout>
    //   <DashboardNavbar />



    <SuiBox mt={3}>

      <br />
      <h2 style={{ color: 'green', textAlign: 'center' }}>SIP Reports</h2>

      <br />

      <hr style={{ color: 'red' }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={10} lg={12} py={3}>
          <Grid item xs={15} lg={12}>
            <SuiBox mb={3}>
              <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>

                <thead>

                  <tr>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}> <Link to="/dashboards/pages/users/reports" >AMC Wise SIP</Link></th>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}> <Link to="/pages/profile/teams" >Scheme Wise SIP</Link></th>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}><Link to="/pages/projects/new-project" >Client Wise SIP</Link></th>


                    <th style={{ padding: "15px", borderColor: 'white', width: '200px' }}>SIP Maturing in 1 Month</th>

                    <th style={{ backgroundColor: "#e6f3ff", padding: "15px", borderColor: 'white', width: '200px' }}><Link to="/pages/projects/timeline" >SIP Maturing in 1 Month</Link></th>

                  </tr>

                </thead>

              </Table>

              <br />

              <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

                <thead>

                  <tr>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Client Name</th>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Pan Number</th>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>SIP Amount</th>

                    <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>No Of SIPS</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: '15px' }}>Total</td>

                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: '15px' }}>Nill</td>

                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: '15px' }}>0</td>

                    <td style={{ fontWeight: "900", backgroundColor: "#ddd", padding: '15px' }}>0</td>

                  </tr>

                </tbody>

              </Table>

            </SuiBox>
          </Grid>
        </Grid>
      </Grid>
    </SuiBox>
    // <Footer />

    // </DashboardLayout>

  );
}

export default General;

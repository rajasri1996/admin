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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiProgress from "components/SuiProgress";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";
import { Table } from 'react-bootstrap';

function Reviews() {
  return (


    <Card >
      {/* <SuiBox pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium">
          Reviews
        </SuiTypography>
      </SuiBox> */}
      {/* <SuiBox pt={2} px={2}>
        <SuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          customClass="no-list-style"
        >
          <SuiBox component="li" w="100%" py={1} mb={0.5}>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textColor="text"
                textTransform="capitalize"
              >
                positive reviews
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textColor="text"
                textTransform="capitalize"
              >
                80%
              </SuiTypography>
            </SuiBox>
            <SuiProgress value={80} gradient noLabel />
          </SuiBox>
          <SuiBox component="li" w="100%" py={1} mb={0.5}>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textColor="text"
                textTransform="capitalize"
              >
                neutral reviews
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textColor="text"
                textTransform="capitalize"
              >
                17%
              </SuiTypography>
            </SuiBox>
            <SuiProgress color="dark" value={17} gradient noLabel />
          </SuiBox>
          <SuiBox component="li" w="100%" py={1} mb={0.5}>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textColor="text"
                textTransform="capitalize"
              >
                negative reviews
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textColor="text"
                textTransform="capitalize"
              >
                3%
              </SuiTypography>
            </SuiBox>
            <SuiProgress color="error" value={3} gradient noLabel />
          </SuiBox>
        </SuiBox>
      </SuiBox> */}
      {/* <SuiBox pb={2} px={2} display="flex" flexDirection={{ xs: "column", sm: "row" }} mt="auto">
        <SuiBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            More than <strong>1,500,000</strong> developers used Creative Tim&apos;s products and
            over <strong>700,000</strong>
            projects were created.
          </SuiTypography>
        </SuiBox>
        <SuiBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <SuiButton variant="gradient" buttonColor="dark">
            view all reviews
          </SuiButton>
        </SuiBox>
      </SuiBox> */}

      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Identical Email (105)
      </SuiTypography>

      <SuiBox my={3}>
        <hr />
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Tick</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	ClientId</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Name</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Email</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Mobile No</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>PAN Number</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Tax Status</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px" }}><input type="checkbox" className="from-check-input" /></td>
                <td>A56</td>
                <td> AMIT SHARDA</td>
                <td>amitams@yahoo.com</td>
                <td>9902526376</td>
                <td>	AOVPS6703D</td>
                <td>Individual</td>
                <td>01/01/1980</td>
              </tr>
              <tr>
                <td style={{ padding: "10px" }}><input type="checkbox" className="from-check-input" /></td>
                <td>A211</td>
                <td> AMIT SHARDA</td>
                <td>amitams@yahoo.com</td>
                <td>9902526376</td>
                <td>	AOVPS6703D</td>
                <td>Individual</td>
                <td>01/01/1980</td>
              </tr>
            </tbody>
          </Table>

        </Grid>
      </SuiBox>


      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Identical Mobile No. (235)
      </SuiTypography>

      <SuiBox my={3}>
        <hr />
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	ClientId</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Name</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Email</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Mobile No</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>PAN Number</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Tax Status</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>DOB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5013303464</td>
                <td> AMIT SHARDA</td>
                <td>amitams@yahoo.com</td>
                <td>9902526376</td>
                <td>	AOVPS6703D</td>
                <td>Individual</td>
                <td>01/01/1980</td>
              </tr>
              <tr>
                <td>5013303464</td>
                <td> AMIT SHARDA</td>
                <td>amitams@yahoo.com</td>
                <td>9902526376</td>
                <td>	AOVPS6703D</td>
                <td>Individual</td>
                <td>01/01/1980</td>
              </tr>
            </tbody>
          </Table>

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default Reviews;

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
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard PRO React base styles
// import colors from "assets/theme/base/colors";
// import borders from "assets/theme/base/borders";

// Soft UI Dashboard PRO React data variables
// import storiesData from "layouts/pages/profile/teams/components/Stories/data/storiesData";

function Stories() {
  // const { borderWidth } = borders;

  // const renderStories = storiesData.map(({ image, name, color }) => (
    <Grid>
      {/* <SuiBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        // border={`${borderWidth[1]} solid ${colors[color].main}`}
        customClass="cursor-pointer"
      >
        <SuiAvatar src={image} alt={name} />
      </SuiBox> */}
      {/* <SuiBox mt={0.75} textAlign="center" lineHeight={1}>
        <SuiTypography variant="button" textColor="text" fontWeight="regular">
          {name}
        </SuiTypography>
      </SuiBox> */}
    </Grid>
  // ));

  return (
    <Card >
      <SuiBox>
        {/* <Grid container justifyContent="space-between" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <SuiBox
              backgroundColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              backgroundGradient
              customClass="cursor-pointer"
            >
              <Icon className="" fontSize="small">
                add
              </Icon>
            </SuiBox>
            <SuiBox mt={0.75} textAlign="center" lineHeight={1}>
              <SuiTypography variant="button" textColor="text" fontWeight="regular">
                Add story
              </SuiTypography>
            </SuiBox>
          </Grid> */}
          {/* {renderStories} */}
        {/* </Grid> */}
      </SuiBox>
    </Card>
  );
}

export default Stories;

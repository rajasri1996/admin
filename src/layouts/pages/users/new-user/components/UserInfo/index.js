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
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
// import SuiAvatar from "components/SuiAvatar";
// import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React base styles
// import typography from "assets/theme/base/typography";

// // VR dashboards components
// import BaseLayout from "layouts/dashboards/virtual-reality/components/BaseLayout";

// VRInfo dashboards components
// import TodoList from "layouts/dashboards/virtual-reality/vr-info/components/TodoList";
// import TodoCard from "layouts/dashboards/virtual-reality/vr-info/components/TodoCard";
// import Emails from "layouts/dashboards/virtual-reality/vr-info/components/Emails";
// import MediaPlayer from "layouts/dashboards/virtual-reality/vr-info/components/MediaPlayer";
// import Messages from "layouts/dashboards/virtual-reality/vr-info/components/Messages";

// Custom styles for the VRDefault
// import styles from "layouts/dashboards/virtual-reality/vr-info/styles";

// Images
// import team1 from "assets/images/team-1.jpg";
// import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";

function VRInfo() {
  // const { d1, h2, fontWeightMedium } = typography;
  // const classes = styles();

  return (

    <SuiBox>

    <h1>hello</h1>
    </SuiBox>

    // <BaseLayout>
    //   <SuiBox
    //     minHeight="100vh"
    //     ml={{ xs: 0, md: 10 }}
    //     mt={{ xs: 0, md: 4 }}
    //     pt={{ xs: 16, md: 32 }}
    //     pb={{ xs: 0, md: 3 }}
    //     customClass={classes.vrInfo}
    //   >
    //     <Grid container>
    //       <Grid item xs={12} md={1}>
    //         <SuiBox
    //           // display="flex"
    //           // flexDirection={{ xs: "row", md: "column" }}
    //           // justifyContent="center"
    //           // alignItems="center"
    //           // px={2}
    //           // mb={{ xs: 8, md: 0 }}
    //         >
    //           {/* <Tooltip title="My Profile" placement="right">
    //             <SuiAvatar
    //               src={team1}
    //               alt="Profile Picture"
    //               size="lg"
    //               variant="rounded"
    //               customClass="cursor-pointer"
    //             />
    //           </Tooltip> */}

    //           <SuiBox my={{ xs: 0, md: 2 }} mx={{ xs: 2, md: 0 }}>
    //             <Tooltip title="Home" placement="right">
    //               <SuiButton size="large" iconOnly customClass="text-dark radius-lg">
    //                 <Icon className="">home</Icon>
    //               </SuiButton>
    //             </Tooltip>
    //           </SuiBox>
    //           <SuiBox mb={{ xs: 0, md: 2 }} mr={{ xs: 2, md: 0 }}>
    //             <Tooltip title="Search" placement="right">
    //               <SuiButton size="large" iconOnly customClass="text-dark radius-lg">
    //                 <Icon className="">search</Icon>
    //               </SuiButton>
    //             </Tooltip>
    //           </SuiBox>
    //           <Tooltip title="Minimize" placement="right">
    //             <SuiButton size="large" iconOnly customClass="text-dark radius-lg">
    //               <Icon className="">more_horiz</Icon>
    //             </SuiButton>
    //           </Tooltip>
    //         </SuiBox>
    //       </Grid>
    //       <Grid item xs={12} md={11} lg={10} xl={9}>
    //         <SuiBox
    //           display="flex"
    //           justifyContent="space-between"
    //           alignItems={{ xs: "center", md: "flex-start" }}
    //           ml={{ xs: 1, md: 4 }}
    //           mt={-1}
    //         >
    //           <SuiBox>
    //             <SuiBox
    //               fontSize={{ xs: h2.fontSize, lg: d1.fontSize }}
    //               fontWeight={fontWeightMedium}
    //               lineHeight={1}
    //             >
    //               28&deg;C
    //             </SuiBox>
    //             <SuiTypography variant="h6" fontWeight="medium" textTransform="uppercase">
    //               cloudy
    //             </SuiTypography>
    //           </SuiBox>
    //           <SuiBox component="img" src={sunCloud} width="30%" />
    //         </SuiBox>
    //         <SuiBox mt={3} mb={8} ml={{ xs: 1, md: 4 }} mr={{ xs: 1, md: 0 }}>
    //           <Grid container spacing={3}>
    //             <Grid item xs={12} md={4}>
    //               <TodoList />
    //             </Grid>
    //             <Grid item xs={12} md={4}>
    //               <SuiBox mb={3}>
    //                 <TodoCard />
    //               </SuiBox>
    //               <Emails />
    //             </Grid>
    //             <Grid item xs={12} md={4}>
    //               <SuiBox mb={3}>
    //                 <MediaPlayer />
    //               </SuiBox>
    //               <Messages />
    //             </Grid>
    //           </Grid>
    //         </SuiBox>
    //       </Grid>
    //     </Grid>
    //   </SuiBox>
    // </BaseLayout>
  );
}

export default VRInfo;

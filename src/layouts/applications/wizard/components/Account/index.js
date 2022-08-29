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

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// // Soft UI Dashboard PRO React icons
// import Settings from "examples/Icons/Settings";
// import Cube from "examples/Icons/Cube";
// import SpaceShip from "examples/Icons/SpaceShip";

// // Custom styles for Account
// import styles from "layouts/applications/wizard/components/Account/styles";

// function Account() {
//   const [design, setDesign] = useState(false);
//   const [code, setCode] = useState(false);
//   const [develop, setDevelop] = useState(false);
//   const classes = styles();

//   const handleSetDesign = () => setDesign(!design);
//   const handleSetCode = () => setCode(!code);
//   const handleSetDevelop = () => setDevelop(!develop);

//   return (
//     <SuiBox>
//       <SuiBox width="80%" textAlign="center" mx="auto" mb={4}>
//         <SuiBox mb={1}>
//           <SuiTypography variant="h5" fontWeight="regular">
//             What are you doing? (checkboxes)
//           </SuiTypography>
//         </SuiBox>
//         <SuiTypography variant="body2" fontWeight="regular" textColor="text">
//           Give us more details about you. What do you enjoy doing in your spare time?
//         </SuiTypography>
//       </SuiBox>
//       <SuiBox mt={2}>
//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} sm={3}>
//             <SuiBox textAlign="center">
//               <SuiButton
//                 buttonColor="secondary"
//                 variant={design ? "contained" : "outlined"}
//                 onClick={handleSetDesign}
//                 customClass={classes.customButton}
//               >
//                 <Settings size="24px" color={design ? "white" : "dark"} />
//               </SuiButton>
//               <SuiTypography variant="h6">Design</SuiTypography>
//             </SuiBox>
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <SuiBox textAlign="center">
//               <SuiButton
//                 buttonColor="secondary"
//                 variant={code ? "contained" : "outlined"}
//                 onClick={handleSetCode}
//                 customClass={classes.customButton}
//               >
//                 <Cube size="24px" color={code ? "white" : "dark"} />
//               </SuiButton>
//               <SuiTypography variant="h6">Code</SuiTypography>
//             </SuiBox>
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <SuiBox textAlign="center">
//               <SuiButton
//                 buttonColor="secondary"
//                 variant={develop ? "contained" : "outlined"}
//                 onClick={handleSetDevelop}
//                 customClass={classes.customButton}
//               >
//                 <SpaceShip size="24px" color={develop ? "white" : "dark"} />
//               </SuiButton>
//               <SuiTypography variant="h6">Develop</SuiTypography>
//             </SuiBox>
//           </Grid>
//         </Grid>
//       </SuiBox>
//     </SuiBox>
//   );
// }

// export default Account;

import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";
import SuiSelect from "components/SuiSelect";
import SuiButton from "components/SuiButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "examples/Tables/DataTable";


function Overview() {

  const columns =
  {
    columns: [
      { Header: "Advisor Name", accessor: "product" , color:"dark",},
      { Header: "	Monthly Inflow", accessor: "bse" },
      { Header: "Monthly Outflow", accessor: "pan" },
      { Header: "New SIPs Registered", accessor: "a1" },
      { Header: "New Clients Added", accessor: "a2" },
    ],

    rows: [
      {
        product: <h10 style={{ color: 'black' }}>Anuraag Advisor</h10>,
        bse: "0",
        pan: "0",
        a1: "0",
        a2: "0",
      },
      {
        product: <h10 style={{ color: 'black' }}>Testing-Adetee</h10>,
        bse: "0",
        pan: "0",
        a1: "0",
        a2: "0",
      },
      {
        product: <h10 style={{ color: 'black' }}>Advisor Under Branch</h10>,
        bse: "0",
        pan: "0",
        a1: "0",
        a2: "0",
      },
      {
        product: <h6 style={{ color: 'black' }}>Total</h6>,
        bse: <h6 style={{ color: 'black' }}>0</h6>,
        pan: <h6 style={{ color: 'black' }}>0</h6>,
        a1: <h6 style={{ color: 'black' }}>0</h6>,
        a2: <h6 style={{ color: 'black' }}>0</h6>,
      },
    ],

  }

  const passwordRequirements = [

  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (

      <SuiBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <SuiTypography
          variant="button"
          textColor="text"
          fontWeight="regular"
          verticalAlign="middle"
        >
          {item}
        </SuiTypography>
      </SuiBox>
    );
  });


  return (


    <SuiBox my={3}>
      <Card id="change-password">

        <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
          <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </SuiBox>

        </SuiBox>

        <SuiBox component="form" pb={3} px={3} p={3} mb={15}>

          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Grid container spacing={2}>

                <Grid item xs={12} sm={12}>
                  <Grid container spacing={3}>

                    <Grid item xs={12} sm={4}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"

                          >
                            Year
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[
                            { value: "2022", label: "2022" },
                            { value: "2021", label: "2021" },
                            { value: "2020", label: "2020" },
                            { value: "", label: "", isDisabled: true },
                          ]}

                        />
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={4} >
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"

                          >
                            Month
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "January", label: "January" },
                            { value: "February", label: "February" },
                            { value: "March", label: "March" },
                            { value: "April", label: "April" },
                            { value: "", label: "", isDisabled: true },
                          ]}
                        />
                      </SuiBox>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiButton variant="gradient" buttonColor="dark">
                          Submit
                        </SuiButton>
                      </SuiBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SuiBox>
      </Card>

      <SuiBox component="form" my={3}>
        <Card id="change-password">
          <SuiBox mt={8} mb={2}>
            <SuiBox mb={1} ml={2}>
              <SuiTypography variant="h5" fontWeight="medium">
                Month Wise Report
              </SuiTypography>
            </SuiBox>
            <DataTable
              table={columns}
              entriesPerPage={false}
              showTotalEntries={false}
              isSorted={false}
            />
          </SuiBox>
        </Card>
      </SuiBox>
    </SuiBox>
  );
}

export default Overview;

import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuiButton from "components/SuiButton";
// import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import SuiSelect from "components/SuiSelect";
import DataTable from "examples/Tables/DataTable";
import mfdatatable from "layouts/ecommerce/referral/data/mfdatatable";
import mftable1 from "layouts/ecommerce/referral/data/mftable1";
import mftable from "layouts/ecommerce/referral/data/mftable";
import breakpoints from "assets/theme/base/breakpoints";

function IdCell({ id, checked }) {

  const { values } = breakpoints;
  IdCell.defaultProps = {
    checked: false,
  };

  // Typechecking props for the IdCell
  IdCell.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  };


  return (

    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox my={3}>
        <SuiBox p={1}>
          <Card id="change-password">
            <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
              <SuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                MF Holdings
              </SuiTypography>
            </SuiBox>

            <SuiBox component="form" pb={3} px={3} pt={3} mb={10}>
              <Grid item xs={12}>
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
                          Name
                        </SuiTypography>
                      </SuiBox>
                      <SuiSelect
                        placeholder="Select"
                        options={[

                          { value: "Select User", label: "Select User" },
                          // { value: "Purchase", label: "Purchase" },
                          // { value: "Switch In", label: "Switch In" },
                          // { value: "", label: "", isDisabled: true },
                        ]}


                      />
                    </SuiBox>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={5}>
                        <SuiBox display="flex" alignItems="center" style={{ marginTop: "30px", marginLeft: "50px" }}>

                          <Checkbox defaultChecked={checked} />
                          <SuiBox ml={1}>
                            <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                              {id}
                            </SuiTypography>
                          </SuiBox>

                          <SuiTypography component="label" variant="h10" fontWeight="bold">
                            Download Excel
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <SuiBox display="flex" alignItems="center" style={{ marginTop: "30px" }}>

                          <Checkbox defaultChecked={checked} />
                          <SuiBox ml={1}>
                            <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                              {id}
                            </SuiTypography>
                          </SuiBox>

                          <SuiTypography component="label" variant="h10" fontWeight="bold">
                            Download Pdf
                          </SuiTypography>
                        </SuiBox>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiButton variant="gradient" buttonColor="primary">
                            Submit
                          </SuiButton>
                        </SuiBox>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </SuiBox>
          </Card>

        </SuiBox>

        <SuiBox p={1}>
          <Card>
            <SuiBox pt={3} px={3}>
              <SuiTypography variant="h6" fontWeight="medium" >
                PAN Wise Summary
              </SuiTypography>
            </SuiBox>
            <DataTable
              table={mfdatatable}
              entriesPerPage={false}
              showTotalEntries={false}
              isSorted={false}
              noEndBorder
            />
          </Card>
        </SuiBox>

        <SuiBox p={1}>
          <Card>
            <SuiBox pt={3} px={3}>
              <SuiTypography variant="h6" fontWeight="medium">
                Detailed Holding Statement Through PDF(all MF)
              </SuiTypography>
            </SuiBox>
            <DataTable
              table={mftable}
              entriesPerPage={false}
              showTotalEntries={false}
              isSorted={false}
              noEndBorder
            />
          </Card>
        </SuiBox>
        <SuiBox p={1}>
          <Card>
            <SuiBox pt={3} px={3}>
              <SuiTypography variant="h6" fontWeight="medium">
                Detailed Holding Statement Through PDF(all MF)
              </SuiTypography>
            </SuiBox>
            <DataTable
              table={mftable1}
              entriesPerPage={false}
              showTotalEntries={false}
              isSorted={false}
              noEndBorder
            />
          </Card>
        </SuiBox>

      </SuiBox>
    </DashboardLayout>
  );
}

export default IdCell;

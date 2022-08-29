import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import FormField from "layouts/pages/account/components/FormField";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuiButton from "components/SuiButton";
// import { Link } from "react-router-dom";
import Table from "examples/Tables/Table";
import SuiSelect from "components/SuiSelect";
import tableData from "layouts/pages/users/reports/data/tableData";
import breakpoints from "assets/theme/base/breakpoints";

function Overview() {
  const { columns, rows } = tableData;
  const { values } = breakpoints;
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

    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox my={3}>

        <Card id="change-password">

          <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
            <SuiTypography
              variant={window.innerWidth < values.sm ? "h3" : "h2"}
              textTransform="capitalize"
              fontWeight="bold"
            >
              User(960)
            </SuiTypography>
          </SuiBox>

          <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
            <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
              {renderPasswordRequirements}
            </SuiBox>

          </SuiBox>

          <SuiBox component="form" pb={3} px={3} p={3} mb={15}>

            <Grid container spacing={3}>

              <Grid item xs={12}>
                <Grid container spacing={2}>

                  <Grid item xs={12} sm={15}>
                    <Grid container spacing={3}>

                      <Grid item xs={12} sm={4}>
                        <FormField type="text" label="Name/Email/Number/ClientID/FE UserId/PAN No" defaultValue="Name/Email" />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <FormField type="text" label="Advisor" defaultValue="Name/Email" />
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
                              Banks
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[

                              { value: "All", label: "All" },
                              { value: "SBI", label: "SBI" },
                              { value: "HDFC", label: "HDFC" },
                              { value: "", label: "", isDisabled: true },
                            ]}


                          />
                        </SuiBox>
                      </Grid>

                    </Grid>

                  </Grid>

                  <Grid item xs={12} sm={15}>
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
                              FATCA
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Done", label: "Done" },
                              { value: "Not Done", label: "Not Done" },
                              { value: "your question", label: "", isDisabled: true },
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
                          <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"

                            >
                              Branch
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Adding-Branch", label: "Adding-Branch" },
                              { value: "Anuraag Branch", label: "Anuraag Branch" },
                              { value: "Branch Under Region", label: "Branch Under Region" },
                              { value: "your question", label: "", isDisabled: true },
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
                          <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"
                            >
                              Pan
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Provided", label: "Provided" },
                              { value: "Not Provided", label: "Not Provided" },
                              { value: "your question", label: "", isDisabled: true },
                            ]}
                          />
                        </SuiBox>
                      </Grid>

                    </Grid>

                  </Grid>

                  <Grid item xs={12} sm={15}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"

                            >
                              KYC
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Approved", label: "Approved" },
                              { value: "Not Approved", label: "Not Approved" },
                              { value: "your question", label: "", isDisabled: true },
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
                          <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"
                            >
                              BSE ID
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Registered", label: "Registered" },
                              { value: "Not Registered", label: "Not Registered" },
                              { value: "your question", label: "", isDisabled: true },
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
                          <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"
                            >
                              Docs
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Cheque Upload", label: "Cheque Upload" },
                              { value: "Cheque not Upload", label: "Cheque not Upload" },
                              { value: "Signature Upload", label: "Signature Upload" },
                              { value: "Signature not Upload", label: "Signature not Upload" },
                              { value: "your question", label: "", isDisabled: true },
                            ]}
                          />
                        </SuiBox>
                      </Grid>

                    </Grid>

                  </Grid>

                  <Grid item xs={12} sm={15}>
                    <Grid container spacing={3}>

                      <Grid item xs={12} sm={4}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiBox mb={1} ml={1} lineHeight={0} display="inline-block">
                            <SuiTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"

                            >
                              AOF
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Done", label: "Done" },
                              { value: "Not Done", label: "Not Done" },
                              { value: "your question", label: "", isDisabled: true },
                            ]}
                          />
                        </SuiBox>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                          <SuiButton variant="gradient" buttonColor="dark" style={{ marginTop: "0px" }}>
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
          <Card id="change-password" >
            <SuiBox mt={8} mb={2}>
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Overview;

// @mui material components
import Card from "@mui/material/Card";
import SuiButton from "components/SuiButton";
// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import FormField from "layouts/pages/account/components/FormField";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
import { useState } from "react";
import SuiDatePicker from "components/SuiDatePicker";
import PropTypes from "prop-types";
import SuiSelect from "components/SuiSelect";
import DataTable from "examples/Tables/DataTable";
import dashboarddatatable from "layouts/authentication/error/dashboarddatatable";
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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const handleSetStartDate = (newDate) => setStartDate(newDate);
  const handleSetEndDate = (newDate) => setEndDate(newDate);

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

      <SuiBox py={2} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>

        <SuiBox mb={3} p={3} style={{ backgroundColor: "#f8f9fa" }}>
          <SuiTypography
            variant={window.innerWidth < values.sm ? "h3" : "h3"}
            textTransform="capitalize"
            fontWeight="bold"
          >
            User Details
          </SuiTypography>
        </SuiBox>

        <SuiBox my={3}>
          <SuiBox mb={3}>
            <Card>

              <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                  {renderPasswordRequirements}
                </SuiBox>
              </SuiBox>

              <SuiBox p={2} style={{ color: "black" }}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                          <SuiTypography component="label" variant="caption" fontWeight="bold" >
                            Before this date
                          </SuiTypography>
                        </SuiBox>
                        <SuiDatePicker value={startDate} onChange={handleSetStartDate} />
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={3}>

                        <Grid item xs={12} sm={3}>
                          <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                            <Checkbox defaultChecked={checked} />
                            <SuiBox ml={1}>
                              <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                {id}
                              </SuiTypography>
                            </SuiBox>

                            <SuiTypography component="label" variant="h10" fontWeight="bold" >
                              Created on Before
                            </SuiTypography>
                          </SuiBox>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                After this date
                              </SuiTypography>
                            </SuiBox>
                            <SuiDatePicker value={endDate} onChange={handleSetEndDate} />
                          </SuiBox>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                            <Checkbox defaultChecked={checked} />
                            <SuiBox ml={1}>
                              <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                                {id}
                              </SuiTypography>
                            </SuiBox>

                            <SuiTypography component="label" variant="h10" fontWeight="bold" >
                              Created on After
                            </SuiTypography>
                          </SuiBox>
                        </Grid>

                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                          <SuiTypography component="label" variant="caption" fontWeight="bold" >
                            Mandate Updated After
                          </SuiTypography>
                        </SuiBox>
                        <SuiDatePicker value={startDate} onChange={handleSetStartDate} />
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <Grid container spacing={3}>

                        <Grid item xs={12} sm={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Mandate Updated Before
                              </SuiTypography>
                            </SuiBox>
                            <SuiDatePicker value={endDate} onChange={handleSetEndDate} />
                          </SuiBox>
                        </Grid>

                        <Grid item xs={12} sm={6}>
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
                                Type Of Mandate
                              </SuiTypography>
                            </SuiBox>
                            <SuiSelect
                              placeholder="Select"
                              options={[

                                { value: "All", label: "All" },
                                { value: "XSIP", label: "XSIP" },
                                { value: "ISIP", label: "ISIP" },
                                { value: "", label: "", isDisabled: true },
                              ]}
                            />
                          </SuiBox>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Mobile Number Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Email Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Is Fatca Done
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Kyc Done
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Pan Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Bank Details Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Pan Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Aof Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Aof Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Not Kyc Done
                        </SuiTypography>
                      </SuiBox>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Bank Details Not Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Not Email Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Not Fatca Done
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Not Kyc Done
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Bank Details Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Not Mobile Number Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Pan Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Aof Verified
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Mandate Failed
                        </SuiTypography>
                      </SuiBox>
                    </Grid>


                  </Grid>

                </Grid>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>


        <SuiBox p={1}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <SuiBox height="100%" mt={0.5} lineHeight={1}>
                <SuiTypography variant="h3" fontWeight="bold">
                  Transaction
                </SuiTypography>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>


        <SuiBox my={3}>
          <SuiBox mb={3}>
            <Card>
              <SuiBox p={2}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={2.5}>
                      <FormField type="text" label="Transacted in Days" defaultValue="" />
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <FormField type="text" label=" Transacted in Days" defaultValue="" />
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Already Transacted Users
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2.5}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Not Transacted At All
                        </SuiTypography>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Onetime Transacted Users
                        </SuiTypography>
                      </SuiBox>
                    </Grid>
                  </Grid>
                </Grid>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>

        <SuiBox p={1}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <SuiBox height="100%" mt={0.5} lineHeight={1}>
                <SuiTypography variant="h3" fontWeight="bold">
                  AUM Details
                </SuiTypography>
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>

        <SuiBox my={3}>
          <SuiBox mb={3}>
            <Card>

              <SuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
                <SuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                  {renderPasswordRequirements}
                </SuiBox>
              </SuiBox>

              <SuiBox p={2} style={{ color: "black" }}>

                <Grid item xs={12}>
                  <Grid container spacing={3}>

                    <Grid item xs={12} sm={4}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Asset Under Management Overall
                        </SuiTypography>
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
                            Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "EQUITY", label: "EQUITY" },
                            { value: "DEBT", label: "DEBT" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Sub Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "EQUITY - LARGE CAP", label: "EQUITY - LARGE CAP" },
                            { value: "EQUITY - LARGE & MID CAP", label: "EQUITY - LARGE & MID CAP" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Type
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "GROWTH", label: "GROWTH" },
                            { value: "PAYOUT", label: "PAYOUT" },
                            { value: "REINVEST", label: "REINVEST" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Aum Compare
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "LESS THAN", label: "LESS THAN" },
                            { value: "MORE THAN", label: "MORE THAN" },
                            { value: "EUAL TO", label: "EUAL TO" },
                            { value: "", label: "", isDisabled: true },
                          ]}
                        />
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormField type="text" label="AUM Overall" defaultValue="" />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Asset Under Management under your ARN
                        </SuiTypography>
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
                            Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "EQUITY", label: "EQUITY" },
                            { value: "DEBT", label: "DEBT" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Sub Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "EQUITY - LARGE CAP", label: "EQUITY - LARGE CAP" },
                            { value: "EQUITY - LARGE & MID CAP", label: "EQUITY - LARGE & MID CAP" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Type
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "GROWTH", label: "GROWTH" },
                            { value: "PAYOUT", label: "PAYOUT" },
                            { value: "REINVEST", label: "REINVEST" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Aum Compare
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "LESS THAN", label: "LESS THAN" },
                            { value: "MORE THAN", label: "MORE THAN" },
                            { value: "EUAL TO", label: "EUAL TO" },
                            { value: "", label: "", isDisabled: true },
                          ]}
                        />
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormField type="text" label="AUM Overall" defaultValue="" />
                    </Grid>


                    <Grid item xs={12} sm={4}>
                      <SuiBox display="flex" alignItems="center" style={{ marginTop: "50px" }}>

                        <Checkbox defaultChecked={checked} />
                        <SuiBox ml={1}>
                          <SuiTypography variant="caption" fontWeight="medium" textColor="text" >
                            {id}
                          </SuiTypography>
                        </SuiBox>

                        <SuiTypography component="label" variant="h10" fontWeight="bold" >
                          Asset Under Management not under your ARN
                        </SuiTypography>
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
                            Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "EQUITY", label: "EQUITY" },
                            { value: "DEBT", label: "DEBT" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Sub Category
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "EQUITY - LARGE CAP", label: "EQUITY - LARGE CAP" },
                            { value: "EQUITY - LARGE & MID CAP", label: "EQUITY - LARGE & MID CAP" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Type
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "All", label: "All" },
                            { value: "GROWTH", label: "GROWTH" },
                            { value: "PAYOUT", label: "PAYOUT" },
                            { value: "REINVEST", label: "REINVEST" },
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
                        <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SuiTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            Aum Compare
                          </SuiTypography>
                        </SuiBox>
                        <SuiSelect
                          placeholder="Select"
                          options={[

                            { value: "LESS THAN", label: "LESS THAN" },
                            { value: "MORE THAN", label: "MORE THAN" },
                            { value: "EUAL TO", label: "EUAL TO" },
                            { value: "", label: "", isDisabled: true },
                          ]}
                        />
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <FormField type="text" label="AUM Overall" defaultValue="" />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiButton variant="gradient" buttonColor="dark" >
                          Submit
                        </SuiButton>
                      </SuiBox>

                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiButton variant="gradient" buttonColor="dark">
                          Send Message
                        </SuiButton>
                      </SuiBox>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiButton variant="gradient" buttonColor="info" >
                          Send Message
                        </SuiButton>
                      </SuiBox>
                    </Grid>

                  </Grid>
                </Grid>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>


        <h2>Total = 891</h2>
        <SuiBox>
          <Card id="change-password">
            <SuiBox p={3}>
              <DataTable table={dashboarddatatable} entriesPerPage={false} />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default IdCell;

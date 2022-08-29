import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import SuiSelect from "components/SuiSelect";
import SuiButton from "components/SuiButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import DataTable from "examples/Tables/DataTable";
import breakpoints from "assets/theme/base/breakpoints";
// Images
import team4 from "assets/images/team-4.jpg";
import { Link } from "react-router-dom";


function Overview() {

  const { values } = breakpoints;
  const columns =
  {
    columns: [
      { Header: "user name", accessor: "product" },
      { Header: "created on", accessor: "bse" },
      { Header: "start date", accessor: "pan" },
      { Header: "BSE order number", accessor: "a1" },
    ],

    rows: [
      {
        product: <Link to="/authentication/error/user"> <ProductCell image={team4} name="NEETU MALHOTRA" /></Link>,
        bse: "Jul 8, 2022, 10:04 AM",
        pan: "Aug 7, 2022",
        a1: "30856874",
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
              Order

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
                              Active/Cancelled
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All", label: "All" },
                              { value: "Cancelled", label: "Cancelled" },
                              { value: "Active", label: "Active" },
                              { value: "your question", label: "", isDisabled: true },
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
                              Order Type
                            </SuiTypography>
                          </SuiBox>
                          <SuiSelect
                            placeholder="Select"
                            options={[
                              { value: "All ", label: "All" },
                              { value: "Monthly", label: "Monthly" },
                              { value: "One Time", label: "One Time" },
                              { value: "STP ", label: "STP" },
                              { value: "SWP", label: "SWP" },
                              { value: "Switch", label: "Switch" },
                              { value: "Redemption", label: "Redemption" },
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
          <Card id="change-password" style={{ backgroundColor: "#f8f9fa" }}>
            <DataTable
              table={columns}
              entriesPerPage={false}
              showTotalEntries={false}
              isSorted={false}
            />
          </Card>
        </SuiBox>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Overview;

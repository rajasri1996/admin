// @mui material components
// import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import Card from "@mui/material/Card";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import DataTable from "examples/Tables/DataTable";
import Icon from "@mui/material/Icon";
import breakpoints from "assets/theme/base/breakpoints";


function EditProduct() {

  const { values } = breakpoints;
  const [menu, setMenu] = useState(null);

  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
      <Divider sx={{ margin: "0.5rem 0" }} />
      <MenuItem onClick={closeMenu}>
        <SuiTypography variant="button" textColor="error" fontWeight="regular">
          Remove Filter
        </SuiTypography>
      </MenuItem>
    </Menu>
  );

  const Columns =
  {
    columns: [
      { Header: "Family Head Name", accessor: "name", width: "20%" },
      { Header: "Asset Under Management", accessor: "position", width: "25%" },
      { Header: "Action", accessor: "age", width: "20%" },
      { Header: "Family Members", accessor: "office", width: "20%"  },
    ],
  
    rows: [
      {
        name: "ANAND KUMAR SABOO",
        position: "7,92,99,869",
        office: "Add Member",
        age: 2,
      },
  
      {
        name: "AKHUSHBOO TAPARIA BEDI",
        position: "7,92,99,869",
        office: "Add Member",
        age: 2,      
      },
    
    ]
  }


  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiBox py={1} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>

        <SuiBox p={2} >
          <SuiTypography
            variant={window.innerWidth < values.sm ? "h3" : "h3"}
            textTransform="capitalize"
            fontWeight="bold"
          >
            Client Families
          </SuiTypography>

          <SuiBox
            display="flex"
            justifyContent={{ md: "flex-end" }}
            alignItems="center"
            lineHeight={1}
          >
            <SuiBox mx={1}>
              <SuiButton variant="outlined" buttonColor="primary">
                <Icon className="">description</Icon>
                &nbsp;Download Excel
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox>

        <SuiBox my={3}>

          <SuiBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2} >
            <SuiBox display="flex">
              {renderMenu}
            </SuiBox>
          </SuiBox>
          <Card style={{ fontWeight: "bold" }}>
            <DataTable table={Columns} entriesPerPage={false} />
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

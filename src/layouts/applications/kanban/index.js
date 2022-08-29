// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
// import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
// import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
// import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import { Table, Col, Button, Form } from 'react-bootstrap';
// import DataTable from "examples/Tables/DataTable";
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Identical First Names (105)
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

          <Form.Group as={Col} controlId="formGridZip">
            <Button variant="primary" type="submit" style={{ margin: '10px', width: '150px' }}>
              Mark Inactive
            </Button>
          </Form.Group>
        </Grid>
      </SuiBox>


      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Identical First PAN (69)
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

          <Form.Group as={Col} controlId="formGridZip">
            <Button variant="primary" type="submit" style={{ margin: '10px', width: '150px' }}>
              Mark Inactive
            </Button>
          </Form.Group>
        </Grid>
      </SuiBox>
      {/* <DataTable table={dataTableData} canSearch /> */}
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

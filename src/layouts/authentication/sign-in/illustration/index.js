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
import { Table, Form, Col, Button, Row } from 'react-bootstrap';


function EditProduct() {


  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h1" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        In-Active User(s)(58)
      </SuiTypography>
      <br />
      <Row className="mb-3" style={{ fontWeight: 'bold' }}>
        <Form.Group as={Col} controlId="formGridState" >
          <Form.Label>Pan</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Provided</option>
            <option>Not Provided</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Bse Star Mf Registered</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Registered</option>
            <option>Not Registered</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Branch</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Adding-Branch</option>
            <option>Anuraag Branch</option>
            <option>Branch Under Region</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Advisor</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Advisor Under Branch</option>
            <option>Anuraag Branch</option>
            <option>testing-adetee</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <hr />
      <Row className="mb-3" style={{ fontWeight: 'bold' }}>
        <Form.Group as={Col} controlId="formGridState" >
          <Form.Label>Kyc Approved</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Approved</option>
            <option>Not Approved</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Mandate Status</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>All</option>
            <option>Registered Failed</option>
            <option>Approved</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Name/Email/Number/ClientID</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Button variant="primary" type="submit" style={{ margin: '30px', width: '170px' }}>
            Submit
          </Button>
        </Form.Group>

      </Row>

      <SuiBox my={3}>
        <hr />
        <Grid container spacing={1} py={5}>
          
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Name</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mobile</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Pan</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>	Tax Status</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Holding Mode</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Email</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>CreatedOn</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>ClientId</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>KYC</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Bank</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>AOF	</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Fatca</th>
                <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>Mandate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px" }}>RAJEEV KUMAR AGARWAL</td>
                <td>9393101009</td>
                <td>AAIHR6842K</td>
                <td>HUF</td>
                <td>Single</td>
                <td>investors405@gmail.com</td>
                <td>	Mar 30, 2022, 4:34 PM</td>
                <td>R407785</td>
                <td>kyc</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
              <td style={{ padding: "10px" }}>RAJEEV KUMAR AGARWAL</td>
                <td>9393101009</td>
                <td>AAIHR6842K</td>
                <td>HUF</td>
                <td>Single</td>
                <td>investors405@gmail.com</td>
                <td>	Mar 30, 2022, 4:34 PM</td>
                <td>R407785</td>
                <td>kyc</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;

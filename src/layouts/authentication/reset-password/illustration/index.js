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

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiInput from "components/SuiInput";
// import SuiButton from "components/SuiButton";

// // Authentication layout components
// import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// // Image
// import lock from "assets/images/illustrations/lock.png";

// function Illustration() {
//   return (
//     <IllustrationLayout
//       title="Reset Password"
//       description="You will receive an e-mail in maximum 60 seconds"
//       illustration={{
//         image: lock,
//         title: "Soft UI Design",
//         description:
//           "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
//       }}
//     >
//       <SuiBox component="form" role="form">
//         <SuiBox mb={2}>
//           <SuiInput type="email" placeholder="Email" size="large" />
//         </SuiBox>
//         <SuiBox mb={2}>
//           <SuiInput placeholder="Verification Code" size="large" />
//         </SuiBox>
//         <SuiBox mt={4} mb={1}>
//           <SuiButton variant="gradient" buttonColor="info" size="large" fullWidth>
//             send
//           </SuiButton>
//         </SuiBox>
//       </SuiBox>
//     </IllustrationLayout>
//   );
// }

// export default Illustration;

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
import { Table} from 'react-bootstrap';


function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Upcoming SIP Reports
      </SuiTypography>
      <br />
      <SuiBox my={3}>
        <hr style={{color:'red'}}/>
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black', border:'1px' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Client Name</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>Pan Number</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>SIP Amount</th>
                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>No Of SIPS</th>
              </tr>
              <br/>
              <th style={{textAlign:'center', padding:'10px' }}>CAMS</th>
            </thead>
            <tbody>
               <tr>
                <td style={{ Color: "#038d8a", padding: "10px" }}>KhushbooTaparia Bedi</td>
                <td>AGWPT5388C</td>
                <td>30,000</td>
                <td>1</td>
              </tr>
              <br/>
              <th style={{textAlign:'center', padding:'10px', }}>KFintech</th>
              <tr>
                <td style={{ Color: "#038d8a", padding: "10px" , fontWeight:'bold'}}>Total</td>
                <td style={{ Color: "#038d8a", padding: "10px" , fontWeight:'bold'}}>Nill</td>
                <td style={{ Color: "#038d8a", padding: "10px" , fontWeight:'bold'}}>30000</td>
                <td style={{ Color: "#038d8a", padding: "10px" , fontWeight:'bold'}}>1</td>
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

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

// // @mui material components
// import Card from "@mui/material/Card";

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiInput from "components/SuiInput";
// import SuiButton from "components/SuiButton";
// import SuiAvatar from "components/SuiAvatar";

// // Authentication layout components
// import BasicLayout from "layouts/authentication/components/BasicLayout";

// // Images
// import curved8 from "assets/images/curved-images/curved8.jpg";
// import team4 from "assets/images/team-4.jpg";

// function Basic() {
//   return (
//     <BasicLayout image={curved8}>
//       <Card>
//         <SuiBox py={4} px={3} textAlign="center">
//           <SuiBox display="flex" justifyContent="center" mb={3}>
//             <SuiAvatar src={team4} alt="profile-picture" size="xxl" variant="rounded" />
//           </SuiBox>
//           <SuiTypography variant="h4" fontWeight="bold">
//             Mike Prieslerdd
//           </SuiTypography>
//           <SuiBox mb={3}>
//             <SuiTypography variant="body2" textColor="text">
//               Enter password to unlock your account.
//             </SuiTypography>
//           </SuiBox>
//           <SuiBox component="form" role="form">
//             <SuiBox mb={2}>
//               <SuiInput type="password" placeholder="Password" />
//             </SuiBox>
//             <SuiBox mt={4}>
//               <SuiButton variant="gradient" buttonColor="dark" size="large">
//                 unlock
//               </SuiButton>
//             </SuiBox>
//           </SuiBox>
//         </SuiBox>
//       </Card>
//     </BasicLayout>
//   );
// }

// export default Basic;

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
import { Table, Form, Col, Button, Row } from 'react-bootstrap';


function Fintech() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiTypography variant="h2" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
            IFA Aum
            </SuiTypography>
            <br />
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity" style={{ fontWeight: 'bold' }}>
                    <Form.Label>Folio</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity" style={{ fontWeight: 'bold' }}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity" style={{ fontWeight: 'bold' }}>
                    <Form.Label>Fundname</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Button variant="primary" type="submit" style={{ margin: '30px', width: '150px' }}>
                        Submit
                    </Button>
                </Form.Group>
            </Row>

            <SuiBox my={3}>
                <hr style={{ color: 'brown' }} />
                <Grid container spacing={1} py={5}>

                    <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
                        <thead style={{ borderColor: 'white' }}>
                            <tr>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/aumreconcile?sort=Date&amp;direction=asc">Date</a></th>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/aumreconcile?sort=Investor+Name&amp;direction=asc">Investor Name</a></th>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/aumreconcile?sort=Folio+Number&amp;direction=asc">Folio Number</a></th>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/aumreconcile?sort=Scheme+Name&amp;direction=asc">Scheme Name</a></th>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}>	<a href="/aumreconcile?sort=Units&amp;direction=asc">Units</a></th>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/aumreconcile?sort=Date+of+AUM&amp;direction=asc">Date Of AUM</a></th>
                                <th style={{ backgroundColor: "rgb(249, 221, 171)", padding: "15px" }}><a href="/aumreconcile?sort=ARN&amp;direction=asc">ARN</a></th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr>
                                <td style={{ Color: "#038d8a", padding: "10px" }}>2021-08-13	</td>
                                <td>Nill</td>
                                <td>10142224</td>
                                <td>Parag Parikh Long Term Equity Fund - Regular Plan</td>
                                <td>0.000000</td>
                                <td>2021-08-13</td>
                                <td>ARN-13974</td>
                            </tr>
                            <tr>
                            <td style={{ Color: "#038d8a", padding: "10px" }}>2021-08-13	</td>
                                <td>Nill</td>
                                <td>10142225</td>
                                <td>Parag Parikh Long Term Equity Fund - Regular Plan</td>
                                <td>0.000000</td>
                                <td>2021-08-13</td>
                                <td>ARN-13974</td>
                            </tr>
                        </tbody>
                    </Table>
                </Grid>
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Fintech;

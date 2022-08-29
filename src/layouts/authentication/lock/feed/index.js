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
import { Table } from 'react-bootstrap';


function Feed() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiTypography variant="h2" fontWeight="medium" style={{  textAlign: 'center' }}>
                Manual Feed files Uploaded Details
            </SuiTypography>
            <br />

            <SuiBox my={3}>
                <h2 style={{ color: 'brown' }}>Anuraag Saboo</h2>
                <hr style={{ color: 'brown' }} />
                <br />
                <Grid container spacing={1} py={5}>
                    <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

                        <thead>
                            <tr>
                                <th colSpan='2'>Cams User Files Read</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ color: "black" }}>File</th>
                                <th style={{ color: "black" }}>Date</th>
                            </tr>
                        </tbody>
                    </Table>
                </Grid>

                <Grid container spacing={1} py={5}>
                    <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

                        <thead>
                            <tr>
                                <th colSpan='2'>Cams Transaction Files Read</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ color: "black" }}>File</th>
                                <th style={{ color: "black" }}>Date</th>
                            </tr>

                        </tbody>

                    </Table>
                </Grid>

                <Grid container spacing={1} py={5}>
                  <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

                        <thead>
                            <tr>
                                <th colSpan='2'>Karvy User Files Read</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ color: "black" }}>File</th>
                                <th style={{ color: "black" }}>Date</th>
                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                <td><a href="/rta.php?arn=ARN-13974&amp;filename=W0M367.dbf&amp;head=mfsd211&amp;dir=monthlyupload">W0M367.dbf</a> </td>
                                <td>Jun 21 2022 </td>
                            </tr>
                        </tbody>
                    </Table>
                </Grid>

                <Grid container spacing={1} py={5}>
                  <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

                        <thead>
                            <tr>
                                <th colSpan='2'>Karvy Transaction Files Read</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ color: "black" }}>File</th>
                                <th style={{ color: "black" }}>Date</th>
                            </tr>

                        </tbody>
                        <tbody>
                            <tr>
                                <td><a href="/rta.php?arn=ARN-13974&amp;filename=W0M367.dbf&amp;head=mfsd211&amp;dir=monthlyupload">W0M367.dbf</a> </td>
                                <td>Jun 21 2022 </td>
                            </tr>
                        </tbody>
                    </Table>
                </Grid>

                <Grid container spacing={1} py={5}>
                    <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>

                        <thead>
                            <tr>
                                <th colSpan='2'>BSE User Files Read</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ color: "black" }}>File</th>
                                <th style={{ color: "black" }}>Date</th>
                            </tr>

                        </tbody>

                    </Table>
                </Grid>

            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Feed;

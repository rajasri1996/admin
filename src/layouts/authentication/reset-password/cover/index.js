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

// import { useState } from "react";

// // @asseinfo/react-kanban components
// import Board from "@asseinfo/react-kanban";

// // react-html-parser components
// import ReactHtmlParser from "react-html-parser";

// // uuid is a library for generating unique id
// import { v4 as uuidv4 } from "uuid";

// // @mui material components
// import Icon from "@mui/material/Icon";

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiButton from "components/SuiButton";
// import SuiTypography from "components/SuiTypography";
// import SuiInput from "components/SuiInput";

// // Soft UI Dashboard PRO React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// // Kanban application components
// import Header from "layouts/applications/kanban/components/Header";

// // Custom styles for the Kanban
// import styles from "layouts/applications/kanban/styles";

// // Data
// import boards from "layouts/applications/kanban/data";

// function Kanban() {
//   const [newCardForm, setNewCardForm] = useState(false);
//   const [formValue, setFormValue] = useState("");
//   const classes = styles();

//   const openNewCardForm = (event, id) => setNewCardForm(id);
//   const closeNewCardForm = () => setNewCardForm(false);
//   const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <SuiBox py={3}>
//         <SuiBox display="flex" justifyContent="flex-end" m={2}>
//           <Header />
//         </SuiBox>
//         <SuiBox customClass={classes.kanban}>
//           <Board
//             initialBoard={boards}
//             allowAddCard
//             allowAddColumn
//             renderColumnHeader={({ id, title }, { addCard }) => (
//               <>
//                 <SuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//                   <SuiTypography variant="h6">{title}</SuiTypography>
//                   <SuiButton size="small" onClick={(event) => openNewCardForm(event, id)}>
//                     <Icon className=" font-bold text-dark">add</Icon>
//                   </SuiButton>
//                 </SuiBox>
//                 {newCardForm === id ? (
//                   <SuiBox my={2.5}>
//                     <SuiInput
//                       value={formValue}
//                       inputProps={{ rows: 2 }}
//                       onChange={handeSetFormValue}
//                       multiline
//                     />
//                     <SuiBox display="flex" mt={2}>
//                       <SuiButton
//                         variant="gradient"
//                         buttonColor="success"
//                         size="small"
//                         onClick={() => {
//                           addCard({ id: uuidv4(), template: formValue });
//                           setFormValue("");
//                         }}
//                       >
//                         add
//                       </SuiButton>
//                       <SuiBox ml={1}>
//                         <SuiButton
//                           variant="gradient"
//                           buttonColor="light"
//                           size="small"
//                           onClick={closeNewCardForm}
//                         >
//                           cancel
//                         </SuiButton>
//                       </SuiBox>
//                     </SuiBox>
//                   </SuiBox>
//                 ) : null}
//               </>
//             )}
//             renderCard={({ id, template }, { dragging }) => (
//               <SuiBox
//                 key={id}
//                 customClass={classes.kanban_card}
//                 dragging={dragging.toString() || undefined}
//               >
//                 {typeof template === "string" ? ReactHtmlParser(template) : template}
//               </SuiBox>
//             )}
//             onCardNew={() => null}
//           />
//         </SuiBox>
//       </SuiBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Kanban;

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
import { Table, Col, Button, Form } from 'react-bootstrap';
// import DataTable from "examples/Tables/DataTable";
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function EditProduct() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SuiTypography variant="h3" fontWeight="medium" style={{ color: "green", textAlign: 'center' }}>
        Bulk Fatca Update (301)
      </SuiTypography>
      <br/>
      <h6 style={{textAlign: 'center' }}>* This utility is to be used to mark FATCA Done for those registered at BSE and FATCA done directly at BSE</h6>
      <SuiBox my={3}>
        <hr />
        <Grid container spacing={1} py={5}>
          <Table striped bordered hover size="sm" style={{ textAlign: "center", borderColor: 'black' }}>
            <thead>
              <tr>
              <th style={{ backgroundColor: "#abebc6", padding: "15px" }}>
                  <input type="checkbox" className="from-check-input" />
                </th>
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

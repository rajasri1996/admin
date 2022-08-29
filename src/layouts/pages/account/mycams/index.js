import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import DataTable from "examples/Tables/DataTable";
// Images
import team4 from "assets/images/team-4.jpg";
import { Link } from "react-router-dom";


function Overview() {

    const columns =
    {
        columns: [
            { Header: "name", accessor: "product" },
            { Header: "CAMS Fundsnet ID", accessor: "bse" },
            { Header: "CAMS Fundsnet Password", accessor: "pan" },
            { Header: "CAMS Secret Qn Answer", accessor: "a1" },
            { Header: "Action", accessor: "a2" },
        ],

        rows: [
            {
                product: <Link to="/authentication/error/user"> <ProductCell image={team4} name="Anuraag Saboo" /></Link>,
                bse: "ARGS",
                pan: "Cams@1234567",
                a1: "1",
                a2: <Link to="/pages/account/Mycams1" >Edit</Link>,
              
            },
        ],

    }



    return (

        <DashboardLayout>
            <DashboardNavbar />

            <SuiBox my={3}>

                <SuiBox component="form" my={3}>
                    <Card id="change-password" style={{ backgroundColor: "#f8f9fa" }}>
                        <SuiBox mt={8} mb={2}>
                            <SuiBox mb={1} ml={2}>
                                <SuiTypography variant="h5" fontWeight="medium">
                                    My CAMS FUNDSNET Creds
                                </SuiTypography>
                            </SuiBox>
                            <DataTable
                                table={columns}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                isSorted={false}
                            />
                        </SuiBox>
                    </Card>
                </SuiBox>
            </SuiBox>
        </DashboardLayout>
    );
}

export default Overview;

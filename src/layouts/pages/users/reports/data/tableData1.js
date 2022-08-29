// ProductPage page components
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
// Images
import team4 from "assets/images/team-4.jpg";
import { Link } from "react-router-dom";

export default {
    columns: [
        { Header: "Name", accessor: "product" },
        { Header: "email", accessor: "a1" },
        { Header: "Reporting To", accessor: "bse" },
        { Header: "created On", accessor: "pan" },
        { Header: "Actions", accessor: "a2" },
    ],

    rows: [
        {
            product: <Link to="/authentication/error/user"> <ProductCell image={team4} name="Anuraag Branch" /></Link>,
            a1: <h9 style={{ color: "black" }}>anuraagbranch@sheltron.com</h9>,
            bse: <h9 style={{ color: "black" }}>Super User</h9>,
            pan: <h9 style={{ color: "black" }}>Apr 21, 2020, 12:46 PM</h9>,
            a2: <Link to="/authentication/error/sidedetails1">Edit / Login / Assign Clients</Link>,
        },
    ],
};

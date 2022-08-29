import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";
import { Link } from "react-router-dom";

export default {
    columns: [
        // { Header: "product", accessor: "product", width: "50%" },
        { Header: "", accessor: "value" },
        { Header: "", accessor: "adsSpent", align: "center" },
        { Header: "", accessor: "refunds", align: "center" },
        { Header: "", accessor: "u1" },
    ],

    rows: [
        {
            value: <DefaultCell>User ID</DefaultCell>,
            adsSpent: <DefaultCell>432847</DefaultCell>,
            refunds: <DefaultCell>BSE ClientId</DefaultCell>,
            u1: <DefaultCell>K432847</DefaultCell>,
        },

        {
            value: <DefaultCell>Mobile Number</DefaultCell>,
            adsSpent: <DefaultCell>9789916097 (Verified)</DefaultCell>,
            refunds: <DefaultCell>Mobile OTP</DefaultCell>,
            u1: <DefaultCell>1703</DefaultCell>,
        },
        {
            value: <DefaultCell>Email</DefaultCell>,
            adsSpent: <DefaultCell>kaustubhbhatted@gmail.com (Verified)</DefaultCell>,
            refunds: <DefaultCell>PAN (kyc)</DefaultCell>,
            u1: <DefaultCell> <Link to="/authentication/error/Pandetails" >GHHPB2700Q ✔</Link></DefaultCell>,
        },
        {
            value: <DefaultCell>Tax Status</DefaultCell>,
            adsSpent: <DefaultCell>Individual</DefaultCell>,
            refunds: <DefaultCell>Mode of Holding</DefaultCell>,
            u1: <DefaultCell>Single</DefaultCell>,
        },
        {
            value: <DefaultCell>Current Value (Internal)</DefaultCell>,
            adsSpent: <DefaultCell>Rs 2014</DefaultCell>,
            refunds: <DefaultCell>Current Value (Overall)</DefaultCell>,
            u1: <DefaultCell>Rs 2014</DefaultCell>,
        },
        {
            value: <DefaultCell>Fatca</DefaultCell>,
            adsSpent: <DefaultCell>Done</DefaultCell>,
            refunds: <DefaultCell>AOF</DefaultCell>,
            u1: <DefaultCell>ACCEPTED</DefaultCell>,
        },

    ],
};

import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";

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
            value: <DefaultCell>Occupation</DefaultCell>,
            adsSpent: <DefaultCell>STUDENT</DefaultCell>,
            refunds: <DefaultCell>Address Line1</DefaultCell>,
            u1: <DefaultCell>30/110, Damodar Apartment</DefaultCell>,
        },

        {
            value: <DefaultCell>Marital Status</DefaultCell>,
            adsSpent: <DefaultCell>Single</DefaultCell>,
            refunds: <DefaultCell>Address Line2</DefaultCell>,
            u1: <DefaultCell>3rd Cross, Halls Road,</DefaultCell>,
        },

        {
            value: <DefaultCell>Guardian Name</DefaultCell>,
            adsSpent: <DefaultCell>Nill</DefaultCell>,
            refunds: <DefaultCell>Address Line3</DefaultCell>,
            u1: <DefaultCell>Kilpauk</DefaultCell>,
        },
    
        {
            value: <DefaultCell>Sex</DefaultCell>,
            adsSpent: <DefaultCell>Male</DefaultCell>,
            refunds: <DefaultCell>Pin Code</DefaultCell>,
            u1: <DefaultCell>600010</DefaultCell>,
        },

        {
            value: <DefaultCell>Dob</DefaultCell>,
            adsSpent: <DefaultCell>Mar 1, 2004</DefaultCell>,
            refunds: <DefaultCell>City</DefaultCell>,
            u1: <DefaultCell>Chennai</DefaultCell>,
        },

        {
            value: <DefaultCell>Forgot Password OTP</DefaultCell>,
            adsSpent: <DefaultCell>-1394088161</DefaultCell>,
            refunds: <DefaultCell>State</DefaultCell>,
            u1: <DefaultCell>TN</DefaultCell>,
        },

    ],
};

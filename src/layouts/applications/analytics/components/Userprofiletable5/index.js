import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";

export default {
    columns: [
        // { Header: "product", accessor: "product", width: "50%" },
        { Header: "Name", accessor: "value" },
        { Header: "Dob", accessor: "adsSpent", align: "center" },
        { Header: "Relation", accessor: "refunds", align: "center" },
        { Header: "CreatedOn", accessor: "u1" },
        { Header: "Address", accessor: "u2" },
    ],

    rows: [
        {
            value: <DefaultCell>Sundeep Bhattad</DefaultCell>,
            adsSpent: <DefaultCell>Nill</DefaultCell>,
            refunds: <DefaultCell>Father</DefaultCell>,
            u1: <DefaultCell>May 10, 2022, 1:14 PM</DefaultCell>,
           u2: <DefaultCell>Nill</DefaultCell>,
        },

    ],
};

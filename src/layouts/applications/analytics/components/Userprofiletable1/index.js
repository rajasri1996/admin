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
            value: <DefaultCell>
            Details</DefaultCell>,
            adsSpent: <DefaultCell>Bank 1</DefaultCell>,
            refunds: <DefaultCell>Bank 2</DefaultCell>,
            u1: <DefaultCell>Bank 3</DefaultCell>,
        },

        {
            value: <DefaultCell>Bank Name</DefaultCell>,
            adsSpent: <DefaultCell>HDFC Bank</DefaultCell>,
            refunds: <DefaultCell>Nill</DefaultCell>,
            u1: <DefaultCell> Nill</DefaultCell>,
        },

        {
            value: <DefaultCell>Account Number</DefaultCell>,
            adsSpent: <DefaultCell>50100487221090 </DefaultCell>,
            refunds: <DefaultCell>Nill</DefaultCell>,
            u1: <DefaultCell>Nill</DefaultCell>,
        },
    
        {
            value: <DefaultCell>Bank Account Type</DefaultCell>,
            adsSpent: <DefaultCell>SB</DefaultCell>,
            refunds: <DefaultCell>Nill</DefaultCell>,
            u1: <DefaultCell>Nill</DefaultCell>,
        },

        {
            value: <DefaultCell>Bank City</DefaultCell>,
            adsSpent: <DefaultCell>CHENNAI</DefaultCell>,
            refunds: <DefaultCell>Nill</DefaultCell>,
            u1: <DefaultCell>Nill</DefaultCell>,
        },

        {
            value: <DefaultCell>Ifsc Code</DefaultCell>,
            adsSpent: <DefaultCell>HDFC0009366</DefaultCell>,
            refunds: <DefaultCell>Nill</DefaultCell>,
            u1: <DefaultCell>Nill</DefaultCell>,
        },

    ],
};

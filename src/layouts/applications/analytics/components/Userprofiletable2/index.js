import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";


export default {
    columns: [
        // { Header: "product", accessor: "product", width: "50%" },
        { Header: "", accessor: "value" },
        { Header: "", accessor: "adsSpent", align: "center" },
       
    ],

    rows: [
        {
            value: <DefaultCell>Signature Status</DefaultCell>,
            adsSpent: <DefaultCell>Uploaded</DefaultCell>,
         
        },
        {
            value: <DefaultCell>Cheque Status</DefaultCell>,
            adsSpent: <DefaultCell>Uploaded</DefaultCell>,
         
        },

        {
            value: <DefaultCell>AOF Image Submit Status</DefaultCell>,
            adsSpent: <DefaultCell>Submitted to BSE</DefaultCell>,
         
        },
        {
            value: <DefaultCell>AOF Status</DefaultCell>,
            adsSpent: <DefaultCell>ACCEPTED</DefaultCell>,
         
        },
    
        {
            value: <DefaultCell>AOF Uploaded On</DefaultCell>,
            adsSpent: <DefaultCell>May 10, 2022, 1:47 PM</DefaultCell>,
         
        },
        

    ],
};

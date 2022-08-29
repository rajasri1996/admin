import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";

export default {
    columns: [
        // { Header: "product", accessor: "product", width: "50%" },
        { Header: "Created On", accessor: "value" },
        { Header: "Updated On", accessor: "adsSpent", align: "center" },
        { Header: "Last Login", accessor: "refunds", align: "center" },
    ],

    rows: [
        {
            value: <DefaultCell>May 10, 2022, 1:08 PM</DefaultCell>,
            adsSpent: <DefaultCell>May 10, 2022, 1:14 PM</DefaultCell>,
            refunds: <DefaultCell>Aug 1, 2022, 10:14 AM</DefaultCell>,
        },

    ],
};

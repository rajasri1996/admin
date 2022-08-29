// ProductPage page components


export default {
    columns: [
        { Header: "", accessor: "product" },
        { Header: "", accessor: "bse" },
    ],

    rows: [
        {
            product: <h9 style={{ color: "black" }}>Total Monthly Inflow</h9>,
            bse: <h9 style={{ color: "black" }}>Total Monthly Inflow</h9>,
        },

        {
            product: <h9 style={{ color: "black" }}>Total Monthly Outflow</h9>,
            bse: <h9 style={{ color: "black" }}>17,82,396</h9>,
        },

        {
            product: <h9 style={{ color: "black" }}>Net Monthly Inflow</h9>,
            bse: <h9 style={{ color: "black" }}>	-6,25,454</h9>,
        },

    ],
};

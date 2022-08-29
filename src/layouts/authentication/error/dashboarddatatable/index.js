/* eslint-disable react/prop-types */
// ProductsList page components
// import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
// import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
// import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";


export default {
    columns: [


        {
            Header: " Id",
            accessor: "id",
            Cell: ({ value }) => <DefaultCell value={value} />,
        },
        {
            Header: "	Name",
            accessor: "name",
            Cell: ({ value }) => <DefaultCell value={value} />,
        },
        // {
        //   Header: "status",
        //   accessor: "status",
        //   Cell: ({ value }) => {
        //     let status;

        //     if (value === "paid") {
        //       status = <StatusCell icon="done" color="success" status="Paid" />;
        //     } else if (value === "refunded") {
        //       status = <StatusCell icon="replay" color="dark" status="Refunded" />;
        //     } else {
        //       status = <StatusCell icon="close" color="error" status="Canceled" />;
        //     }

        //     return status;
        //   },
        // },

        {
            Header: "Mobile Number",
            accessor: "PAN",
            Cell: ({ value }) => {
                const [name, data] = value;

                return (
                    <DefaultCell
                        value={typeof value === "string" ? value : name}
                        suffix={data.suffix || false}
                    />
                );
            },
        },
        { Header: "	Email", accessor: "id3", Cell: ({ value }) => <DefaultCell value={value} /> },

        { Header: "Created On", accessor: "id4" },


    ],

    rows: [
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },

        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },

        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },

        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },

        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },

        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
        {
            id: " 4584",
            name: "test1",
            // status: "paid",
            PAN: "9024163621",
            id3: "tes.t1@fundexpert.in",
            id4: "May 21, 2018, 12:42 PM",
        },
    ],
};

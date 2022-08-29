/* eslint-disable react/prop-types */
// ProductsList page components
// import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
// import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
// import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";


export default {
    columns: [


        {
            Header: " AMC",
            accessor: "id",
            Cell: ({ value }) => <DefaultCell value={value} />,
        },
        {
            Header: "Invested Amount",
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
            Header: "AUM",
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


    ],

    rows: [
        {
            id: " Aditya Birla Sun Life Mutual Fund",
            name: "5,73,88,558",
            // status: "paid",
            PAN: "7,39,07,448",
          

        },

        {
            id: " CICI Prudential Mutual Fund",
            name: "4,36,53,385",
            // status: "paid",
            PAN: "4,78,40,778",

        },
        {
            id: "UTI Mutual Fund",
            name: "1,48,96,966",
            // status: "paid",
            PAN: "1,73,96,872",

        },
        {
            id: " Aditya Birla Sun Life Mutual Fund",
            name: "5,73,88,558",
            // status: "paid",
            PAN: "7,39,07,448",
          

        },

       
    ],
};

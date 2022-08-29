/* eslint-disable react/prop-types */
// ProductsList page components
// import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
// import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
// import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";


export default {
  columns: [


    {
      Header: " PAN Number",
      accessor: "id",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "User",
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
      Header: "Invested Amount",
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
    { Header: "Current Amount", accessor: "id3", Cell: ({ value }) => <DefaultCell value={value} /> },

    { Header: "Details", accessor: "id4" },


  ],

  rows: [
    {
      id: " AEGPA6692G",
      name: "ABHA AGARWAL",
      // status: "paid",
      PAN: "9,00,000",
      id3: "13,65,954",
      id4: "details",

    },

    {
      id: " AEGPA6692G",
      name: "Sanjay AGARWAL",
      // status: "paid",
      PAN: "9,00,000",
      id3: "13,65,954",
      id4: "details",

    },
   
  ],
};

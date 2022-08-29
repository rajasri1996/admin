/* eslint-disable react/prop-types */
// ProductsList page components
import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";
// import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
// import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";
import { Link } from "react-router-dom";


export default {
  columns: [

    { Header: "Action", accessor: "id", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "Name",
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
      Header: "Mobile",
      accessor: "id1",
    },
    {
      Header: "PAN",
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
    { Header: "Tax Status", accessor: "id3", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Email", accessor: "id4", width: "30%" },
    { Header: "Created On", accessor: "id5", width: "30%" },
    { Header: "User Id", accessor: "id6", width: "30%" },
    { Header: "BSE Client ID", accessor: "id7", width: "30%" },
    { Header: "KYC", accessor: "id8", width: "30%" },
    { Header: "Bank", accessor: "id9", width: "30%" },
    { Header: "AOF", accessor: "id10", width: "30%" },
    { Header: "FATCA", accessor: "id11", width: "30%" },
    { Header: "Mandate", accessor: "id12", width: "20%" },
  ],

  rows: [
    {
      id: " Mark Inactive",
      name: <Link to="/authentication/error/user" >KAUSTUBH BHATTAD
      </Link>,
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "RAJEEV AGARWAL HUF",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "investors405@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "SANJAY AGARWAL HUF",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
    {
      id: " Mark Inactive",
      name: "KAUSTUBH BHATTAD",
      // status: "paid",
      id1: "9789916097",
      PAN: "GHHPB2700Q",
      id3: "Individual",
      id4: "kaustubhbhatted@gmail.com",
      id5: "May 10, 2022, 1:08 PM",
      id6: "432847",
      id7: "K432847",
      id8: "Kyc",
      id9: "Yes",
      id10: "Yes",
      id11: "Yes",
      id12: "Yes",
    },
  ],
};

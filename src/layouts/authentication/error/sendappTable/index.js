/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// ProductsList page components
import IdCell from "layouts/ecommerce/orders/order-list/components/IdCell";
import DefaultCell from "layouts/ecommerce/orders/order-list/components/DefaultCell";


export default {
  columns: [

    {
      Header: "Name",
      accessor: "product", width:"20%" , 
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
    { Header: "Email Id", accessor: "revenue",width:"15%" ,  Cell: ({ value }) => <DefaultCell value={value} /> },

    {
      Header: "Mobile",
      accessor: "date",width:"15%" , 
      Cell: ({ value }) => <DefaultCell value={value} />,
    },

    { Header: "Select ", accessor: "id",width:"10%" ,  Cell: ({ value }) => <IdCell id={value} /> },
   
   
  ],

  rows: [
    {
      product: "Vipin Raj M(56)",
      revenue: "vippinrajnarsimhlu@gmail.com",
      date: "8885321555",
      id: "",
    },
  ],
};

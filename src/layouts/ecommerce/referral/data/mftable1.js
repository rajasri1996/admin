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

// Overview page components
// import ProductCell from "layouts/ecommerce/overview/components/ProductCell";
// import RefundsCell from "layouts/ecommerce/overview/components/RefundsCell";
// import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";

// Images
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import team5 from "assets/images/team-5.jpg";

export default {
    columns: [
        { Header: "Mutualfund", accessor: "user" , align: "center" },
        { Header: "Folio No", accessor: "value" , align: "center" },
        { Header: "Amount", accessor: "profit", align: "center" },
        { Header: "No. of Units", accessor: "refunds", align: "center" },
        { Header: "Cur. Nav", accessor: "a1", align: "center"  },
        { Header: "Cur. Val.", accessor: "a2", align: "center"  },
        { Header: "Div. RI", accessor: "a3", align: "center" },
        { Header: "Div. Pd", accessor: "a4", align: "center" },
        { Header: "Gain", accessor: "a5", align: "center" },
        { Header: "Abs Return(%)", accessor: "a6", align: "center" },
      ],
  
    rows: [
      // {
      //   user: <DefaultCell>11</DefaultCell>,
      //   value: <DefaultCell>$130.992</DefaultCell>,
      //   profit: <DefaultCell>$9.500</DefaultCell>,
      //   refunds: (
      //     <RefundsCell
      //       value={13}
      //       icon={{ color: "success", name: "keyboard_arrow_up" }}
      //       tooltip="Refund rate is lower with 97% than other products"
      //     />
      //   ),
      // },
      // {
      //   user: <ProductCell image={team2} name="John Alura" orders={12.821} />,
      //   value: <DefaultCell>$80.250</DefaultCell>,
      //   profit: <DefaultCell>$4.200</DefaultCell>,
      //   refunds: <RefundsCell value={40} icon={{ color: "error", name: "keyboard_arrow_down" }} />,
      // },
      // {
      //   user: <ProductCell image={team3} name="Andrew Sian" orders={2.421} />,
      //   value: <DefaultCell>$40.600</DefaultCell>,
      //   profit: <DefaultCell>$9.430</DefaultCell>,
      //   refunds: <RefundsCell value={54} icon={{ color: "success", name: "keyboard_arrow_up" }} />,
      // },
      // {
      //   user: <ProductCell image={team4} name="Luca Willaim" orders={5.921} />,
      //   value: <DefaultCell>$91.300</DefaultCell>,
      //   profit: <DefaultCell>$7.364</DefaultCell>,
      //   refunds: <RefundsCell value={5} icon={{ color: "error", name: "keyboard_arrow_down" }} />,
      // },
      // {
      //   user: <ProductCell image={team5} name="Richel Manuel" orders={921} />,
      //   value: <DefaultCell>$140.925</DefaultCell>,
      //   profit: <DefaultCell>$20.531</DefaultCell>,
      //   refunds: (
      //     <RefundsCell
      //       value={121}
      //       icon={{ color: "success", name: "keyboard_arrow_up" }}
      //       tooltip="Refund rate is higher with 70% than other products"
      //     />
      //   ),
      // },
    ],
  };
  
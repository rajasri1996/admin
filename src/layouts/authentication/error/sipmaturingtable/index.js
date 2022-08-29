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

export default {
    columns: [
        { Header: "Client Name", accessor: "InvestorName" },
        { Header: "Pan Number", accessor: "Location" },
        { Header: "SIP Amount", accessor: "Investments" },
        { Header: "No. Of SIPS", accessor: "r1" },

    ],

    rows: [
        {
            InvestorName: "Total" , 
            Location: "Not Present",
            Investments: "0",
            r1: "0",

        },

    ],
};

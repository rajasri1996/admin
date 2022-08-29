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
        { Header: "Scheme Type", accessor: "InvestorName", textAlin: "center" },
        { Header: "Invested Amount", accessor: "Location" },
        { Header: "AUM", accessor: "Investments" },
        { Header: "Details", accessor: "r1" },
    ],

    rows: [
        {
            InvestorName: "DEBT",
            Location: "14,24,929",
            Investments: "14,53,296",
            r1: "Details",
        },

        {
            InvestorName: "HYBRID",
            Location: "5,26,492",
            Investments: "8,08,077",
            r1: "Details",
        },

        {
            InvestorName: "EQUITY",
            Location: "14,24,929",
            Investments: "14,53,296",
            r1: "Details",
        },

        {
            InvestorName: "OTHER",
            Location: "5,26,492",
            Investments: "8,08,077",
            r1: "Details",
        },

    ],
};

import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";
import { Link } from "react-router-dom";

export default {
    columns: [
        // { Header: "product", accessor: "product", width: "50%" },
        { Header: "Mandate Type", accessor: "value" },
        { Header: "Mandate Id", accessor: "adsSpent", align: "center" },
        { Header: "Mandate Amount", accessor: "refunds", align: "center" },
        { Header: "Mandate Status", accessor: "u1" },
        { Header: "Mandate Updated On", accessor: "u2" },
        { Header: "Mandate Bank", accessor: "u3", align: "center" },
        { Header: "Bank Account Number", accessor: "u4", align: "center" },
        { Header: "Registration Date", accessor: "u5" },
        { Header: "Approved Date", accessor: "u6", align: "center" },
        { Header: "Status / Mandate Remark", accessor: "u7", align: "center" },
        { Header: "Action", accessor: "u8" },
    ],

    rows: [
        {
            value: <DefaultCell>e-nach</DefaultCell>,
            adsSpent: <DefaultCell>	8829529</DefaultCell>,
            refunds: <DefaultCell>100000</DefaultCell>,
            u1: <DefaultCell>APPROVED</DefaultCell>,
           u2: <DefaultCell>5/14/22, 10:37 AM</DefaultCell>,
            u3: <DefaultCell>HDFC BANK</DefaultCell>,
            u4: <DefaultCell>50100487221090</DefaultCell>,
            u5: <DefaultCell>May 11 2022 12:24PM</DefaultCell>,
            u6: <DefaultCell>14/05/2022</DefaultCell>,
            u7: <DefaultCell>	APPROVED BY BSE /</DefaultCell>,
            u8: <DefaultCell><Link to={{}}>Mark Rejected</Link></DefaultCell>,
        },

    ],
};

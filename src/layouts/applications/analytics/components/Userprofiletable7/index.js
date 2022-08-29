import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";
import { Link } from "react-router-dom";

export default {
    columns: [
        // { Header: "product", accessor: "product", width: "50%" },
        { Header: "Scheme", accessor: "value" },
        { Header: "	FolioNumber", accessor: "adsSpent", align: "center" },
        { Header: "Current Amount", accessor: "refunds", align: "center" },
        { Header: "Invested Amount", accessor: "u4" },
        { Header: "	Units", accessor: "u1", align: "center" },
        { Header: "AvgNav", accessor: "u2", align: "center" },
        { Header: "	Actions", accessor: "u3", align: "center" },

    ],

    rows: [
        {
            value: <DefaultCell>ICICI PRUDENTIAL TECHNOLOGY FUND - GROWTH</DefaultCell>,
            adsSpent: <DefaultCell>22545662/47</DefaultCell>,
            refunds: <DefaultCell>2,014</DefaultCell>,
            u4: <DefaultCell>2,000</DefaultCell>,
            u1: <DefaultCell>15.036</DefaultCell>,
            u2: <DefaultCell>133.007</DefaultCell>,
            u3: <DefaultCell><Link to={{}}>Edit / View / Merge Folio / Shift Holding</Link></DefaultCell>,
        },

    ],
};

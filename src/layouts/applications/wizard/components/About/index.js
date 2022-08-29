import DataTable from "examples/Tables/DataTable";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Cameras() {

  const columns =
  {
    columns: [
      { Header: "Advisor Name", accessor: "value" },
      { Header: "AUM", accessor: "profit", align: "center" },
    ],

    rows: [
      {
        value: <h9 style={{ color: 'black' }}>Anuraag Advisor</h9>,
        profit: <h9 style={{ color: 'black' }}>0</h9>,
      },

      {
        value: <h9 style={{ color: 'black' }}>Testing-Adetee</h9>,
        profit: <h9 style={{ color: 'black' }}>0</h9>,
      },

      {
        value: <h9 style={{ color: 'black' }}>Advisor Under Branch</h9>,
        profit: <h9 style={{ color: 'black' }}>0</h9>,
      },

      {
        value: <h6 style={{ color: 'black' }}>Total</h6>,
        profit: <h6 style={{ color: 'black' }}>0</h6>
      },

    ],

  }

  return (

    <SuiBox component="form" my={3}>
      <Card id="change-password">
        <SuiBox mt={8} mb={2}>
          <SuiBox mb={1} ml={2}>
            <SuiTypography variant="h5" fontWeight="medium">
              AUM As On Current Date
            </SuiTypography>
          </SuiBox>
          <DataTable
            table={columns}
            entriesPerPage={false}
            showTotalEntries={false}
            isSorted={false}
          />
        </SuiBox>
      </Card>
    </SuiBox>

  );
}

export default Cameras;

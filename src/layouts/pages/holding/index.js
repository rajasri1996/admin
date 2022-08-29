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

import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Table, Button } from 'react-bootstrap';

function Holding() {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <br />
        <SuiBox >
          <h2 style={{ textAlign: 'center' }}>Holdings with units difference</h2>
        </SuiBox>
        <br />
        <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ padding: '15px'}}><a href="/transaction/rejectedtransactions?sort=User+ID&amp;direction=asc">User</a></th>
              <th style={{ padding: '15px'}}><a href="/transaction/rejectedtransactions?sort=User+Name&amp;direction=asc">	MutualFund</a></th>
              <th style={{ padding: '15px'}}><a href="/transaction/rejectedtransactions?sort=Holding+ID&amp;direction=asc">FE Units</a></th>
              <th style={{ padding: '15px'}}><a href="/transaction/rejectedtransactions?sort=Scheme&amp;direction=asc">RTA Units</a></th>
              <th style={{ padding: '15px'}}><a href="/transaction/rejectedtransactions?sort=Holding+ID&amp;direction=asc">Reconcile UpdatedOn</a></th>
              <th style={{ padding: '15px'}}><a href="/transaction/rejectedtransactions?sort=Scheme&amp;direction=asc">Action</a></th>
            </tr>
          </thead>
        </Table>

        <br />
        <hr />
        <Button variant="outline-secondary" style={{ marginLeft: '25px', fontWeight:'bold'}}>previous</Button>
        <Button variant="outline-success" style={{ marginLeft: '25px', fontWeight:'bold' }}>next</Button>
        <div style={{ marginRight: '10px', float: 'right' }}>
          <p>0 of 1</p>
        </div>
       
      </DashboardLayout>
    </>
  );
}


export default Holding;

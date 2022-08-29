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

// @mui material components
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import {Link} from 'react-router-dom';
// Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
// import { F } from 'react-bootstrap';
import { Form, Col, Button, Row } from 'react-bootstrap';
// import Userclient from "layouts/dashboards/userclient/Userclient";

function User() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiTypography variant="h1" fontWeight="medium" style={{ textAlign: 'center', color: "green" }}>
                User
            </SuiTypography>
            <br />
            <hr style={{ color: 'red' }} />
            <Row className="mb-3" style={{ fontWeight: 'bold' }}>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Financial Year</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>2021-2022</option>
                        <option>2020-2021</option>
                        <option>2019-2020</option>
                        <option>2018-2019</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" id="formGridCheckbox" style={{ margin: '40px' }}>
                    <Form.Check type="checkbox" label="Excel" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCheckbox" style={{ margin: '40px' }}>
                    <Form.Check type="checkbox" label="PDF" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: '250px', height: '35px', margin: '40px' }}>
                    Submit
                </Button>
            </Row>
            <hr style={{ color: 'red' }} />

            <h2 style={{ color: 'green' }}>Capital Gains Statement of ANURAAG SABOO For Year 2021-2022</h2>

            <table cellPadding="0" cellSpacing="0">

                <tbody>

                    <tr>

                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>

                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>

                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>
                        <th style={{ width: "150px ", color: 'white' }}>-</th>

                    </tr>

                    <tr>
                        <th colSpan="17" align="center" style={{ backgroundColor: '#99b5f3', padding: '20px', color: 'black', fontWeight: 'bold', textAlign: 'center' , border: '1px solid black' }}>IDBI NIFTY INDEX FUND-DIRECT PLAN - GROWTH-GROWTH [ Folio No : 3104929206][ ISIN No : INF397L01AP6] Equity Short Term</th>
                    </tr>

                    <tr>
                        <th colSpan="4" width="400px" style={{ padding: '15px', color: 'black', fontWeight: 'bold', border: '1px solid black', backgroundColor: '#F9DDAB', textAlign: 'center' }}> SUBSCRIPTIONS</th>

                        <th colSpan="4" width="400px" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> REDEMPTIONS</th>

                        <th colSpan="3" width="300px" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }} > GRANDFATHERING CALCULATION(AS ON 31-01-2018)</th>

                        <th colSpan="2" width="400px" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> CAPITAL GAIN/LOSS TAX CALCULATION</th>

                        <th colSpan="1" width="100px" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> ACTUAL GAIN/LOSS</th>
                    </tr>

                    <tr style={{ fontWeight: 'bold', textAlign: 'center' }}>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Date</th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Pur. Amt</th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Units </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Pur. NAV </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Trxn Type </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Date </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Sell Amount</th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Sell NAV </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> NAV </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Fair Market Value </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> Cost of Acquisition </th>

                        <th width="200px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> (ST Gain / ST Loss) </th>

                        <th width="200px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> (LT Gain / LT Loss) </th>

                        <th width="100px" style={{ border: '1px solid black', backgroundColor: '#FAEADB', padding: '15px', color: 'black', fontWeight: 'bold', textAlign: 'center' }}> (Gain/Loss) </th>

                    </tr>

                    <tr>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >Mar 1, 2021</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >100000</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}  >3434.083</td>

                        <td style={{ border: '1px solid black', lineHeight: "50px" }} >29.1199</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>Redemption</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >Apr 05, 2021</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >98539.98</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >28.6947</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td s style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>100000</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-1460.02</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >-1460.17</td>
                    </tr>

                    <tr>
                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >Total</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >1,00,000</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >3434.083</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >98,540</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >0</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >1,00,000</td>

                        <td align="center" style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-1460.02</td>

                        <td align="center" style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >0</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >-1,460</td>

                    </tr>

                </tbody>

            </table>

            <br />
            <hr style={{ color: 'red' }} />
            <br />
            <h2 style={{ color: 'green' }}>Capital Gains Summary</h2>
            <br />
            <table className="table" cellPadding="0" cellSpacing="0" style=
                {{ overflowX: 'auto', width: 'auto', whiteSpace: 'normal', margin: 'auto', scrollMargin: "initial" }}>

                <thead style={{ width: '100%' }}>
                    <tr>
                        <th width="450px" style=
                            {{ border: '1px solid black', backgroundColor: '#99B5F3', color: '#000', fontWeight: 'bold', padding: '15px', textAlign: 'center' }}>SCHEME NAME</th>

                        <th width="200px" style=
                            {{ border: '1px solid black', backgroundColor: '#99B5F3', color: '#000', fontWeight: 'bold', padding: '15px', textAlign: 'center' }}>FOLIO  NUMBER</th>

                        <th width="400px" style=
                            {{ border: '1px solid black', backgroundColor: '#99B5F3', color: '#000', fontWeight: 'bold', padding: '15px', textAlign: 'center' }}>(SHORT TERM  GAIN / SHORT TERM  LOSS)</th>

                        <th width="400px" style=
                            {{ border: '1px solid black', backgroundColor: '#99B5F3', color: '#000', fontWeight: 'bold', padding: '15px', textAlign: 'center' }}>(LONG TERM  GAIN / LONG TERM  LOSS) </th>

                        <th width="150px" style=
                            {{ border: '1px solid black', backgroundColor: '#99B5F3', color: '#000', fontWeight: 'bold', padding: '15px', textAlign: 'center' }}>TOTAL  GAIN/LOSS</th>

                    </tr>

                    <tr>
                        <th colSpan="17" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', color: 'black', fontWeight: 'bold', fontSize: '15px', padding: '15px' }}>Equity Funds</th>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>IDBI NIFTY INDEX FUND-DIRECT PLAN - GROWTH-GROWTH(INF397L01AP6)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>3104929206</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>-1,460</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>-1,460</td>

                    </tr>

                    <tr>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>IDBI NIFTY INDEX FUND-DIRECT PLAN - GROWTH-GROWTH(INF397L01AP6)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>3104929206</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>-1,460</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>-1,460</td>

                    </tr>

                    <tr style={{ background: 'darkgray', fontWeight: "bold" }}>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>Equity Total</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "#F4BB5E" }}>-</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>-2,920</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>0</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>-2,920</td>

                    </tr>

                    <tr>
                        <th colSpan="17" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', color: 'black', fontWeight: 'bold', fontSize: '15px', padding: '15px' }}>Debt Funds</th>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>ICICI PRUDENTIAL OVERNIGHT FUND DIRECT PLAN GROWTH(INF109KC1OO2)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>15433083/15</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>6,649</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>6,649</td>

                    </tr>

                    <tr>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>ICICI PRUDENTIAL OVERNIGHT FUND DIRECT PLAN GROWTH(INF109KC1OO2)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>15433083/15</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>6,979</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>6,979</td>

                    </tr>

                    <tr>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>NIPPON INDIA LIQUID FUND - DIRECT GROWTH PLAN - GROWTH OPTION(INF204K01ZH0)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>499174754291</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>9,482</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>3,560</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>13,043</td>

                    </tr>

                    <tr style={{ background: 'darkgray', fontWeight: "bold" }}>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>Debt Total</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "#F4BB5E" }}>-</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>23,110</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>3,560</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>26,671</td>

                    </tr>

                </thead>
            </table>
            <br />
            <h5>*Disclaimer :</h5>
            <br />
            <h6>1. Investments in mutual funds are subject to market risks and the NAV of the schemes may change accordingly.</h6>
            <br />
            <h6>2. This statement is based on the information available with us from Mutual Fund Registrars, and is only for your reference. The statement from the respective AMC reflects the exact information for the respective folio. In case of any discrepancy, please report to us.</h6>
            <br />
            <h6>3. Tax is payable on your capital gains as per Income Tax Act. Please contact your Chartered Account/Tax Consultant for the same. You can contact us for any further assistance.</h6>

            <Footer />
        </DashboardLayout>
    );
}

export default User;

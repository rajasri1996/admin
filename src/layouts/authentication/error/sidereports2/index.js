// import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
// import { F } from 'react-bootstrap';
import { Form, Col, Button, Row } from 'react-bootstrap';
// import Userclient from "layouts/dashboards/userclient/Userclient";

function Sidereports() {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <br />

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

            <h2 style={{ color: 'green' }}>Unrealized Capital Gains Statement of ANURAAG SABOO For Year 2021-2022</h2>

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
                        <th colSpan="17" align="center" style={{ backgroundColor: '#99b5f3', padding: '20px', color: 'black', fontWeight: 'bold', textAlign: 'center' , border: '1px solid black'}}>ADITYA BIRLA SUN LIFE DIGITAL INDIA FUND-GROWTH (Folio No : 1040634571) (ISIN No : INF209K01140) Equity Long Term</th>
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

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >Feb 10, 2021</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >7999.98</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}  >86.51</td>

                        <td style={{ border: '1px solid black', lineHeight: "50px" }} >	92.4746</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >	Jul 15, 2022</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >9251.38</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >106.94</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td s style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>7999.98</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >1251.4</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >1251.4</td>
                    </tr>


                    <tr>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >Mar 10, 2021</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >8000.05</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}  >81.972</td>

                        <td style={{ border: '1px solid black', lineHeight: "50px" }} >	92.4746</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >	Jul 15, 2022</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >9251.38</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >106.94</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td s style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>7999.98</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >1251.4</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >1251.4</td>
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

                        <td align="center" style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >0</td>

                        <td align="center" style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >0</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >3,115</td>

                    </tr>

                    <tr>
                        <th colSpan="17" align="center" style={{ backgroundColor: '#99b5f3', padding: '20px', color: 'black', fontWeight: 'bold', textAlign: 'center' , border: '1px solid black'}}>ADITYA BIRLA SUN LIFE EQUITY ADVANTAGE FUND - GROWTH-REGULAR PLAN (Folio No : 1018610626) (ISIN No : INF209K01165) Equity Long Term</th>
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

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >Mar 7, 2017</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >999.84</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}  >2.809</td>

                        <td style={{ border: '1px solid black', lineHeight: "50px" }} >	355.94</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >	Jul 15, 2022</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >9251.38</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >106.94</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td s style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>7999.98</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }}>-</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >1251.4</td>

                        <td style={{ border: '1px solid black', padding: '15px', textAlign: 'center' }} >551.21</td>
                    </tr>

                    <tr>
                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >Total</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >1,000</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >2.809</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >98,540</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >-</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >0</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >1,00,000</td>

                        <td align="center" style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }}  >0</td>

                        <td align="center" style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >0</td>

                        <td style={{ border: '1px solid black ', backgroundColor: '#F4BB5E', fontWeight: 'bold', textAlign: 'center', padding: '15px', color: 'black' }} >323</td>

                    </tr>

                </tbody>

            </table>

            <br />
            <hr style={{ color: 'red' }} />
            <br />
            <h2 style={{ color: 'green' }}>Unrealized Capital Gains Summary</h2>
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
                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>ADITYA BIRLA SUN LIFE DIGITAL INDIA FUND-GROWTH(INF209K01140)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>1040634571</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>3,115</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>3,115</td>

                    </tr>

                    <tr>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>ADITYA BIRLA SUN LIFE EQUITY ADVANTAGE FUND - GROWTH-REGULAR PLAN(INF209K01165)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>1018610626</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>-1,460</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>	323</td>

                    </tr>

                    <tr style={{ background: 'darkgray', fontWeight: "bold" }}>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>Equity Total</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "#F4BB5E" }}>-</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>0</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>223,602</td>

                        <td style={{ border: '1px solid black', fontWeight: 'bold', padding: '15px', backgroundColor: '#F4BB5E', textAlign: 'center', color: "black" }}>223,602</td>

                    </tr>

                    <tr>
                        <th colSpan="17" style={{ border: '1px solid black', backgroundColor: '#F9DDAB', color: 'black', fontWeight: 'bold', fontSize: '15px', padding: '15px' }}>Debt Funds</th>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>ADITYA BIRLA SUN LIFE SAVINGS FUND - GROWTH-DIRECT PLAN(INF209K01UR9)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>1041390406</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>6,446</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>6,446</td>

                    </tr>

                    <tr>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>HDFC ULTRA SHORT TERM FUND - DIRECT PLAN - GROWTH(INF179KB15Q6)</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>16898739/57</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>14,456</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>0</td>

                        <td style={{ border: '1px solid black', backgroundColor: '#FAEADB', fontWeight: 'normal', padding: '15px', textAlign: 'center' }}>14,456</td>

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
            <h5 style={{ color: 'black' }}>*Disclaimer :</h5>
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

export default Sidereports;

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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
// import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
// import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
// import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import { Table, Dropdown, DropdownButton, ButtonGroup, Col, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

function User() {

    return (
        <DashboardLayout>
            <DashboardNavbar />

            <>
                {[
                    'primary',

                ].map((variant) => (
                    <Alert key={variant} variant={variant} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        Transaction does not exist.
                    </Alert>
                ))}
            </>
            <SuiBox my={3}>
                <SuiBox mb={3}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <SuiTypography variant="h4" fontWeight="medium" style={{ color: "green" }}>
                                KAUSTUBH BHATTAD

                                <DropdownButton
                                    align="end"
                                    title="Reports"
                                    id="dropdown-menu-align-end"
                                    style={{ float: 'right', marginRight: '200px' }}
                                >
                                    <Dropdown.Item eventKey="1"><a href="/authentication/error/Userreports" >Capital Gains</a></Dropdown.Item>

                                    <Dropdown.Item eventKey="1"><a href="/capitalgain/viewcapitalgainunrealized/432847" target="_blank">Unrealized Capital Gains</a></Dropdown.Item>

                                    <Dropdown.Item eventKey="1"><a href="/transaction/broktransactions/432847" target="_blank">Transaction Statement</a></Dropdown.Item>

                                    <Dropdown.Item eventKey="3"><a href="/transaction/elsstransactions/432847" target="_blank">ELSS Transaction Statement</a></Dropdown.Item>

                                    <Dropdown.Item eventKey="3"><a href="/portfoliovaluation" target="_blank">Portfolio Valuation</a></Dropdown.Item>

                                </DropdownButton>
                            </SuiTypography>
                        </Grid>

                        <br />
                        {/* <Grid item xs={12} lg={6}>
                            <SuiBox display="flex" justifyContent="flex-end">
                                <SuiButton variant="gradient" buttonColor="info">
                                    Action
                                </SuiButton>
                            </SuiBox>
                        </Grid> */}
                    </Grid>
                </SuiBox>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        ACTION
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark" style={{ color: 'white' }}>

                        {/* <Dropdown.Item href="#/action-1" active >
                        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()" style={{color :'white'}} >×</a>
                        </Dropdown.Item> */}

                        <Dropdown.Item href="#/action-2"><Link to="/authentication/error/Sidemenu" style={{ color: 'white' }}>Edit User Profile</Link></Dropdown.Item>

                        <Dropdown.Item href="#/action-3">
                            <Link to="/authentication/error/Menupage" style={{ color: 'white' }}>Update User Settings</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item href="#/action-5"><Link to="/authentication/error/Menupage3" style={{ color: 'white' }}>Update Ideal Asset Allocation</Link>
                        </Dropdown.Item>

                        <Dropdown.Item href="#/action-6"><Link to="/authentication/error/Menupage4" style={{ color: 'white' }}>Upload Insurance file(s)</Link></Dropdown.Item>

                        <Dropdown.Divider />  <Dropdown.Item href="#/action-5"> <Link to="/authentication/error/Menupage5" style={{ color: 'white' }}>Add Family Member</Link>
                        </Dropdown.Item>

                        <Dropdown.Item href="#/action-6"> <Link to="/authentication/error/user" style={{ color: 'white' }}>Make Family Head</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item href="#/action-1">
                            <Link to="/authentication/error/Menupage6" style={{ color: 'white' }}>Merge Client</Link>
                        </Dropdown.Item>

                        <Dropdown.Item href="#/action-2">
                            <Link to="/authentication/error/user" style={{ color: 'white' }}>Go to Front Panel</Link>
                        </Dropdown.Item>


                        <Dropdown.Item href="#/action-3">
                            <Link to="/authentication/error/user" style={{ color: 'white' }}>Login to Front Panel</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item href="#/action-5">
                            <Link to="/authentication/error/user" style={{ color: 'white' }}>Register/Update Client on BSE</Link>
                        </Dropdown.Item>

                        <Dropdown.Item href="#/action-6">
                            <Link to="/authentication/error/user" style={{ color: 'white' }}>Activate Direct Plan Redeem</Link>
                        </Dropdown.Item>

                        <Dropdown.Item href="#/action-5">
                            <Link to="/authentication/error/Menupage12" style={{ color: 'white' }}>Scan Mandate Download</Link>
                        </Dropdown.Item>

                        <Dropdown.Item href="#/action-6">
                            <Link to="/authentication/error/user" style={{ color: 'white' }}>Update BSE Mandate</Link>
                        </Dropdown.Item>

                        <br />

                        <Dropdown.Item href="#/action-1" >
                            AOF Related
                            <Dropdown.Item href="#/action-6">
                                <Link to="/authentication/error/user" style={{ color: 'white' }}>Clean Signature & Prepare AOF</Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-6">
                                <Link to="/authentication/error/user" style={{ color: 'white' }}>View AOF image online</Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-6">
                                <Link to="/authentication/error/user" style={{ color: 'white' }}>View Documents upload on platform</Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-6">
                                <Link to="/authentication/error/user" style={{ color: 'white' }}>Reupload AOF image to BSE</Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-6">
                                <Link to="/authentication/error/user" style={{ color: 'white' }}>Download AOF Submitted to BSE</Link>
                            </Dropdown.Item>

                            <Dropdown.Item href="#/action-6">
                                <Link to="/authentication/error/user" style={{ color: 'white' }}>Mark AOF Done</Link>
                            </Dropdown.Item>

                        </Dropdown.Item>

                        <br />

                        <Dropdown.Item href="#/action-2"><a href="/user/mergeholdings/432847" style={{ color: 'white' }}>Recalculate/Fix Portfolio</a></Dropdown.Item>


                        <Dropdown.Item href="#/action-3"><a href="/user/resetmpin/432847" onClick="if (confirm(&quot;Are you sure ? you want to Delete All External Holdings.&quot;)) { document.post_62b94e291ce26366903744.submit(); } event.returnValue = false; return false;" style={{ color: 'white' }}>Delete All External Holdings</a></Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item href="#/action-6"><a href="/user/resetmpin/432847" style={{ color: 'white' }}>Remove Mobile PIN</a></Dropdown.Item>

                        <Dropdown.Item href="#/action-5"><a href="/user/resetmpin/432847" onClick="if (confirm(&quot;Are you sure you want to reset Mobile Mapping ?&quot;)) { document.post_62b94e291cf82598370256.submit(); } event.returnValue = false; return false;" style={{ color: 'white' }}>Reset Mobile Mapping</a></Dropdown.Item>

                        <Dropdown.Item href="#/action-7"> <a href="/user/resetmpin/432847" style={{ color: 'white' }}>Delete transactions &amp; holdings</a></Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <hr style={{ color: 'red' }} />
                <Grid container>
                    <Table striped bordered hover style={{ textAlign: 'center' }}>
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>User ID</td>

                                <td>432847</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>BSE ClientId</td>

                                <td>K432847</td>
                            </tr>

                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Mobile Number</td>

                                <td>9789916097 (Verified)</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Mobile OTP</td>

                                <td >1703</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Email</td>

                                <td >kaustubhbhatted@gmail.com (Verified)</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>PAN (kyc)</td>

                                <td><a href="/authentication/error/Pandetails" target="_blank">GHHPB2700Q ✔</a></td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Tax Status</td>

                                <td >Individual</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Mode of Holding</td>
                                <td>Single</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Current Value (Internal)</td>

                                <td >Rs 924</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Current Value (Overall)</td>

                                <td>Rs 924</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Fatca</td>

                                <td style={{ color: 'green' }}>Done</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>AOF</td>

                                <td style={{ color: 'black' }}>ACCEPTED</td>
                            </tr>
                        </tbody>
                    </Table>
                </Grid>
            </SuiBox>

            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="All BSE MANDATE"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">

                    <Table striped bordered hover as={Col} style={{ textAlign: 'center', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Details</td>

                                <td>Bank 1</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Bank 2</td>

                                <td>Bank 3</td>
                            </tr>

                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Bank Name</td>

                                <td>HDFC Bank</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Nill</td>

                                <td >Nill</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Account Number</td>

                                <td >50100487221090</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Nill</td>

                                <td>Nill</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Bank Account Type</td>

                                <td >SB</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Nill</td>

                                <td>Nill</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Current Value (Internal)</td>

                                <td >Rs 924</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Current Value (Overall)</td>

                                <td>Rs 924</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Bank Branch</td>

                                <td style={{ color: 'green' }}>NEW AVADI ROAD</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Nill</td>

                                <td style={{ color: 'black' }}>Nill</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Bank City</td>

                                <td style={{ color: 'green' }}>CHENNAI</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Nill</td>

                                <td style={{ color: 'black' }}>Nill</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Bank Branch</td>

                                <td style={{ color: 'green' }}>Ifsc Code</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Nill</td>

                                <td style={{ color: 'black' }}>HDFC0009366</td>
                            </tr>
                        </tbody>
                    </Table>

                    <br />
                    <Table striped bordered hover as={Col} style={{ textAlign: 'center' }}>
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Signature Status</td>

                                <td style={{ color: 'green' }}>Uploaded</td>
                            </tr>

                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Cheque Status</td>

                                <td style={{ color: 'green' }}>Uploaded</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>AOF Image Submit Status</td>

                                <td style={{ color: 'green' }}>Submitted to BSE</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>AOF Status</td>

                                <td style={{ color: 'green' }}>ACCEPTED</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>AOF Uploaded On</td>

                                <td >May 10, 2022, 1:47 PM</td>
                            </tr>

                        </tbody>
                    </Table>
                    <br />
                    <Table striped bordered hover as={Col} style={{ textAlign: 'center' }}>
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Occupation</td>

                                <td>STUDENT</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Address Line1</td>

                                <td>30/110, Damodar Apartment</td>
                            </tr>

                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Marital Status</td>

                                <td>single</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Address Line2</td>

                                <td >3rd Cross, Halls Road,</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Guardian Name</td>

                                <td >Nill</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Address Line3</td>

                                <td>Kilpauk</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Sex</td>

                                <td >Male</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Pin Code</td>

                                <td>600010</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Dob</td>

                                <td >Mar 1, 2004</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>City</td>

                                <td>Chennai</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Forgot Password OTP</td>

                                <td style={{ color: 'green' }}>-1394088161</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>State</td>

                                <td style={{ color: 'black' }}>TN</td>
                            </tr>
                        </tbody>
                    </Table>
                </Dropdown.Item>
            </DropdownButton>

            <br />
            <br />

            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="GENERAL DETAILS"
                id="dropdown-menu-align-responsive-5"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">

                    <Table striped bordered hover style={{ textAlign: 'center', width: '100%' }}>

                        <thead>

                            <tr>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mandate Type</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mandate Id</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mandate Amount</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mandate Status</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mandate Updated On</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mandate Bank</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Bank Account Number</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Registration Date</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Approved Date</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Status / Mandate Remark</th>

                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td style={{ padding: '10px' }}>e-nach</td>

                                <td>8829529</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>100000</td>

                                <td style={{ color: 'green' }}>APPROVED</td>

                                <td>5/14/22, 10:37 AM</td>

                                <td >HDFC BANK</td>

                                <td>50100487221090</td>
                                <td>May 11 2022 12:24PM</td>
                                <td>14/05/2022</td>

                                <td style={{ color: 'green' }}>APPROVED BY BSE /</td>

                                <td >Mark Rejected</td>

                            </tr>

                        </tbody>

                    </Table>
                </Dropdown.Item>
            </DropdownButton>

            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="NOMINEE DETAILS ✔"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">

                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Name</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Dob</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Relation</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>CreatedOn</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px' }}>Sundeep Bhattad	</td>

                                <td>Nill</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Father</td>

                                <td style={{ color: 'green' }}>May 10, 2022, 1:14 PM</td>

                                <td>Nill</td>
                            </tr>
                        </tbody>
                    </Table>
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="ACTIVITY"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Name</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Dob</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Relation</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>CreatedOn</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px' }}>Sundeep Bhattad	</td>

                                <td>Nill</td>

                                <td style={{ backgroundColor: 'brown', color: 'white' }}>Father</td>

                                <td style={{ color: 'green' }}>May 10, 2022, 1:14 PM</td>

                                <td>Nill</td>
                            </tr>
                        </tbody>
                    </Table>
                </Dropdown.Item>
            </DropdownButton>

            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="INTERNAL HOLDINGS - Based on First PAN (Rs.937 )"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Scheme</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>FolioNumber</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>	Current Amount</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Invested Amount</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Units</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>AvgNav</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px' }}>ICICI PRUDENTIAL TECHNOLOGY FUND - GROWTH	</td>

                                <td><a href="/holdings/folioview/22545662%25252F47" target="_blank">22545662/47</a></td>

                                <td>937</td>

                                <td >	1,000</td>

                                <td>7.311</td>

                                <td >136.773</td>

                                <td><a href="/holdings/edit/2329964" target="_blank">Edit</a>
                                    <a href="/holdings/view/2329964" target="_blank">/ View</a>
                                    <a href="/holdings/foliomerge/2329964" target="_blank">/ Merge Folio</a>
                                    <a href="/user/shiftholding/2329964" target="_blank">/ Shift Holding</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Dropdown.Item>
            </DropdownButton>

            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="EXTERNAL HOLDINGS - Based on First PAN Rs. 0"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    Not Present EXTERNAL HOLDINGS
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="INTERNAL TRANSACTION(S) - Based on First PAN (1)"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>ExecutionDate	</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>MutualFund</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Folio No</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Unique No./ Order No.</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Order Type</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Amount</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Units	</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>NAV</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px' }}>Jun 2, 2022</td>
                                <td>ICICI PRUDENTIAL TECHNOLOGY FUND - GROWTH</td>
                                <td><a href="/holdings/folioview/22545662%25252F47" target="_blank">22545662/47</a></td>

                                <td>P71P0818S24370466673</td>

                                <td >Systematic-BSE - Instalment No - 1 - ARN-13974/E151354	</td>
                                <td >	1,000</td>
                                <td>7.311</td>

                                <td >136.773</td>

                                <td><a href="/holdings/edit/2329964" target="_blank">Edit View</a>View
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="EXTERNAL TRANSACTION(S) - Based on First PAN (0)"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    Not Present EXTERNAL TRANSACTION
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="MY RUNNING SIP(s)"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    Not Present MY RUNNING SIP(s)
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="ORDERS - Based on First PAN (1)
                "
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>
                                    Created On</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Start Date</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Status</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>BSE Order Number</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Mutual Fund</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Order Type</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Amount/Monthly Amount</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px' }}>May 14, 2022</td>
                                <td>Jun 1, 2022</td>
                                <td>Active</td>

                                <td>29147313</td>

                                <td >ICICI PRUDENTIAL TECHNOLOGY FUND - GROWTH	</td>
                                <td >SIP</td>
                                <td >1,000</td>
                                <td><a href="/holdings/edit/2329964" target="_blank">Edit View</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title=" PORTFOLIO REQUESTED ✖  "
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Id</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Email</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Password</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Updated On</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Submitted On</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Submitted</th>
                                <th style={{ backgroundColor: 'brown', color: 'white', padding: "15px" }}>Actions</th>
                            </tr>
                        </thead>

                    </Table>
                </Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title=" PORTFOLIO UPLOAD ✖"
                id="dropdown-menu-align-responsive-1"
                style={{ width: '100%' }}
            >
                <Dropdown.Item eventKey="1">
                    <Table striped bordered hover style={{ textAlign: 'center' }}>

                        <thead>
                            <tr>
                                <th>Link</th>
                                <th style={{ color: 'white' }}>--</th>
                                <th style={{ color: 'white' }}>--</th>
                                <th style={{ color: 'white' }}>--</th>
                                <th >Updated On</th>
                                <th style={{ color: 'white' }}>--</th>
                                <th style={{ color: 'white' }}>--</th>
                            </tr>
                        </thead>

                    </Table>
                </Dropdown.Item>
            </DropdownButton>
            <Footer />
        </DashboardLayout>
    );
}

export default User;

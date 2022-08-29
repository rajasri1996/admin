// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox my={3}>

                <Grid container>
                    <>
                        <Alert show={show} variant="success">
                            <Alert.Heading>admin2.fundexpert.in says</Alert.Heading>
                            <p>
                              Are you sure ? , you want to Update all user mandate
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    ok
                                </Button>
                            </div>
                        </Alert>

                        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                    </>
                </Grid >
            </SuiBox >
            <Footer />
        </DashboardLayout >
    );
}

export default AlertDismissible;

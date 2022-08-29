import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import Icon from "@mui/material/Icon";
import { useState } from "react";
import DataTable from "examples/Tables/DataTable";
import Userprofiletable7 from "../Userprofiletable7";


function Analytic() {
    const [menu, setMenu] = useState(null);

    const openMenu = (event) => setMenu(event.currentTarget);
    const closeMenu = () => setMenu(null);

    const renderMenu = (
        <Menu
            anchorEl={menu}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(menu)}
            onClose={closeMenu}
            keepMounted
        >

            <Menu
                anchorEl={menu}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(menu)}
                onClose={closeMenu}
                keepMounted
            >
                <MenuItem onClick={closeMenu} style={{ backgroundColor: "#17c1e8", color: "black", fontWeight: 'bold' }}>
                    <DataTable
                        table={Userprofiletable7}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        isSorted={false}
                        noEndBorder

                    />
                </MenuItem>

            </Menu>

        </Menu>
    );

    return (

        <SuiBox>
            <SuiBox display="flex" justifyContent="flex-end">
                <SuiButton variant="gradient" buttonColor="warning" onClick={openMenu} fullWidth style={{ color: 'black', fontWeight: 'bold', fontSize: "20px", margin: "10px" }}>
                INTERNAL HOLDINGS - Based on First PAN (Rs.2,014 ) &nbsp;
                    <Icon className="">expand_more</Icon>
                </SuiButton>
                {renderMenu}
            </SuiBox>
        </SuiBox>


    );
}

export default Analytic;

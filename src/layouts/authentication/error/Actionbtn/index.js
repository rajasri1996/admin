import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import { Link } from "react-router-dom";
import CustomerSupport from "examples/Icons/CustomerSupport";

function Analytics() {
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
            <br/>
            <MenuItem onClick={closeMenu}> <Link to="/authentication/error/Sidemenu" style={{ color: 'black'}}>Edit User Profile</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage" style={{ color: 'black' }}>Update User Settings</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage3" style={{ color: 'black' }}>Update Ideal Asset Allocation</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage4" style={{ color: 'black' }}>Upload Insurance file(s)</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage5" style={{ color: 'black' }}>Add Family Member</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/user" style={{ color: 'black' }}>Make Family Head</Link></MenuItem>

            <MenuItem onClick={closeMenu}> <Link to="/authentication/error/Menupage6" style={{ color: 'black' }}>Merge Client</Link></MenuItem>

            <MenuItem onClick={closeMenu}> <Link to="/authentication/error/user" style={{ color: 'black' }}>Go to Front Panel</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/user" style={{ color: 'black' }}>Login to Front Panel</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage9" style={{ color: 'black'}}>Register/Update Client on BSE</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage10" style={{ color: 'black' }}>Activate Direct Plan Redeem</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage12" style={{ color: 'black'}}>Scan Mandate Download</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/user" style={{ color: 'black'}}>Update BSE Mandate</Link></MenuItem>

            <MenuItem onClick={closeMenu}> AOF Related</MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage11" style={{ color: 'black' }}>Recalculate/Fix Portfolio</Link></MenuItem>

            <MenuItem onClick={closeMenu}> <Link to="/authentication/error/Menupage11" style={{ color: 'black'}}>Delete All External Holdings</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage14" style={{ color: 'black' }}>Remove Mobile PIN</Link></MenuItem>

            <MenuItem onClick={closeMenu}><Link to="/authentication/error/Menupage11" style={{ color: 'black' }}>Reset Mobile Mapping</Link></MenuItem>

            <MenuItem onClick={closeMenu}> <Link to="/authentication/error/Menupage20" style={{ color: 'black' }}>Delete transactions &amp; holdings</Link></MenuItem>

        </Menu>
    );


    return (


        <SuiBox py={5} mb={3}>


            <SuiBox display="flex" mb={3} ml={2}>
                <SuiButton variant="gradient" buttonColor="primary" onClick={openMenu}>
                    <CustomerSupport size="18px" color="info" />
                    Action&nbsp;
                    <Icon className="">expand_more</Icon>
                </SuiButton>
                {renderMenu}
            </SuiBox>

        </SuiBox>


    );
}

export default Analytics;

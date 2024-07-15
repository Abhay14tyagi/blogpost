import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
 
const NavbarMenus = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <MenuRoundedIcon />
            </Dropdown.Toggle>
 
            <Dropdown.Menu>
                <Dropdown.Item href="/">    Home   </Dropdown.Item>
                <Dropdown.Item href="/blog">    Blog   </Dropdown.Item>
                <Dropdown.Item href="/categories">    Categories   </Dropdown.Item>
                <Dropdown.Item href="/about">    About   </Dropdown.Item>
                <Dropdown.Item href="/contact">    Contact   </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
 
export default NavbarMenus;

import React from 'react';
import './Navbar.css';
//import logo from '../../assets/images/logo.svg'
import { Container } from 'react-bootstrap';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import NavbarMenus from './NavbarMenus';

const Navbar = () => {
    return (
        <>
            <Container fluid className='navbar-container py-3'>
                <div className='navbar-wrap'>
                    {/* <div className='logo'>
                        <img src={logo} alt='company-logo' className='company-logo'/>
                    </div> */}
                    <NavbarMenus />
                    <form className='main-search-bar'>
                        <input type="text" placeholder='Search for blog posts...' />
                    </form>
                    <div className='navbar-right-menu d-flex align-items-center'>
                        <a className='me-3' href="#">
                            <AddCommentRoundedIcon color="action" />
                        </a>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar;

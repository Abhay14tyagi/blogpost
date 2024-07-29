// import React from 'react';
// import './Navbar.css';
// // import logo from '../../assets/images/logo.svg'
// import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
// import NavbarMenus from './NavbarMenus';

// const Navbar = () => {
//     return (
//         <>
//             <Container fluid className='navbar-container py-3'>
//                 <div className='navbar-wrap'>
//                     {/* <div className='logo'>
//                         <img src={logo} alt='company-logo' className='company-logo'/>
//                     </div> */}
//                     <NavbarMenus />
//                     <form className='main-search-bar'>
//                         <input type="text" placeholder='Search for blog posts...' />
//                     </form>
//                     <div className='navbar-right-menu d-flex align-items-center'>
//                         <Link to="/add-blog" className='me-3'>
//                             <AddCommentRoundedIcon color="action" />
//                         </Link>
//                     </div>
//                 </div>
//             </Container>
//         </>
//     );
// }

// export default Navbar;
import React from 'react';
import './Navbar.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <>
            <Container fluid className='navbar-container py-2'>
                <div className='navbar-wrap'>
                    <div className='navbar-left-menu'>
                        <Link to="/" className='navbar-item'>Home</Link>
                        <Link to="/blogs" className='navbar-item'>All Blogs</Link>
                        <Link to="/about" className='navbar-item'>About</Link>
                        <Link to="/contact" className='navbar-item'>Contact</Link>
                    </div>
                    <div className='main-search-bar'>
                        <div className='search-input-container'>
                            <input type="text" placeholder='Search for blog posts...' />
                            <SearchIcon className="search-icon" />
                        </div>
                    </div>
                    <div className='navbar-right-menu d-flex align-items-center'>
                        <Link to="/add-blog" className='me-3'>
                            <AddCommentRoundedIcon color="action" style={{ fontSize: 30}}/>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Navbar;

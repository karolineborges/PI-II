import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";

function Navbar() {
    const [page, setPage] = useState('home');
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    const selectMenu = (menu) => {
        setPage(menu);
        setShowMenu(!showMenu)
    }

    return (
        <nav className="navbar">
            <div className="container">
            <div className="logo">
                    <Link to="/" onClick={() => setShowMenu(false)}><img src={logo} style={{borderRadius: "10px"}} key="logo"/></Link>                  
            </div>
            <div className="menu" onClick={handleShowMenu}>
                <div className="menuList">
                    <svg width="10%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`navbar-links  ${showMenu && 'active'}`}>
                <ul></ul>
                <ul>
                    <li className={page === 'home' ? 'active' : ''}>
                        <Link to="/" onClick={() => selectMenu('home')}>Início</Link>
                    </li>
                    <li className={page === 'adoption' ? 'active' : ''}>
                        <Link to="/adoption" onClick={() => selectMenu('adoption')}>Adoção</Link>
                    </li>
                    <li className={page === 'donation' ? 'active' : ''}>
                        <Link to="/donation" onClick={() => selectMenu('donation')}>Doação</Link>
                    </li>
                    {
                        sessionStorage.getItem("ADM") ? 
                        <li className={page === 'administration' ? 'active' : ''}>
                            <Link to="/administration" onClick={() => selectMenu('administration')}>Administração</Link>
                        </li> : ""
                    }
                    </ul>
                    <ul>
                    {
                        sessionStorage.getItem("ADM") ?                     
                        <li onClick={() => { sessionStorage.removeItem("ADM"); window.location.href = "/"; }}>
                            <svg fill="#d9e5ed" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 490.693 490.693" space="preserve">
                                <g>
                                    <g>
                                        <g>
                                            <path d="M289.6,373.453c-6.613-0.96-12.267,4.16-12.267,10.56v74.667h-256V32.013h256v74.347c0,5.333,3.84,10.133,9.067,10.88
                                                c6.613,0.96,12.267-4.16,12.267-10.56V21.347c0-5.867-4.8-10.667-10.667-10.667H10.667C4.8,10.68,0,15.48,0,21.347v448
                                                c0,5.867,4.8,10.667,10.667,10.667H288c5.867,0,10.667-4.8,10.667-10.667v-85.013C298.667,379,294.827,374.2,289.6,373.453z"/>
                                            <path d="M487.573,237.88L380.907,131.213c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827
                                                l88.427,88.427H128.32c-5.227,0-9.92,3.627-10.773,8.853c-1.173,6.72,4.053,12.48,10.56,12.48H454.4l-88.533,88.427
                                                c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213
                                                l106.667-106.667C491.733,248.867,491.733,242.04,487.573,237.88z"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>Logout</p>
                        </li>  :                        
                        <li className='login' onClick={() => { setShowMenu(!showMenu)}}>
                            <Link to="/login" >
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#d9e5ed" strokeWidth="1" strokeLinecap="round" strokeLinejoin="miter">

                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                    <g id="SVGRepo_iconCarrier">

                                        <polyline points="8 7 8 2 20 2 20 22 8 22 8 17" />

                                        <line x1="4" y1="12" x2="16" y2="12" />

                                        <polyline points="12 8 16 12 12 16" />

                                    </g>

                                </svg>
                                <p>Login</p>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
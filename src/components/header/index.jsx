import React, { useContext } from "react";
import './style.css';
import Constants from "../../constants/constants_steam_header";
import logo from '../../media/steam_logo.svg';
import { Link } from 'react-router-dom';
import { UserContext } from "../../context/user"; 

export default function Header() {
    const { user, logout } = useContext(UserContext); 

    return (
        <header className="header">
            <div className="content_header_box">
                <div className="logo_steam">
                    <picture>
                        <Link to="/">
                            <img src={logo} width={174} height={44} alt="Steam Logo" />
                        </Link>
                    </picture>
                </div>
                <div className="navbar_steam_header" role="navigation">
                    <nav>
                        <Link to="/" href="" className="href_nav_steam_header">{Constants.NAV_HREF_LINK}</Link>
                        <a href="" className="href_nav_steam_header">{Constants.NAV_HREF_LINK_2}</a>
                        {user && <Link to="/Favourites" className="href_nav_steam_header">{user.username}</Link>} 
                        <a href="" className="href_nav_steam_header">{Constants.NAV_HREF_LINK_3}</a>
                        <a href="" className="href_nav_steam_header">{Constants.NAV_HREF_LINK_4}</a>
                    </nav>
                </div>
                <div className="login_steam_box_header">
                    <div className="download_button_steam">
                        {Constants.BUTTON_DOWNLOAD}
                    </div>
                    {user ? ( 
                        <button onClick={logout} className="href_registration_button">
                            Выйти
                        </button>
                    ) : ( 
                        <>
                        <Link to="/registration" className="href_registration_button">
                            {Constants.REGISTRATION_TEXT}
                        </Link>
                            <span>|</span>
                         <Link to="/Login" className="href_registration_button">
                            {Constants.LOGIN_TEXT}
                        </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
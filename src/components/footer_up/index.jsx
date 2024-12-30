import React from "react";
import './style.css'
import Constants_footer from "../../constants/constants_steam_footer";
import { Link } from "react-router-dom";

export default function FooterUp(){
    return(
        <div role="top_footerup_content" className="main_container_footerup">
            <div className="main_content_footerup_container">
                <div className="main_content_footerup">
                    <div className="footerup_content_box_1">
                        <div className="title_footerup">{Constants_footer.TITLE_FOOTERUP}</div>
                        <Link to="/registration" className="href_registration_button_footerup">{Constants_footer.REGISTRATION_TEXT}</Link>
                    </div>
                    <div className="footerup_content_box_2">
                        <div className="description_signup_steam">
                            {Constants_footer.DESCRIPTION_SIGNUP}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
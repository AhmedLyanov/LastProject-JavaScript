import React from "react";
import './style.css'
import Valve from '../../media/footerLogo_valve_new.png'
import Steam from "../../media/logo_steam_footer.png"
import Constants_footer from "../../constants/constants_steam_footer";

export default function Footer(){
    return(
        <footer role="footer_content" className="main_container_footer">
            <div className="main_content_footer_container">
                <div className="main_content_footer">

                    <div className="content_footer_top">

                        <div className="content_footer_top_box_1">
                            <div className="logo_valve">
                                <img src={Valve}  className="logo_valve_new" />
                            </div>
                            <div className="logo_steam">
                                <img src={Steam}  className="logo_steam_footer" />
                            </div>

                        </div>


                        <div className="content_footer_top_box_2">
                            <div className="copyright_text_content_footer">
                                <span className="text_content_footer">{Constants_footer.COPYRIGHT}</span>
                            </div>
                        </div>
                    </div>

                    <div className="content_footer_bottom">
                        <div className="container_href_links_box">
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_2}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_3}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_4}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_5}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_6}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_7}</a>
                            <span className="stick_footer_text">|</span>
                            <a href="" className="href_link_footer_bottom_content">{Constants_footer.FOOTER_HREF_LINK_8}</a> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
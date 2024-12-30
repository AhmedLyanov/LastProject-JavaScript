import React from "react";
import './style.css';
import Constants_banner from "../../constants/constants_steam_banner";
import videoMain from '../../media/steam_sales_winter.webm';

export default function Main() {
    return (
        <main className="main" role="banner">
            <video loop muted playsInline autoPlay preload="auto" className="video_main_home">
                <source src={videoMain} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="page_content_board_banner" role="navigation_two">
                <div className="cart_box_element"></div>
                <div className="navigation_links_buttons_banner_board">

                    <div className="button_product_span_container" id="">
                        <span id="">
                            <a href="" className="link_button_span_board">{Constants_banner.BANNER_HREF_LINK}</a>
                        </span>
                    </div>

                    <div className="button_product_span_container" id="">
                        <span id="">
                            <a href="" className="link_button_span_board">{Constants_banner.BANNER_HREF_LINK_2}</a>
                        </span>
                    </div>
                    <div className="button_product_span_container" id="">
                        <span id="">
                            <a href="" className="link_button_span_board">{Constants_banner.BANNER_HREF_LINK_3}</a>
                        </span>
                    </div>
                    <div className="button_product_span_container" id="">
                        <span id="">
                            <a href="" className="link_button_span_board">{Constants_banner.BANNER_HREF_LINK_4}</a>
                        </span>
                    </div>
                    <div className="button_product_span_container" id="">
                        <span id="">
                            <a href="" className="link_button_span_board">{Constants_banner.BANNER_HREF_LINK_5}</a>
                        </span>
                    </div>
                    <div className="button_product_span_container" id="">
                        <span id="">
                            <a href="" className="link_button_span_board">{Constants_banner.BANNER_HREF_LINK_6}</a>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
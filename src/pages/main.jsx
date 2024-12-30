import React from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import StoreSteam from "../components/store_catalog";
import FooterUp from "../components/footer_up/index";

export default function MainPage(){
    return(
        <>
        <Header />
        <Main />
        <StoreSteam/>
        <FooterUp/>
        <Footer/>
        </>
    )
}
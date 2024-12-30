import React from "react";
import Header from "../components/header";
import LoginContent from "../components/login";
import FooterUp from "../components/footer_up";
import Footer from "../components/footer";


export default function Login(){
    return(
        <>
        <Header />
        <LoginContent/>
        <FooterUp/>
        <Footer/>
        </>
    )
}
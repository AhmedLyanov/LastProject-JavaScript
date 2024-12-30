import React, { useContext } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CartPage from "../components/favourite";

export default function FavouritesPage() {
    return (
        <>
        <Header/>
        <CartPage/>
        <Footer/>
       </>
    );
}
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            const parsedData = JSON.parse(userData);
            setUser(parsedData);
            setCart(Array.isArray(parsedData.cart) ? parsedData.cart : []);
        }
    }, []);

    const addToCart = (game) => {
        if (!user) {
            alert("Войдите в аккаунт, чтобы добавить игру в корзину.");
            return;
        }

        const updatedCart = Array.isArray(cart) ? [...cart, game] : [game];
        setCart(updatedCart);

        const updatedUser = { ...user, cart: updatedCart };
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    const removeFromCart = (gameId) => {
        if (!user) {
            alert("Войдите в аккаунт, чтобы удалить игру из корзины.");
            return;
        }

        const updatedCart = cart.filter((item) => item.id !== gameId);
        setCart(updatedCart);

        const updatedUser = { ...user, cart: updatedCart };
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    const logout = () => {
        localStorage.removeItem("userData");
        setUser(null);
        setCart([]);
    };

    return (
        <UserContext.Provider value={{ user, setUser, cart, addToCart, removeFromCart, logout }}>
            {children}
        </UserContext.Provider>
    );
};
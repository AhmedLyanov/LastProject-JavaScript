import React, { useState, useContext } from "react";
import './style.css';
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

export default function RegistrationContent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [country, setCountry] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email !== confirmEmail) {
            alert("Email и подтверждение email не совпадают!");
            return;
        }

        const userData = {
            email: email,
            password: password,
            username: username,
            country: country,
            cart: {}
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        setUser(userData);
        alert("Регистрация прошла успешно!");
        navigate("/");
    };

    return (
        <div role="main" className="response_content_main_registration">
            <div className="form_content_registration_box">
                <div className="reg_form">
                    <form onSubmit={handleSubmit}>
                        <div className="title_form_registration">Создание аккаунта</div>
                        <div className="input_email_box">
                            <div className="main_box_input">
                                <label className="title_reg_text" htmlFor="email">Адрес эл. почты</label>
                                <input
                                    type="email"
                                    maxLength="255"
                                    name="email"
                                    className="input_element_reg"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input_email_box">
                            <div className="main_box_input">
                                <label className="title_reg_text" htmlFor="password">Пароль</label>
                                <input
                                    type="password"
                                    maxLength="25"
                                    name="password"
                                    className="input_element_reg"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input_checked_email_box">
                            <div className="main_box_input">
                                <label className="title_reg_text" htmlFor="confirmEmail">Подтвердите адрес эл. почты</label>
                                <input
                                    type="email"
                                    maxLength="255"
                                    name="confirmEmail"
                                    className="input_element_reg"
                                    id="confirmEmail"
                                    value={confirmEmail}
                                    onChange={(e) => setConfirmEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input_email_box">
                            <div className="main_box_input">
                                <label className="title_reg_text" htmlFor="username">Ник пользователя</label>
                                <input
                                    type="text"
                                    maxLength="50"
                                    name="username"
                                    className="input_element_reg"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="main_box_input">
                            <label className="title_reg_text" htmlFor="country">Страна проживания</label>
                            <input
                                type="text"
                                className="input_element_reg"
                                list="options"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                            <datalist id="options">
                                <option value="Россия" />
                                <option value="США" />
                                <option value="Япония" />
                            </datalist>
                        </div>
                        <div className="button_submit_reg_form_set">
                            <button type="submit" id="createAccountButton" className="joinsteam_button">
                                <span>Продолжить</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
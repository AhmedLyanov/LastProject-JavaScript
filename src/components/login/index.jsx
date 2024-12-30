import React, { useState, useContext } from "react";
import './style.css';
import styled from "styled-components";
import rickroll from '../../media/RickRoll.png';
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

const StyleSpan = styled.span`
    color: #afafaf;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .02em;
    font-family: sans-serif;
    user-select: none;
}
`;

export default function LoginContent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = JSON.parse(localStorage.getItem("userData"));

        if (userData && userData.username === username && userData.password === password) {
            setUser(userData);
            localStorage.setItem("userData", JSON.stringify(userData)); // Сохраняем данные в localStorage
            alert("Вход выполнен успешно!");
            navigate("/");
        } else {
            alert("Неверное имя пользователя или пароль!");
        }
    };

    return (
        <div role="main" className="response_content_main_login">
            <div className="signup_form">
                <div className="title_signup_text">Вход</div>
                <div className="login_form_main_container">
                    <div className="login_forms_input_box">
                        <form onSubmit={handleSubmit} className="signupsteam_form_container">
                            <div className="form_box_input" id="login_box_signup_name_user">
                                <span className="span_form_text">Войти, используя имя аккаунта</span>
                                <input
                                    type="text"
                                    id="Email"
                                    className="imput_form_signup"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form_box_input" id="login_box_signup_password">
                                <StyleSpan>Пароль</StyleSpan>
                                <input
                                    type="password"
                                    id="Password"
                                    className="imput_form_signup"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="button_signup_box">
                                <button className="signup_button_click_login" type="submit">Войти</button>
                            </div>
                        </form>
                        <div className="qrcode_system_container">
                            <span className="span_form_text">или используя qr-code</span>
                            <div className="qrcode_box">
                                <img src={rickroll} alt="" className="qrcoderickroll" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
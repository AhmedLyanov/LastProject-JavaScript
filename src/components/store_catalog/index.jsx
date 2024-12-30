import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { UserContext } from "../../context/user";
import Heart from '../../media/heart_off.svg'
export default function StoreSteam() {
    const [gamesData, setGamesData] = useState([]);
    const { user, addToCart } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://6744a6fdb4e2e04abea31a7f.mockapi.io/systemCards")
            .then((response) => response.json())
            .then((data) => setGamesData(data))
            .catch((error) => console.error("Ошибка при загрузке данных:", error));
    }, []);

    const handleLikeClick = (game) => {
        if (!user) {
            navigate("/login");
            return;
        }

        const userCart = Array.isArray(user.cart) ? user.cart : [];
        const isGameInCart = userCart.some((item) => item.id === game.id);

        if (isGameInCart) {
            alert(`${game.title} уже в корзине!`);
            return;
        }

        addToCart(game);
        alert(`${game.title} добавлен в корзину!`);
    };

    return (
        <div className="store_steam_catalog_container">
            <div className="box_store_steam">
                <div className="title_store_catalog">
                    Специальные предложения
                </div>
                <div className="catalog_box_cards_games">
                    {gamesData.map((game) => (
                        <div className="card_game_container" key={game.id}>
                            <div className="card_inner">
                                <div className="card_front">
                                    <div className="image_game_box">
                                        <img className="image_product_element" src={game.imageUrl} alt={game.title} />
                                    </div>
                                    <div className="container_description_card_game">
                                        <div className="title_game_card">
                                            <span id={`game-title-${game.id}`}>{game.title}</span>
                                        </div>
                                        <div className="information_card_game_box">
                                            <div className="system_info_box">
                                                <div className="os_image"></div>
                                                <span className="dedline_text" id={`game-deadline-${game.id}`}>{game.deadline}</span>
                                            </div>
                                            <div className="price_info_box">
                                                <span className="price_game_product" id={`game-price-${game.id}`}>{game.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_back">
                                    <video className="game_video" controls>
                                        <source src={game.videoUrl} type="video/mp4" />
                                        Ваш браузер не поддерживает видео.
                                    </video>
                                    <div
                                        className="like_product_game_button back_like_button"
                                        onClick={() => handleLikeClick(game)}
                                    >
                                        <img src={Heart} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="box_store_steam">
                <div className="title_store_catalog">
                    Бесплатное
                </div>
                <div className="catalog_box_cards_games">
                    {gamesData
                        .filter((game) => game.status === "free")
                        .map((game) => (
                            <div className="card_game_container" key={game.id}>
                                <div className="card_inner">
                                    <div className="card_front">
                                        <div className="image_game_box">
                                            <img className="image_product_element" src={game.imageUrl} alt={game.title} />
                                        </div>
                                        <div className="container_description_card_game">
                                            <div className="title_game_card">
                                                <span id={`game-title-${game.id}`}>{game.title}</span>
                                            </div>
                                            <div className="information_card_game_box">
                                                <div className="system_info_box">
                                                    <div className="os_image"></div>
                                                    <span className="dedline_text" id={`game-deadline-${game.id}`}>{game.deadline}</span>
                                                </div>
                                                <div className="price_info_box">
                                                    <span className="price_game_product" id={`game-price-${game.id}`}>{game.price}</span>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_back">
                                        <video className="game_video" controls>
                                            <source src={game.videoUrl} type="video/mp4" />
                                            Ваш браузер не поддерживает видео.
                                        </video>
                                        <div
                                            className="like_product_game_button back_like_button"
                                            onClick={() => handleLikeClick(game)}
                                        >
                                             <img src={Heart} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="box_store_steam">
                <div className="title_store_catalog">
                    Недавно обновленные
                </div>
                <div className="catalog_box_cards_games">
                    {gamesData
                        .filter((game) => game.status === "update")
                        .map((game) => (
                            <div className="card_game_container" key={game.id}>
                                <div className="card_inner">
                                    <div className="card_front">
                                        <div className="image_game_box">
                                            <img className="image_product_element" src={game.imageUrl} alt={game.title} />
                                        </div>
                                        <div className="container_description_card_game">
                                            <div className="title_game_card">
                                                <span id={`game-title-${game.id}`}>{game.title}</span>
                                            </div>
                                            <div className="information_card_game_box">
                                                <div className="system_info_box">
                                                    <div className="os_image"></div>
                                                    <span className="dedline_text" id={`game-deadline-${game.id}`}>{game.deadline}</span>
                                                </div>
                                                <div className="price_info_box">
                                                    <span className="price_game_product" id={`game-price-${game.id}`}>{game.price}</span>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_back">
                                        <video className="game_video" controls>
                                            <source src={game.videoUrl} type="video/mp4" />
                                            Ваш браузер не поддерживает видео.
                                        </video>
                                        <div
                                            className="like_product_game_button back_like_button"
                                            onClick={() => handleLikeClick(game)}
                                        >
                                             <img src={Heart} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="box_store_steam">
                <div className="title_store_catalog">
                    Новинки
                </div>
                <div className="catalog_box_cards_games">
                    {gamesData
                        .filter((game) => game.status === "new")
                        .map((game) => (
                            <div className="card_game_container" key={game.id}>
                                <div className="card_inner">
                                    <div className="card_front">
                                        <div className="image_game_box">
                                            <img className="image_product_element" src={game.imageUrl} alt={game.title} />
                                        </div>
                                        <div className="container_description_card_game">
                                            <div className="title_game_card">
                                                <span id={`game-title-${game.id}`}>{game.title}</span>
                                            </div>
                                            <div className="information_card_game_box">
                                                <div className="system_info_box">
                                                    <div className="os_image"></div>
                                                    <span className="dedline_text" id={`game-deadline-${game.id}`}>{game.deadline}</span>
                                                </div>
                                                <div className="price_info_box">
                                                    <span className="price_game_product" id={`game-price-${game.id}`}>{game.price}</span>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_back">
                                        <video className="game_video" controls>
                                            <source src={game.videoUrl} type="video/mp4" />
                                            Ваш браузер не поддерживает видео.
                                        </video>
                                        <div
                                            className="like_product_game_button_back_like_button"
                                            onClick={() => handleLikeClick(game)}
                                        >
                                             <img src={Heart} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
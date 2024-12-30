import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import './style.css';
import trash from '../../media/trash.svg'
export default function CartPage() {
    const { user, removeFromCart } = useContext(UserContext);

    const handleRemoveClick = (gameId) => {
        removeFromCart(gameId);
    };

    return (
        <div className="store_steam_catalog_container">
            <h1 className="title_store_catalog">Добро пожаловать в корзину Steam!</h1>
            <div className="catalog_box_cards_games">
                {user && user.cart.length > 0 ? (
                    user.cart.map((game) => (
                        <div className="card_game_container" key={game.id}>
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
                                        <span className="dedline_text" id={`game-deadline-${game.id}`}>В корзине</span>
                                    </div>
                                    <div className="price_info_box">
                                        <span className="price_game_product" id={`game-price-${game.id}`}>${game.price}</span>
                                        <div
                                            className="remove_from_cart_button"
                                            onClick={() => handleRemoveClick(game.id)}
                                        >
                                            <img src={trash} alt="Удалить" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="title_text_cart_null">Ваша корзина пуста.</p>
                )}
            </div>
        </div>
    );
}
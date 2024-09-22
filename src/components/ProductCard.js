import React from "react";  // Импортируем библиотеку React
import Star from "../img/star.png";  // Импортируем изображение звезды для отображения рейтинга

// Компонент ProductCard, который принимает свойства id, image, title, price, lastPrice и rating
const ProductCard = ({ id, image, title, price, lastPrice, rating }) => {
    
    // Функция для получения последней цены, если она указана
    const getLastPrice = () => {
        return (lastPrice ? lastPrice + " ₽" : "");  // Возвращаем цену или пустую строку
    }

    // Получаем элементы с классом "item-count" из DOM
    const countElement = document.getElementsByClassName("item-count");

    // Функция для добавления товара в корзину
    const onAddToCart = () => {
        countElement[0].style.opacity = "1";  // Устанавливаем видимость счетчика товаров в корзине

        // Получаем товары из корзины из sessionStorage
        const cartProducts = JSON.parse(sessionStorage.getItem("cartProducts"));
        // Проверяем, есть ли уже этот товар в корзине
        if (!cartProducts.find(product => product.id === id)) {
            // Если товара нет, добавляем его в корзину
            cartProducts.push({ id, image, title, price, quantity: 1 });
            // Обновляем данные в sessionStorage
            sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            // Увеличиваем счетчик товаров в корзине
            countElement[0].innerHTML = Number(countElement[0].innerHTML) + 1;
        }
    }

    return (
        <div className="product-card">  {/* Контейнер для карточки продукта */}
            <img src={image} alt={title} className="product-image" />  {/* Изображение продукта */}
            <div className="product-info">  {/* Контейнер для информации о продукте */}
                <div className="product-info-head">  {/* Верхняя часть информации о продукте */}
                    <div className="model-title">{title}</div>  {/* Название продукта */}
                    <div className="product-price">  {/* Контейнер для цен */}
                        <div className="product-price-active">{price} ₽</div>  {/* Активная цена продукта */}
                        <div className="product-lastprice">{getLastPrice()}</div>  {/* Последняя цена продукта */}
                    </div>
                </div>
                <div className="product-info-foot">  {/* Нижняя часть информации о продукте */}
                    <div className="rating-container">  {/* Контейнер для рейтинга продукта */}
                        <img src={Star} alt="Рейтинг" className="star-rating" />  {/* Иконка звезды для рейтинга */}
                        <div className="product-rating">{rating}</div>  {/* Отображение рейтинга продукта */}
                    </div>
                    {/* Кнопка для добавления товара в корзину */}
                    <button className="buy-button" onClick={onAddToCart}>Купить</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;  // Экспортируем компонент для использования в других частях приложения
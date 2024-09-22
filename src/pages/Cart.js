import React from "react";  // Импортируем библиотеку React
import ProductCardCart from "../components/ProductCardCart";  // Импортируем компонент карточки товара в корзине
import CartSummary from "../components/CartSummary";  // Импортируем компонент для отображения общей суммы корзины

const Cart = () => {
    // Получаем товары из sessionStorage и устанавливаем их в состояние cart
    const products = JSON.parse(sessionStorage.getItem("cartProducts"));
    const [cart, setCart] = React.useState(products);  // Используем хук состояния для хранения товаров в корзине
    const countElement = document.getElementsByClassName("item-count");  // Получаем элемент счетчика товаров

    // Функция для увеличения количества товара в корзине
    const increaseQuantity = (index) => {
        const newCart = [...cart];  // Копируем текущую корзину
        newCart[index].quantity += 1;  // Увеличиваем количество товара
        countElement[0].innerHTML = Number(countElement[0].innerHTML) + 1;  // Обновляем счетчик товаров
        sessionStorage.setItem("cartProducts", JSON.stringify(newCart));  // Обновляем данные в sessionStorage
        setCart(newCart);  // Обновляем состояние корзины
    };

    // Функция для уменьшения количества товара в корзине
    const decreaseQuantity = (index) => {
        const newCart = [...cart];  // Копируем текущую корзину
        
        // Проверяем, чтобы количество товара не стало меньше 1
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;  // Уменьшаем количество товара
            countElement[0].innerHTML = Number(countElement[0].innerHTML) - 1;  // Обновляем счетчик товаров

            sessionStorage.setItem("cartProducts", JSON.stringify(newCart));  // Обновляем данные в sessionStorage
            setCart(newCart);  // Обновляем состояние корзины
        }
    };

    // Вычисление общей цены и количества на основе товаров в корзине
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

    return (
        <div className="cart">  {/* Контейнер для корзины */}
            <div className="content-cart">  {/* Контейнер для содержимого корзины */}
                <div className="product-title-cart">Корзина</div>  {/* Заголовок корзины */}
                <div className="product-cart">  {/* Контейнер для карточек товаров в корзине */}
                    {cart.map((product, index) => (
                        <ProductCardCart
                            key={index}  // Уникальный ключ для каждого элемента списка
                            {...product}  // Распределяем свойства продукта
                            onIncrease={() => increaseQuantity(index)}  // Передаем функцию увеличения количества
                            onDecrease={() => decreaseQuantity(index)}  // Передаем функцию уменьшения количества
                            setCart={(newCart) => setCart(newCart)}  // Передаем функцию обновления корзины
                            quantity={product.quantity}  // Передаем текущее количество товара
                        />
                    ))}
                </div>
            </div>
            {/* Добавляем компонент CartSummary для отображения общей стоимости корзины */}
            <CartSummary price={totalPrice} />
        </div>
    );
};

export default Cart;  // Экспортируем компонент для использования в других частях приложения
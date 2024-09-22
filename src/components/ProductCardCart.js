import Delete from "../img/Vector.png";  // Импортируем иконку удаления

// Компонент ProductCardCart, который принимает свойства id, image, title, price, onIncrease, onDecrease, quantity и setCart
const ProductCardCart = ({ id, image, title, price, onIncrease, onDecrease, quantity, setCart }) => {
    
    // Получаем элементы с классом "item-count" из DOM
    const countElement = document.getElementsByClassName("item-count");

    // Функция для удаления товара из корзины
    const onDeleteFromCart = () => {
        // Получаем товары из корзины из sessionStorage
        let cartProducts = JSON.parse(sessionStorage.getItem("cartProducts"));
        // Фильтруем массив, удаляя товар с текущим id
        cartProducts = cartProducts.filter(product => product.id !== id);
        // Обновляем данные в sessionStorage
        sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        // Обновляем состояние корзины в родительском компоненте
        setCart(cartProducts);

        // Обновляем счетчик товаров в корзине
        countElement[0].innerHTML = Number(countElement[0].innerHTML) - quantity;
        // Если счетчик товаров равен нулю, скрываем его
        if (countElement[0].innerHTML === "0") {
            countElement[0].style.opacity = 0;
        }
    };

    return (
        <div className="product-card-cart">  {/* Контейнер для карточки товара в корзине */}
            <div className="product-control-cart">  {/* Контейнер для управления товаром в корзине */}
                <img src={image} alt={title} className="product-image-cart" />  {/* Изображение товара */}
                <div className="quantity-controls">  {/* Контейнер для управления количеством товара */}
                    <button onClick={onDecrease}>-</button>  {/* Кнопка уменьшения количества */}
                    <span>{quantity}</span>  {/* Отображение текущего количества товара */}
                    <button onClick={onIncrease}>+</button>  {/* Кнопка увеличения количества */}
                </div>
            </div>
            <div className="product-info-cart">  {/* Контейнер для информации о товаре */}
                <div className="product-info-cart-title">{title}</div>  {/* Название товара */}
                <div className="product-info-cart-price">{price} ₽</div>  {/* Цена товара */}
            </div>
            <div className="product-price-cart">  {/* Контейнер для цены товара и кнопки удаления */}
                <div className="vector-icon">
                    <img src={Delete} alt="Удалить" onClick={onDeleteFromCart} />  {/* Иконка удаления товара */}
                </div>
                <div className="content-price"><span>{price} ₽</span></div>  {/* Отображение цены товара */}
            </div>
        </div>
    );
};

export default ProductCardCart;  // Экспортируем компонент для использования в других частях приложения
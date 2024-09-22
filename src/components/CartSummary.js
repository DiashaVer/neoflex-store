import { Link } from "react-router-dom";  // Импортируем компонент Link из react-router-dom для навигации

// Компонент CartSummary принимает пропс price, который отображает общую стоимость
const CartSummary = ({ price }) => {
    return (
        <div className="cart-summary">  {/* Контейнер для сводки корзины */}
            <div>
                <div className="total-price-container">  {/* Контейнер для общей стоимости */}
                    <div>
                        <span className="total-label">ИТОГО</span>  {/* Метка для обозначения общей суммы */}
                    </div>
                    <div>
                        <span className="total-price">₽ {price}</span>  {/* Отображение цены с символом рубля */}
                    </div>
                </div>
                {/* Ссылка на страницу оформления заказа с кнопкой */}
                <Link to="/consumer">
                    <button className="checkout-button">Перейти к оформлению</button>  {/* Кнопка для перехода к оформлению заказа */}
                </Link>
            </div>
        </div>
    );
};

export default CartSummary;  // Экспортируем компонент для использования в других частях приложения
import { Link, Outlet } from "react-router-dom";  // Импортируем компоненты Link и Outlet из react-router-dom для навигации

// Импортируем изображения, используемые в компоненте
import Heart from "../img/heart.png";
import Cart from "../img/shoppingcart.png";
import VK from "../img/VK.png";
import Telegram from "../img/Telegram.png";
import Whatsapp from "../img/Whatsapp.png";
import RU from "../img/RU.png";

// Основной компонент Layout
const Layout = () => {
    // Получаем товары из корзины из sessionStorage и парсим JSON
    const cartProducts = JSON.parse(sessionStorage.getItem("cartProducts"));
    let cartProductsCount = 0;  // Переменная для хранения общего количества товаров в корзине
    
    // Подсчитываем общее количество товаров в корзине
    for (const product of cartProducts) {
        cartProductsCount += product.quantity;  // Суммируем количество каждого товара
    }

    return (
        <>
            <div className="header">  {/* Контейнер для заголовка страницы */}
                <div>
                    <Link to="/">  {/* Ссылка на главную страницу */}
                        <h2 className="store-name">QPICK</h2>  {/* Название магазина */}
                    </Link>
                </div>
                <div className="header-icons">  {/* Контейнер для иконок в заголовке */}
                    <img src={Heart} alt="Избранное" className="icon favorite-icon" />  {/* Иконка избранного */}
                    <Link to="/cart">  {/* Ссылка на страницу корзины */}
                        <img src={Cart} alt="Корзина" className="icon cart-icon" />  {/* Иконка корзины */}
                        {/* Отображаем количество товаров в корзине только если оно больше 0 */}
                        <span className="item-count" style={{ opacity: (cartProductsCount > 0 ? 1 : 0) }}>{cartProductsCount}</span>
                    </Link>
                </div>
            </div>
            <Outlet />  {/* Компонент, который будет рендерить вложенные маршруты */}
            <footer className="footer">  {/* Контейнер для нижнего колонтитула */}
                <div className="footer-head">  {/* Верхняя часть футера */}
                    <div className="footer-name">
                        <h2>QPICK</h2>  {/* Название магазина в футере */}
                    </div>
                    <div className="messenger-icons">  {/* Контейнер для иконок мессенджеров */}
                        {/* Ссылки на социальные сети и мессенджеры с иконками */}
                        <a href="https://m.vk.com" target="_blank" rel="noopener noreferrer">
                            <img src={VK} alt="VK" className="messenger-icon" />
                        </a>
                        <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer">
                            <img src={Telegram} alt="Telegram" className="messenger-icon" />
                        </a>
                        <a href="https://faq.whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <img src={Whatsapp} alt="Whatsapp" className="messenger-icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-content">  {/* Основное содержимое футера */}
                    <div className="column">  {/* Первая колонка ссылок */}
                        <a href="#">Избранное</a>
                        <a href="#">Корзина</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="column">  {/* Вторая колонка ссылок */}
                        <a href="#">Условия сервиса</a>
                        <div className="language-links">  {/* Ссылки для выбора языка */}
                            <a href="#" className="orange-link">
                                <img src={RU} alt="Иконка" className="icon" /> Рус
                            </a>
                            <a href="#">Eng</a>  {/* Ссылка на английский язык */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;  // Экспортируем компонент для использования в других частях приложения
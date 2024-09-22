import { Link } from "react-router-dom";  // Импортируем компонент Link из react-router-dom для навигации

const Consumer = () => {
    // Функция обработки подтверждения заказа
    const onConfirmOrder = (e) => {
        e.preventDefault();  // Предотвращаем стандартное поведение формы
        alert('Ваш заказ успешно оформлен!');  // Уведомляем пользователя об успешном оформлении заказа
        window.location.href="/";  // Перенаправляем пользователя на главную страницу
    }
    
    return (
        <div className="container">  {/* Контейнер для оформления заказа */}
            <h1>Оформление заказа</h1>  {/* Заголовок страницы оформления заказа */}
            <form id="orderForm" onSubmit={onConfirmOrder}>  {/* Форма для ввода данных заказа с обработчиком событий onSubmit */}
                <label htmlFor="name">ФИО:</label>  {/* Метка для поля ФИО */}
                <input type="text" id="name" name="name" required />  {/* Поле для ввода ФИО, обязательное для заполнения */}

                <label htmlFor="email">Email:</label>  {/* Метка для поля Email */}
                <input type="email" id="email" name="email" required />  {/* Поле для ввода Email, валидируемое по формату, обязательное для заполнения */}

                <label htmlFor="phone">Телефон:</label>  {/* Метка для поля Телефон */}
                <input type="tel" id="phone" name="phone" required />  {/* Поле для ввода номера телефона, обязательное для заполнения */}

                <label htmlFor="address">Адрес доставки:</label>  {/* Метка для поля адреса доставки */}
                <textarea id="address" name="address" rows="4" required></textarea>  {/* Текстовая область для ввода адреса, обязательная для заполнения */}

                <button type="submit" className="confirm-button">Подтвердить заказ</button>  {/* Кнопка для отправки формы и подтверждения заказа */}
                
                <Link to="/cart">  {/* Ссылка на страницу корзины */}
                    <button type="button" className="cancel-button">Отменить заказ</button>  {/* Кнопка для отмены заказа, которая не отправляет форму */}
                </Link>
            </form>
            
            <div className="footer-consumer">  {/* Контейнер для нижнего текста на странице */}
                <p>Спасибо за покупку!</p>  {/* Сообщение благодарности пользователю */}
            </div>
        </div>
    );
};

export default Consumer;  // Экспортируем компонент для использования в других частях приложения

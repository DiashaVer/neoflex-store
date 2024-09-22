import { BrowserRouter, Routes, Route } from "react-router-dom";  // Импортируем необходимые компоненты для маршрутизации
import MainPage from './pages/MainPage';  // Импортируем главную страницу приложения
import Cart from "./pages/Cart";  // Импортируем компонент страницы корзины
import Consumer from "./pages/Consumer";  // Импортируем компонент страницы потребителя

import Layout from "./components/Layout";  // Импортируем общий макет (layout) для страниц

const App = () => {
  // Инициализируем сессию с пустым массивом товаров в корзине
  sessionStorage.setItem("cartProducts", JSON.stringify([]));  

  return (
    <BrowserRouter>  {/* Оборачиваем приложение в компонент BrowserRouter для включения маршрутизации */}
      <Routes>  {/* Определяем все маршруты приложения */}
        <Route path="/" element={<Layout />}>  {/* Основной маршрут, который использует общий компоновщик Layout */}
            <Route index element={<MainPage />}></Route>  {/* Главная страница по умолчанию при переходе на корневой путь */}
            <Route path="/cart" element={<Cart />}></Route>  {/* Маршрут для страницы корзины */}
        </Route>
        <Route path="/consumer" element={<Consumer />}></Route>  {/* Отдельный маршрут для страницы потребителя */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;  // Экспортируем компонент App для использования в других частях приложения
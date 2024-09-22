import React from "react";  // Импортируем библиотеку React
import ProductCard from "../components/ProductCard";  // Импортируем компонент ProductCard для отображения товара

// Импортируем изображения продуктов
import Image1 from "../img/Image1.png";
import Image2 from "../img/Image2.png";
import Image3 from "../img/Image3.png";
import Air1 from "../img/air1.png";
import Air2 from "../img/air2.png";
import Air3 from "../img/air3.png";

const MainPage = () => {

    // Массив с проводными продуктами
    const wiredProducts = [
        { id: 1, image: Image1, title: "Apple BYZ S852I", price: "2927", lastPrice: "3527", rating: "4.7" },
        { id: 2, image: Image2, title: "Apple EarPods", price: "2327", rating: "4.5" },
        { id: 3, image: Image3, title: "Apple EarPods", price: "2327", rating: "4.5" },
        { id: 4, image: Image1, title: "Apple BYZ S852I", price: "2927", lastPrice: "3527", rating: "4.7" },
        { id: 5, image: Image2, title: "Apple EarPods", price: "2327", rating: "4.5" },
        { id: 6, image: Image3, title: "Apple EarPods", price: "2327", rating: "4.5" }
    ];

    // Массив с беспроводными продуктами
    const wirelessProducts = [
        { id: 7, image: Air1, title: "Apple AirPods", price: "9527", rating: "4.7" },
        { id: 8, image: Air2, title: "GERLAX GH-04", price: "6527", rating: "4.7" },
        { id: 9, image: Air3, title: "BOROFONE BO4", price: "7527", rating: "4.7" }
    ];

    return (
         <div className="content">  {/* Контейнер для содержимого страницы */}
            <div className="product-title">Наушники</div>  {/* Заголовок раздела проводных наушников */}
            <div className="product">
                {wiredProducts.map((product, i) => (
                    <ProductCard key={i} {...product} /> // Отображаем карточку продукта для каждого элемента из массива проводных наушников
                ))}
            </div>

            <div className="product-title">Беспроводные наушники</div>  {/* Заголовок раздела беспроводных наушников */}
            <div className="product">
                {wirelessProducts.map((product, i) => (
                   <ProductCard key={i} {...product} /> // Отображаем карточку продукта для каждого элемента из массива беспроводных наушников
                ))}
            </div>
        </div>
    );
};

export default MainPage;  // Экспортируем компонент MainPage для использования в других частях приложения
// export {handleAddToCart};  // Закомментированная строка для возможного экспорта функции добавления в корзину
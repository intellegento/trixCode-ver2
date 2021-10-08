import "./styles/main.scss";
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper(".swiper", {
    slidesPerView: 2.5,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".slider-header-arrow-next",
        prevEl: ".slider-header-arrow-prev",
    },
    breakpoints: {// настройки для разных разрешений
        1100: {
            slidesPerView: 2.5, 
        },
        768: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 1,
        }
    }
    
});
